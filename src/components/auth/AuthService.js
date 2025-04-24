/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { AUTH_ENDPOINTS } from '../../constants/apiEndpoints';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

class AuthService {
    login(credentials) {
        return axios.post(AUTH_ENDPOINTS.LOGIN, {
            username: credentials.username,
            password: credentials.password
        })
        .then(response => {
            // Check if response.data exists and has a success property
            if (response.data && response.data.success === true) {
                // Store user data and token
                this.setToken(response.data.userData.token);
                this.setUserData(response.data.userData);
            }
            // Always return the response data, even if success is false
            return response.data;
        })
        .catch(error => {
            // If the server returned a response with data, return that data
            if (error.response && error.response.data) {
                return error.response.data;
            }
            // Otherwise, rethrow the error to be caught by the component
            throw error;
        });
    }

    register(data) {
        return axios.post(AUTH_ENDPOINTS.REGISTER, data);
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
    }

    setToken(token) {
        localStorage.setItem('token', token);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    setUserData(userData) {
        localStorage.setItem('userData', JSON.stringify(userData));
    }

    getUserData() {
        const userData = localStorage.getItem('userData');
        return userData ? JSON.parse(userData) : null;
    }

    isAuthenticated() {
        return !!this.getToken();
    }

    // Request password reset 
    async requestPasswordReset(email) {
        try {
            // For demo purposes, simulate API call with a delay
            return new Promise(resolve => {
                setTimeout(() => {
                    // Mock successful response
                    resolve({
                        success: true,
                        message: 'Password reset email sent'
                    });
                }, 1000);
            });

            // In a real app, this would be:
            // const response = await fetch(`${API_URL}/auth/request-password-reset`, {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify({ email }),
            // });
            // return await response.json();
        } catch (error) {
            console.error('Request password reset error:', error);
            throw error;
        }
    }

    // Verify reset code
    async verifyResetCode(email, code) {
        try {
            // For demo purposes, simulate API call with a delay
            return new Promise(resolve => {
                setTimeout(() => {
                    // Mock successful response
                    resolve({
                        success: true,
                        message: 'Code verified',
                        token: 'reset-token-123'
                    });
                }, 1000);
            });

            // In a real app, this would be:
            // const response = await fetch(`${API_URL}/auth/verify-reset-code`, {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify({ email, code }),
            // });
            // return await response.json();
        } catch (error) {
            console.error('Verify reset code error:', error);
            throw error;
        }
    }

    // Reset password using token
    async resetPassword(email, token, newPassword) {
        try {
            // For demo purposes, simulate API call with a delay
            return new Promise(resolve => {
                setTimeout(() => {
                    // Mock successful response
                    resolve({
                        success: true,
                        message: 'Password reset successful'
                    });
                }, 1000);
            });

            // In a real app, this would be:
            // const response = await fetch(`${API_URL}/auth/reset-password`, {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify({ email, token, newPassword }),
            // });
            // return await response.json();
        } catch (error) {
            console.error('Reset password error:', error);
            throw error;
        }
    }

    // Request username recovery
    async requestUsername(email) {
        try {
            // For demo purposes, simulate API call with a delay
            return new Promise(resolve => {
                setTimeout(() => {
                    // Mock successful response
                    resolve({
                        success: true,
                        message: 'Username sent to your email'
                    });
                }, 1000);
            });

            // In a real app, this would be:
            // const response = await fetch(`${API_URL}/auth/request-username`, {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify({ email }),
            // });
            // return await response.json();
        } catch (error) {
            console.error('Request username error:', error);
            throw error;
        }
    }
}

export default new AuthService();
