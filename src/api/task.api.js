import axios from 'axios';

export const getTaskRequest = async() => {
    return await axios.get('http://localhost:3004/task')
}
export const createTaskRequest = async(task) => {
    return await axios.post('http://localhost:3004/task', task)
}
export const deleteTaskRequest = async(id) => {
    return await axios.delete(`http://localhost:3004/task/${id}`)
}