export type MethodologyStatus = "draft" | "published" | "archived";

export interface MethodologyDTO {
  id: string;
  slug: string;
  name: string;
  introduction: string;
  summary: string;
  status: MethodologyStatus;
  version: number;
  languageCode: string;
  createdAt: string;
  updatedAt: string;
}

export interface PhaseDTO {
  id: string;
  methodologyId: string;
  code: string;
  title: string;
  description: string;
  orderIndex: number;
  createdAt: string;
  updatedAt: string;
}

export interface SubphaseDTO {
  id: string;
  phaseId: string;
  code: string;
  title: string;
  content: string;
  orderIndex: number;
  createdAt: string;
  updatedAt: string;
}

export type ResourceType = "video" | "article" | "book" | "tool" | "other";

export interface ResourceDTO {
  id: string;
  type: ResourceType;
  title: string;
  url: string;
  description: string;
  provider: string;
  thumbnailUrl: string;
  metadata: string;
  createdAt: string;
  updatedAt: string;
}

export interface SubphaseResourceDTO {
  subphaseId: string;
  resourceId: string;
  orderIndex: number;
  note: string;
}
