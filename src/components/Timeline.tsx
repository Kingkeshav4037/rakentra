import React from 'react';
import './Timeline.css';

interface TimelineStep {
  step: number | string;
  title: string;
  description: string;
}

interface TimelineProps {
  steps: TimelineStep[];
}

export const Timeline: React.FC<TimelineProps> = ({ steps }) => {
  return (
    <div className="timeline-container">
      <div className="timeline-track"></div>
      
      {steps.map((step, index) => (
        <div key={index} className="timeline-node">
          {/* Step Number block */}
          <div className="timeline-number-box">
            <span className="timeline-number">{step.step}</span>
          </div>
          
          {/* Content panel */}
          <div className="timeline-content-card">
            <h3 className="timeline-step-title">{step.title}</h3>
            <p className="timeline-step-desc">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
