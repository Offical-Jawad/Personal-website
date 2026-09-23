import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ripplebutton.css';

const RippleButton = ({ children, onClick, className = '', ...props }) => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = {
      x,
      y,
      size,
      id: Date.now(),
    };

    setRipples([...ripples, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className={`ripple-button ${className}`}
      onClick={handleClick}
      {...props}
    >
      <span className="ripple-button-content">{children}</span>
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="ripple"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>
    </button>
  );
};

export default RippleButton;
