import React, { useState } from "react";
import "./testimonials.css";
import { aosAnimations, withDelay } from "../utils/animations";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Client Name",
      role: "Position, Company Name",
      image: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      text: "Add your client testimonial here. This is where your satisfied clients can share their experience working with you on their projects. Replace this text with actual feedback from your real clients.",
      project: "Project Name",
      date: "Month Year",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonials-page">
      {/* ===== Animated Background ===== */}
      <div className="bg-grid"></div>
      <div className="bg-blur blur-1"></div>
      <div className="bg-blur blur-2"></div>
      <div className="bg-blur blur-3"></div>

      {/* Decorative Background Elements */}
      <div className="bg-blur-dot"></div>
      <div className="bg-hatch-circle"></div>

      {/* ===== HEADER SECTION ===== */}
      <header className="testimonials-header" {...aosAnimations.fadeDown}>
        <div className="header-content">
          <h1 className="testimonials-title">TESTIMONIALS</h1>
          <p className="testimonials-subtitle" {...withDelay(aosAnimations.fadeUp, 100)}>
            What my clients say about working with me. Real feedback from real
            projects that showcase the value and quality of my work.
          </p>
        </div>
      </header>

      {/* ===== FEATURED TESTIMONIAL ===== */}
      <section className="featured-testimonial">
        <div className="testimonial-card featured" {...withDelay(aosAnimations.zoomIn, 100)}>
          {/* Quote Icon */}
          <div className="quote-icon">"</div>

          {/* Client Image */}
          <div className="client-image">
            <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} />
          </div>

          {/* Rating */}
          <div className="rating">
            {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
              <span key={i} className="star">★</span>
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="testimonial-text">{testimonials[activeIndex].text}</p>

          {/* Client Info */}
          <div className="client-info">
            <h3 className="client-name">{testimonials[activeIndex].name}</h3>
            <p className="client-role">{testimonials[activeIndex].role}</p>
          </div>

          {/* Project Info */}
          <div className="project-info">
            <div className="project-detail">
              <span className="detail-label">Project:</span>
              <span className="detail-value">{testimonials[activeIndex].project}</span>
            </div>
            <div className="project-detail">
              <span className="detail-label">Date:</span>
              <span className="detail-value">{testimonials[activeIndex].date}</span>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="testimonial-nav">
            <button className="nav-btn prev" onClick={prevTestimonial}>
              <span>←</span>
            </button>
            <div className="nav-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === activeIndex ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                ></button>
              ))}
            </div>
            <button className="nav-btn next" onClick={nextTestimonial}>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ===== ALL TESTIMONIALS GRID ===== */}
      <section className="testimonials-grid">
        <h2 className="grid-title" {...aosAnimations.fadeUp}>All Client Reviews</h2>
        <div className="grid-container">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card small ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              {...withDelay(aosAnimations.fadeUp, index * 150)}
            >
              <div className="card-header">
                <div className="client-avatar">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="card-info">
                  <h4 className="card-name">{testimonial.name}</h4>
                  <p className="card-role">{testimonial.role}</p>
                </div>
              </div>

              <div className="card-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star-small">★</span>
                ))}
              </div>

              <p className="card-text">{testimonial.text}</p>

              <div className="card-footer">
                <span className="card-project">{testimonial.project}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="testimonial-stats">
        <div className="stat-box" {...withDelay(aosAnimations.zoomIn, 100)}>
          <div className="stat-number">50+</div>
          <div className="stat-label">Happy Clients</div>
        </div>
        <div className="stat-box" {...withDelay(aosAnimations.zoomIn, 200)}>
          <div className="stat-number">5.0</div>
          <div className="stat-label">Average Rating</div>
        </div>
        <div className="stat-box" {...withDelay(aosAnimations.zoomIn, 300)}>
          <div className="stat-number">100%</div>
          <div className="stat-label">Satisfaction Rate</div>
        </div>
        <div className="stat-box" {...withDelay(aosAnimations.zoomIn, 400)}>
          <div className="stat-number">3+</div>
          <div className="stat-label">Years Experience</div>
        </div>
      </section>

      {/* Bottom Line */}
      <div className="testimonials-bottom-line"></div>
    </div>
  );
};

export default Testimonials;
