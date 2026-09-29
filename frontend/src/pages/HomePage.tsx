import React, { useState, useEffect } from 'react';
import type { LayerMode, ThemeMode } from '../types/portfolio';
import {
  DATA_PROFILE,
  DATA_CAPABILITIES,
  DATA_FEATURED,
  DATA_PROJECTS,
  DATA_EXPERIENCE,
  DATA_AWARDS,
  DATA_EDUCATION,
} from '../data/mockData';

import { Header } from '../components/layout/Header';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { AwardsSection } from '../components/sections/AwardsSection';
import { EducationSection } from '../components/sections/EducationSection';
import { ContactSection } from '../components/sections/ContactSection';
import { ApiLayer } from '../components/layers/ApiLayer';
import { CliLayer } from '../components/layers/CliLayer';

export const HomePage: React.FC = () => {
  const [layer, setLayer] = useState<LayerMode>('ui');
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('pf-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('pf-theme', theme);
  }, [theme]);

  // Scroll reveal animation observer (matching index.html)
  useEffect(() => {
    if (layer !== 'ui') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [layer]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="wrap">
      <Header
        layer={layer}
        onLayerChange={setLayer}
        theme={theme}
        onThemeToggle={toggleTheme}
      />

      {layer === 'ui' && (
        <main id="layer-ui">
          <HeroSection profile={DATA_PROFILE} />
          <AboutSection profile={DATA_PROFILE} />
          <SkillsSection capabilities={DATA_CAPABILITIES} />
          <ExperienceSection experience={DATA_EXPERIENCE} />
          <ProjectsSection featured={DATA_FEATURED} projects={DATA_PROJECTS} />
          <AwardsSection awards={DATA_AWARDS} />
          <EducationSection education={DATA_EDUCATION} />
          <ContactSection profile={DATA_PROFILE} />
        </main>
      )}

      {layer === 'api' && <ApiLayer />}

      {layer === 'cli' && (
        <CliLayer
          onLayerChange={setLayer}
          onThemeChange={(newTheme) => setTheme(newTheme)}
        />
      )}
    </div>
  );
};
