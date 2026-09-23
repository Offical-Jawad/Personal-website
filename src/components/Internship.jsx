import React, { useState } from "react";
import { motion } from "framer-motion";
import "./internship.css";
import { fadeInUp, viewport } from "../utils/animationVariants";
import { slideRightToLeft, staggerContainer } from "../utils/animations";

const Internship = () => {
  const [activeId, setActiveId] = useState(1);

  const internships = [
    {
      id: 1,
      role: "Web Development Intern",
      company: "Softfix Technology",
      location: "DC Colony, Gujranwala, Pakistan",
      duration: "Jun 2026 – Dec 2026",
      badge: "ERP Systems & Full-Stack",
      isFeatured: false,
      description:
        "Engineered and maintained core enterprise business modules for production-grade ERP and GST ERP platforms supporting multi-company workflows, complex relational databases, and enterprise access security.",
      highlights: [
        "Worked on a Real ERP / GST ERP system supporting multi-company operations with strict company-specific data isolation and permission controls.",
        "Contributed to 4 ERP projects, architecting and maintaining key modules for sales, purchases, accounts, inventory, and dynamic business reporting using Laravel, PHP, MySQL, and JavaScript.",
        "Engineered RESTful APIs, role-based access control (RBAC), security patch updates, query optimizations, and bug resolution across active ERP applications."
      ],
      skills: [
        "Laravel",
        "PHP",
        "MySQL",
        "JavaScript",
        "RESTful APIs",
        "ERP Architecture",
        "GST Invoicing",
        "RBAC Security",
        "Git & GitHub"
      ]
    }
  ];

  return (
    <div className="internship-page">
      {/* ===== Background Accents ===== */}
      <div className="bg-grid"></div>
      <div className="bg-blur blur-1"></div>
      <div className="bg-blur blur-2"></div>

      {/* ===== HEADER SECTION ===== */}
      <motion.header
        className="intern-header"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
      >
        <div className="header-content">
          <motion.h1 className="intern-title" variants={slideRightToLeft}>
            INTERNSHIP
          </motion.h1>
          <motion.p className="intern-subtitle" variants={slideRightToLeft}>
            Practical industry experience building production ERP platforms, multi-company systems, and robust backend architectures.
          </motion.p>
        </div>
      </motion.header>

      {/* ===== INTERNSHIP CARDS ===== */}
      <motion.section
        className="intern-list"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
      >
        {internships.map((item) => (
          <motion.div
            key={item.id}
            className={`intern-card ${item.isFeatured ? "card-dark" : "card-light"} ${
              activeId === item.id ? "active" : ""
            }`}
            onClick={() => setActiveId(activeId === item.id ? null : item.id)}
            variants={slideRightToLeft}
            whileHover={{ scale: 1.015, transition: { duration: 0.2 } }}
          >
            {/* Left Side: Number & Info */}
            <div className="card-left">
              <div className="number-box">0{item.id}</div>
              <div className="info-box">
                <h3 className="job-role">{item.role}</h3>
                <div className="company-name">
                  <span>{item.company}</span>
                  <span>•</span>
                  <span>{item.location}</span>
                  {item.badge && <span className="intern-badge">{item.badge}</span>}
                </div>

                {/* Expandable Details */}
                <div className={`intern-desc ${activeId === item.id ? "show" : ""}`}>
                  <p className="desc-summary">{item.description}</p>

                  <ul className="intern-highlights">
                    {item.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>

                  <div className="intern-tags">
                    {item.skills.map((skill, index) => (
                      <span key={index} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Duration */}
            <div className="card-right">
              <div className="duration-wrapper">
                <span className="duration-label">Timeline</span>
                <span className="duration-value">{item.duration}</span>
              </div>
            </div>

            {/* Corner Accents */}
            <div className="corner-tl"></div>
            <div className="corner-br"></div>
          </motion.div>
        ))}
      </motion.section>

      {/* Bottom Line */}
      <div className="intern-bottom-line"></div>
    </div>
  );
};

export default Internship;
