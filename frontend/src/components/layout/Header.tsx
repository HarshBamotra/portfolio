import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import type { LayerMode, ThemeMode } from '../../types/portfolio';

interface HeaderProps {
  layer: LayerMode;
  onLayerChange: (layer: LayerMode) => void;
  theme: ThemeMode;
  onThemeToggle: () => void;
}

const NAV_LINKS = [
  { id: 'about', label: 'about', num: '01' },
  { id: 'skills', label: 'skills', num: '02' },
  { id: 'experience', label: 'experience', num: '03' },
  { id: 'projects', label: 'projects', num: '04' },
  { id: 'awards', label: 'awards', num: '06' },
  { id: 'education', label: 'education', num: '07' },
  { id: 'contact', label: 'contact', num: '08' },
];

export const Header: React.FC<HeaderProps> = ({
  layer,
  onLayerChange,
  theme,
  onThemeToggle,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (layer !== 'ui') {
      onLayerChange('ui');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLayerSwitch = (mode: LayerMode) => {
    onLayerChange(mode);
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="top-row">
        {/* Mobile Brand / Moniker */}
        <a
          href="#top"
          className="brand-logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Harsh Bamotra Home"
        >
          <span className="brand-dot" />
          <span className="brand-name">harsh<span className="brand-accent">.dev</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-desktop" aria-label="Main Navigation">
          {NAV_LINKS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Controls: Layer Switch + Theme Toggle + Mobile Menu Button */}
        <div className="controls">
          <div className="layer-switch" role="group" aria-label="Choose how to browse this portfolio">
            <button
              type="button"
              aria-pressed={layer === 'ui'}
              onClick={() => handleLayerSwitch('ui')}
            >
              ui
            </button>
            <button
              type="button"
              aria-pressed={layer === 'api'}
              onClick={() => handleLayerSwitch('api')}
            >
              api
            </button>
            <button
              type="button"
              aria-pressed={layer === 'cli'}
              onClick={() => handleLayerSwitch('cli')}
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

          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-nav-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-header">
              <span className="mobile-nav-title">NAVIGATION</span>
              <span className="mobile-nav-mode">MODE: {layer.toUpperCase()}</span>
            </div>
            <nav className="mobile-nav-links">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="mobile-nav-item"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  <span className="mobile-nav-num">{item.num}</span>
                  <span className="mobile-nav-label">{item.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
