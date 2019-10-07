import axios from 'axios';

const access_token = 'OjZiMzEzNTJlYjk4YjA4OGZlNTQ4MThiZTY5NGZmYmU5';
axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
axios.defaults.baseURL = 'https://api-v2.intrinio.com';


axios.interceptors.response.use(function (response) {
    // Do something with response data
    if (response.status === 200) {
        return response.data;
    }
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

//interceptors

export default axios