/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { AUTH_ENDPOINTS } from '../../constants/apiEndpoints';

class AuthService {
    login(credentials) {
        return axios.post(AUTH_ENDPOINTS.LOGIN, {
            username: credentials.email,
            password: credentials.password
        })
        .then(response => {
            if (response.data.success) {
                // Store user data and token
                this.setToken(response.data.userData.token);
                this.setUserData(response.data.userData);
                return response.data;
            }
            return Promise.reject(response.data);
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
