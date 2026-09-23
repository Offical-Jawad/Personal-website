import { motion } from 'framer-motion';
import { useState } from 'react';
import './imagehoverzoom.css';

const ImageHoverZoom = ({ 
  src, 
  alt, 
  overlayText = 'View Project', 
  className = '',
  onClick 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`image-hover-zoom ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.img
        src={src}
        alt={alt}
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />
      
      <motion.div
        className="image-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="overlay-content"
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: isHovered ? 0 : 20,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <span className="overlay-text">{overlayText}</span>
          <motion.div
            className="overlay-icon"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            →
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ImageHoverZoom;
