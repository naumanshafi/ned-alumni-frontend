import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../../assets/css/Login.css';
import api from '../auth/AuthService'; // Import the API methods

const Login = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.login(formData); // Call the login API
      console.log('Login successful:', response.data);
      // Handle successful login (e.g., save token, redirect)
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      // Handle login failure (e.g., show error message)
    }
  };

  const goToRegister = () => {
    navigate('/register'); // Navigate to the registration page
  };

  return (
    <div className="login-container">
      <div className="login-row">
        {/* Left Section */}
        <div className="login-col">
          <div className="login-left">
            <div className="text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                alt="logo"
                className="logo"
              />
              <h4 className="title">We are the NEDIAN</h4>
            </div>
            <p className="subtitle">Please login to your account</p>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  Sign In
                </button>
                <a href="#" className="forgot-password">
                  Forgot password?
                </a>
              </div>
            </form>

            <div className="signup-section">
              <p className="signup-text">
                Don't have an account?{' '}
                <button className="signup-link" onClick={goToRegister}>
                  Signup
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
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
