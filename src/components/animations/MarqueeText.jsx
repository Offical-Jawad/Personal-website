import { motion } from 'framer-motion';
import './marqueetext.css';

const MarqueeText = ({ 
  items, 
  speed = 30, 
  direction = 'left', 
  pauseOnHover = true,
  className = '' 
}) => {
  const duplicatedItems = [...items, ...items];

  return (
    <div className={`marquee-container ${className}`}>
      <motion.div
        className="marquee-content"
        animate={{
          x: direction === 'left' ? [0, -100 * items.length] : [-100 * items.length, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
        whileHover={pauseOnHover ? { animationPlayState: 'paused' } : {}}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="marquee-item">
            {typeof item === 'string' ? (
              <span>{item}</span>
            ) : (
              item
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeText;
