import React from 'react';
import { Sun, Moon } from 'lucide-react';
import type { LayerMode, ThemeMode } from '../../types/portfolio';

interface HeaderProps {
  layer: LayerMode;
  onLayerChange: (layer: LayerMode) => void;
  theme: ThemeMode;
  onThemeToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  layer,
  onLayerChange,
  theme,
  onThemeToggle,
}) => {
  const scrollToSection = (id: string) => {
    if (layer !== 'ui') {
      onLayerChange('ui');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div className="top-row">
        <nav>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>about</a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>skills</a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>experience</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>projects</a>
          <a href="#awards" onClick={(e) => { e.preventDefault(); scrollToSection('awards'); }}>awards</a>
          <a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>education</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>contact</a>
        </nav>

        <div className="controls">
          <div className="layer-switch" role="group" aria-label="Choose how to browse this portfolio">
            <button
              type="button"
              aria-pressed={layer === 'ui'}
              onClick={() => onLayerChange('ui')}
            >
              ui
            </button>
            <button
              type="button"
              aria-pressed={layer === 'api'}
              onClick={() => onLayerChange('api')}
            >
              api
            </button>
            <button
              type="button"
              aria-pressed={layer === 'cli'}
              onClick={() => onLayerChange('cli')}
            >
              cli
            </button>
          </div>

          <button
            type="button"
            className="theme-toggle"
            onClick={onThemeToggle}
            aria-label="Toggle dark and light blueprint"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
};
