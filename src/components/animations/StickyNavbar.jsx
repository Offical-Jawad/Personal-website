import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import './stickynavbar.css';

const StickyNavbar = ({ children, threshold = 50, className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > threshold);
    });
  }, [scrollY, threshold]);

  const navHeight = useTransform(scrollY, [0, threshold], ['80px', '60px']);
  const navBackground = useTransform(
    scrollY,
    [0, threshold],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
  );
  const navBlur = useTransform(scrollY, [0, threshold], ['blur(0px)', 'blur(10px)']);

  return (
    <motion.nav
      className={`sticky-navbar ${isScrolled ? 'scrolled' : ''} ${className}`}
      style={{
        height: navHeight,
        backgroundColor: navBackground,
        backdropFilter: navBlur,
      }}
    >
      {children}
    </motion.nav>
  );
};

export default StickyNavbar;
