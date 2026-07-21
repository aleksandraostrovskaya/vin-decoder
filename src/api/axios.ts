import axios from 'axios';

const api = axios.create({
	baseURL: 'https://vpic.nhtsa.dot.gov/api',
	timeout: 10000,
})

export default api;