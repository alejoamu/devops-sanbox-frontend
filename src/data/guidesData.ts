export interface Resource {
  type: "video" | "document" | "image";
  title: string;
  duration?: string;
  format?: string;
}

export interface Step {
  title: string;
  description: string;
  resources: Resource[];
}

export interface Phase {
  id: string;
  title: string;
  description: string;
  objectives: string[];
  steps: Step[];
  deliverables: string[];
  duration: string;
}

export interface Guide {
  id: string;
  name: string;
  description: string;
  icon: string;
  phases: Phase[];
}

export const guides: Guide[] = [
  {
    id: "ia",
    name: "Proyectos de Inteligencia Artificial",
    description: "Guía metodológica para proyectos de grado enfocados en IA y Machine Learning",
    icon: "Brain",
    phases: [
      {
        id: "fase1",
        title: "Definición del Problema de IA",
        description: "Identifica un problema que pueda ser abordado mediante técnicas de inteligencia artificial.",
        duration: "2-3 semanas",
        objectives: [
          "Identificar un problema real susceptible de ser resuelto con IA",
          "Evaluar la viabilidad técnica del proyecto",
          "Definir el alcance y limitaciones del sistema de IA",
          "Establecer métricas de éxito y validación",
        ],
        steps: [
          {
            title: "1. Identificación del Problema",
            description: "Explora casos de uso donde la IA pueda aportar valor significativo.",
            resources: [
              { type: "video", title: "Casos de uso de IA en la industria", duration: "15:30" },
              { type: "document", title: "Guía de identificación de problemas para IA.pdf" },
            ],
          },
          {
            title: "2. Análisis de Viabilidad",
            description: "Evalúa disponibilidad de datos, recursos computacionales y complejidad técnica.",
            resources: [
              { type: "video", title: "Evaluación de viabilidad técnica en IA", duration: "12:20" },
              { type: "document", title: "Checklist de viabilidad para proyectos de IA.xlsx" },
            ],
          },
          {
            title: "3. Definición de Dataset",
            description: "Identifica fuentes de datos, calidad y cantidad requerida para entrenar modelos.",
            resources: [
              { type: "video", title: "Fuentes de datos para proyectos de IA", duration: "18:45" },
              { type: "document", title: "Plantilla de análisis de datasets.docx" },
            ],
          },
        ],
        deliverables: [
          "Documento de definición del problema (3-4 páginas)",
          "Análisis de viabilidad técnica",
          "Descripción del dataset objetivo",
          "Métricas de evaluación propuestas",
        ],
      },
      {
        id: "fase2",
        title: "Marco Teórico y Estado del Arte en IA",
        description: "Fundamenta tu proyecto con teorías de IA, algoritmos relevantes y revisión de trabajos similares.",
        duration: "3-4 semanas",
        objectives: [
          "Revisar literatura sobre técnicas de IA aplicables",
          "Analizar trabajos previos y modelos existentes",
          "Identificar algoritmos y arquitecturas relevantes",
          "Justificar la selección de técnicas de IA",
        ],
        steps: [
          {
            title: "1. Revisión de Algoritmos",
            description: "Estudia algoritmos de ML/DL relevantes para tu problema.",
            resources: [
              { type: "video", title: "Panorama de algoritmos de Machine Learning", duration: "22:10" },
              { type: "document", title: "Comparativa de algoritmos de IA.pdf" },
            ],
          },
          {
            title: "2. Estado del Arte",
            description: "Analiza papers y proyectos similares en la literatura académica.",
            resources: [
              { type: "video", title: "Cómo hacer revisión de literatura en IA", duration: "16:30" },
              { type: "document", title: "Plantilla de análisis de papers.xlsx" },
            ],
          },
          {
            title: "3. Selección de Arquitectura",
            description: "Justifica la elección de arquitectura de red o modelo de IA.",
            resources: [
              { type: "video", title: "Arquitecturas de redes neuronales", duration: "20:15" },
              { type: "document", title: "Guía de selección de arquitecturas.pdf" },
            ],
          },
        ],
        deliverables: [
          "Marco teórico completo (10-15 páginas)",
          "Estado del arte documentado",
          "Justificación de técnicas seleccionadas",
          "Referencias bibliográficas (APA)",
        ],
      },
      {
        id: "fase3",
        title: "Diseño Metodológico",
        description: "Define el pipeline de procesamiento, arquitectura del modelo y estrategia de entrenamiento.",
        duration: "3-4 semanas",
        objectives: [
          "Diseñar el pipeline de datos end-to-end",
          "Definir arquitectura del modelo de IA",
          "Establecer estrategia de entrenamiento y validación",
          "Planificar experimentos y métricas",
        ],
        steps: [
          {
            title: "1. Pipeline de Datos",
            description: "Diseña el flujo completo desde datos crudos hasta modelo entrenado.",
            resources: [
              { type: "video", title: "Diseño de pipelines de ML", duration: "19:40" },
              { type: "document", title: "Plantilla de arquitectura de datos.pdf" },
            ],
          },
          {
            title: "2. Preprocesamiento",
            description: "Define técnicas de limpieza, normalización y augmentación de datos.",
            resources: [
              { type: "video", title: "Técnicas de preprocesamiento", duration: "14:25" },
              { type: "document", title: "Checklist de preprocesamiento.xlsx" },
            ],
          },
          {
            title: "3. Estrategia de Validación",
            description: "Establece división de datos, validación cruzada y métricas de evaluación.",
            resources: [
              { type: "video", title: "Validación de modelos de IA", duration: "17:50" },
              { type: "document", title: "Guía de validación de modelos.pdf" },
            ],
          },
        ],
        deliverables: [
          "Diseño completo del pipeline (diagrama)",
          "Especificación de preprocesamiento",
          "Plan de entrenamiento y validación",
          "Definición de métricas de éxito",
        ],
      },
      {
        id: "fase4",
        title: "Implementación del Sistema",
        description: "Desarrolla el modelo, entrena, optimiza hiperparámetros y documenta el código.",
        duration: "5-6 semanas",
        objectives: [
          "Implementar el modelo de IA seleccionado",
          "Entrenar y validar el modelo",
          "Optimizar hiperparámetros",
          "Documentar código y experimentos",
        ],
        steps: [
          {
            title: "1. Implementación del Modelo",
            description: "Codifica la arquitectura usando frameworks como TensorFlow o PyTorch.",
            resources: [
              { type: "video", title: "Implementación de modelos en PyTorch", duration: "25:30" },
              { type: "document", title: "Best practices de código en ML.pdf" },
            ],
          },
          {
            title: "2. Entrenamiento",
            description: "Entrena el modelo, monitorea métricas y ajusta hiperparámetros.",
            resources: [
              { type: "video", title: "Estrategias de entrenamiento", duration: "21:15" },
              { type: "document", title: "Guía de optimización de hiperparámetros.pdf" },
            ],
          },
          {
            title: "3. Validación y Testing",
            description: "Evalúa el modelo con datos de test y valida su rendimiento.",
            resources: [
              { type: "video", title: "Testing de modelos de IA", duration: "16:40" },
              { type: "document", title: "Checklist de validación.xlsx" },
            ],
          },
        ],
        deliverables: [
          "Código fuente documentado (GitHub)",
          "Modelo entrenado y guardado",
          "Reporte de experimentos y métricas",
          "Notebooks de análisis",
        ],
      },
      {
        id: "fase5",
        title: "Análisis de Resultados",
        description: "Analiza el rendimiento del modelo, interpreta resultados y compara con el estado del arte.",
        duration: "3-4 semanas",
        objectives: [
          "Analizar métricas de rendimiento",
          "Interpretar predicciones del modelo",
          "Comparar con baseline y estado del arte",
          "Identificar fortalezas y limitaciones",
        ],
        steps: [
          {
            title: "1. Análisis de Métricas",
            description: "Evalúa accuracy, precision, recall, F1-score y métricas específicas.",
            resources: [
              { type: "video", title: "Interpretación de métricas en ML", duration: "18:20" },
              { type: "document", title: "Guía de análisis de métricas.pdf" },
            ],
          },
          {
            title: "2. Visualización de Resultados",
            description: "Crea gráficas, matrices de confusión y visualizaciones interpretables.",
            resources: [
              { type: "video", title: "Visualización de resultados de IA", duration: "14:55" },
              { type: "document", title: "Templates de visualización.pdf" },
            ],
          },
          {
            title: "3. Comparación con Estado del Arte",
            description: "Compara tu modelo con trabajos previos y establece contribuciones.",
            resources: [
              { type: "video", title: "Benchmarking de modelos", duration: "12:30" },
              { type: "document", title: "Tabla comparativa.xlsx" },
            ],
          },
        ],
        deliverables: [
          "Análisis completo de resultados (8-10 páginas)",
          "Visualizaciones y gráficas",
          "Comparación con benchmarks",
          "Análisis de casos de éxito y fallo",
        ],
      },
      {
        id: "fase6",
        title: "Conclusiones y Trabajo Futuro",
        description: "Sintetiza hallazgos, reflexiona sobre contribuciones y propone mejoras futuras.",
        duration: "2-3 semanas",
        objectives: [
          "Sintetizar principales hallazgos",
          "Evaluar cumplimiento de objetivos",
          "Discutir limitaciones del modelo",
          "Proponer trabajo futuro y mejoras",
        ],
        steps: [
          {
            title: "1. Síntesis de Hallazgos",
            description: "Resume los principales resultados y aprendizajes del proyecto.",
            resources: [
              { type: "video", title: "Cómo escribir conclusiones efectivas", duration: "10:45" },
              { type: "document", title: "Guía de conclusiones.pdf" },
            ],
          },
          {
            title: "2. Evaluación de Objetivos",
            description: "Verifica el cumplimiento de objetivos planteados inicialmente.",
            resources: [
              { type: "video", title: "Evaluación de proyectos de IA", duration: "11:20" },
              { type: "document", title: "Checklist de objetivos.xlsx" },
            ],
          },
          {
            title: "3. Trabajo Futuro",
            description: "Propón mejoras, optimizaciones y nuevas líneas de investigación.",
            resources: [
              { type: "video", title: "Identificación de trabajo futuro", duration: "09:30" },
              { type: "document", title: "Plantilla de trabajo futuro.docx" },
            ],
          },
        ],
        deliverables: [
          "Conclusiones (3-5 páginas)",
          "Evaluación de cumplimiento de objetivos",
          "Discusión de limitaciones",
          "Propuestas de trabajo futuro",
        ],
      },
    ],
  },
  {
    id: "iot",
    name: "Proyectos de Internet de las Cosas (IoT)",
    description: "Guía metodológica para proyectos de grado enfocados en IoT y sistemas embebidos",
    icon: "Cpu",
    phases: [
      {
        id: "fase1",
        title: "Definición del Sistema IoT",
        description: "Identifica el problema y define los requisitos del sistema IoT a desarrollar.",
        duration: "2-3 semanas",
        objectives: [
          "Identificar un problema que requiera solución IoT",
          "Definir requisitos funcionales y no funcionales",
          "Evaluar viabilidad técnica y económica",
          "Establecer arquitectura preliminar del sistema",
        ],
        steps: [
          {
            title: "1. Identificación del Problema",
            description: "Explora escenarios donde IoT pueda aportar monitoreo, automatización o control.",
            resources: [
              { type: "video", title: "Aplicaciones de IoT en diferentes industrias", duration: "14:20" },
              { type: "document", title: "Guía de identificación de proyectos IoT.pdf" },
            ],
          },
          {
            title: "2. Requisitos del Sistema",
            description: "Define sensores, actuadores, conectividad y procesamiento necesarios.",
            resources: [
              { type: "video", title: "Análisis de requisitos en IoT", duration: "16:45" },
              { type: "document", title: "Plantilla de requisitos IoT.docx" },
            ],
          },
          {
            title: "3. Arquitectura Preliminar",
            description: "Diseña la arquitectura de capas: sensores, edge, comunicación y cloud.",
            resources: [
              { type: "video", title: "Arquitecturas de sistemas IoT", duration: "19:30" },
              { type: "document", title: "Diagramas de arquitectura IoT.pdf" },
            ],
          },
        ],
        deliverables: [
          "Documento de definición del sistema (3-4 páginas)",
          "Lista de requisitos funcionales y no funcionales",
          "Diagrama de arquitectura preliminar",
          "Análisis de viabilidad",
        ],
      },
      {
        id: "fase2",
        title: "Marco Teórico y Tecnologías IoT",
        description: "Fundamenta tu proyecto con protocolos, plataformas y tecnologías IoT relevantes.",
        duration: "3-4 semanas",
        objectives: [
          "Revisar protocolos de comunicación IoT",
          "Estudiar plataformas y frameworks disponibles",
          "Analizar proyectos IoT similares",
          "Justificar selección de tecnologías",
        ],
        steps: [
          {
            title: "1. Protocolos de Comunicación",
            description: "Estudia MQTT, CoAP, LoRaWAN, Zigbee, BLE según tu aplicación.",
            resources: [
              { type: "video", title: "Protocolos de comunicación en IoT", duration: "20:15" },
              { type: "document", title: "Comparativa de protocolos IoT.pdf" },
            ],
          },
          {
            title: "2. Plataformas IoT",
            description: "Analiza AWS IoT, Azure IoT, Google Cloud IoT, ThingSpeak, etc.",
            resources: [
              { type: "video", title: "Plataformas cloud para IoT", duration: "18:40" },
              { type: "document", title: "Comparativa de plataformas.xlsx" },
            ],
          },
          {
            title: "3. Hardware y Sensores",
            description: "Revisa microcontroladores, sensores y actuadores disponibles.",
            resources: [
              { type: "video", title: "Selección de hardware para IoT", duration: "22:10" },
              { type: "document", title: "Catálogo de sensores y actuadores.pdf" },
            ],
          },
        ],
        deliverables: [
          "Marco teórico completo (10-15 páginas)",
          "Justificación de tecnologías seleccionadas",
          "Estado del arte de proyectos similares",
          "Referencias bibliográficas (APA)",
        ],
      },
      {
        id: "fase3",
        title: "Diseño del Sistema IoT",
        description: "Define la arquitectura detallada, diseño de hardware, comunicaciones y software.",
        duration: "3-4 semanas",
        objectives: [
          "Diseñar arquitectura completa del sistema",
          "Definir esquemáticos de hardware",
          "Especificar flujos de datos y comunicación",
          "Diseñar interfaces de usuario",
        ],
        steps: [
          {
            title: "1. Diseño de Hardware",
            description: "Crea esquemáticos, selecciona componentes y diseña PCB si es necesario.",
            resources: [
              { type: "video", title: "Diseño de circuitos para IoT", duration: "21:30" },
              { type: "document", title: "Guía de diseño de hardware.pdf" },
            ],
          },
          {
            title: "2. Diseño de Comunicación",
            description: "Define topología de red, seguridad y manejo de datos.",
            resources: [
              { type: "video", title: "Diseño de redes IoT", duration: "17:45" },
              { type: "document", title: "Plantilla de arquitectura de red.pdf" },
            ],
          },
          {
            title: "3. Diseño de Software",
            description: "Especifica firmware, lógica de edge, backend y aplicaciones.",
            resources: [
              { type: "video", title: "Arquitectura de software en IoT", duration: "19:20" },
              { type: "document", title: "Diagramas de flujo de software.pdf" },
            ],
          },
        ],
        deliverables: [
          "Diagrama de arquitectura completa",
          "Esquemáticos de hardware",
          "Especificación de comunicaciones",
          "Diseño de interfaces (mockups)",
        ],
      },
      {
        id: "fase4",
        title: "Implementación del Sistema",
        description: "Desarrolla el hardware, firmware, backend y aplicaciones del sistema IoT.",
        duration: "5-6 semanas",
        objectives: [
          "Implementar hardware y conexiones",
          "Programar firmware para dispositivos",
          "Desarrollar backend y APIs",
          "Crear aplicaciones de visualización",
        ],
        steps: [
          {
            title: "1. Construcción de Hardware",
            description: "Ensambla componentes, conecta sensores y verifica funcionamiento.",
            resources: [
              { type: "video", title: "Ensamblaje de prototipos IoT", duration: "24:10" },
              { type: "document", title: "Checklist de construcción.xlsx" },
            ],
          },
          {
            title: "2. Programación de Firmware",
            description: "Desarrolla código para microcontroladores usando Arduino, ESP32, etc.",
            resources: [
              { type: "video", title: "Programación de ESP32 para IoT", duration: "28:35" },
              { type: "document", title: "Templates de firmware.pdf" },
            ],
          },
          {
            title: "3. Backend y Visualización",
            description: "Implementa servidor, base de datos y dashboards de monitoreo.",
            resources: [
              { type: "video", title: "Desarrollo de backend para IoT", duration: "26:20" },
              { type: "document", title: "Guía de desarrollo de dashboards.pdf" },
            ],
          },
        ],
        deliverables: [
          "Prototipo funcional del hardware",
          "Código fuente del firmware (GitHub)",
          "Backend y APIs documentadas",
          "Aplicación de visualización",
        ],
      },
      {
        id: "fase5",
        title: "Pruebas y Validación",
        description: "Realiza pruebas funcionales, de rendimiento, seguridad y validación del sistema.",
        duration: "3-4 semanas",
        objectives: [
          "Ejecutar pruebas funcionales completas",
          "Medir rendimiento y latencia",
          "Validar seguridad del sistema",
          "Documentar resultados de pruebas",
        ],
        steps: [
          {
            title: "1. Pruebas Funcionales",
            description: "Verifica que cada componente funcione según especificaciones.",
            resources: [
              { type: "video", title: "Testing de sistemas IoT", duration: "19:45" },
              { type: "document", title: "Plan de pruebas funcionales.xlsx" },
            ],
          },
          {
            title: "2. Pruebas de Rendimiento",
            description: "Mide latencia, throughput, consumo energético y confiabilidad.",
            resources: [
              { type: "video", title: "Medición de rendimiento en IoT", duration: "17:30" },
              { type: "document", title: "Métricas de rendimiento.pdf" },
            ],
          },
          {
            title: "3. Validación de Seguridad",
            description: "Evalúa vulnerabilidades, encriptación y autenticación.",
            resources: [
              { type: "video", title: "Seguridad en sistemas IoT", duration: "21:15" },
              { type: "document", title: "Checklist de seguridad IoT.pdf" },
            ],
          },
        ],
        deliverables: [
          "Reporte de pruebas funcionales",
          "Análisis de rendimiento y métricas",
          "Evaluación de seguridad",
          "Videos demostrativos del sistema",
        ],
      },
      {
        id: "fase6",
        title: "Conclusiones y Mejoras Futuras",
        description: "Sintetiza resultados, reflexiona sobre el desarrollo y propone mejoras.",
        duration: "2-3 semanas",
        objectives: [
          "Sintetizar hallazgos del proyecto",
          "Evaluar cumplimiento de objetivos",
          "Discutir desafíos y soluciones",
          "Proponer escalabilidad y mejoras",
        ],
        steps: [
          {
            title: "1. Análisis de Resultados",
            description: "Resume el funcionamiento del sistema y lecciones aprendidas.",
            resources: [
              { type: "video", title: "Análisis de proyectos IoT", duration: "11:40" },
              { type: "document", title: "Guía de análisis final.pdf" },
            ],
          },
          {
            title: "2. Desafíos y Soluciones",
            description: "Documenta problemas encontrados y cómo fueron resueltos.",
            resources: [
              { type: "video", title: "Lecciones aprendidas en IoT", duration: "13:25" },
              { type: "document", title: "Template de lecciones aprendidas.docx" },
            ],
          },
          {
            title: "3. Escalabilidad y Mejoras",
            description: "Propón cómo escalar el sistema y mejoras tecnológicas futuras.",
            resources: [
              { type: "video", title: "Escalabilidad en sistemas IoT", duration: "15:10" },
              { type: "document", title: "Guía de escalabilidad.pdf" },
            ],
          },
        ],
        deliverables: [
          "Conclusiones (3-5 páginas)",
          "Documentación de desafíos",
          "Propuestas de escalabilidad",
          "Recomendaciones de mejoras",
        ],
      },
    ],
  },
];

export function getGuideById(guideId: string): Guide | undefined {
  return guides.find((guide) => guide.id === guideId);
}

export function getPhaseByIds(guideId: string, phaseId: string): Phase | undefined {
  const guide = getGuideById(guideId);
  return guide?.phases.find((phase) => phase.id === phaseId);
}
