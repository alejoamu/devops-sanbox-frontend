import { Button } from "@/components/ui/button";
import { PhaseCard } from "@/components/PhaseCard";
import { Card, CardContent } from "@/components/ui/card";
import { Search, BookOpen, FileText, Star } from "lucide-react";
import { Link } from "react-router-dom";

const pdg1Phases = [
  {
    title: "Definición del Problema",
    description: "Identifica y delimita el problema de investigación de manera clara y precisa.",
    phase: "PDG1 - Fase 1",
    duration: "2-3 semanas",
    url: "/pdg1/fase1",
  },
  {
    title: "Marco Teórico",
    description: "Fundamenta tu investigación con bases teóricas y estado del arte.",
    phase: "PDG1 - Fase 2",
    duration: "3-4 semanas",
    url: "/pdg1/fase2",
  },
  {
    title: "Diseño Metodológico",
    description: "Define el enfoque, métodos y técnicas para tu investigación.",
    phase: "PDG1 - Fase 3",
    duration: "2-3 semanas",
    url: "/pdg1/fase3",
  },
];

const pdg2Phases = [
  {
    title: "Implementación",
    description: "Ejecuta tu metodología y recopila datos de manera sistemática.",
    phase: "PDG2 - Fase 4",
    duration: "4-6 semanas",
    url: "/pdg2/fase4",
  },
  {
    title: "Análisis de Resultados",
    description: "Analiza e interpreta los datos obtenidos en tu investigación.",
    phase: "PDG2 - Fase 5",
    duration: "3-4 semanas",
    url: "/pdg2/fase5",
  },
  {
    title: "Conclusiones y Recomendaciones",
    description: "Sintetiza hallazgos y propone recomendaciones basadas en tu investigación.",
    phase: "PDG2 - Fase 6",
    duration: "2-3 semanas",
    url: "/pdg2/fase6",
  },
];

const featuredResources = [
  { title: "Plantillas de Documentos", icon: FileText, url: "/resources" },
  { title: "Ejemplos de Proyectos", icon: Star, url: "/resources" },
  { title: "Videos Tutoriales", icon: BookOpen, url: "/resources" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-primary/5 border-b border-border">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Guía Metodológica de Proyecto de Grado
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Plataforma oficial para estudiantes de PDG1 y PDG2 de la Universidad Icesi. 
              Encuentra toda la información metodológica, recursos y ejemplos en un solo lugar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-hover" asChild>
                <Link to="/pdg1/fase1">Comenzar PDG1</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/resources">
                  <FileText className="mr-2 h-4 w-4" />
                  Ver Recursos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="container mx-auto px-6 -mt-6">
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Busca una guía, tema o palabra clave..."
                className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
              />
              <Button variant="ghost" size="sm">Buscar</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* PDG1 Phases */}
      <section className="container mx-auto px-6 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Proyecto de Grado I</h2>
          <p className="text-muted-foreground">
            Fases iniciales de definición, fundamentación teórica y diseño metodológico
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pdg1Phases.map((phase) => (
            <PhaseCard key={phase.title} {...phase} />
          ))}
        </div>
      </section>

      {/* PDG2 Phases */}
      <section className="container mx-auto px-6 py-16 bg-muted/30">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Proyecto de Grado II</h2>
          <p className="text-muted-foreground">
            Fases de ejecución, análisis de resultados y conclusiones finales
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pdg2Phases.map((phase) => (
            <PhaseCard key={phase.title} {...phase} />
          ))}
        </div>
      </section>

      {/* Featured Resources */}
      <section className="container mx-auto px-6 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Recursos Destacados</h2>
          <p className="text-muted-foreground">
            Accede rápidamente a plantillas, ejemplos y material de apoyo
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredResources.map((resource) => (
            <Link key={resource.title} to={resource.url}>
              <Card className="hover:shadow-lg transition-shadow border-border">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <resource.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{resource.title}</h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas ayuda adicional?</h2>
          <p className="text-lg mb-8 opacity-90">
            Consulta nuestra sección de preguntas frecuentes o contáctanos directamente
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/faq">Ver FAQ</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="mailto:pdg@icesi.edu.co">Contactar Soporte</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
