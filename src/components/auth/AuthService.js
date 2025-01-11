/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import CONFIG from '../../config';

const API_BASE_URL = CONFIG.API_BASE_URL;

const register = (data) => {
    return axios.post(`${API_BASE_URL}/members/register/`, data);
};

const login = (data) => {
    return axios.get(`${API_BASE_URL}/members/login/`, data);
};

export default {
    register,
    login,
};
