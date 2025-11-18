import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/config/api';

/**
 * Hook para obtener todos los recursos de apoyo
 */
export function useResources() {
  return useQuery({
    queryKey: ['resources'],
    queryFn: () => apiClient.getResources(),
    staleTime: 10 * 60 * 1000, // 10 minutos
  });
}

