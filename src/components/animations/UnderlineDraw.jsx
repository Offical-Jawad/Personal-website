import { motion } from 'framer-motion';
import './underlinedraw.css';

const UnderlineDraw = ({ children, className = '', color = 'currentColor' }) => {
  return (
    <span className={`underline-draw-wrapper ${className}`}>
      {children}
      <motion.span
        className="underline-draw"
        style={{ backgroundColor: color }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
    </span>
  );
};

export default UnderlineDraw;
