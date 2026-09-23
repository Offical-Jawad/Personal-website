import React, { useEffect, useState } from 'react';
import './scrollprogress.css';

const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      const totalScrollable = documentHeight - windowHeight;
      if (totalScrollable > 0) {
        const currentProgress = (scrollTop / totalScrollable) * 100;
        setScrollPercentage(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress-container">
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
