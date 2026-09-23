import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.7,
  className = '',
  viewportOnce = true,
  amount = 0.2,
}) => {
  const animations = {
    fadeInUp: {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -50 }
    },
    fadeInDown: {
      initial: { opacity: 0, y: -50 },
      whileInView: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 }
    },
    fadeInLeft: {
      initial: { opacity: 0, x: -60 },
      whileInView: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 60 }
    },
    fadeInRight: {
      initial: { opacity: 0, x: 60 },
      whileInView: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -60 }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.82 },
      whileInView: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.82 }
    },
    slideUp: {
      initial: { opacity: 0, y: 100 },
      whileInView: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -100 }
    },
    zoomIn: {
      initial: { opacity: 0, scale: 0.5 },
      whileInView: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.5 }
    },
    rotateIn: {
      initial: { opacity: 0, rotate: -8, scale: 0.9 },
      whileInView: { opacity: 1, rotate: 0, scale: 1 },
      exit: { opacity: 0, rotate: 8, scale: 0.9 }
    },
    blurIn: {
      initial: { opacity: 0, filter: 'blur(12px)', y: 30 },
      whileInView: { opacity: 1, filter: 'blur(0px)', y: 0 },
      exit: { opacity: 0, filter: 'blur(12px)', y: -30 }
    },
    elasticPop: {
      initial: { opacity: 0, scale: 0.3 },
      whileInView: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.3 }
    }
  };

  const selectedAnimation = animations[animation] || animations.fadeInUp;

  const transitionConfig = animation === 'elasticPop'
    ? {
        type: 'spring',
        stiffness: 260,
        damping: 18,
        delay: delay,
      }
    : {
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1],
      };

  return (
    <motion.div
      className={className}
      initial={selectedAnimation.initial}
      whileInView={selectedAnimation.whileInView}
      exit={selectedAnimation.exit}
      viewport={{ once: viewportOnce, amount }}
      transition={transitionConfig}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
