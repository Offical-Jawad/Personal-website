import React, { useState, useEffect } from 'react';

const TypingText = ({
  texts = ["Full-Stack Developer", "Frontend Engineer", "UI/UX Designer", "MERN Specialist"],
  typingSpeed = 90,
  deletingSpeed = 50,
  pauseDuration = 1800,
  className = ""
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetText = texts[textIndex];
    let timer;

    if (!isDeleting && currentText !== targetText) {
      timer = setTimeout(() => {
        setCurrentText(targetText.substring(0, currentText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && currentText === targetText) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && currentText !== '') {
      timer = setTimeout(() => {
        setCurrentText(targetText.substring(0, currentText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`typing-text-wrapper ${className}`}>
      <span className="typing-text">{currentText}</span>
      <span className="typing-cursor">|</span>
      <style>{`
        .typing-cursor {
          display: inline-block;
          margin-left: 2px;
          font-weight: 400;
          color: currentColor;
          animation: blinkCursor 0.8s infinite;
        }
        @keyframes blinkCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
};

export default TypingText;
