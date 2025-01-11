import React, { useState } from 'react';
import '../../assets/css/Register.css'; // Add your styles here
import AuthService from './AuthService'; // Import the API service for registration

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
      <form onSubmit={handleSubmit} className="register-form">
        <h2 className="form-title">Register</h2>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="home_address">Home Address</label>
          <textarea
            id="home_address"
            name="home_address"
            value={formData.home_address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="home_city">Home City</label>
          <input
            type="text"
            id="home_city"
            name="home_city"
            value={formData.home_city}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="home_state">Home State</label>
          <input
            type="text"
            id="home_state"
            name="home_state"
            value={formData.home_state}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="home_country">Home Country</label>
          <input
            type="text"
            id="home_country"
            name="home_country"
            value={formData.home_country}
            onChange={handleChange}
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
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile_phone">Mobile Phone</label>
          <input
            type="text"
            id="mobile_phone"
            name="mobile_phone"
            value={formData.mobile_phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="work_phone">Work Phone</label>
          <input
            type="text"
            id="work_phone"
            name="work_phone"
            value={formData.work_phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="other_phone">Other Phone</label>
          <input
            type="text"
            id="other_phone"
            name="other_phone"
            value={formData.other_phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="profile_picture">Profile Picture</label>
          <input
            type="file"
            id="profile_picture"
            name="profile_picture"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="batch">Batch</label>
          <input
            type="text"
            id="batch"
            name="batch"
            value={formData.batch}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="graduation_year">Graduation Year</label>
          <input
            type="number"
            id="graduation_year"
            name="graduation_year"
            value={formData.graduation_year}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="discipline">Discipline</label>
          <input
            type="text"
            id="discipline"
            name="discipline"
            value={formData.discipline}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="degree">Degree</label>
          <select
            id="degree"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
          >
            <option value="">Select Degree</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Masters">Masters</option>
            <option value="PhD">PhD</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="nedian">
            <input
              type="checkbox"
              id="nedian"
              name="nedian"
              checked={formData.nedian}
              onChange={handleChange}
            />
            Are you a NEDian?
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="graduation_address">Graduation Address</label>
          <textarea
            id="graduation_address"
            name="graduation_address"
            value={formData.graduation_address}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn-submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

