import { ChevronRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface Phase {
  id: string;
  title: string;
}

interface PhaseProgressProps {
  phases: Phase[];
  currentPhaseId: string;
  guideId: string;
}

export function PhaseProgress({ phases, currentPhaseId, guideId }: PhaseProgressProps) {
  const currentIndex = phases.findIndex((p) => p.id === currentPhaseId);
  
  // Colores vibrantes tipo neón para cada fase
  const phaseColors = [
    { bg: "bg-primary", border: "border-primary", shadow: "shadow-primary/30", ring: "ring-primary/20", text: "text-primary" }, // Azul
    { bg: "bg-success", border: "border-success", shadow: "shadow-success/30", ring: "ring-success/20", text: "text-success" }, // Verde
    { bg: "bg-alert", border: "border-alert", shadow: "shadow-alert/30", ring: "ring-alert/20", text: "text-alert" }, // Naranja
    { bg: "bg-secondary", border: "border-secondary", shadow: "shadow-secondary/30", ring: "ring-secondary/20", text: "text-secondary" }, // Morado
    { bg: "bg-accent-yellow", border: "border-accent-yellow", shadow: "shadow-accent-yellow/30", ring: "ring-accent-yellow/20", text: "text-accent-yellow" }, // Amarillo
    { bg: "bg-primary", border: "border-primary", shadow: "shadow-primary/30", ring: "ring-primary/20", text: "text-primary" }, // Azul (ciclo)
  ];

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex items-center justify-start md:justify-center gap-3 min-w-max px-4 py-2">
        {phases.map((phase, index) => {
          const isActive = index === currentIndex;
          const isCompleted = index < currentIndex;
          const colors = phaseColors[index % phaseColors.length];
          
          return (
            <div key={phase.id} className="flex items-center gap-3">
              <div className="flex flex-col items-center gap-2">
                <Link
                  to={`/${guideId}/${phase.id}`}
                  className={cn(
                    "relative flex items-center justify-center rounded-full transition-all duration-300 border-2 cursor-pointer hover:scale-110",
                    isCompleted && "bg-success border-success shadow-lg shadow-success/20",
                    isActive && `${colors.bg} ${colors.border} shadow-lg ${colors.shadow} ring-4 ${colors.ring}`,
                    !isActive && !isCompleted && "bg-muted border-border hover:border-primary/50"
                  )}
                  style={{
                    width: isActive ? "72px" : "64px",
                    height: isActive ? "72px" : "64px",
                  }}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="h-7 w-7 text-white" />
                  ) : (
                    <span
                      className={cn(
                        "text-sm font-bold transition-colors",
                        isActive && "text-white",
                        isCompleted && "text-success-foreground",
                        !isActive && !isCompleted && "text-muted-foreground"
                      )}
                    >
                      {index + 1}
                    </span>
                  )}
                </Link>
                <span
                  className={cn(
                    "text-xs text-center font-medium transition-colors max-w-[90px] line-clamp-2",
                    isActive && "text-white font-semibold",
                    !isActive && "text-muted-foreground"
                  )}
                >
                  {phase.title}
                </span>
              </div>
              {index < phases.length - 1 && (
                <ChevronRight
                  className={cn(
                    "h-5 w-5 flex-shrink-0 transition-colors mt-[-24px]",
                    isCompleted ? "text-success" : "text-muted-foreground/40"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
