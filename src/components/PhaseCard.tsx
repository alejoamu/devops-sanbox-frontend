import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

interface PhaseCardProps {
  title: string;
  description: string;
  phase: string;
  duration: string;
  completed?: boolean;
  url: string;
}

export function PhaseCard({ title, description, phase, duration, completed, url }: PhaseCardProps) {
  return (
    <Link to={url} className="block transition-transform hover:scale-[1.02]">
      <Card className="h-full hover:shadow-lg transition-shadow border-border">
        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <Badge variant="outline" className="border-primary text-primary">
              {phase}
            </Badge>
            {completed && (
              <CheckCircle2 className="h-5 w-5 text-success" />
            )}
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-muted-foreground">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">{duration}</span>
            <ArrowRight className="h-4 w-4 text-primary" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
