import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Download, Play, FileText, Image as ImageIcon, Loader2 } from "lucide-react";
import { useResources } from "@/hooks/useResources";

const getIcon = (type: string) => {
  switch (type) {
    case "video":
      return <Play className="h-5 w-5" />;
    case "image":
      return <ImageIcon className="h-5 w-5" />;
    default:
      return <FileText className="h-5 w-5" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "PDG1":
      return "bg-primary/10 text-primary border-primary/20";
    case "PDG2":
      return "bg-secondary/10 text-secondary border-secondary/20";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export default function Resources() {
  const { data: resources, isLoading, error } = useResources();

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
            <CardTitle>Error al cargar los recursos</CardTitle>
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
          <h1 className="text-4xl font-bold mb-4">Recursos de Apoyooooo</h1>
          <p className="text-lg opacity-90">
            Accede a plantillas, ejemplos, videos tutoriales y material de referencia para tu proyecto de grado.
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
                placeholder="Buscar recursos por nombre, tipo o categoría..."
                className="flex-1 border-none shadow-none focus-visible:ring-0"
              />
              <Button>Buscar</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-6 pb-8">
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">Todos</Button>
          <Button variant="outline" size="sm">Documentos</Button>
          <Button variant="outline" size="sm">Videos</Button>
          <Button variant="outline" size="sm">Imágenes</Button>
          <Button variant="outline" size="sm">PDG1</Button>
          <Button variant="outline" size="sm">PDG2</Button>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources?.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {getIcon(resource.type)}
                  </div>
                  <Badge variant="outline" className={getCategoryColor(resource.category)}>
                    {resource.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {resource.format || resource.duration}
                  </span>
                  <Button size="sm" variant="ghost" className="text-primary">
                    {resource.type === "video" ? (
                      <>
                        <Play className="mr-2 h-4 w-4" />
                        Ver
                      </>
                    ) : (
                      <>
                        <Download className="mr-2 h-4 w-4" />
                        Descargar
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
