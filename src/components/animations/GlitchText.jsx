import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './glitchtext.css';

/**
 * GlitchText Component
 * Adds glitch/distortion effect to text on hover or load
 * 
 * Props:
 * - children: Text content
 * - className: Additional CSS classes
 * - trigger: 'hover' | 'load' | 'always'
 */

const GlitchText = ({ children, className = '', trigger = 'hover' }) => {
  const [isGlitching, setIsGlitching] = useState(trigger === 'load' || trigger === 'always');

  React.useEffect(() => {
    if (trigger === 'load') {
      const timer = setTimeout(() => setIsGlitching(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  return (
    <motion.div
      className={`glitch-container ${className}`}
      onMouseEnter={() => trigger === 'hover' && setIsGlitching(true)}
      onMouseLeave={() => trigger === 'hover' && setIsGlitching(false)}
      initial={trigger === 'load' ? { opacity: 0 } : {}}
      animate={trigger === 'load' ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className={`glitch-text ${isGlitching ? 'active' : ''}`} data-text={children}>
        {children}
      </div>
    </motion.div>
  );
};

export default GlitchText;
