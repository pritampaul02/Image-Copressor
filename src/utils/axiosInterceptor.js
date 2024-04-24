import axios from 'axios';

const api = axios.create();

api.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.token = token;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
})

export default api

