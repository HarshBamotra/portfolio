import React from 'react';
import { Trophy, Award, Star, TrendingUp } from 'lucide-react';
import type { AwardItem } from '../../types/portfolio';
import './AwardsSection.css';

interface AwardsSectionProps {
  awards: AwardItem[];
}

const ICON_MAP: Record<string, React.ReactNode> = {
  'trophy': <Trophy size={20} />,
  'award': <Award size={20} />,
  'star': <Star size={20} />,
  'trending-up': <TrendingUp size={20} />,
};

export const AwardsSection: React.FC<AwardsSectionProps> = ({ awards }) => {
  return (
    <section id="awards" className="awards-section">
      <div className="sheet">
        <span className="cm-tr" />
        <span className="cm-bl" />

        <div className="awards-grid">
          <div className="awards-header reveal">
            <p className="section-num">06 / Recognition</p>
            <h2 className="display awards-title">Work that got<br />noticed.</h2>
          </div>

          <div className="awards-list">
            {awards.map((item) => (
              <div key={item.id} className="award-row reveal">
                <div className="award-icon">
                  {ICON_MAP[item.icon] || <Trophy size={20} />}
                </div>
                <div>
                  <h3 className="award-row-title">{item.title}</h3>
                  <p className="award-row-subtitle muted">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
