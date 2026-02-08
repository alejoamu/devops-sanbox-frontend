import { useQuery } from "@tanstack/react-query";

/**
 * El backend actual no tiene endpoint de FAQ.
 * Retornamos array vacío para que la página funcione sin errores.
 */
export function useFaq() {
  return useQuery({
    queryKey: ["faqs"],
    queryFn: async () => [] as { question: string; answer: string }[],
    staleTime: 10 * 60 * 1000,
  });
}
