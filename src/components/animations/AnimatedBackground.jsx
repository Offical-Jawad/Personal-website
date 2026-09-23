import React from 'react';
import { motion } from 'framer-motion';
import './animatedbackground.css';

/**
 * AnimatedBackground Component
 * 
 * A reusable animated background with floating gradient orbs.
 * Can be used in any section of the portfolio.
 * 
 * Props:
 * - variant: 'default' | 'purple' | 'colorful' | 'minimal'
 * - opacity: number (0-1) - Controls orb opacity
 * - blur: string - CSS blur amount (e.g., '80px', '120px')
 */

const AnimatedBackground = ({ 
  variant = 'default',
  opacity = 0.6,
  blur = '100px'
}) => {
  
  // Animation variants for different orb movements
  const orbAnimation1 = {
    animate: {
      x: [0, 100, -50, 0],
      y: [0, -80, 60, 0],
      scale: [1, 1.2, 0.8, 1],
      rotate: [0, 90, 180, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const orbAnimation2 = {
    animate: {
      x: [0, -120, 80, 0],
      y: [0, 100, -70, 0],
      scale: [1, 0.8, 1.3, 1],
      rotate: [0, -90, -180, -360],
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const orbAnimation3 = {
    animate: {
      x: [0, 60, -100, 0],
      y: [0, -60, 90, 0],
      scale: [1, 1.1, 0.9, 1],
      rotate: [0, 120, 240, 360],
      transition: {
        duration: 22,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Color schemes based on variant
  const colorSchemes = {
    default: {
      orb1: 'linear-gradient(135deg, #6c5ce7, #a29bfe)',
      orb2: 'linear-gradient(135deg, #fd79a8, #fdcb6e)',
      orb3: 'linear-gradient(135deg, #00cec9, #0984e3)'
    },
    purple: {
      orb1: 'linear-gradient(135deg, #667eea, #764ba2)',
      orb2: 'linear-gradient(135deg, #f093fb, #f5576c)',
      orb3: 'linear-gradient(135deg, #4facfe, #00f2fe)'
    },
    colorful: {
      orb1: 'linear-gradient(135deg, #f093fb, #f5576c)',
      orb2: 'linear-gradient(135deg, #4facfe, #00f2fe)',
      orb3: 'linear-gradient(135deg, #43e97b, #38f9d7)'
    },
    minimal: {
      orb1: 'linear-gradient(135deg, #e0e0e0, #b0b0b0)',
      orb2: 'linear-gradient(135deg, #d0d0d0, #a0a0a0)',
      orb3: 'linear-gradient(135deg, #c0c0c0, #909090)'
    }
  };

  const colors = colorSchemes[variant] || colorSchemes.default;

  return (
    <div className="animated-background">
      {/* Orb 1 */}
      <motion.div
        className="gradient-orb orb-1"
        variants={orbAnimation1}
        animate="animate"
        style={{
          background: colors.orb1,
          opacity: opacity,
          filter: `blur(${blur})`
        }}
      />

      {/* Orb 2 */}
      <motion.div
        className="gradient-orb orb-2"
        variants={orbAnimation2}
        animate="animate"
        style={{
          background: colors.orb2,
          opacity: opacity,
          filter: `blur(${blur})`
        }}
      />

      {/* Orb 3 */}
      <motion.div
        className="gradient-orb orb-3"
        variants={orbAnimation3}
        animate="animate"
        style={{
          background: colors.orb3,
          opacity: opacity,
          filter: `blur(${blur})`
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
