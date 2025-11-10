import React, { useRef } from 'react';
import '../styles/Slider.css';

const Slider = () => {
  const scrollWrapperRef = useRef(null);

  const handleMouseEnter = () => {
    if (scrollWrapperRef.current) {
      scrollWrapperRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    if (scrollWrapperRef.current) {
      scrollWrapperRef.current.style.animationPlayState = 'running';
    }
  };

  const items = [
    "Guaranteed SEO",
    "Meta Ads",
    "Website Development",
    "Content Marketing",
    "Lead Generations",
    "Custom Web Designing"
  ];

  const repeatedItems = [...items, ...items];

  return (
    <div className="scroll-container">
      <div
        className="scrolling-wrapper"
        ref={scrollWrapperRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {repeatedItems.map((item, index) => (
          <React.Fragment key={index}>
            <span className="scroll-item cinzel">{item}</span>
            <span className="scroll-item star-icon">★</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Slider;
