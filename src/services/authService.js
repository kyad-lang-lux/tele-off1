import api from './api'; // Ton fichier api.js
import { jwtDecode } from 'jwt-decode';

const authService = {
  // 1. Connexion avec les identifiants fournis (ex: romeolontchedji02@gmail.com)
  login: async (email, password) => {
    const response = await api.post('/token/', { email, password });
    if (response.data.access) {
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      
      // Extraction du rôle pour adapter l'interface
      const decoded = jwtDecode(response.data.access);
      localStorage.setItem('user_role', decoded.role || 'CUSTOMER');
    }
    return response.data;
  },

  // 2. Récupérer le rôle actuel stocké
  getRole: () => localStorage.getItem('user_role'),

  // 3. Déconnexion
  logout: () => {
    localStorage.clear();
    window.location.href = '/login';
  }
};

export default authService;