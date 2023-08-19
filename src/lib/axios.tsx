import axios from "axios";

export const axiosAPI = axios.create({
    //baseURL: 'http://localhost:3000'
    baseURL: 'https://teste-vercel-virid.vercel.app'
})