import React from 'react';
import type { UserProfile } from '../../types/portfolio';
import './AboutSection.css';

interface AboutSectionProps {
  profile: UserProfile;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  return (
    <section id="about" className="about-section border-t-rule reveal">
      <div className="about-grid">
        <div className="about-col-left">
          <p className="section-num">01 / About</p>
          <h2 className="about-title display">Built for the<br />long run.</h2>
        </div>

        <div className="about-col-right muted">
          <p>
            Full-Stack Software Engineer with {profile.experience_years} years architecting and scaling robust web platforms using Python, Django REST Framework, React, and TypeScript. Experienced in designing modular microservices, multi-tenant databases, and seamless frontends for enterprise clients and startups alike.
          </p>
          <p className="mt-4">
            Specializes in full delivery lifecycles — from database schema design and RESTful API endpoints to modern UI components, automated CI/CD pipelines, and cloud deployments across AWS, Docker, and Nginx. Driven by clean code, high security standards, and performance optimization under real traffic.
          </p>
        </div>
      </div>
    </section>
  );
};
