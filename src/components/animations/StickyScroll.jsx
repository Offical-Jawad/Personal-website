import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './stickyscroll.css';

const StickyScroll = ({ sections }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="sticky-scroll-container">
      <div className="sticky-content">
        {sections.map((section, index) => {
          const targetScale = 1 - ((sections.length - index) * 0.05);
          const opacity = useTransform(
            scrollYProgress,
            [index / sections.length, (index + 0.5) / sections.length, (index + 1) / sections.length],
            [0.3, 1, 0.3]
          );

          return (
            <motion.div
              key={index}
              className="sticky-card"
              style={{
                opacity,
                position: index === sections.length - 1 ? 'relative' : 'sticky',
                top: `${80 + index * 40}px`,
                scale: targetScale,
              }}
            >
              <div className="sticky-card-content">
                {section.icon && <div className="sticky-icon">{section.icon}</div>}
                <h3>{section.title}</h3>
                <p>{section.description}</p>
                {section.content}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default StickyScroll;
