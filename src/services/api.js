import axios from 'axios';

const api = axios.create({
  // URL absolue pour éviter les erreurs de redirection du proxy
  baseURL: "https://nexix-teleoff-backend.onrender.com/api",
});

// Intercepteur pour injecter le token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;