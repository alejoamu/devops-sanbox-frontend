# Integración con Backend

## Configuración de Conexión

El frontend está configurado para conectarse al backend a través de un proxy en desarrollo.

### Desarrollo

- **Frontend**: `http://localhost:5173`
- **Backend**: `http://localhost:8080`
- **Proxy**: Las peticiones a `/api/v1` se redirigen automáticamente a `http://localhost:8080/api/v1`

### Producción

- Usa la variable de entorno `VITE_API_BASE_URL` o `/api/v1` por defecto

## Solución de Problemas

### Error: `ERR_CONNECTION_REFUSED` en `http://localhost:8080`

Este error indica que el backend no está corriendo. Para solucionarlo:

1. **Verifica que el backend esté corriendo:**
   ```bash
   cd DEVOPS-SANDBOX-BACKEND
   ./gradlew bootRun
   # O en Windows:
   gradlew.bat bootRun
   ```

2. **Verifica que el backend esté escuchando en el puerto 8080:**
   - Abre `http://localhost:8080/api/v1/guides` en tu navegador
   - Deberías ver una respuesta JSON o un error 404 (pero no ERR_CONNECTION_REFUSED)

3. **Reinicia el servidor de desarrollo del frontend:**
   ```bash
   npm run dev
   ```

### Verificar que el Proxy Funciona

1. Abre las herramientas de desarrollador (F12)
2. Ve a la pestaña "Network"
3. Realiza una petición desde la aplicación
4. Verifica que la petición vaya a `/api/v1/...` (no a `http://localhost:8080/api/v1/...`)
5. El proxy de Vite debería redirigirla automáticamente

### Endpoints Disponibles

- `GET /api/v1/guides` - Lista todas las guías
- `GET /api/v1/guides/{guideSlug}` - Obtiene una guía específica
- `GET /api/v1/guides/{guideSlug}/phases/{phaseSlug}` - Obtiene una fase específica
- `GET /api/v1/faqs` - Lista todas las preguntas frecuentes
- `GET /api/v1/resources` - Lista todos los recursos de apoyo

## Configuración Técnica

### Vite Config (`vite.config.ts`)

El proxy está configurado en `vite.config.ts`:

```typescript
proxy: {
  "/api/v1": {
    target: "http://localhost:8080",
    changeOrigin: true,
    secure: false,
    rewrite: (path) => path,
  },
}
```

### API Client (`src/config/api.ts`)

El cliente API usa axios y está configurado para:
- Usar el proxy en desarrollo (`/api/v1`)
- Usar `VITE_API_BASE_URL` en producción
- Manejar errores de conexión apropiadamente

