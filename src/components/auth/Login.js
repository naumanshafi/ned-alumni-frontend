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
    setErrors({
      ...errors,
      [name]: '',
    });
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

  const showErrorPopup = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      AuthService.login(formData)
        .then(data => {
          setIsAuthenticated(true);
          navigate('/');
        })
        .catch(error => {
          if (error.response) {
            switch (error.response.status) {
              case 401:
                showErrorPopup('Invalid username or password');
                break;
              case 404:
                showErrorPopup('Account not found');
                break;
              case 403:
                showErrorPopup('Account is locked. Please contact support');
                break;
              default:
                showErrorPopup('An error occurred during login. Please try again');
            }
          } else {
            showErrorPopup('Unable to connect to the server. Please try again later');
          }
          console.error('Login error:', error);
        });
    } else {
      const firstError = Object.values(errors).find(error => error !== '');
      if (firstError) {
        showErrorPopup(firstError);
      }
    }
  };

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      {showPopup && (
        <div className="popup-message">
          <div className="popup-content">
            <span>{popupMessage}</span>
          </div>
        </div>
      )}
      <div className="login-row">
        <div className="login-col">
          <div className="login-left">
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
                  className={`form-control ${errors.username ? 'error' : ''}`}
                  placeholder="Enter your username"
                />
                {errors.username && <span className="error-message">{errors.username}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`form-control ${errors.password ? 'error' : ''}`}
                  placeholder="Enter your password"
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
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
