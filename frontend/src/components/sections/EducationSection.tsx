import React from 'react';
import type { EducationItem } from '../../types/portfolio';
import './EducationSection.css';

interface EducationSectionProps {
  education: EducationItem[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <section id="education" className="education-section">
      <div className="section-head reveal">
        <div>
          <p className="section-num">07 / Education</p>
          <h2 className="display edu-title">The foundation.</h2>
        </div>
      </div>

      <div className="education-grid">
        {education.map((edu) => (
          <article key={edu.id} className="edu-card surface-card reveal">
            <p className="edu-grade-tag">{edu.year} · {edu.grade}</p>
            <h3 className="edu-degree display">{edu.degree}</h3>
            <p className="edu-institution muted">{edu.institution}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
