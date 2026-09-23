import { motion } from 'framer-motion';
import './morphingshape.css';

const MorphingShape = () => {
  // Different SVG path morphing states
  const paths = [
    // Circle-ish
    "M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z",
    // Blob 1
    "M50,10 C75,12 88,28 90,50 C92,72 76,88 50,90 C24,92 12,76 10,50 C8,24 25,8 50,10 Z",
    // Blob 2
    "M50,10 C65,15 85,25 90,50 C95,75 75,85 50,90 C25,95 15,75 10,50 C5,25 35,5 50,10 Z",
    // Square-ish
    "M20,20 L80,20 L80,80 L20,80 Z",
    // Star-ish
    "M50,10 L60,35 L85,35 L65,55 L75,80 L50,65 L25,80 L35,55 L15,35 L40,35 Z"
  ];

  return (
    <div className="morphing-shape-container">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="morphGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary-color, #6366f1)" />
            <stop offset="100%" stopColor="var(--secondary-color, #8b5cf6)" />
          </linearGradient>
        </defs>
        
        <motion.path
          d={paths[0]}
          fill="url(#morphGradient)"
          animate={{
            d: paths,
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      </svg>
    </div>
  );
};

export default MorphingShape;
