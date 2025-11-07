import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, Download, Play } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const phaseData = {
  fase1: {
    title: "Fase 1: Definición del Problema",
    description: "En esta fase aprenderás a identificar, delimitar y plantear un problema de investigación de manera clara y precisa.",
    course: "PDG1",
    objectives: [
      "Identificar un problema relevante en tu área de estudio",
      "Delimitar el alcance de la investigación",
      "Formular preguntas de investigación",
      "Definir objetivos generales y específicos",
    ],
    steps: [
      {
        title: "1. Identificación del Problema",
        description: "Explora tu área de interés e identifica problemas o necesidades reales.",
        resources: [
          { type: "video", title: "Cómo identificar un problema de investigación", duration: "12:30" },
          { type: "document", title: "Guía para la identificación de problemas.pdf" },
        ],
      },
      {
        title: "2. Delimitación del Alcance",
        description: "Define claramente los límites de tu investigación (temporal, espacial, temático).",
        resources: [
          { type: "video", title: "Delimitación del alcance de investigación", duration: "08:45" },
          { type: "document", title: "Ejemplo de delimitación.pdf" },
        ],
      },
      {
        title: "3. Formulación de Preguntas",
        description: "Convierte tu problema en preguntas de investigación claras y respondibles.",
        resources: [
          { type: "video", title: "Técnicas de formulación de preguntas", duration: "10:20" },
          { type: "document", title: "Plantilla de preguntas de investigación.docx" },
        ],
      },
    ],
    deliverables: [
      "Documento de definición del problema (2-3 páginas)",
      "Matriz de delimitación del alcance",
      "Lista de preguntas de investigación",
      "Objetivos general y específicos",
    ],
    nextPhase: "/pdg1/fase2",
    prevPhase: "/",
  },
  fase2: {
    title: "Fase 2: Marco Teórico",
    description: "Fundamenta tu investigación con bases teóricas sólidas y un análisis del estado del arte.",
    course: "PDG1",
    objectives: [
      "Revisar literatura relevante en tu área de estudio",
      "Identificar teorías y conceptos clave",
      "Analizar el estado del arte",
      "Construir el marco teórico de tu investigación",
    ],
    steps: [
      {
        title: "1. Revisión Bibliográfica",
        description: "Busca y selecciona fuentes académicas relevantes y confiables.",
        resources: [
          { type: "video", title: "Búsqueda efectiva en bases de datos", duration: "15:00" },
          { type: "document", title: "Lista de bases de datos recomendadas.pdf" },
        ],
      },
      {
        title: "2. Análisis del Estado del Arte",
        description: "Examina investigaciones previas relacionadas con tu tema.",
        resources: [
          { type: "video", title: "Cómo hacer un estado del arte", duration: "18:30" },
          { type: "document", title: "Matriz de análisis bibliográfico.xlsx" },
        ],
      },
    ],
    deliverables: [
      "Marco teórico completo (8-12 páginas)",
      "Estado del arte documentado",
      "Referencias bibliográficas en formato APA",
    ],
    nextPhase: "/pdg1/fase3",
    prevPhase: "/pdg1/fase1",
  },
};

export default function PhaseDetail() {
  const { phase } = useParams<{ phase: string }>();
  const data = phaseData[phase as keyof typeof phaseData];

  if (!data) {
    return (
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-2xl font-bold">Fase no encontrada</h1>
      </div>
    );
  }

  const progress = 33;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-6 py-12">
          <Link to="/" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
          <Badge variant="secondary" className="mb-4">
            {data.course}
          </Badge>
          <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
          <p className="text-lg opacity-90 mb-6">{data.description}</p>
          
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Progreso de la fase</span>
              <span className="text-sm font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="container mx-auto px-6 py-12">
        <Card>
          <CardHeader>
            <CardTitle>Objetivos de la Fase</CardTitle>
            <CardDescription>Al completar esta fase, habrás logrado:</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {data.objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{objective}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Steps */}
      <section className="container mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Pasos de la Fase</h2>
        <div className="space-y-6">
          {data.steps.map((step, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Circle className="h-5 w-5 text-primary" />
                  {step.title}
                </CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-foreground mb-3">Recursos disponibles:</h4>
                <div className="space-y-2">
                  {step.resources.map((resource, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-3">
                        {resource.type === "video" ? (
                          <Play className="h-5 w-5 text-primary" />
                        ) : (
                          <Download className="h-5 w-5 text-primary" />
                        )}
                        <div>
                          <p className="font-medium text-foreground">{resource.title}</p>
                          {resource.duration && (
                            <p className="text-sm text-muted-foreground">{resource.duration}</p>
                          )}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        {resource.type === "video" ? "Ver" : "Descargar"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section className="container mx-auto px-6 pb-12">
        <Card className="bg-accent-yellow/10 border-accent-yellow/20">
          <CardHeader>
            <CardTitle>Entregables de la Fase</CardTitle>
            <CardDescription>Documentos y productos que debes completar:</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {data.deliverables.map((deliverable, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-alert mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{deliverable}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Navigation */}
      <section className="container mx-auto px-6 pb-16">
        <div className="flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link to={data.prevPhase}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Fase Anterior
            </Link>
          </Button>
          <Button className="bg-primary hover:bg-primary-hover" asChild>
            <Link to={data.nextPhase}>
              Siguiente Fase
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
