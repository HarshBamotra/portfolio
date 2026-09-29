import React from 'react';
import { ArrowUpRight, Mail, Code, Globe, Layers } from 'lucide-react';
import type { UserProfile } from '../../types/portfolio';
import { AiChatWidget } from '../ui/AiChatWidget';
import './HeroSection.css';

interface HeroSectionProps {
  profile: UserProfile;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile }) => {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div className="hero-main">
          <div className="title-block hero-title-block">
            <div className="field-strip">
              <div>based in<span>{profile.location}</span></div>
              <div>experience<span>{profile.experience_years}</span></div>
              <div>available<span>{profile.available}</span></div>
            </div>
          </div>

          <p className="hero-badge">
            <span className="badge-line" /> Independent engineering leadership
          </p>

          <h1 className="hero-display-name display">
            Harsh Bamotra<span className="accent-dot">.</span>
          </h1>

          <p className="hero-role-subtitle">{profile.role}</p>

          <p className="hero-summary-text">{profile.summary}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn-accent">
              View projects <ArrowUpRight size={16} />
            </a>
            <a href="#contact" className="btn-outline">
              Contact me <Mail size={16} />
            </a>
          </div>

          <div className="hero-social-strip">
            <a href={`https://${profile.github}`} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Code size={20} />
            </a>
            <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Globe size={20} />
            </a>
            <a href={`https://${profile.stackoverflow}`} target="_blank" rel="noreferrer" aria-label="Stack Overflow">
              <Layers size={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-aside-widget">
          <AiChatWidget />
        </div>
      </div>
    </section>
  );
};
