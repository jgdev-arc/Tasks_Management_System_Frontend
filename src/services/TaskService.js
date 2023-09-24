import axios from 'axios';

const BASE_REST_API_URL = 'http://localhost:8080/api/tasks'

export const getAllTasks = () => {
    return axios.get(BASE_REST_API_URL)
}

export const saveTask = (task) => {
    return axios.post(BASE_REST_API_URL, task)
}

export const getTask = (id) => {
    return axios.get(BASE_REST_API_URL + '/' + id)
}

export const updateTask = (id, task) => {
    return axios.put(BASE_REST_API_URL + '/' + id, task)
}

export const deleteTask = (id) => {
    return axios.delete(BASE_REST_API_URL + '/' + id)
}

export const completeTask = (id) => {
    return axios.patch(BASE_REST_API_URL + '/' + id + '/complete')
}

export const incompleteTask = (id) => {
    return axios.patch(BASE_REST_API_URL + '/' + id + '/incomplete')
}