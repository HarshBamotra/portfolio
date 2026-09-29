import React from 'react';
import type { ExperienceItem } from '../../types/portfolio';
import './ExperienceSection.css';

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <section id="experience" className="experience-section">
      <div className="sheet">
        <span className="cm-tr" />
        <span className="cm-bl" />

        <div className="section-head reveal">
          <div>
            <p className="section-num">03 / Experience</p>
            <h3 className="display">Proven Track Record</h3>
          </div>
          <span className="count">2022 — present</span>
        </div>

        <div className="timeline">
          {experience.map((exp) => (
            <div key={exp.id} className="tl-item reveal">
              <div className="tl-grid">
                <div className="tl-meta">
                  <p className="tl-period">{exp.period}</p>
                  <p className="tl-location muted">{exp.location}</p>
                </div>
                <div className="tl-content">
                  <h4 className="tl-role">
                    {exp.company} <span className="tl-role-title">/ {exp.role}</span>
                  </h4>
                  <ul className="tl-bullets muted">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
