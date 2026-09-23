import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Loader.css";

function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          onComplete();
          return 100;
        }
        return Math.min(prev + Math.random() * 3 + 2, 100);
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="loader-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="loader-circle-wrapper">
            <svg width="180" height="180" viewBox="0 0 180 180" className="loader-svg">
              <defs>
                <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4da3ff" />
                  <stop offset="100%" stopColor="#4da3ff" />
                </linearGradient>
              </defs>

              <circle
                cx="90"
                cy="90"
                r={radius}
                stroke="rgba(77, 163, 255, 0.25)"
                strokeWidth="2.5"
                fill="none"
              />

              <motion.circle
                cx="90"
                cy="90"
                r={radius}
                stroke="url(#loaderGradient)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                transform="rotate(-90 90 90)"
                style={{ transition: "stroke-dashoffset 0.3s ease-out" }}
              />
            </svg>

            <motion.div
              className="loader-center-content"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="loader-center-text">Jawad</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
