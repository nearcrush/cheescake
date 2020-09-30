import Axios from 'axios';

require('dotenv/config')

const api = Axios.create({ baseURL: process.env.REACT_APP_URL });

export default api;