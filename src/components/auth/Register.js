import React, { useState } from 'react';
import '../../assets/css/Register.css';
import AuthService from './AuthService';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    home_address: '',
    home_city: '',
    home_state: '',
    home_country: '',
    home_phone: '',
    mobile_phone: '',
    work_phone: '',
    other_phone: '',
    profile_picture: null,
    batch: '',
    graduation_year: '',
    discipline: '',
    degree: '',
    nedian: false,
    graduation_address: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSubmit = new FormData();
    for (const key in formData) {
      formDataToSubmit.append(key, formData[key]);
    }

    try {
      const response = await AuthService.register(formDataToSubmit);
      console.log('Registration successful:', response.data);
      // Handle success (e.g., redirect or show success message)
    } catch (error) {
      console.error('Registration failed:', error.response?.data || error.message);
      // Handle failure (e.g., show error message)
    }
  };

  return (
    <div className="register-container">
      <div className="register-header">
        <h1>Create Your Account</h1>
        <p>Join our alumni network and stay connected</p>
      </div>

      <form onSubmit={handleSubmit} className="register-form">
        {/* Personal Information Section */}
        <div className="form-section">
          <h2>Personal Information</h2>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password*</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Create a password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="profile_picture">Profile Picture</label>
              <input
                type="file"
                id="profile_picture"
                name="profile_picture"
                onChange={handleChange}
                className="file-input"
              />
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="form-section">
          <h2>Contact Information</h2>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="mobile_phone">Mobile Phone*</label>
              <input
                type="text"
                id="mobile_phone"
                name="mobile_phone"
                value={formData.mobile_phone}
                onChange={handleChange}
                required
                placeholder="Enter mobile number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="home_phone">Home Phone</label>
              <input
                type="text"
                id="home_phone"
                name="home_phone"
                value={formData.home_phone}
                onChange={handleChange}
                placeholder="Enter home phone"
              />
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="form-section">
          <h2>Address Details</h2>
          <div className="form-group full-width">
            <label htmlFor="home_address">Home Address</label>
            <textarea
              id="home_address"
              name="home_address"
              value={formData.home_address}
              onChange={handleChange}
              placeholder="Enter your complete address"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="home_city">City</label>
              <input
                type="text"
                id="home_city"
                name="home_city"
                value={formData.home_city}
                onChange={handleChange}
                placeholder="Enter city"
              />
            </div>
            <div className="form-group">
              <label htmlFor="home_state">State</label>
              <input
                type="text"
                id="home_state"
                name="home_state"
                value={formData.home_state}
                onChange={handleChange}
                placeholder="Enter state"
              />
            </div>
            <div className="form-group">
              <label htmlFor="home_country">Country</label>
              <input
                type="text"
                id="home_country"
                name="home_country"
                value={formData.home_country}
                onChange={handleChange}
                placeholder="Enter country"
              />
            </div>
          </div>
        </div>

        {/* Education Details Section */}
        <div className="form-section">
          <h2>Education Details</h2>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="batch">Batch*</label>
              <input
                type="text"
                id="batch"
                name="batch"
                value={formData.batch}
                onChange={handleChange}
                required
                placeholder="Enter batch year"
              />
            </div>
            <div className="form-group">
              <label htmlFor="graduation_year">Graduation Year*</label>
              <input
                type="number"
                id="graduation_year"
                name="graduation_year"
                value={formData.graduation_year}
                onChange={handleChange}
                required
                placeholder="Enter graduation year"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="discipline">Discipline*</label>
              <input
                type="text"
                id="discipline"
                name="discipline"
                value={formData.discipline}
                onChange={handleChange}
                required
                placeholder="Enter your discipline"
              />
            </div>
            <div className="form-group">
              <label htmlFor="degree">Degree*</label>
              <select
                id="degree"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                required
              >
                <option value="">Select Degree</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Masters">Masters</option>
                <option value="PhD">PhD</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="nedian"
              name="nedian"
              checked={formData.nedian}
              onChange={handleChange}
            />
            <label htmlFor="nedian">I am a NEDian</label>
          </div>
        </div>

        <button type="submit" className="btn-submit">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Register;

