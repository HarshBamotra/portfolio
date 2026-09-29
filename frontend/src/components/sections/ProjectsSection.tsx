import React, { useState } from 'react';
import {
  Layers,
  Calculator,
  Server,
  Sparkles,
  Search,
  BadgeCheck,
  FolderCode,
  ExternalLink,
  Code,
} from 'lucide-react';
import type { FeaturedProject, Project } from '../../types/portfolio';
import './ProjectsSection.css';

interface ProjectsSectionProps {
  featured: FeaturedProject[];
  projects: Project[];
}

const ICON_MAP: Record<string, React.ReactNode> = {
  'layers-3': <Layers size={22} />,
  'calculator': <Calculator size={22} />,
  'server': <Server size={22} />,
  'sparkles': <Sparkles size={22} />,
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ featured, projects }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter((p) => {
    const q = searchQuery.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.stack.some((s) => s.toLowerCase().includes(q))
    );
  });

  return (
    <section id="projects" className="projects-section border-t-rule">
      <div className="section-head-wrap reveal">
        <div>
          <p className="section-num">04 / Selected work</p>
          <h2 className="display section-large-title">Recent, flagship,<br />high stakes.</h2>
        </div>
        <p className="section-head-desc muted">
          A closer look at platforms where architecture and outcomes had to hold up.
        </p>
      </div>

      {/* Featured Projects Grid */}
      <div className="featured-grid">
        {featured.map((item, index) => (
          <article
            key={item.id}
            className={`featured-card surface-card surface-card-hover reveal ${index === 0 ? 'featured-full' : ''}`}
          >
            <div className="featured-card-top">
              <div className="featured-card-icon">
                {ICON_MAP[item.icon] || <Layers size={22} />}
              </div>
              <span className="featured-date muted">{item.date}</span>
            </div>

            <p className="featured-client">{item.client}</p>
            <h3 className="featured-title display">{item.title}</h3>
            <p className="featured-desc muted">{item.description}</p>

            <div className="featured-stack">
              {item.stack.map((tech) => (
                <span key={tech} className="pill-tag">{tech}</span>
              ))}
            </div>

            <div className="featured-footer">
              <div className="callout-badge">
                <BadgeCheck size={16} /> {item.callout}
              </div>
              <div className="project-action-links">
                {item.githubUrl && (
                  <a href={item.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub Repository">
                    <Code size={16} />
                  </a>
                )}
                {item.demoUrl && (
                  <a href={item.demoUrl} target="_blank" rel="noreferrer" aria-label="Live Application">
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Full Project Directory Section */}
      <div className="directory-header-row reveal">
        <div>
          <p className="section-num">05 / Full project history</p>
          <h3 className="display directory-title">Everything else.</h3>
        </div>

        <div className="search-input-wrapper">
          <Search size={16} className="search-icon muted" />
          <input
            type="search"
            placeholder="Filter by tech or name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {/* All Projects Grid */}
      <div className="directory-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((p) => (
            <article key={p.id} className="directory-card surface-card surface-card-hover reveal">
              <div className="directory-card-top">
                <FolderCode size={20} className="folder-icon" />
                <span className="directory-date muted">{p.date}</span>
              </div>
              <h4 className="directory-card-title">{p.title}</h4>
              <p className="directory-card-desc muted">{p.description}</p>
              <div className="directory-stack-list">
                {p.stack.join(' · ')}
              </div>
            </article>
          ))
        ) : (
          <p className="muted no-results">No matching projects found for "{searchQuery}".</p>
        )}
      </div>
    </section>
  );
};
