import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.DEV ? undefined : import.meta.env.VITE_BASE_URL
})

export default api