import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../assets/css/Login.css';
import AuthService from './AuthService';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('error');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Hide login/signup buttons in nav when on forgot password page
  useEffect(() => {
    // Get the login and signup buttons from navbar
    const loginBtn = document.querySelector('.login-btn');
    const signUpBtn = document.querySelector('.signup-btn');
    
    // Add class to hide them
    if (loginBtn) loginBtn.classList.add('nav-hide-on-login');
    if (signUpBtn) signUpBtn.classList.add('nav-hide-on-login');
    
    // Add class to body to prevent scrolling
    document.body.classList.add('login-page');
    
    // Cleanup when component unmounts
    return () => {
      if (loginBtn) loginBtn.classList.remove('nav-hide-on-login');
      if (signUpBtn) signUpBtn.classList.remove('nav-hide-on-login');
      document.body.classList.remove('login-page');
    };
  }, []);

  const showMessage = (message, type = 'error') => {
    setPopupMessage(message);
    setPopupType(type);
    setShowPopup(true);
    
    setTimeout(() => {
      setShowPopup(false);
    }, 4000);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      showMessage('Please enter your email address');
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real app, this would call the backend API
      // For demo, we'll simulate the API call
      const response = await AuthService.requestPasswordReset(email);
      
      if (response && response.success) {
        showMessage('A verification code has been sent to your email', 'success');
        // Store email in session storage to use in the verify code step
        sessionStorage.setItem('resetEmail', email);
        // Redirect to the verify code page after a short delay
        setTimeout(() => {
          navigate('/verify-code');
        }, 2000);
      } else {
        showMessage(response?.message || 'Failed to send verification code. Please try again.');
      }
    } catch (error) {
      console.error('Password reset request error:', error);
      showMessage('Unable to connect to the server. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleForgotUsername = () => {
    navigate('/forgot-username');
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
        
        <p className="subtitle">FORGOT PASSWORD</p>

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
          <p>Enter the email address associated with your account and we'll send you a verification code to reset your password.</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your email address"
              autoComplete="email"
            />
          </div>

          <div className="form-actions">
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Code'}
            </button>
          </div>

          <div className="forgot-links">
            <button 
              type="button" 
              className="text-link" 
              onClick={handleForgotUsername}
            >
              Forgot Username?
            </button>
            <Link to="/login" className="text-link">Back to Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword; 