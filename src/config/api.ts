import axios, { AxiosError } from "axios";

interface ErrorResponse {
  message?: string;
  [key: string]: unknown;
}

/**
 * Cliente API para comunicarse con el backend (Neon DB)
 * Backend usa /api como base (methodologies, phases, subphases, resources)
 */
const api = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "/api"
    : (import.meta.env.VITE_API_BASE_URL ?? "/api"),
  withCredentials: true,
  timeout: 20000,
});

api.interceptors.response.use(
  (res) => res,
  (error: AxiosError<ErrorResponse>) => {
    const status = error.response?.status;

    if (error.code === "ECONNREFUSED" || error.code === "ERR_NETWORK") {
      console.error(
        "Error de conexión con el backend. Verifica que el servidor esté corriendo en http://localhost:8080"
      );
      return Promise.reject({
        status: 0,
        message:
          "No se pudo conectar al servidor. Verifica que el backend esté corriendo.",
        data: null,
      });
    }

    return Promise.reject({
      status,
      message:
        error.response?.data?.message ?? error.message ?? "Request error",
      data: error.response?.data,
    });
  }
);

/**
 * API client para consumir el backend real (Neon DB)
 */
export const apiClient = {
  /** Metodologías (guías) */
  async getMethodologies() {
    const response = await api.get("/methodologies");
    return response.data;
  },

  async getMethodology(id: string) {
    const response = await api.get(`/methodologies/${id}`);
    return response.data;
  },

  /** Fases por metodología */
  async getPhasesByMethodology(methodologyId: string) {
    const response = await api.get(`/phases/methodology/${methodologyId}`);
    return response.data;
  },

  /** Subfases por fase */
  async getSubphasesByPhase(phaseId: string) {
    const response = await api.get(`/subphases/phase/${phaseId}`);
    return response.data;
  },

  /** Recursos de una subfase */
  async getSubphaseResources(subphaseId: string) {
    const response = await api.get(`/subphase-resources/subphase/${subphaseId}`);
    return response.data;
  },

  /** Recursos */
  async getResources() {
    const response = await api.get("/resources");
    return response.data;
  },

  async getResource(id: string) {
    const response = await api.get(`/resources/${id}`);
    return response.data;
  },
};

export default api;
