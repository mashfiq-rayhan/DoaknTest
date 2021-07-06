import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dokan-9ee97-default-rtdb.firebaseio.com/'
});

export default instance;