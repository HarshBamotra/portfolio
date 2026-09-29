import { fetchApi } from './apiClient';
import type { UserProfile, Project, ExperienceItem, EducationItem } from '../types/portfolio';
import { DATA_PROFILE, DATA_PROJECTS, DATA_EXPERIENCE, DATA_EDUCATION } from '../data/mockData';

export const portfolioService = {
  async getProfile(): Promise<UserProfile> {
    try {
      return await fetchApi<UserProfile>('/about');
    } catch {
      return DATA_PROFILE;
    }
  },

  async getProjects(): Promise<Project[]> {
    try {
      return await fetchApi<Project[]>('/projects/all');
    } catch {
      return DATA_PROJECTS;
    }
  },

  async getExperiences(): Promise<ExperienceItem[]> {
    try {
      return await fetchApi<ExperienceItem[]>('/experience');
    } catch {
      return DATA_EXPERIENCE;
    }
  },

  async getEducation(): Promise<EducationItem[]> {
    try {
      return await fetchApi<EducationItem[]>('/education');
    } catch {
      return DATA_EDUCATION;
    }
  },
};
