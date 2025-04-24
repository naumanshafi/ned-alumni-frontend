import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../assets/css/Login.css';
import AuthService from './AuthService';

const VerifyCode = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('error');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Retrieve email from session storage
    const storedEmail = sessionStorage.getItem('resetEmail');
    if (!storedEmail) {
      // If no email in session, redirect back to forgot password
      navigate('/forgot-password');
      return;
    }
    setEmail(storedEmail);

    // Hide login/signup buttons
    const loginBtn = document.querySelector('.login-btn');
    const signUpBtn = document.querySelector('.signup-btn');
    
    if (loginBtn) loginBtn.classList.add('nav-hide-on-login');
    if (signUpBtn) signUpBtn.classList.add('nav-hide-on-login');
    
    document.body.classList.add('login-page');
    
    return () => {
      if (loginBtn) loginBtn.classList.remove('nav-hide-on-login');
      if (signUpBtn) signUpBtn.classList.remove('nav-hide-on-login');
      document.body.classList.remove('login-page');
    };
  }, [navigate]);

  const showMessage = (message, type = 'error') => {
    setPopupMessage(message);
    setPopupType(type);
    setShowPopup(true);
    
    setTimeout(() => {
      setShowPopup(false);
    }, 4000);
  };

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!code.trim()) {
      showMessage('Please enter the verification code');
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real app, this would call the backend API
      const response = await AuthService.verifyResetCode(email, code);
      
      if (response && response.success) {
        showMessage('Code verified successfully', 'success');
        // Store verification token or code in session for the password reset step
        sessionStorage.setItem('resetToken', response.token || code);
        // Redirect to reset password page
        setTimeout(() => {
          navigate('/reset-password');
        }, 1500);
      } else {
        showMessage(response?.message || 'Invalid verification code. Please try again.');
      }
    } catch (error) {
      console.error('Code verification error:', error);
      showMessage('Unable to connect to the server. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendCode = async () => {
    try {
      setIsSubmitting(true);
      const response = await AuthService.requestPasswordReset(email);
      
      if (response && response.success) {
        showMessage('A new verification code has been sent to your email', 'success');
      } else {
        showMessage(response?.message || 'Failed to resend code. Please try again.');
      }
    } catch (error) {
      console.error('Resend code error:', error);
      showMessage('Unable to connect to the server. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-row">
        <div className="text-center">
          <img
            src="/images/ned_logo.png"
            alt="NED Alumni Logo"
            className="logo"
          />
          <h4 className="title">NED Alumni Association of Tri-State</h4>
        </div>
        
        <p className="subtitle">VERIFY CODE</p>

        {showPopup && (
          <div className={`inline-popup-message ${popupType}`}>
            <div className="popup-content">
              {popupType === 'error' && (
                <i className="fas fa-exclamation-circle" style={{ marginRight: '10px', color: '#890c25' }}></i>
              )}
              {popupType === 'success' && (
                <i className="fas fa-check-circle" style={{ marginRight: '10px', color: '#28a745' }}></i>
              )}
              {popupType === 'warning' && (
                <i className="fas fa-exclamation-triangle" style={{ marginRight: '10px', color: '#ffc107' }}></i>
              )}
              <span>{popupMessage}</span>
            </div>
          </div>
        )}

        <div className="recovery-instructions">
          <p>We've sent a verification code to <strong>{email}</strong>. Please enter it below to continue.</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="verificationCode" className="form-label">Verification Code</label>
            <input
              type="text"
              id="verificationCode"
              name="verificationCode"
              value={code}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter verification code"
              autoComplete="off"
            />
          </div>

          <div className="form-actions">
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Verifying...' : 'Verify Code'}
            </button>
          </div>

          <div className="forgot-links">
            <button 
              type="button" 
              className="text-link" 
              onClick={handleResendCode}
              disabled={isSubmitting}
            >
              Resend Code
            </button>
            <Link to="/forgot-password" className="text-link">Back</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyCode; 