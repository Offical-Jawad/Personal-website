import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './testimonialslider.css';

const TestimonialSlider = ({ 
  testimonials = [], 
  autoPlay = true, 
  interval = 5000,
  className = '' 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (autoPlay && testimonials.length > 1) {
      const timer = setInterval(() => {
        handleNext();
      }, interval);

      return () => clearInterval(timer);
    }
  }, [currentIndex, autoPlay, interval, testimonials.length]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  if (!testimonials.length) return null;

  return (
    <div className={`testimonial-slider ${className}`}>
      <div className="testimonial-container">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
            }}
            className="testimonial-card"
          >
            <div className="testimonial-content">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">{testimonials[currentIndex].text}</p>
              <div className="testimonial-author">
                {testimonials[currentIndex].image && (
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="author-image"
                  />
                )}
                <div>
                  <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                  <p className="author-title">{testimonials[currentIndex].title}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="slider-controls">
        <button onClick={handlePrev} className="slider-btn" aria-label="Previous">
          ←
        </button>
        
        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button onClick={handleNext} className="slider-btn" aria-label="Next">
          →
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
