import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL, //react.. process.env.ISIM...

    headers: {
        "Content-Type": "application/json",
    },
    timeout: 5000,
});

export const baseService = {
    get: async (endpoint, configs = {}) => {
        try {
            const result = await axiosInstance.get(endpoint, configs);
            return result;
        } catch (error) {
            throw new Error(`GET ${endpoint} error: ${error}`)
        }
    },
    post: async (endpoint, data, configs = {}) => {
        try {
            const result = await axiosInstance.post(endpoint, data, configs);
            return result;
        } catch (error) {
            throw new Error(`POST ${endpoint} error: ${error}`)
        }
    },
    delete: async (endpoint, configs = {}) => {
        try {
            const result = await axiosInstance.delete(endpoint, configs);
            return result;
        } catch (error) {
            throw new Error(`DELETE ${endpoint} error: ${error}`)
        }
    },
}