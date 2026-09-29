import React from 'react';
import { ArrowUp, Mail, Heart, Code, Globe } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer glass-panel">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#hero" className="footer-logo">
            Harsh<span className="gradient-text">.dev</span>
          </a>
          <p className="footer-tagline">
            Building modern, scalable web apps with Django & React.
          </p>
        </div>

        <div className="footer-socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
            <Code size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <Globe size={20} />
          </a>
          <a href="mailto:harsh.bamotra@example.com" className="social-icon" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Harsh Bamotra. Built with <Heart size={14} className="heart-icon" /> React 19 & Django.
          </p>
          <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};
