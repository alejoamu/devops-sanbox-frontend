import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Mail } from "lucide-react";

const faqs = [
  {
    question: "¿Cuál es la diferencia entre PDG1 y PDG2?",
    answer: "PDG1 se enfoca en la planificación y diseño de la investigación (definición del problema, marco teórico y metodología), mientras que PDG2 se centra en la ejecución, análisis de resultados y conclusiones del proyecto.",
  },
  {
    question: "¿Cuánto tiempo tengo para completar cada fase?",
    answer: "El tiempo varía según la fase, pero generalmente cada una toma entre 2 y 6 semanas. Consulta la descripción específica de cada fase para tiempos estimados.",
  },
  {
    question: "¿Puedo cambiar mi tema de investigación después de PDG1?",
    answer: "Los cambios mayores deben ser consultados con tu director de proyecto. Cambios menores de enfoque son posibles con justificación adecuada.",
  },
  {
    question: "¿Dónde puedo encontrar ejemplos de proyectos anteriores?",
    answer: "La sección de Recursos contiene ejemplos de proyectos exitosos. También puedes consultar el repositorio institucional de la biblioteca.",
  },
  {
    question: "¿Qué formato de citación debo usar?",
    answer: "La Universidad Icesi requiere el formato APA (última edición) para todas las citaciones y referencias bibliográficas.",
  },
  {
    question: "¿Cómo selecciono mi director de proyecto?",
    answer: "Debes elegir un profesor del programa que tenga experiencia en tu área de interés. Contacta directamente al profesor y solicita una reunión para discutir tu propuesta.",
  },
  {
    question: "¿Puedo trabajar en grupo para el proyecto de grado?",
    answer: "Depende del programa. Algunos permiten proyectos en pareja o grupos pequeños. Consulta con la coordinación de tu programa.",
  },
  {
    question: "¿Qué hago si no apruebo una fase?",
    answer: "Debes revisar los comentarios de tu evaluador, hacer las correcciones necesarias y volver a presentar según el calendario académico.",
  },
  {
    question: "¿Cómo accedo a las bases de datos para mi investigación?",
    answer: "Puedes acceder a través de la biblioteca virtual de la Universidad Icesi con tu usuario institucional. Consulta la sección de Recursos para más información.",
  },
  {
    question: "¿Necesito aprobación ética para mi proyecto?",
    answer: "Si tu investigación involucra seres humanos, datos personales o experimentación, debes solicitar aprobación del comité de ética antes de iniciar la recolección de datos.",
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-4">Preguntas Frecuentes</h1>
          <p className="text-lg opacity-90">
            Encuentra respuestas a las dudas más comunes sobre el desarrollo de tu proyecto de grado.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="container mx-auto px-6 py-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Search className="h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar en preguntas frecuentes..."
                className="flex-1 border-none shadow-none focus-visible:ring-0"
              />
              <Button>Buscar</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FAQ Accordion */}
      <section className="container mx-auto px-6 pb-12">
        <Card>
          <CardHeader>
            <CardTitle>Todas las Preguntas</CardTitle>
            <CardDescription>Haz clic en cada pregunta para ver la respuesta completa</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>

      {/* Contact Card */}
      <section className="container mx-auto px-6 pb-16">
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>¿No encontraste lo que buscabas?</CardTitle>
            <CardDescription>
              Contacta al equipo de soporte de proyecto de grado para obtener ayuda personalizada
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="bg-primary hover:bg-primary-hover" asChild>
              <a href="mailto:pdg@icesi.edu.co">
                <Mail className="mr-2 h-4 w-4" />
                Contactar Soporte
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
