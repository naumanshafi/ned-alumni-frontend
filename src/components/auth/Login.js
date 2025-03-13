import React, { useState, useContext } from 'react';
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
    console.log('Showing message:', message, 'with type:', type);
    console.log('Showing ShowPopup:', showPopup);
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

  return (
    <div className="login-container">
      <div className="login-row">
        <div className="login-col">
          <div className="login-left">
            {showPopup && (
              <div className={`inline-popup-message ${popupType}`}>
                <div className="popup-content">
                  {popupType === 'error' && (
                    <i className="fas fa-exclamation-circle" style={{ marginRight: '10px', color: '#dc3545' }}></i>
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
            
            <div className="text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                alt="logo"
                className="logo"
              />
              <h4 className="title">NED ALUMNI ASSOCIATE OF TRI STATE</h4>
            </div>
            <p className="subtitle">Please login to your account</p>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                  placeholder="Enter your username"
                />
                {errors.username && <div className="error-text">{errors.username}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  placeholder="Enter your password"
                />
                {errors.password && <div className="error-text">{errors.password}</div>}
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary">Sign In</button>
                <a href="#" className="forgot-password">Forgot password?</a>
              </div>
            </form>

            <div className="signup-section">
              <p className="signup-text">
                Don't have an account?{' '}
                <button className="signup-link" onClick={goToRegister}>Signup</button>
              </p>
            </div>
          </div>
        </div>

        <div className="login-col">
          <div className="login-right">
            <div className="info-section">
              <h4>We are more than just a company</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
