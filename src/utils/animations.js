// ==================== FRAMER MOTION ANIMATIONS ====================

// Right to Left slide animation
export const slideRightToLeft = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

// Stagger container for sequential animations
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

// Stagger container with faster timing
export const staggerContainerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05
    }
  }
};

// Right to left with slight delay (for individual items)
export const slideRightToLeftItem = {
  hidden: { opacity: 0, x: 80 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// ==================== PROGRESS BAR ANIMATION ====================
export const progressBarVariant = {
  hidden: { width: 0, opacity: 0 },
  visible: (percentage) => ({
    width: `${percentage}%`,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut",
      delay: 0.2
    }
  })
};

// ==================== CARD FLIP ANIMATION ====================
export const cardFlipVariant = {
  front: {
    rotateY: 0,
    transition: { duration: 0.6, ease: "easeInOut" }
  },
  back: {
    rotateY: 180,
    transition: { duration: 0.6, ease: "easeInOut" }
  }
};

// ==================== FLOATING ANIMATION ====================
export const floatingVariant = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Floating with rotation
export const floatingRotateVariant = {
  animate: {
    y: [0, -15, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// ==================== NAVBAR FADE DOWN ====================
export const navbarFadeDown = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// ==================== FADE IN UP ====================
export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// ==================== SCALE IN ====================
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// ==================== ZOOM IN ====================
export const zoomIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// AOS Animation configurations
export const aosAnimations = {
  fadeUp: {
    'data-aos': 'fade-up',
    'data-aos-duration': '1000',
    'data-aos-once': 'false'
  },
  fadeDown: {
    'data-aos': 'fade-down',
    'data-aos-duration': '1000',
    'data-aos-once': 'false'
  },
  fadeLeft: {
    'data-aos': 'fade-left',
    'data-aos-duration': '1000',
    'data-aos-once': 'false'
  },
  fadeRight: {
    'data-aos': 'fade-right',
    'data-aos-duration': '1000',
    'data-aos-once': 'false'
  },
  zoomIn: {
    'data-aos': 'zoom-in',
    'data-aos-duration': '1000',
    'data-aos-once': 'false'
  },
  zoomOut: {
    'data-aos': 'zoom-out',
    'data-aos-duration': '1000',
    'data-aos-once': 'false'
  },
  flipLeft: {
    'data-aos': 'flip-left',
    'data-aos-duration': '1000',
    'data-aos-once': 'false'
  },
  flipRight: {
    'data-aos': 'flip-right',
    'data-aos-duration': '1000',
    'data-aos-once': 'false'
  },
  slideUp: {
    'data-aos': 'slide-up',
    'data-aos-duration': '1000',
    'data-aos-once': 'false'
  },
  slideDown: {
    'data-aos': 'slide-down',
    'data-aos-duration': '1000',
    'data-aos-once': 'false'
  }
};

// Custom animation delays
export const withDelay = (animation, delay) => ({
  ...animation,
  'data-aos-delay': delay
});

// Custom animation durations
export const withDuration = (animation, duration) => ({
  ...animation,
  'data-aos-duration': duration
});

// Custom easing
export const withEasing = (animation, easing) => ({
  ...animation,
  'data-aos-easing': easing
});

// Popular easing options
export const easings = {
  linear: 'linear',
  ease: 'ease',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
  easeInBack: 'ease-in-back',
  easeOutBack: 'ease-out-back',
  easeInOutBack: 'ease-in-out-back',
  easeInSine: 'ease-in-sine',
  easeOutSine: 'ease-out-sine',
  easeInOutSine: 'ease-in-out-sine',
  easeInQuad: 'ease-in-quad',
  easeOutQuad: 'ease-out-quad',
  easeInOutQuad: 'ease-in-out-quad',
  easeInCubic: 'ease-in-cubic',
  easeOutCubic: 'ease-out-cubic',
  easeInOutCubic: 'ease-in-out-cubic',
  easeInQuart: 'ease-in-quart',
  easeOutQuart: 'ease-out-quart',
  easeInOutQuart: 'ease-in-out-quart'
};
