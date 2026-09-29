import React from 'react';
import {
  Code2,
  Layout,
  Server,
  Cloud,
  GitBranch,
  Bot,
  Database,
  ShieldCheck,
} from 'lucide-react';
import type { Capability } from '../../types/portfolio';
import './SkillsSection.css';

interface SkillsSectionProps {
  capabilities: Capability[];
}

const ICON_MAP: Record<string, React.ReactNode> = {
  'code-2': <Code2 size={20} />,
  'layout': <Layout size={20} />,
  'server': <Server size={20} />,
  'cloud': <Cloud size={20} />,
  'git-branch': <GitBranch size={20} />,
  'bot': <Bot size={20} />,
  'database': <Database size={20} />,
  'shield-check': <ShieldCheck size={20} />,
};

export const SkillsSection: React.FC<SkillsSectionProps> = ({ capabilities }) => {
  return (
    <section id="skills" className="skills-section">
      <div className="sheet">
        <span className="cm-tr" />
        <span className="cm-bl" />

        <div className="capabilities-header reveal">
          <div>
            <p className="section-num">02 / Capabilities</p>
            <h2 className="capabilities-title display">The working toolkit.</h2>
          </div>
          <p className="capabilities-subtitle muted">
            A practical range across product engineering, backend systems, and infrastructure.
          </p>
        </div>

        <div className="capabilities-grid">
          {capabilities.map((cap) => (
            <div key={cap.name} className="capability-card surface-card reveal">
              <div className="capability-icon">
                {ICON_MAP[cap.icon] || <Code2 size={20} />}
              </div>
              <h3 className="capability-name">{cap.name}</h3>
              <div className="capability-pills">
                {cap.skills.map((skill) => (
                  <span key={skill} className="pill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
