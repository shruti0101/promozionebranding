import React, { useState } from 'react';
import "./style.css"

const Tabs = () => {
  const steps = [
    {
      id: 1,
      title: 'Research & Discovery',
      desc: 'We understand your business, goals, audience, and gather data to craft the perfect strategy.'
    },
    {
      id: 2,
      title: 'Collaborative Planning',
      desc: 'We work with you to plan and align objectives, roles, timelines, and deliverables.'
    },
    {
      id: 3,
      title: 'Design & Build',
      desc: 'We design UI/UX and develop systems tailored to your goals with clean, scalable code.'
    },
    {
      id: 4,
      title: 'Live Reporting',
      desc: 'We keep you in the loop with transparent reports, analytics, and progress tracking.'
    },
    {
      id: 5,
      title: 'Return on Investment',
      desc: 'We focus on delivering measurable results that drive growth and value for your business.'
    }
  ];

  const [activeId, setActiveId] = useState(1);

  return (
    <div className='container'>
    <div className="timeline-wrapper">
  

      <div className="timeline-content">
        <div className="content-box fade-in">
          <h2>{steps[activeId - 1].title}</h2>
          <p>{steps[activeId - 1].desc}</p>
        </div>
      </div>

          <div className="timeline">
        {steps.map(step => (
          <div
            key={step.id}
            className={`timeline-step ${activeId === step.id ? 'active' : ''}`}
            onClick={() => setActiveId(step.id)}
          >
            <div className="circle">{step.id}</div>
            <div className="line" />
            <p className="step-title">{step.title}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Tabs;
