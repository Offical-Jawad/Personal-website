import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import "./skills.css";
import { viewport } from "../utils/animationVariants";
import { 
  slideRightToLeft, 
  staggerContainer, 
  staggerContainerFast, 
  progressBarVariant,
  scaleIn,
  fadeInUp 
} from "../utils/animations";

// Count-up animation hook
const useCountUp = (target, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * target));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return [count, ref];
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 85, icon: "📜" },
        { name: "HTML5", level: 95, icon: "🌐" },
        { name: "CSS3", level: 90, icon: "🎨" },
        { name: "Tailwind CSS", level: 85, icon: "💨" },
      ],
    },
    backend: {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 80, icon: "🟢" },
        { name: "Express.js", level: 75, icon: "🚂" },
        { name: "PHP", level: 82, icon: "🐘" },
        { name: "Laravel", level: 85, icon: "🔥" },
        { name: "Python", level: 78, icon: "🐍" },
        { name: "MongoDB", level: 70, icon: "🍃" },
        { name: "REST API", level: 85, icon: "🔌" },
      ],
    },
    tools: {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 90, icon: "🐙" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "Postman", level: 85, icon: "📮" },
        { name: "npm", level: 90, icon: "📦" },
      ],
    },
  };

  return (
    <div className="skills-page">
      {/* ===== Animated Background ===== */}
      <div className="bg-grid"></div>
      <div className="bg-blur blur-1"></div>
      <div className="bg-blur blur-2"></div>
      <div className="bg-blur blur-3"></div>

      {/* Decorative Background Elements */}
      <div className="bg-blur-dot"></div>
      <div className="bg-hatch-circle"></div>

      {/* ===== HEADER SECTION ===== */}
      <motion.header 
        className="skills-header"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
      >
        <div className="header-content">
          <motion.h1 className="skills-title" variants={slideRightToLeft}>MY SKILLS</motion.h1>
          <motion.p className="skills-subtitle" variants={slideRightToLeft}>
            A comprehensive showcase of technical expertise and proficiency across
            various technologies, frameworks, and development tools.
          </motion.p>
        </div>
      </motion.header>

      {/* ===== CATEGORY TABS ===== */}
      <motion.section 
        className="category-tabs"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainerFast}
      >
        {Object.keys(skillCategories).map((category) => (
          <motion.button
            key={category}
            className={`tab-button ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="tab-text">
              {skillCategories[category].title}
            </span>
            <span className="tab-indicator"></span>
          </motion.button>
        ))}
      </motion.section>

      {/* ===== SKILLS GRID ===== */}
      <motion.section 
        className="skills-grid"
        key={activeCategory}
        initial="hidden"
        animate="visible"
        variants={staggerContainerFast}
      >
        {skillCategories[activeCategory].skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            variants={slideRightToLeft}
            whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
          >
            {/* Skill Icon */}
            <div className="skill-icon">
              <span>{skill.icon}</span>
            </div>

            {/* Skill Info */}
            <div className="skill-info">
              <div className="skill-header">
                <h3 className="skill-name">{skill.name}</h3>
                <motion.span 
                  className="skill-percentage"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {skill.level}%
                </motion.span>
              </div>

              {/* Animated Progress Bar */}
              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  custom={skill.level}
                  variants={progressBarVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="progress-glow"></div>
                </motion.div>
              </div>

              {/* Skill Level Label */}
              <div className="skill-level">
                {skill.level >= 90 ? "Expert" : 
                 skill.level >= 75 ? "Advanced" : 
                 skill.level >= 60 ? "Intermediate" : "Learning"}
              </div>
            </div>

            {/* Corner Decorations */}
            <div className="corner-tl"></div>
            <div className="corner-br"></div>
          </motion.div>
        ))}
      </motion.section>

      {/* ===== STATS SECTION with Count-up Animation ===== */}
      <motion.section 
        className="stats-section"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
      >
        <StatCard target={15} label="Technologies" suffix="+" />
        <StatCard target={10} label="Projects Built" suffix="+" />
        <StatCard target={2} label="Years Experience" suffix="+" />
        <StatCard target={100} label="Dedication" suffix="%" />
      </motion.section>

      {/* Bottom Line */}
      <div className="skills-bottom-line"></div>
    </div>
  );
};


// Stat Card Component with Count-up Animation
const StatCard = ({ target, label, suffix = "" }) => {
  const [count, ref] = useCountUp(target, 2000);
  
  return (
    <motion.div className="stat-card" variants={scaleIn} ref={ref}>
      <div className="stat-number">
        {count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </motion.div>
  );
};

export default Skills;
