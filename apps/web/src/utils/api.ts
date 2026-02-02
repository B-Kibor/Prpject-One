import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const api = axios.create({
  baseURL: API_URL,
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem('auth-storage') || '{}')?.state?.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  register: (data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    organizationId?: string;
  }) => api.post('/auth/register', data),
};

// Users API
export const usersAPI = {
  getProfile: () => api.get('/users/profile'),
  getUsers: () => api.get('/users'),
};

// Organizations API
export const organizationsAPI = {
  getOrganization: (id: string) => api.get(`/organizations/${id}`),
};