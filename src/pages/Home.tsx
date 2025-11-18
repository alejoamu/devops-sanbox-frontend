import { Button } from "@/components/ui/button";
import { PhaseCard } from "@/components/PhaseCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, BookOpen, FileText, Star, Brain, Cpu, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useGuides } from "@/hooks/useGuides";

const getGuideIcon = (iconName: string) => {
  switch (iconName) {
    case "Brain":
      return Brain;
    case "Cpu":
      return Cpu;
    default:
      return BookOpen;
  }
};

const featuredResources = [
  { title: "Plantillas de Documentos", icon: FileText, url: "/resources" },
  { title: "Ejemplos de Proyectos", icon: Star, url: "/resources" },
  { title: "Videos Tutoriales", icon: BookOpen, url: "/resources" },
];

export default function Home() {
  const { data: guides, isLoading, error } = useGuides();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Error al cargar las guías</CardTitle>
            <CardDescription>
              No se pudo conectar con el servidor. Por favor, verifica que el backend esté ejecutándose.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => window.location.reload()}>Reintentar</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

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
              Plataforma oficial para estudiantes de la Universidad Icesi. 
              Encuentra guías metodológicas especializadas según el tipo de proyecto: Inteligencia Artificial, IoT y más.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-hover" asChild>
                <Link to={`/${guides?.[0]?.id}/${guides?.[0]?.phases?.[0]?.id || ''}`}>Explorar Guías</Link>
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

      {/* Guides Overview */}
      <section className="container mx-auto px-6 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Guías por Tipo de Proyecto</h2>
          <p className="text-muted-foreground">
            Selecciona la guía que corresponda al enfoque de tu proyecto de grado
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides?.map((guide) => {
            const GuideIcon = getGuideIcon(guide.icon);
            return (
              <Card key={guide.id} className="hover:shadow-lg transition-shadow border-border">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GuideIcon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{guide.name}</CardTitle>
                      <CardDescription className="text-base">{guide.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{guide.phases.length} fases completas</span>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary-hover" asChild>
                      <Link to={`/${guide.id}/${guide.phases[0].id}`}>
                        Comenzar Guía
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* All Phases Preview */}
      {guides?.map((guide, guideIndex) => (
        <section 
          key={guide.id} 
          className={`container mx-auto px-6 py-16 ${guideIndex % 2 === 1 ? 'bg-muted/30' : ''}`}
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">{guide.name}</h2>
            <p className="text-muted-foreground">{guide.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guide.phases.map((phase) => (
              <PhaseCard
                key={phase.id}
                title={phase.title}
                description={phase.description}
                phase={`Fase ${guide.phases.indexOf(phase) + 1}`}
                duration={phase.duration}
                url={`/${guide.id}/${phase.id}`}
              />
            ))}
          </div>
        </section>
      ))}

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
