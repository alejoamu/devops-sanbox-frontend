import axios, { AxiosError } from "axios";

interface ErrorResponse {
  message?: string;
  [key: string]: any;
}

/**
 * Cliente API para comunicarse con el backend
 * Configurado para usar proxy en desarrollo y URL base en producción
 */
const api = axios.create({
  baseURL: import.meta.env.MODE === 'development' 
    ? "/api/v1" 
    : (import.meta.env.VITE_API_BASE_URL ?? "/api/v1"),
  withCredentials: true,
  timeout: 20000,
});

api.interceptors.response.use(
  (res) => res,
  (error: AxiosError<ErrorResponse>) => {
    const status = error.response?.status;
    
    // Manejo de errores de conexión
    if (error.code === 'ECONNREFUSED' || error.code === 'ERR_NETWORK') {
      console.error('Error de conexión con el backend. Verifica que el servidor esté corriendo en http://localhost:8080');
      return Promise.reject({
        status: 0,
        message: 'No se pudo conectar al servidor. Verifica que el backend esté corriendo.',
        data: null,
      });
    }
    
    return Promise.reject({
      status,
      message:
        error.response?.data?.message ?? error.message ?? "Request error",
      data: error.response?.data,
    });
  },
);

/**
 * API client con métodos para obtener datos del backend
 */
export const apiClient = {
  /**
   * Obtiene todas las guías
   */
  async getGuides() {
    const response = await api.get("/guides");
    return response.data;
  },

  /**
   * Obtiene una guía específica por slug
   */
  async getGuide(guideSlug: string) {
    const response = await api.get(`/guides/${guideSlug}`);
    return response.data;
  },

  /**
   * Obtiene una fase específica de una guía
   */
  async getPhase(guideSlug: string, phaseSlug: string) {
    const response = await api.get(`/guides/${guideSlug}/phases/${phaseSlug}`);
    return response.data;
  },

  /**
   * Obtiene todas las preguntas frecuentes
   */
  async getFaqs() {
    const response = await api.get("/faqs");
    return response.data;
  },

  /**
   * Obtiene todos los recursos de apoyo
   */
  async getResources() {
    const response = await api.get("/resources");
    return response.data;
  },
};

export default api;

