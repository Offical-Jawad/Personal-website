import React, { useEffect, useState } from 'react';
import './scrolltotop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (docHeight > 0) {
        setScrollProgress((scrollTop / docHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      className={`scroll-to-top-btn ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      data-cursor="pointer"
    >
      <svg className="scroll-svg-progress" viewBox="0 0 50 50">
        <circle
          className="scroll-svg-circle-bg"
          cx="25"
          cy="25"
          r={radius}
        />
        <circle
          className="scroll-svg-circle-fg"
          cx="25"
          cy="25"
          r={radius}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
          }}
        />
      </svg>
      <span className="scroll-arrow">↑</span>
    </button>
  );
};

export default ScrollToTop;
