import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../assets/css/Login.css';
import AuthService from './AuthService';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('error');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    // Retrieve email and token from session storage
    const storedEmail = sessionStorage.getItem('resetEmail');
    const storedToken = sessionStorage.getItem('resetToken');
    
    if (!storedEmail || !storedToken) {
      // If required data is missing, redirect back to forgot password
      navigate('/forgot-password');
      return;
    }
    
    setEmail(storedEmail);
    setToken(storedToken);

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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    // Password validation
    if (!formData.password) {
      showMessage('Please enter a new password');
      return false;
    }
    
    if (formData.password.length < 8) {
      showMessage('Password must be at least 8 characters long');
      return false;
    }
    
    // Add additional password strength validation as needed
    // For example: require uppercase, lowercase, numbers, special characters
    
    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      showMessage('Passwords do not match');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real app, this would call the backend API
      const response = await AuthService.resetPassword(email, token, formData.password);
      
      if (response && response.success) {
        showMessage('Password reset successful', 'success');
        
        // Clear session storage data
        sessionStorage.removeItem('resetEmail');
        sessionStorage.removeItem('resetToken');
        
        // Redirect to login page after a short delay
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        showMessage(response?.message || 'Failed to reset password. Please try again.');
      }
    } catch (error) {
      console.error('Password reset error:', error);
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
        
        <p className="subtitle">RESET PASSWORD</p>

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
          <p>Create a new password for your account.</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="password" className="form-label">New Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter new password"
                autoComplete="new-password"
              />
              <button 
                type="button" 
                className="password-toggle-btn" 
                onClick={togglePasswordVisibility}
                tabIndex="-1"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <i className="fas fa-eye-slash"></i>
                ) : (
                  <i className="fas fa-eye"></i>
                )}
              </button>
            </div>
            <div className="password-requirements">
              <small>Password must be at least 8 characters long</small>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
            <div className="password-input-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="form-control"
                placeholder="Confirm new password"
                autoComplete="new-password"
              />
              <button 
                type="button" 
                className="password-toggle-btn" 
                onClick={toggleConfirmPasswordVisibility}
                tabIndex="-1"
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? (
                  <i className="fas fa-eye-slash"></i>
                ) : (
                  <i className="fas fa-eye"></i>
                )}
              </button>
            </div>
          </div>

          <div className="form-actions">
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Resetting...' : 'Reset Password'}
            </button>
          </div>

          <div className="forgot-links">
            <Link to="/login" className="text-link">Back to Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword; 