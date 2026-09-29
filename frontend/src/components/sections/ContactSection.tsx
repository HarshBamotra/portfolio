import React from 'react';
import { ArrowUpRight, Phone, MapPin, Globe, Code, Layers, Code2 } from 'lucide-react';
import type { UserProfile } from '../../types/portfolio';
import './ContactSection.css';

interface ContactSectionProps {
  profile: UserProfile;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  return (
    <footer id="contact" className="contact-footer reveal">
      <div className="contact-container">
        <div className="contact-grid-top">
          <div className="contact-left">
            <p className="section-num text-amber">08 / Contact</p>
            <h2 className="display contact-main-title">Let’s build<br />what’s next.</h2>
            <a href={`mailto:${profile.email}`} className="contact-email-link">
              {profile.email} <ArrowUpRight size={22} />
            </a>
          </div>

          <div className="contact-right-grid">
            <a href={`tel:${profile.phone}`} className="contact-link-item">
              <Phone size={16} /> {profile.phone}
            </a>
            <span className="contact-link-item">
              <MapPin size={16} /> {profile.location}
            </span>
            <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer" className="contact-link-item">
              <Globe size={16} /> LinkedIn
            </a>
            <a href={`https://${profile.github}`} target="_blank" rel="noreferrer" className="contact-link-item">
              <Code size={16} /> GitHub
            </a>
            <a href={`https://${profile.stackoverflow}`} target="_blank" rel="noreferrer" className="contact-link-item">
              <Layers size={16} /> Stack Overflow
            </a>
            <a href={`https://${profile.hackerrank}`} target="_blank" rel="noreferrer" className="contact-link-item">
              <Code2 size={16} /> HackerRank
            </a>
          </div>
        </div>

        <div className="contact-bottom-strip">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Full-stack engineering · {profile.location} · sheet 1 of 1 — rev. 2026.09</span>
        </div>
      </div>
    </footer>
  );
};
