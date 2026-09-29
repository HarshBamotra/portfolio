export type ThemeMode = 'dark' | 'light';
export type LayerMode = 'ui' | 'api' | 'cli';

export interface UserProfile {
  name: string;
  role: string;
  location: string;
  experience_years: string;
  available: string;
  tagline: string;
  summary: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  stackoverflow: string;
  hackerrank: string;
}

export interface StatusMetrics {
  systems_owned: number;
  projects_delivered: string;
  code_quality: string;
  peak_req_per_min: string;
}

export interface Capability {
  name: string;
  icon: string;
  skills: string[];
}

export interface FeaturedProject {
  id: string;
  client: string;
  title: string;
  date: string;
  icon: string;
  stack: string[];
  description: string;
  callout: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  stack: string[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  bullets: string[];
}

export interface AwardItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  grade: string;
}

export interface ApiEndpoint {
  method: 'GET' | 'POST';
  path: string;
  description: string;
  data: unknown;
}
