export type ProjectStatus = 'active' | 'development';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: string;
  tech: string[];
  mainTechIcon: string;
  image: string;
  status: ProjectStatus;
  url: string;
  githubUrl?: string;
  features: string[];
  featured?: boolean;
  color: string;
}

export interface TechCategory {
  id: string;
  label: string;
  count: number;
}

export interface StatData {
  label: string;
  value: string;
  icon: string;
  color: string;
}

export const PROJECTS_DATA: Project[];
export const TECH_CATEGORIES: TechCategory[];
export const STATS_DATA: StatData[];
