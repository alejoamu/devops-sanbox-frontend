import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/config/api';

/**
 * Hook para obtener todas las guías
 */
export function useGuides() {
  return useQuery({
    queryKey: ['guides'],
    queryFn: () => apiClient.getGuides(),
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
}

/**
 * Hook para obtener una guía específica
 */
export function useGuide(guideSlug: string) {
  return useQuery({
    queryKey: ['guides', guideSlug],
    queryFn: () => apiClient.getGuide(guideSlug),
    enabled: !!guideSlug,
    staleTime: 5 * 60 * 1000,
  });
}

/**
 * Hook para obtener una fase específica
 */
export function usePhase(guideSlug: string, phaseSlug: string) {
  return useQuery({
    queryKey: ['guides', guideSlug, 'phases', phaseSlug],
    queryFn: () => apiClient.getPhase(guideSlug, phaseSlug),
    enabled: !!guideSlug && !!phaseSlug,
    staleTime: 5 * 60 * 1000,
  });
}

