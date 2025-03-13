import axios from "axios";

export const instance2=axios.create({
    baseURL:'https://dummyjson.com',
    timeout: 5000,
})
