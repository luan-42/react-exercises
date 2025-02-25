import axios from "axios"

const placeholderApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    validateStatus: status => status < 400,
    timeout: 10000,
});

export default placeholderApi;