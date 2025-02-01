import axios from "axios"

const instance = axios.create({
    baseURL: "http://45.138.158.137:92/api",
    timeout: 10000,
})

export { instance }