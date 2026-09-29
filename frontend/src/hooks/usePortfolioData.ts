import { useState, useEffect } from 'react';
import type { UserProfile, Project, ExperienceItem, EducationItem } from '../types/portfolio';
import { portfolioService } from '../services/portfolioService';

interface PortfolioData {
  profile: UserProfile | null;
  projects: Project[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  loading: boolean;
  error: string | null;
}

export function usePortfolioData(): PortfolioData {
  const [data, setData] = useState<PortfolioData>({
    profile: null,
    projects: [],
    experiences: [],
    education: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    async function loadAllData() {
      try {
        const [profile, projects, experiences, education] = await Promise.all([
          portfolioService.getProfile(),
          portfolioService.getProjects(),
          portfolioService.getExperiences(),
          portfolioService.getEducation(),
        ]);

        if (isMounted) {
          setData({
            profile,
            projects,
            experiences,
            education,
            loading: false,
            error: null,
          });
        }
      } catch (err) {
        if (isMounted) {
          setData((prev) => ({
            ...prev,
            loading: false,
            error: err instanceof Error ? err.message : 'Failed to fetch portfolio data',
          }));
        }
      }
    }

    loadAllData();

    return () => {
      isMounted = false;
    };
  }, []);

  return data;
}
