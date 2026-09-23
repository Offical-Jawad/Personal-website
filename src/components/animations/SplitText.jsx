import React from 'react';
import { motion } from 'framer-motion';

/**
 * SplitText Component
 * Animates text by splitting into letters/words
 * 
 * Props:
 * - children: Text to animate
 * - type: 'letters' | 'words'
 * - className: Additional CSS classes
 * - delay: Delay before animation starts
 * - duration: Animation duration per item
 */

const SplitText = ({ 
  children, 
  type = 'letters',
  className = '',
  delay = 0,
  duration = 0.05
}) => {
  const text = String(children);
  const items = type === 'letters' ? text.split('') : text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: duration,
        delayChildren: delay 
      }
    })
  };

  const child = {
    hidden: {
      opacity: 0,
      y: type === 'letters' ? 20 : 30,
      rotateX: type === 'letters' ? -90 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      className={`split-text-container ${className}`}
      style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        overflow: 'hidden'
      }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ 
            display: 'inline-block',
            marginRight: type === 'words' ? '0.25em' : '0',
            whiteSpace: type === 'letters' && item === ' ' ? 'pre' : 'normal'
          }}
        >
          {item === ' ' ? '\u00A0' : item}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SplitText;
