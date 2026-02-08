import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Mail, Loader2 } from "lucide-react";
import { useFaq } from "@/hooks/useFaq";

export default function FAQ() {
  const { data: faqs, isLoading, error } = useFaq();

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
            <CardTitle>Error al cargar las preguntas frecuentes</CardTitle>
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
              {(faqs?.length ?? 0) > 0 ? (
                faqs!.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))
              ) : (
                <p className="text-muted-foreground py-4">
                  No hay preguntas frecuentes disponibles. Contacta al equipo de soporte para más información.
                </p>
              )}
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
