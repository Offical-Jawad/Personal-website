import React from "react";
import { useNavigate } from "react-router-dom";
import "./casestudy.css";
import store from "../assets/j.store.png";
import move from"../assets/mov.png"

const projects = [
  {
    tag: "WEB DESIGN",
    title: "j.store e-commece website",
    para: "A modern e-commerce fashion platform built with React.js featuring premium clothing collections, intuitive shopping cart, wishlist functionality, advanced filtering system, responsive design, and seamless user experience for online shopping.",
    description: "Premium online fashion store with seamless shopping experience, featuring intuitive cart management, advanced product filtering, wishlist functionality, and responsive design for all devices.",
    visual: "portfolio",
  },
  {
    tag: "WEB DESIGN",
    title: "Snow Removel Website",
    para: "Professional snow removal service website showcasing reliable winter solutions, emergency response services, residential and commercial offerings, real-time booking system, service areas coverage, customer testimonials, and competitive pricing packages.",
    description: "Reliable winter snow removal services for residential and commercial properties, offering emergency response, real-time booking, competitive pricing, and comprehensive coverage across service areas.",
    visual: "agency",
    reverse: true,
  },
  {
    tag: "WEB DESIGN",
    title: "Agency - Modern Digital Agency Landing Page",
    para: "Contemporary digital agency landing page highlighting creative services, innovative design solutions, development expertise, marketing strategies, portfolio showcases, client success stories, team collaboration, and comprehensive digital transformation consulting services.",
    description: "Creative digital agency offering innovative design and development solutions worldwide, showcasing portfolio success stories, team expertise, marketing strategies, and comprehensive digital transformation consulting services.",
    visual: "saas",
  },
];

const ProjectMockup = ({ type }) => {
  if (type === "portfolio") {
    return (
      <div className="mockup-stack portfolio-stack">
        <img
          src={store}
          alt="j.store E-commerce Website"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      </div>
    );
  }

  if (type === "agency") {
    return (
      <div className="browser-mockup">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
          alt="Agency Website"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      </div>
    );
    
  }

  return (
    <div className="saas-mockup">
      <img 
        src={move} 
        alt="SaaS Dashboard" 
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
      />
    </div>
  );
};

const CaseStudies = () => {
  const navigate = useNavigate();

  return (
    <main className="case-studies-page">
      {/* ===== Animated Background ===== */}
      <div className="bg-grid"></div>
      <div className="bg-blur blur-1"></div>
      <div className="bg-blur blur-2"></div>
      <div className="bg-blur blur-3"></div>

      {/* Decorative Elements */}
      <div className="case-glow-dot"></div>
      <div className="case-dot-pattern"></div>

      {/* Header */}
      <section className="case-study-header">
        <h1>CASE STUDY</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </section>

      {/* Projects */}
      <section className="case-projects">
        {projects.map((project, index) => (
          <article
            className={`case-project-row ${project.reverse ? "reverse" : ""}`}
            key={index}
          >
            <div className="case-project-visual">
              <ProjectMockup type={project.visual} />
            </div>

            <div className="case-project-info">
              <span className="case-tag">{project.tag}</span>

              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a 
                href="#details" 
                className="case-link"
                onClick={(e) => {
                  e.preventDefault();
                  if (project.title.toLowerCase().includes("j.store")) {
                    navigate("/project/jstore");
                  }
                }}
              >
                <span>See Details</span>
                <span className="case-link-arrow">↗</span>
              </a>
            </div>
          </article>
        ))}
      </section>

      {/* Bottom Line */}
      <div className="case-bottom-line"></div>
    </main>
  );
};

export default CaseStudies;
