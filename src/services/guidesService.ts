import { apiClient } from "@/config/api";
import type {
  MethodologyDTO,
  PhaseDTO,
  SubphaseDTO,
  ResourceDTO,
  SubphaseResourceDTO,
} from "@/types/api";

export interface StepResource {
  type: "video" | "document" | "image";
  title: string;
  duration?: string;
  format?: string;
  url?: string;
}

export interface Step {
  title: string;
  description: string;
  resources: StepResource[];
}

export interface Phase {
  id: string;
  title: string;
  description: string;
  objectives: string[];
  steps: Step[];
  deliverables: string[];
  duration: string;
}

export interface Guide {
  id: string;
  methodologyId: string;
  name: string;
  description: string;
  icon: string;
  phases: Phase[];
}

const RESOURCE_TYPE_MAP: Record<string, "video" | "document" | "image"> = {
  video: "video",
  article: "document",
  book: "document",
  tool: "document",
  other: "document",
};

function mapResourceType(backendType: string): "video" | "document" | "image" {
  return RESOURCE_TYPE_MAP[backendType] ?? "document";
}

function getIconFromSlug(slug: string): string {
  const s = (slug || "").toLowerCase();
  if (s.includes("ia") || s.includes("inteligencia") || s.includes("ml"))
    return "Brain";
  if (s.includes("iot") || s.includes("cosas")) return "Cpu";
  return "BookOpen";
}

/**
 * Obtiene los recursos completos para una lista de SubphaseResourceDTO
 */
async function resolveResources(
  subphaseResources: SubphaseResourceDTO[],
  resourcesCache: Map<string, ResourceDTO>
): Promise<StepResource[]> {
  const resources: StepResource[] = [];
  const sorted = [...subphaseResources].sort((a, b) => a.orderIndex - b.orderIndex);

  for (const sr of sorted) {
    let resource = resourcesCache.get(sr.resourceId);
    if (!resource) {
      try {
        const res = await apiClient.getResource(sr.resourceId);
        resource = res as ResourceDTO;
        resourcesCache.set(sr.resourceId, resource);
      } catch {
        continue;
      }
    }
    let metadata: { duration?: string; format?: string } = {};
    if (resource.metadata) {
      try {
        metadata = JSON.parse(resource.metadata) || {};
      } catch {
        /* ignore */
      }
    }
    resources.push({
      type: mapResourceType(resource.type),
      title: resource.title,
      duration: metadata.duration,
      format: metadata.format,
      url: resource.url,
    });
  }
  return resources;
}

/**
 * Obtiene todas las guías con fases, pasos y recursos
 */
export async function fetchGuides(): Promise<Guide[]> {
  const methodologies = (await apiClient.getMethodologies()) as MethodologyDTO[];
  const resourcesCache = new Map<string, ResourceDTO>();

  const guides: Guide[] = await Promise.all(
    methodologies.map(async (methodology) => {
      const phases = (await apiClient.getPhasesByMethodology(
        methodology.id
      )) as PhaseDTO[];

      const sortedPhases = [...phases].sort((a, b) => a.orderIndex - b.orderIndex);

      const phasesData: Phase[] = await Promise.all(
        sortedPhases.map(async (phase) => {
          const subphases = (await apiClient.getSubphasesByPhase(
            phase.id
          )) as SubphaseDTO[];
          const sortedSubphases = [...subphases].sort(
            (a, b) => a.orderIndex - b.orderIndex
          );

          const steps: Step[] = await Promise.all(
            sortedSubphases.map(async (subphase) => {
              const subphaseResources = (await apiClient.getSubphaseResources(
                subphase.id
              )) as SubphaseResourceDTO[];
              const resources = await resolveResources(
                subphaseResources,
                resourcesCache
              );
              return {
                title: subphase.title,
                description: subphase.content || "",
                resources,
              };
            })
          );

          return {
            id: phase.id,
            title: phase.title,
            description: phase.description || "",
            objectives: [], // Backend no tiene objetivos
            steps,
            deliverables: [], // Backend no tiene entregables
            duration: "", // Backend no tiene duración
          };
        })
      );

      return {
        id: methodology.slug || methodology.id,
        methodologyId: methodology.id,
        name: methodology.name,
        description: methodology.summary || methodology.introduction || "",
        icon: getIconFromSlug(methodology.slug || ""),
        phases: phasesData,
      };
    })
  );

  return guides;
}

/**
 * Obtiene una guía por slug/id
 */
export async function fetchGuide(guideIdOrSlug: string): Promise<Guide | null> {
  const guides = await fetchGuides();
  return (
    guides.find(
      (g) => g.id === guideIdOrSlug || g.methodologyId === guideIdOrSlug
    ) ?? null
  );
}

/**
 * Obtiene una fase específica por guideId y phaseId
 */
export async function fetchPhase(
  guideIdOrSlug: string,
  phaseId: string
): Promise<{ guide: Guide; phase: Phase } | null> {
  const guides = await fetchGuides();
  const guide = guides.find(
    (g) => g.id === guideIdOrSlug || g.methodologyId === guideIdOrSlug
  );
  if (!guide) return null;
  const phase = guide.phases.find((p) => p.id === phaseId);
  if (!phase) return null;
  return { guide, phase };
}
