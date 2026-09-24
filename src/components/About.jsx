import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import jawad from "../assets/aslam.png";
import { aosAnimations, withDelay } from '../utils/animations';

const About = () => {
  return (
    <div className="about-page">
      {/* Header */}
      <header className="about-header" {...aosAnimations.fadeDown}>
        <Link to="/" className="back-btn">
          <span className="back-icon">←</span>
          <span>Back to Home</span>
        </Link>
        <div className="logo">
          <span className="logo-mark">J</span>
          <span className="logo-text">Jawad</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-container">
          <div className="hero-content">
            <span className="about-label" {...aosAnimations.fadeRight}>ABOUT ME</span>
            <h1 className="about-title" {...withDelay(aosAnimations.fadeUp, 100)}>
              Creating Digital <br />
              <span className="highlight">Experiences</span>
            </h1>
            <p className="about-intro" {...withDelay(aosAnimations.fadeUp, 200)}>
              I'm Jawad Aslam, a passionate web designer and developer dedicated to
              crafting beautiful, functional, and user-centered digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="about-container">
          <div className="content-grid">
            {/* Image */}
            <div className="about-image" {...aosAnimations.fadeLeft}>
              <img src={jawad} alt="Jawad Aslam" />
            </div>

            {/* Story */}
            <div className="about-story" {...aosAnimations.fadeRight}>
              <h2>My Journey</h2>
              <p>
                With over 2 years of experience in web design and development, I specialize
                in creating seamless digital experiences that combine aesthetic appeal with
                functional excellence. My technical expertise includes PHP, Laravel, Python,
                JavaScript, React.js, HTML5, CSS3, and modern web technologies.
              </p>

              <p>
                My approach to development is rooted in understanding user needs and business
                goals. I believe that great digital solutions are not just about how they
                look, but also how they work, perform, and scale. I focus on writing clean,
                maintainable code and building secure, user-friendly, and responsive
                applications.
              </p>

              <p>
                I've had the privilege of working with diverse clients across various
                industries, including Real Estate, Accounting, Business Management, and
                Multi-Company/Multi-Tenant systems. I help businesses bring their digital
                visions to life by developing customized web applications, management
                systems, dashboards, and scalable business solutions that improve efficiency
                and support long-term growth.
              </p>


              {/* Stats */}
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="about-skills" {...aosAnimations.fadeUp}>
            <h2>Skills & Expertise</h2>
            <div className="skills-grid">
              <div className="skill-card" {...withDelay(aosAnimations.fadeUp, 100)}>
                <h3>Design</h3>
                <ul>
                  <li>UI/UX Design</li>
                  <li>Web Design</li>
                  <li>Brand Identity</li>
                  <li>Prototyping</li>
                </ul>
              </div>
              <div className="skill-card" {...withDelay(aosAnimations.fadeUp, 200)}>
                <h3>Development</h3>
                <ul>
                  <li>Python</li>
                  <li>PHP</li>
                  <li>Laravel</li>
                  <li>React.js</li>
                  <li>Node.js / Express</li>
                  <li>JavaScript</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div className="skill-card" {...withDelay(aosAnimations.fadeUp, 300)}>
                <h3>Tools</h3>
                <ul>
                  <li>Figma</li>
                  <li>Adobe XD</li>
                  <li>Photoshop</li>
                  <li>VS Code</li>
                </ul>
              </div>
            </div>
          </div>


          {/* CTA */}
          <div className="about-cta" {...withDelay(aosAnimations.fadeUp, 400)}>
            <h2>Let's Work Together</h2>
            <p>
              I'm always excited to take on new projects and collaborate with
              passionate people. Let's create something amazing together.
            </p>
            <Link to="/contact" className="cta-button">
              Get in Touch →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
