import { motion } from 'framer-motion';
import './loadingskeleton.css';

const LoadingSkeleton = ({ 
  variant = 'text', // 'text', 'card', 'image', 'avatar'
  count = 1,
  width = '100%',
  height = '20px',
  className = ''
}) => {
  const renderSkeleton = () => {
    switch (variant) {
      case 'text':
        return (
          <motion.div
            className="skeleton-text"
            style={{ width, height }}
            animate={{
              backgroundColor: ['#e0e0e0', '#f0f0f0', '#e0e0e0'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        );
      
      case 'card':
        return (
          <div className="skeleton-card">
            <motion.div
              className="skeleton-card-image"
              animate={{
                backgroundColor: ['#e0e0e0', '#f0f0f0', '#e0e0e0'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <div className="skeleton-card-content">
              <motion.div
                className="skeleton-title"
                animate={{
                  backgroundColor: ['#e0e0e0', '#f0f0f0', '#e0e0e0'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <motion.div
                className="skeleton-text-line"
                animate={{
                  backgroundColor: ['#e0e0e0', '#f0f0f0', '#e0e0e0'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: 0.1,
                }}
              />
              <motion.div
                className="skeleton-text-line"
                style={{ width: '60%' }}
                animate={{
                  backgroundColor: ['#e0e0e0', '#f0f0f0', '#e0e0e0'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: 0.2,
                }}
              />
            </div>
          </div>
        );
      
      case 'image':
        return (
          <motion.div
            className="skeleton-image"
            style={{ width, height }}
            animate={{
              backgroundColor: ['#e0e0e0', '#f0f0f0', '#e0e0e0'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        );
      
      case 'avatar':
        return (
          <motion.div
            className="skeleton-avatar"
            style={{ width: width, height: width }}
            animate={{
              backgroundColor: ['#e0e0e0', '#f0f0f0', '#e0e0e0'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={`loading-skeleton ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} style={{ marginBottom: variant === 'text' ? '10px' : '20px' }}>
          {renderSkeleton()}
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
