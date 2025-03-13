/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { AUTH_ENDPOINTS } from '../../constants/apiEndpoints';

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
}

export default new AuthService();
