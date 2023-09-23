import axios from 'axios';

const BASE_REST_API_URL = 'http://localhost:8080/api/tasks'

export const getAllTasks = () => {
    return axios.get(BASE_REST_API_URL)
}