import { useQuery } from "@tanstack/react-query";
import {
  fetchGuides,
  fetchGuide,
  fetchPhase,
} from "@/services/guidesService";

/**
 * Hook para obtener todas las guías (methodologies + phases + subphases + resources)
 */
export function useGuides() {
  return useQuery({
    queryKey: ["guides"],
    queryFn: fetchGuides,
    staleTime: 5 * 60 * 1000,
  });
}

/**
 * Hook para obtener una guía específica
 */
export function useGuide(guideSlug: string) {
  return useQuery({
    queryKey: ["guides", guideSlug],
    queryFn: () => fetchGuide(guideSlug),
    enabled: !!guideSlug,
    staleTime: 5 * 60 * 1000,
  });
}

/**
 * Hook para obtener una fase específica
 */
export function usePhase(guideSlug: string, phaseId: string) {
  return useQuery({
    queryKey: ["guides", guideSlug, "phases", phaseId],
    queryFn: () => fetchPhase(guideSlug, phaseId),
    enabled: !!guideSlug && !!phaseId,
    staleTime: 5 * 60 * 1000,
  });
}
