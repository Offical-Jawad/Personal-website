import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./home.css";
import jawad from "../assets/aslam.png";
import TypingText from "./animations/TypingText";
import TiltCard from "./animations/TiltCard";
import MagneticButton from "./animations/MagneticButton";
import AnimatedBackground from "./animations/AnimatedBackground";
import { fadeInUp, staggerContainer, scaleIn, fadeInLeft, viewport } from "../utils/animationVariants";
import { slideRightToLeft, navbarFadeDown } from "../utils/animations";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [time, setTime] = useState(new Date());
  const [loaded, setLoaded] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, years: 0, clients: 0 });
  const heroRef = useRef(null);

  // Clock
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Page load
  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  // Dark mode toggle
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Animated Counters
  useEffect(() => {
    if (!loaded) return;
    const targets = { projects: 120, years: 5, clients: 80 };
    const duration = 2000;
    const steps = 60;
    let current = { projects: 0, years: 0, clients: 0 };
    const increments = {
      projects: targets.projects / steps,
      years: targets.years / steps,
      clients: targets.clients / steps,
    };
    let step = 0;
    const interval = setInterval(() => {
      step++;
      current = {
        projects: Math.min(Math.round(current.projects + increments.projects), targets.projects),
        years: Math.min(Math.round(current.years + increments.years), targets.years),
        clients: Math.min(Math.round(current.clients + increments.clients), targets.clients),
      };
      setCounters({ ...current });
      if (step >= steps) clearInterval(interval);
    }, duration / steps);
    return () => clearInterval(interval);
  }, [loaded]);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { label: "Projects", desc: "Featured works", href: "/projects", isRoute: true },
    { label: "About", desc: "My story", href: "/about", isRoute: true },
    { label: "Contact", desc: "Get in touch", href: "/contact-form", isRoute: true },
  ];

  const skills = ["WEB DESIGN",  "DEVELOPMENT", "WEBFLOW", "BRANDING", "UI/UX", "FIGMA", "REACT", "MOTION"];



  return (
    <div className={`home-wrapper ${loaded ? "page-loaded" : ""}`}>
      {/* Animated Background with Floating Orbs */}
      <AnimatedBackground variant="default" opacity={0.6} blur="100px" />

      {/* ============ HEADER ============ */}
      <motion.header 
        className="home-header"
        initial="hidden"
        animate="visible"
        variants={navbarFadeDown}
      >
        <div className="header-left">
          <div className="logo">
            <span className="logo-mark">J</span>
            <span className="logo-text">Jawad</span>
            <span className="live-dot"></span>
          </div>
        </div>

        <nav className="nav-menu glass">
          {navItems.map((item, i) => (
            item.isRoute ? (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              >
                <Link
                  to={item.href}
                  className="nav-item"
                >
                  <span className="nav-label">{item.label}</span>
                  <span className="nav-desc">{item.desc}</span>
                </Link>
              </motion.div>
            ) : (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              >
                <a
                  href={item.href}
                  className="nav-item"
                >
                  <span className="nav-label">{item.label}</span>
                  <span className="nav-desc">{item.desc}</span>
                </a>
              </motion.div>
            )
          ))}
        </nav>

        <div className="header-right">


          {/* Theme Toggle */}

        </div>
      </motion.header>

      {/* ============ HERO SECTION ============ */}
      <motion.main 
        className="hero-section" 
        ref={heroRef}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
      >
        <div className="hero-left">
          <motion.div className="badge-pill reveal" variants={fadeInUp}>
            <span className="pulse-dot"></span>
            <span>Available for projects · 2025</span>
          </motion.div>

          <motion.span className="wave-emoji reveal delay-1" variants={scaleIn}>👋</motion.span>

          <motion.h1 className="hero-title reveal delay-2" variants={fadeInUp}>
            <span className="title-line">Hello! I'm</span>
            <span className="title-line">
              <span className="text-gradient-animate">Muhammad Jawad</span>
            </span>
          </motion.h1>

          <motion.div className="hero-roles reveal delay-3" variants={fadeInUp} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="role-pill">
              <TypingText
                texts={[
                  "Full-Stack Web Developer",
                  "Frontend Architecture Engineer",
                  "React & MERN Specialist",
                  "UI/UX & Motion Enthusiast"
                ]}
                typingSpeed={80}
                deletingSpeed={45}
                pauseDuration={2000}
              />
            </span>
          </motion.div>
          <motion.p className="hero-desc reveal delay-4" variants={fadeInUp}>
            I'm a <strong className="text-highlight">full-stack web developer</strong>, and{" "}
            <strong className="text-highlight">creative problem solver</strong> building fast,
            scalable digital experiences for forward-thinking brands.
          </motion.p>
          <motion.ul className="hero-list reveal delay-5" variants={fadeInUp}>
            <li>
              <span className="check-icon">✓</span>
              <span>Accessible, mobile-first responsive design</span>
            </li>
            <li>
              <span className="check-icon">✓</span>
              <span>Clean, performant frontend architecture</span>
            </li>
            <li>
              <span className="check-icon">✓</span>
              <span>RESTful APIs & backend integrations</span>
            </li>
          </motion.ul>

          <motion.div className="hero-buttons reveal delay-6" variants={fadeInUp} style={{ display: 'flex', gap: '15px' }}>
            <MagneticButton strength={0.3}>
              <Link
                to="/lets-talk"
                className="btn btn-ghost shimmer-btn"
              >
                <span className="btn-text">Let's Talk</span>
                <span className="btn-icon">→</span>
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.3}>
              <Link
                to="/resume"
                className="btn btn-ghost shimmer-btn"
              >
                <span className="btn-text">Download CV</span>
                <span className="btn-icon">↓</span>
              </Link>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Hero Image Block */}
        <motion.div className="hero-right reveal delay-3" variants={slideRightToLeft}>
          <div className="image-stage">
            {/* Rotating Rings */}
            <div className="deco-ring ring-1"></div>
            <div className="deco-ring ring-2"></div>
            <div className="deco-ring ring-3"></div>

            {/* Text orbit */}
            <div className="orbit-text">
              <svg viewBox="0 0 200 200" width="100%" height="100%">
                <defs>
                  <path
                    id="circle"
                    d="M 100, 100 m -90, 0 a 90,90 0 1,1 180,0 a 90,90 0 1,1 -180,0"
                  />
                </defs>
                <text fill="currentColor" fontSize="12" fontWeight="600" letterSpacing="4">
                  <textPath href="#circle">
                    ✦ PRODUCT DESIGNER ✦ UX STRATEGIST ✦ AVAILABLE FOR HIRE
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Hello Circle */}
            <div className="hello-circle">
              <span>Hello</span>
            </div>

            {/* Curly Arrow */}
            <svg className="curly-svg" viewBox="0 0 100 100">
              <path
                d="M10 50 Q 30 10, 50 50 T 90 50"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                className="curly-path"
              />
            </svg>

            {/* Profile Image with 3D Tilt */}
            <TiltCard maxTilt={15} style={{ display: 'inline-block' }}>
              <div className="profile-frame">
                <img
                  src={jawad}
                  alt="jawad"
                  className="profile-img"
                />
                <div className="frame-corner tl"></div>
                <div className="frame-corner tr"></div>
                <div className="frame-corner bl"></div>
                <div className="frame-corner br"></div>
              </div>
            </TiltCard>

            {/* Floating Tags */}
            <div className="float-tag tag-1">
              <span className="tag-dot green"></span> UX Design
              <span className="tag-count">98%</span>
            </div>
            <div className="float-tag tag-2">
              <span className="tag-dot blue"></span> Figma Pro
              <span className="tag-count">5y+</span>
            </div>
            <div className="float-tag tag-3">
              <span className="tag-dot purple"></span> Strategy
              <span className="tag-count">★★★</span>
            </div>

            {/* Profile Verified */}
            <div className="verified-badge">
              <span>  ✓</span>
              <div>
                <strong>Verified Pro</strong>
                <small>Top 59%</small>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.main>
      {/* ============ MARQUEE BAR ============ */}
      <footer className="services-bar">
        <div className="marquee-track">
          {[...skills, ...skills, ...skills].map((skill, i) => (
            <React.Fragment key={i}>
              <span className="dot-sep">✦</span>
              <span className="service-text">{skill}</span>
            </React.Fragment>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Home;