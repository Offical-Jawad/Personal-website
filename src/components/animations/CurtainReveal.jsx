import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import './curtainreveal.css';

const CurtainReveal = ({ children, delay = 0.5 }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <>
      <AnimatePresence>
        {!isRevealed && (
          <>
            <motion.div
              className="curtain curtain-left"
              initial={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="curtain-content">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="curtain-logo"
                >
                  <h1>Loading...</h1>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="curtain curtain-right"
              initial={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            />
          </>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {isRevealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CurtainReveal;
