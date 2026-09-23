import { motion } from 'framer-motion';

const ShakeAnimation = ({ children, trigger = false, className = '' }) => {
  const shakeVariants = {
    shake: {
      x: [0, -10, 10, -10, 10, -5, 5, 0],
      transition: {
        duration: 0.5,
      },
    },
    stop: {
      x: 0,
    },
  };

  return (
    <motion.div
      className={className}
      animate={trigger ? 'shake' : 'stop'}
      variants={shakeVariants}
    >
      {children}
    </motion.div>
  );
};

export default ShakeAnimation;
