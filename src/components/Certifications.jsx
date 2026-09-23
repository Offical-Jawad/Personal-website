import React, { useState } from "react";
import { motion } from "framer-motion";
import "./certifications.css";
import { fadeInUp, viewport } from "../utils/animationVariants";
import { slideRightToLeft, staggerContainer } from "../utils/animations";

const Certifications = () => {
  // State to track the active certification item
  const [activeId, setActiveId] = useState(1);

  const certifications = [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "Professional Certification Program",
      duration: "Dec 2025",
      description:
        "Comprehensive full-stack web development certification covering HTML, CSS, JavaScript, React, Node.js, MongoDB, and modern web development best practices.",
      hasAccent: true,
      skills: [
        "HTML5 & CSS3",
        "JavaScript (ES6+)",
        "React.js ",
        "Node.js & Express",
        "MongoDB & Database Design",
        "RESTful APIs",
        "Git & GitHub",
        "Responsive Design",
        "BootStrap"
      ],
      achievements: [
        "Built 10+ full-stack projects",
        "Mastered modern JavaScript frameworks",
        "Implemented RESTful API architecture",
        "Created responsive, mobile-first applications",
      ],
      credentialId: "WD-2324-2025",
    },
  ];

  return (
    <div className="certifications-page">
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
        className="cert-header"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
      >
        <div className="header-content">
          <motion.h1 className="cert-title" variants={slideRightToLeft}>CERTIFICATIONS</motion.h1>
          <motion.p className="cert-subtitle" variants={slideRightToLeft}>
            Professional certifications and achievements that demonstrate expertise
            and commitment to continuous learning and skill development.
          </motion.p>
        </div>
      </motion.header>

      {/* ===== CERTIFICATIONS LIST ===== */}
      <motion.section 
        className="cert-list"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
      >
        {certifications.map((item, index) => (
          <motion.div
            key={item.id}
            className={`cert-card ${item.isFeatured ? "card-dark" : "card-light"} ${
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
                <h3 className="cert-name">{item.title}</h3>
                <span className="issuer-name">{item.issuer}</span>

                {/* Reveal description on active state */}
                <div
                  className={`cert-desc ${activeId === item.id ? "show" : ""}`}
                >
                  <p className="desc-text">{item.description}</p>
                  
                  {/* Skills Section */}
                  {item.skills && (
                    <div className="skills-section">
                      <h4 className="section-title">Skills Covered:</h4>
                      <div className="skills-grid">
                        {item.skills.map((skill, index) => (
                          <span key={index} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Achievements Section */}
                  {item.achievements && (
                    <div className="achievements-section">
                      <h4 className="section-title">Key Achievements:</h4>
                      <ul className="achievements-list">
                        {item.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Credential ID */}
                  {item.credentialId && (
                    <div className="credential-section">
                      <span className="credential-label">Credential ID:</span>
                      <span className="credential-id">{item.credentialId}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side: Duration */}
            <div className="card-right">
              <div className="duration-wrapper">
                <span className="duration-label">Year</span>
                <span className="duration-value">- {item.duration}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Bottom Line */}
      <div className="cert-bottom-line"></div>
    </div>
  );
};

export default Certifications;
