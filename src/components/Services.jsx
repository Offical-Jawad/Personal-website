import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./services.css";
import { fadeInUp, fadeInLeft, fadeInRight, fadeIn, staggerContainer, cardHover, viewport } from "../utils/animationVariants";
import { slideRightToLeft, staggerContainerFast } from "../utils/animations";
import AnimatedBackground from "./animations/AnimatedBackground";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const services = [
    {
      title: "J.Store",
      desc: "E-Commerce Platform",
      link: "/project/jstore-details",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="10" y="14" width="44" height="32" rx="2" />
          <path d="M10 22 L54 22" />
          <circle cx="18" cy="18" r="1.5" fill="currentColor" />
          <circle cx="23" cy="18" r="1.5" fill="currentColor" />
          <circle cx="28" cy="18" r="1.5" fill="currentColor" />
          <path d="M20 32 L30 32 L30 42 L20 42 Z" />
          <path d="M34 32 L44 32 L44 42 L34 42 Z" />
        </svg>
      ),
      color: "black",
    },
    {
      title: "PORTFOLIO",
      desc: "Personal Website",
      link: "/project/portfolio-details",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="32" cy="20" r="8" />
          <path d="M18 48 Q32 38 46 48" strokeLinecap="round" />
          <rect x="12" y="8" width="40" height="48" rx="2" />
        </svg>
      ),
      color: "white",
    },
    {
      title: "SNOW REMOVAL",
      desc: "Service Website",
      link: "/project/snow-removal-details",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M32 12 L32 52 M20 24 L44 40 M20 40 L44 24" />
          <circle cx="32" cy="12" r="3" fill="currentColor" />
          <circle cx="32" cy="52" r="3" fill="currentColor" />
          <circle cx="20" cy="24" r="3" fill="currentColor" />
          <circle cx="44" cy="40" r="3" fill="currentColor" />
          <circle cx="20" cy="40" r="3" fill="currentColor" />
          <circle cx="44" cy="24" r="3" fill="currentColor" />
        </svg>
      ),
      color: "white",
    },
  ];

  const socials = [
    { 
      name: "LINKEDIN", 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ), 
      link: "https://www.linkedin.com/in/m-jawad-aslam"
    },
    {
      name: "GITHUB", 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ), 
      link: "https://github.com/Offical-Jawad"
    },
  ];

  return (
    <div className="services-page">
      {/* Animated Background - Purple Variant */}
      <AnimatedBackground variant="purple" opacity={0.4} blur="120px" />
      
      {/* Custom Cursor Glow */}
      <div
        className="cursor-glow"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />

      {/* ===== TOP BAR ===== */}
      <header className="top-bar">
        <div className="top-bar-left">
          <div className="line-deco"></div>
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="social-icon">{s.icon}</span>
              <span className="social-name">{s.name}</span>
            </a>
          ))}
        </div>
        <div className="btn-text">
          <a
            href="mailto:jawadaslam425@gmail.com"
            className="email-link"
          >
            <span className="mail-icon">✉</span>
            <span>jawadaslam425@gmail.com</span>
          </a>
        </div>
      </header>

      {/* ===== HEADER SECTION ===== */}
      <motion.section 
        className="header-section"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="header-left">
          <motion.div className="section-label" variants={fadeInRight}>
            <span className="label-line"></span>
            <span className="label-text">MY PROJECTS</span>
            <span className="label-arrow">↗</span>
          </motion.div>
          <motion.h1 className="main-title" variants={fadeInUp}>
            FEATURED
            <br />
            <span className="btn-text">PROJECTS</span>
          </motion.h1>
        </div>

        <div className="header-right">
          <motion.p
            className="header-desc"
            variants={fadeInLeft}
          >
            Explore my latest work showcasing modern web development, creative
            design, and functional solutions built with cutting-edge
            technologies.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link
              to="/projects"
              className="btn-all-services"
            >
              <span>ALL PROJECTS</span>
              <span className="btn-dot"></span>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ===== SCROLL INDICATOR ===== */}
      <motion.div 
        className="scroll-indicator"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeIn}
      >
        <span className="scroll-text">SCROLL NOW</span>
        <div className="scroll-line"></div>
        <button className="scroll-arrow" aria-label="Scroll down">
          <span>↓</span>
        </button>
      </motion.div>

      {/* ===== SERVICES CARDS ===== */}
      <motion.section 
        className="services-grid"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainerFast}
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            className={`service-card ${service.color} ${
              hoveredCard === i ? "hovered" : ""
            }`}
            variants={slideRightToLeft}
            whileHover="hover"
            onMouseEnter={() => setHoveredCard(i)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Decorative corner */}
            <div className="corner-tl"></div>
            <div className="corner-tr"></div>
            <div className="corner-bl"></div>
            <div className="corner-br"></div>

            {/* Number */}
            <span className="card-number">0{i + 1}</span>

            {/* Icon */}
            <div className="card-icon">{service.icon}</div>

            {/* Title */}
            <h3 className="card-title">
              {service.title}
              <br />
              {service.desc}
            </h3>

            {/* Read More */}
            <Link to={service.link} className="read-more">
              <span>READ MORE</span>
              <span className="read-arrow">→</span>
            </Link>

            {/* Hover overlay */}
            <div className="card-overlay"></div>
          </motion.div>
        ))}
      </motion.section>

      {/* Bottom Line */}
      <div className="services-bottom-line"></div>
    </div>
  );
};

export default Services;