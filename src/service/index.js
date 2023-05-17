import axios from 'axios'
import { API_ROOT_URL } from '@config/api';

const $user = axios.create({
    baseURL: API_ROOT_URL
});

export {
    $user
}