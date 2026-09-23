import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';

const PageTransition = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Refresh AOS on route change
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, [pathname]);

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1],
        opacity: { duration: 0.4 }
      }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
