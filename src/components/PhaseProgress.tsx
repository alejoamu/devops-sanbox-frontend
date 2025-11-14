import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Phase {
  id: string;
  title: string;
}

interface PhaseProgressProps {
  phases: Phase[];
  currentPhaseId: string;
}

export function PhaseProgress({ phases, currentPhaseId }: PhaseProgressProps) {
  const currentIndex = phases.findIndex((p) => p.id === currentPhaseId);
  
  // Colors rotating through institutional colors
  const colors = [
    "bg-success", // Verde
    "bg-alert", // Naranja
    "bg-accent-yellow", // Amarillo
    "bg-primary", // Azul
    "bg-secondary", // Morado
  ];

  return (
    <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4">
      {phases.map((phase, index) => {
        const isActive = index === currentIndex;
        const isPast = index < currentIndex;
        const colorClass = colors[index % colors.length];
        
        return (
          <div key={phase.id} className="flex items-center gap-2">
            <div className="flex flex-col items-center gap-2 min-w-[100px]">
              <div
                className={cn(
                  "relative flex items-center justify-center rounded-full transition-all",
                  isActive || isPast
                    ? `${colorClass} w-20 h-20 ring-4 ring-background shadow-lg`
                    : "bg-muted w-16 h-16 ring-2 ring-border"
                )}
              >
                <span
                  className={cn(
                    "text-sm font-bold transition-colors",
                    isActive || isPast ? "text-white" : "text-muted-foreground"
                  )}
                >
                  Fase {index + 1}
                </span>
              </div>
              <span
                className={cn(
                  "text-xs text-center font-medium transition-colors line-clamp-2 px-2",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {phase.title}
              </span>
            </div>
            {index < phases.length - 1 && (
              <ChevronRight
                className={cn(
                  "h-6 w-6 flex-shrink-0 transition-colors",
                  index < currentIndex ? "text-foreground" : "text-muted-foreground"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
