import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, Download, Play } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getPhaseByIds, getGuideById } from "@/data/guidesData";

export default function PhaseDetail() {
  const { guideId, phaseId } = useParams<{ guideId: string; phaseId: string }>();
  const navigate = useNavigate();
  
  const guide = getGuideById(guideId || "");
  const phase = getPhaseByIds(guideId || "", phaseId || "");

  if (!guide || !phase) {
    return (
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-2xl font-bold">Fase no encontrada</h1>
        <Button className="mt-4" onClick={() => navigate("/")}>
          Volver al inicio
        </Button>
      </div>
    );
  }

  const currentPhaseIndex = guide.phases.findIndex((p) => p.id === phaseId);
  const prevPhase = currentPhaseIndex > 0 ? guide.phases[currentPhaseIndex - 1] : null;
  const nextPhase = currentPhaseIndex < guide.phases.length - 1 ? guide.phases[currentPhaseIndex + 1] : null;

  const progress = ((currentPhaseIndex + 1) / guide.phases.length) * 100;

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
            {guide.name}
          </Badge>
          <h1 className="text-4xl font-bold mb-4">{phase.title}</h1>
          <p className="text-lg opacity-90 mb-6">{phase.description}</p>
          
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
              {phase.objectives.map((objective, index) => (
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
          {phase.steps.map((step, index) => (
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
              {phase.deliverables.map((deliverable, index) => (
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
          {prevPhase ? (
            <Button variant="outline" asChild>
              <Link to={`/${guideId}/${prevPhase.id}`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Fase Anterior
              </Link>
            </Button>
          ) : (
            <Button variant="outline" asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Inicio
              </Link>
            </Button>
          )}
          {nextPhase ? (
            <Button className="bg-primary hover:bg-primary-hover" asChild>
              <Link to={`/${guideId}/${nextPhase.id}`}>
                Siguiente Fase
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <Button className="bg-success hover:bg-success/90" asChild>
              <Link to="/">
                Completar Guía
                <CheckCircle2 className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </section>
    </div>
  );
}
