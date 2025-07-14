import axios from 'axios';
import { BASE_URL } from '../constants';

export const getHeading = () => axios.get(`${BASE_URL}/api/heading`);
export const postHeading = (content) => axios.post(`${BASE_URL}/api/heading`, { content });
