import { Skill } from "../skill/skill.interface";

export interface Project {
  title: string;
  description: string;
  tools?: string[] | null;
  year: number;
  status: Status;
  imageUrl: string;
  imageAlt: string;
  githubUrl: string;
  liveUrl?: string | null;
  skills: Skill[];
}

export enum ProjectStatus {
  PLANNED = "Planeado",         // En progreso
  PROGRESS = "En progreso",     // Cancelado
  ARCHIVED = "Archivado",       // Finalizado
  REVIEW = "En revisión",       // Archivado
  COMPLETED = "Finalizado",     // Planeado
  CANCELED = "Cancelado",       // En revisión
}
export enum ProjectIcons {
  PROGRESS = "fa-solid fa-spinner",         // En progreso
  CANCELED = "fa-solid fa-ban",             // Cancelado
  COMPLETED = "fa-solid fa-circle-check",   // Finalizado
  ARCHIVED = "fa-solid fa-box-archive",     // Archivado
  PLANNED = "fa-solid fa-lightbulb",        // Planeado
  REVIEW = "fa-solid fa-magnifying-glass",  // En revisión
}

export enum ProjectColors {
  PROGRESS = "yellow",        // En progreso
  CANCELED = "red",           // Cancelado
  COMPLETED = "green",        // Finalizado
  ARCHIVED = "gray",          // Archivado
  PLANNED = "blue",           // Planeado
  REVIEW = "orange",          // En revisión
}

export interface Status {
  status: ProjectStatus;
  icon: ProjectIcons;
  color: ProjectColors;
}

export const statusMap: Readonly<Record<ProjectStatus, Status>> = {
  [ProjectStatus.PROGRESS]: { status: ProjectStatus.PROGRESS, icon: ProjectIcons.PROGRESS, color: ProjectColors.PROGRESS },
  [ProjectStatus.CANCELED]: { status: ProjectStatus.CANCELED, icon: ProjectIcons.CANCELED, color: ProjectColors.CANCELED },
  [ProjectStatus.COMPLETED]: { status: ProjectStatus.COMPLETED, icon: ProjectIcons.COMPLETED, color: ProjectColors.COMPLETED },
  [ProjectStatus.ARCHIVED]: { status: ProjectStatus.ARCHIVED, icon: ProjectIcons.ARCHIVED, color: ProjectColors.ARCHIVED },
  [ProjectStatus.PLANNED]: { status: ProjectStatus.PLANNED, icon: ProjectIcons.PLANNED, color: ProjectColors.PLANNED },
  [ProjectStatus.REVIEW]: { status: ProjectStatus.REVIEW, icon: ProjectIcons.REVIEW, color: ProjectColors.REVIEW }
};

