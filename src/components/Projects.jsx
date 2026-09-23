import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./projects.css";
import { viewport } from "../utils/animationVariants";
import { 
  fadeInUp, 
  slideRightToLeft, 
  staggerContainer, 
  staggerContainerFast,
  scaleIn,
  cardFlipVariant
} from "../utils/animations";

const Projects = () => {
  const [loaded, setLoaded] = useState(false);
  const [flippedCard, setFlippedCard] = useState(null);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "j.store E-Commerce Platform",
      category: "web",
      description: "Modern fashion shopping experience featuring multi-criteria live filtering, interactive cart & wishlist drawer, instant search, and a streamlined responsive checkout flow.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=400&q=80",
      tags: ["React", "Context API", "E-Commerce"],
      year: "2024",
      details: "A comprehensive e-commerce platform built with React.js and Context API. Features real-time cart calculations, persistent wishlist storage, advanced multi-facet product filtering by category, gender, and price range, coupled with high-speed search and mobile-optimized responsive UX.",
      link: "/project/jstore-details"
    },
    {
      id: 2,
      title: "Furniro — Modern Furniture & Living",
      category: "web",
      description: "Modern furniture e-commerce website designed to provide a clean, elegant, and user-friendly shopping experience with category filtering, cart, wishlist, and quick preview.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Vite", "Tailwind CSS", "E-Commerce"],
      year: "2024",
      details: "Furniro is a modern furniture and home living e-commerce website built with React, Vite, and Tailwind CSS. Features deep green and warm golden aesthetics, category-based browsing (Living Room, Bedroom, Chairs, Office, Lighting, Sofas), wishlist, shopping cart, quick preview modals, and product reviews UI.",
      link: "/project/furniro-details"
    },
    {
      id: 3,
      title: "Snow Removal Service Website",
      category: "web",
      description: "Professional winter service platform featuring automated scheduling, interactive coverage mapping, live quote calculation, and emergency service dispatch.",
      image: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&w=400&q=80",
      tags: ["Node.js", "Express", "EJS"],
      year: "2024",
      details: "Full-scale service platform developed with Node.js and Express. Features online slot booking, interactive geo-radius coverage map, automated price estimators for residential and commercial contracts, customer reviews, and integrated email booking confirmation.",
      link: "/project/snow-removal-details"
    },
    {
      id: 4,
      title: "Personal Portfolio Website",
      category: "web",
      description: "Creative developer portfolio showcasing interactive 3D card flips, dark-mode styling, fluid Framer Motion micro-animations, and full SEO optimization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
      tags: ["React", "UI/UX", "SEO"],
      year: "2024",
      details: "Modern developer portfolio built with React and Framer Motion. Engineered with 100% Lighthouse SEO best practices, interactive project detail modals, silky smooth page transitions, responsive layout hierarchy, and direct client contact workflows.",
      link: "/project/portfolio-details"
    },
    {
      id: 5,
      title: "NovaHire - Landing Page",
      category: "web",
      description: "High-converting talent recruitment platform landing page featuring sleek purple gradient styling, partner social proof badges, and interactive value tiers.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80",
      tags: ["Landing Page", "React", "Modern UI"],
      year: "2024",
      details: "Conversion-focused landing page for NovaHire connecting top marketing leaders with high-growth companies. Highlights an engaging hero section with 'Unlock Top Marketing Talent You Thought Was Out of Reach' headline, partner trust showcases (Clearwave, StartGrow, Luma, ProSign), and CTA-driven funnel architecture.",
      link: "#"
    },
    {
      id: 6,
      title: "CRUD Posts Application",
      category: "app",
      description: "Full-stack content management system featuring MongoDB data persistence, RESTful API routing, server-side validation, and dynamic EJS view rendering.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80",
      tags: ["Node.js", "Express", "MongoDB", "EJS"],
      year: "2024",
      details: "End-to-end CRUD web application constructed with Express.js and MongoDB using Mongoose ODM. Features user account management, post authoring with rich previews, method-override RESTful routes for updates and deletions, and secure server-side form validation.",
      link: "#"
    },
    {
      id: 7,
      title: "M Javad Aslam - Portfolio",
      category: "web",
      description: "Clean editorial portfolio featuring custom responsive CSS, profile showcase card, curated project deep dives, and an interactive contact interface.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=400&q=80",
      tags: ["HTML", "CSS", "Responsive", "Clean Design"],
      year: "2024",
      details: "Lightweight, high-performance portfolio crafted with semantic HTML5 and vanilla CSS. Incorporates custom layout architecture, showcase cards for SaaS and design systems, structured technical skillset breakdowns, and optimized cross-browser accessibility.",
      link: "#"
    },
    {
      id: 8,
      title: "React Calculator App",
      category: "app",
      description: "Modern mathematical calculator application featuring real-time calculation history, square root & percentage logic, backspace editing, and tactile UI feedback.",
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=400&q=80",
      tags: ["React", "CSS Modules", "Hooks"],
      year: "2024",
      details: "Interactive calculation suite built with React functional components and hooks. Features precision float arithmetic, square root (√) computations, percentage breakdowns, backspace history editing, keyboard input listeners, and responsive CSS modular components.",
      link: "#"
    },
  ];

  return (
    <div className={`projects-wrapper ${loaded ? "page-loaded" : ""}`}>
      {/* Header */}
      <motion.header 
        className="projects-header"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeInUp}
      >
        <Link to="/" className="back-btn">
          <span className="back-icon">←</span>
          <span>Back to Home</span>
        </Link>
        <div className="logo">
          <span className="logo-mark">J</span>
          <span className="logo-text">Jawad</span>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        className="projects-hero"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
      >
        <div className="hero-content">
          <motion.span className="about-label" variants={fadeInUp}>Featured Works</motion.span>
          <motion.h1 className="page-title reveal delay-1" variants={fadeInUp}>
            Featured Projects
          </motion.h1>
          <motion.p className="page-desc reveal delay-2" variants={fadeInUp}>
            Explore my latest work in web design, app development, and branding.
            Each project represents a unique challenge and creative solution.
          </motion.p>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section 
        className="projects-grid"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainerFast}
      >
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="project-card-wrapper"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className={`project-card-flip ${flippedCard === project.id ? "flipped" : ""}`}
              variants={slideRightToLeft}
              onClick={() => setFlippedCard(flippedCard === project.id ? null : project.id)}
              style={{ 
                transformStyle: "preserve-3d",
                cursor: "pointer"
              }}
              whileHover={{ scale: 1.02 }}
            >
              {/* FRONT SIDE */}
              <div className="card-front" style={{ backfaceVisibility: "hidden" }}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <span className="flip-hint">Click to flip →</span>
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-year">{project.year}</span>
                  </div>
                  <p className="project-desc">{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* BACK SIDE */}
              <div 
                className="card-back" 
                style={{ 
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%"
                }}
              >
                <div className="card-back-content">
                  <h3 className="back-title">{project.title}</h3>
                  <p className="project-details-back">{project.details}</p>
                  
                  <div className="back-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag-back">{tag}</span>
                    ))}
                  </div>
                  
                  <Link 
                    to={project.link} 
                    className="view-btn-back"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>View Full Details</span>
                    <span className="arrow">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="projects-cta reveal"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
      >
        <div className="cta-content">
          <motion.h2 variants={fadeInUp}>Have a project in mind?</motion.h2>
          <motion.p variants={fadeInUp}>Let's collaborate and create something amazing together.</motion.p>
          <motion.div variants={scaleIn}>
            <Link to="/lets-talk" className="btn btn-primary magnetic">
              <span className="btn-text">Get in Touch</span>
              <span className="btn-icon">→</span>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Projects;
