import axios from "axios"

const instance = axios.create({
    baseURL: 'http://15.207.72.4:8080',
    timeout: 50000,
})

export default instance
