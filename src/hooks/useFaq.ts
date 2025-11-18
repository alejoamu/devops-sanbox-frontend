import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/config/api';

/**
 * Hook para obtener todas las preguntas frecuentes
 */
export function useFaq() {
  return useQuery({
    queryKey: ['faqs'],
    queryFn: () => apiClient.getFaqs(),
    staleTime: 10 * 60 * 1000, // 10 minutos
  });
}

