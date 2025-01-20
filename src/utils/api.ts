import type { ICommune } from '@/models/Commune';
import type { IDistrict } from '@/models/District';
import type { IEcole } from '@/models/Ecole';
import type { IHabitant } from '@/models/Habitant';
import type { IHopital } from '@/models/Hopital';
import type { IRegion } from '@/models/Region';
import type { IUser } from '@/models/User';
import axios, { type AxiosInstance} from 'axios';

// Créez une instance Axios
const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // Remplacez par votre URL de base
  timeout: 10000,
});

// Intercepteur pour ajouter des headers nécessaires à chaque requête
// api.interceptors.request.use((config: AxiosRequestConfig) => {
//   // Ajouter les headers dynamiques (par exemple, token d'authentification)
//   const token = localStorage.getItem('authToken'); // Récupérez le token depuis le localStorage ou une autre source
//   if (token) {
//     config.headers = {
//       ...config.headers,
//       Authorization: `Bearer ${token}`, // Ajoute le token au header Authorization
//     };
//   }

//   // Ajout d'autres headers si nécessaire
//   config.headers = {
//     ...config.headers,
//     'Content-Type': 'application/json', // Définir le type de contenu
//     'Accept-Language': 'fr', // Exemple : spécifier la langue
//   };

//   return config;
// });

// Gestion centralisée des erreurs (optionnelle)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Traitez les erreurs globales ici si nécessaire
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// API Auth
export const AuthAPI = {
  login: (data: Record<string, IUser>) => api.post('/login', data),
  register: (data: Record<string, IUser>) => api.post('/register', data),
  forgotPassword: (data: Record<string, IUser>) => api.post('/forgot-password', data),
  forgotPasswordWithCodeAndPwd: (data: Record<string, IUser>) =>
    api.post('/forgot-password-with-code-and-pwd', data),
  validateAccount: (data: Record<string, IUser>) => api.post('/account-validation', data),
  sendActivationCode: (data: Record<string, IUser>) => api.post('/send-activation-code', data),
  updatePassword: (data: Record<string, IUser>) => api.post('/update-password', data),
  getCurrentUser: () => api.get('/me'),
  logout: () => api.post('/logout'),
};

// API Ecole
export const EcoleAPI = {
  createEcole: (data: Record<string, IEcole>) => api.post('/ecole', data),
  getAllEcoles: () => api.get('/ecoles'),
  getEcoleById: (idEcole: string) => api.get(`/ecole/${idEcole}`),
  updateEcole: (idEcole: string, data: Record<string, IEcole>) =>
    api.put(`/ecole/${idEcole}`, data),
  deleteEcole: (idEcole: string) => api.delete(`/ecole/${idEcole}`),
};

// API Region
export const RegionAPI = {
  createRegion: (data: Record<string, IRegion>) => api.post('/region', data),
  getAllRegions: () => api.get('/regions'),
  getRegionByCodePostal: (codePostal: string) => api.get(`/region/${codePostal}`),
  updateRegion: (codePostal: string, data: Record<string, IRegion>) =>
    api.put(`/region/${codePostal}`, data),
  deleteRegion: (codePostal: string) => api.delete(`/region/${codePostal}`),
};

// API Commune
export const CommuneAPI = {
  createCommune: (data: Record<string, ICommune>) => api.post('/communes', data),
  getAllCommunes: () => api.get('/communes'),
  getCommuneById: (idCommune: string) => api.get(`/communes/${idCommune}`),
  updateCommune: (idCommune: string, data: Record<string, ICommune>) =>
    api.put(`/communes/${idCommune}`, data),
  deleteCommune: (idCommune: string) => api.delete(`/communes/${idCommune}`),
};

// API District
export const DistrictAPI = {
  createDistrict: (data: Record<string, IDistrict>) => api.post('/districts', data),
  getAllDistricts: () => api.get('/districts'),
  getDistrictById: (idDistrict: string) => api.get(`/districts/${idDistrict}`),
  updateDistrict: (idDistrict: string, data: Record<string, IDistrict>) =>
    api.put(`/districts/${idDistrict}`, data),
  deleteDistrict: (idDistrict: string) => api.delete(`/districts/${idDistrict}`),
};

// API Habitant
export const HabitantAPI = {
  createHabitant: (data: Record<string, IHabitant>) => api.post('/habitants', data),
  getAllHabitants: () => api.get('/habitants'),
  getHabitantById: (idHabitant: string) => api.get(`/habitants/${idHabitant}`),
  updateHabitant: (idHabitant: string, data: Record<string, IHabitant>) =>
    api.put(`/habitants/${idHabitant}`, data),
  deleteHabitant: (idHabitant: string) => api.delete(`/habitants/${idHabitant}`),
  getHabitantsCategorie: () => api.get('/habitants/categorie'),
};

// API Hopital
export const HopitalAPI = {
  createHopital: (data: Record<string, IHopital>) => api.post('/hopitaux', data),
  getAllHopitaux: () => api.get('/hopitaux'),
  getHopitalById: (idHopital: string) => api.get(`/hopitaux/${idHopital}`),
  updateHopital: (idHopital: string, data: Record<string, IHopital>) =>
    api.put(`/hopitaux/${idHopital}`, data),
  deleteHopital: (idHopital: string) => api.delete(`/hopitaux/${idHopital}`),
};

// Exporter l'instance Axios par défaut
export default api;
