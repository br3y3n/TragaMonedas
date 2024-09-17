import axios from "axios";

const axiosConfig = axios.create({
    baseURL: "http://localhost:30001/api",
    withCredentials: true,
});

export default axiosConfig;