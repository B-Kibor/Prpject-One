import { useQuery, useMutation } from '@tanstack/react-query';
import { authAPI, usersAPI, organizationsAPI } from '../utils/api';
import { useAuthStore } from '../store/authStore';

export const useLogin = () => {
  const setAuth = useAuthStore((state) => state.setAuth);
  
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      authAPI.login(email, password),
    onSuccess: (response) => {
      const { user, access_token } = response.data;
      setAuth(user, access_token);
    },
  });
};

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => usersAPI.getUsers().then(res => res.data),
  });
};

export const useProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => usersAPI.getProfile().then(res => res.data),
  });
};

export const useOrganization = (id: string) => {
  return useQuery({
    queryKey: ['organization', id],
    queryFn: () => organizationsAPI.getOrganization(id).then(res => res.data),
    enabled: !!id,
  });
};