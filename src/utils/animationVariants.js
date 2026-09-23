// Framer Motion Animation Variants for Portfolio

// Page Transition Animations
export const pageTransition = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Fade In with Slide Up (for sections)
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Fade In with Slide from Left
export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Fade In with Slide from Right (Right to Left)
export const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Slide Right to Left (More Distance)
export const slideRightToLeft = {
  hidden: { 
    opacity: 0, 
    x: 100 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.7, 
      ease: "easeOut" 
    }
  }
};

// Slide Right to Left - Fast
export const slideRightToLeftFast = {
  hidden: { 
    opacity: 0, 
    x: 80 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  }
};

// Stagger Container (for multiple children)
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

// Stagger Container - Slow (for cards)
export const staggerContainerSlow = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

// Stagger Container - Fast
export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

// Card Hover Effect
export const cardHover = {
  rest: { 
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  hover: { 
    scale: 1.05,
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  tap: { 
    scale: 0.98 
  }
};

// Card with Shadow Hover
export const cardWithShadow = {
  rest: { 
    scale: 1,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.3
    }
  },
  hover: { 
    scale: 1.05,
    y: -10,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.3
    }
  }
};

// Scale on Hover (subtle)
export const scaleOnHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.03,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

// Mobile Menu Animation (slide from right)
export const mobileMenu = {
  closed: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Mobile Menu Overlay
export const menuOverlay = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2
    }
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
};

// Menu Item Stagger
export const menuItemStagger = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Individual Menu Item
export const menuItem = {
  closed: { 
    opacity: 0, 
    x: 20 
  },
  open: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.3
    }
  }
};

// Fade In (simple)
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

// Scale In
export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

// Button Hover Animation
export const buttonHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: { scale: 0.95 }
};

// Icon Bounce
export const iconBounce = {
  rest: { y: 0 },
  hover: {
    y: [0, -8, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

// Rotate on Hover
export const rotateOnHover = {
  rest: { rotate: 0 },
  hover: { 
    rotate: 360,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
};

// Viewport settings for scroll animations
export const viewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -100px 0px"
};

// Viewport settings - trigger early
export const viewportEarly = {
  once: true,
  amount: 0.1,
  margin: "0px 0px -50px 0px"
};
