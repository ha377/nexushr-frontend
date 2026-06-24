import axios from "axios";

const API = axios.create({
    baseURL: "https://nexushr-backend-1.onrender.com"
});

export default API;