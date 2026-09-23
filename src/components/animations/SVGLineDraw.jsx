import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SVGLineDraw = ({ children, duration = 2, delay = 0, className = '' }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.svg
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      style={{ overflow: 'visible' }}
    >
      {children && 
        Array.isArray(children)
          ? children.map((child, index) =>
              child && child.type === 'path'
                ? {
                    ...child,
                    props: {
                      ...child.props,
                      as: motion.path,
                      initial: { pathLength: 0, opacity: 0 },
                      animate: inView
                        ? { pathLength: 1, opacity: 1 }
                        : { pathLength: 0, opacity: 0 },
                      transition: {
                        pathLength: {
                          duration,
                          delay: delay + index * 0.2,
                          ease: 'easeInOut',
                        },
                        opacity: { duration: 0.3, delay: delay + index * 0.2 },
                      },
                    },
                  }
                : child
            )
          : children}
    </motion.svg>
  );
};

// Helper component for simple path drawing
export const DrawPath = ({ d, stroke = 'currentColor', strokeWidth = 2, fill = 'none', duration = 2, delay = 0 }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <svg ref={ref} style={{ width: '100%', height: '100%', overflow: 'visible' }}>
      <motion.path
        d={d}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{
          pathLength: { duration, delay, ease: 'easeInOut' },
          opacity: { duration: 0.3, delay },
        }}
      />
    </svg>
  );
};

export default SVGLineDraw;
