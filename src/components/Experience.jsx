import React, { useState } from "react";
import { motion } from "framer-motion";
import "./experience.css";
import { fadeInUp, fadeInLeft, viewport } from "../utils/animationVariants";
import { slideRightToLeft, staggerContainer } from "../utils/animations";

const Experience = () => {
  // State to track the active experience item
  const [activeId, setActiveId] = useState(1);

  const experiences = [
    {
      id: 1,
      role: "Matriculation in Science",
      location: "The Best School System - Kamoke Punjab",
      duration: "2019 - 2020",
      description:
        "Empowering foundation built on comprehensive science and biology matriculation coursework.",
    },
    {
      id: 2,
      role: "Intermadiate in Computer Science",
      location: "Apex Group of Colleges - Kamoke Punjab",
      duration: "2022 - 2023",
        description:
        "Solidified computer science fundamentals through rigorous coursework and practical projects, preparing for advanced studies and industry challenges.",
    },
    {
      id: 3,
      role: "bachelor in information technology",
      location: "University of Gujrat - Punjab",
      duration: "2023 - 2027",
      description:
        "Pursuing a comprehensive IT education, gaining expertise in programming, networking, and cybersecurity to prepare for a dynamic tech career.",
    },
  ];
  return (
    <div className="experience-page">
      {/* ===== Animated Background ===== */}
      <div className="bg-grid"></div>
      <div className="bg-blur blur-1"></div>
      <div className="bg-blur blur-2"></div>
      <div className="bg-blur blur-3"></div>

      {/* Floating Shapes */}

      {/* Decorative Background Elements */}
      <div className="bg-blur-dot"></div>
      <div className="bg-hatch-circle"></div>

      {/* ===== HEADER SECTION ===== */}
      <motion.header 
        className="exp-header"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
      >
        <div className="header-content">
          <motion.h1 className="exp-title" variants={slideRightToLeft}>EDUCTION </motion.h1>
          <motion.p className="exp-subtitle" variants={slideRightToLeft}>
            Education expands horizons, ignites innovation, and equips minds
            with the knowledge needed to shape tomorrow.
          </motion.p>
        </div>
      </motion.header>

      {/* ===== TIMELINE LIST ===== */}
      <motion.section 
        className="exp-list"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
      >
        {experiences.map((item, index) => (
          <motion.div
            key={item.id}
            className={`exp-card ${item.isFeatured ? "card-dark" : "card-light"} ${
              activeId === item.id ? "active" : ""
            } ${item.hasAccent ? "has-accent" : ""}`}
            onClick={() => setActiveId(item.id)}
            variants={slideRightToLeft}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            {/* Left Side: Number & Info */}
            <div className="card-left">
              <div className="number-box">{item.id}</div>
              <div className="info-box">
                <h3 className="job-role">{item.role}</h3>
                <span className="company-name">{item.company}</span>

                {/* Reveal description on active state */}
                <div
                  className={`job-desc ${activeId === item.id ? "show" : ""}`}
                >
                  {item.description}
                </div>
              </div>
            </div>

            {/* Right Side: Duration */}
            <div className="card-right">
              <div className="duration-wrapper">
                <span className="duration-label">Years</span>
                <span className="duration-value">- {item.duration}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Bottom Line */}
      <div className="exp-bottom-line"></div>
    </div>
  );
};

export default Experience;