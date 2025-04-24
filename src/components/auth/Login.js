import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import '../../assets/css/Login.css';
import AuthService from './AuthService';

const Login = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('error');
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  // Hide login/signup buttons in nav when on login page
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      username: '',
      password: '',
    };

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const showMessage = (message, type = 'error') => {
    setPopupMessage(message);
    setPopupType(type);
    setShowPopup(true);
    
    setTimeout(() => {
      setShowPopup(false);
    }, 4000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Show loading state if needed
      
      AuthService.login(formData)
        .then(response => {
          
          // Check if the response contains success flag
          if (!response || response.success === false) {
            // API returned an error message
            const errorMessage = response && response.message 
              ? response.message 
              : 'Login failed. Please try again.';
            
            showMessage(errorMessage);
            return;
          }
          
          // If we reach here, login was successful
          showMessage('Login successful! Redirecting...', 'success');
          setTimeout(() => {
            setIsAuthenticated(true);
            navigate('/');
          }, 1000);
        })
        .catch(error => {
          console.error('Login error:', error);
          
          // Network or server error
          showMessage('Unable to connect to the server. Please check your internet connection and try again.');
        });
    } else {
      const firstError = Object.values(errors).find(error => error !== '');
      if (firstError) {
        showMessage(firstError);
      }
    }
  };

  const goToRegister = () => {
    navigate('/register');
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
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
        
        <p className="subtitle">LOG IN TO ACCESS YOUR ALUMNI ACCOUNT</p>

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

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username" className="form-label"> Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`form-control ${errors.username ? 'is-invalid' : ''}`}
              placeholder="Enter your username"
              autoComplete="username"
            />
            {errors.username && <div className="error-text">{errors.username}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                placeholder="Enter your password"
                autoComplete="current-password"
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
            {errors.password && <div className="error-text">{errors.password}</div>}
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">Sign In</button>
            <button 
              type="button" 
              className="forgot-password" 
              onClick={handleForgotPassword}
            >
              Forgot password?
            </button>
          </div>
        </form>

        <div className="signup-section">
          <p className="signup-text">
            Don't have an account? <button className="signup-link" onClick={goToRegister}>Sign Up</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
