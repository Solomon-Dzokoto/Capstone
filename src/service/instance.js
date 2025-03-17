import axios from "axios";

export const axiosInstance = axios.create({
    baseUrl:"",
    times:10000
})
