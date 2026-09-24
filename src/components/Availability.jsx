import { Link } from "react-router-dom";
import "./availability.css";
import { aosAnimations, withDelay } from "../utils/animations";
import {
  FaArrowLeft,
  FaCheck,
  FaRocket,
  FaBolt,
  FaBriefcase,
  FaMobileScreen,
  FaGlobe,
  FaCartShopping,
  FaLaptopCode,
} from "react-icons/fa6";

const Availability = () => {
  return (
    <div className="availability-page">
      {/* Background Elements */}
      <div className="bg-grid"></div>
      <div className="bg-blur blur-1"></div>
      <div className="bg-blur blur-2"></div>
      <div className="bg-blur blur-3"></div>

      {/* Header */}
      <header className="about-header" {...aosAnimations.fadeDown}>
        <Link to="/" className="back-btn">
          <span className="back-icon"><FaArrowLeft /></span>
          <span>Back to Home</span>
        </Link>
        <div className="logo">
          <span className="logo-mark">J</span>
          <span className="logo-text">Jawad</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="availability-hero">
        <div className="status-badge" {...aosAnimations.zoomIn}>
          <span className="status-dot"></span>
          <span>Currently Available</span>
        </div>
        <h1 className="page-title" {...withDelay(aosAnimations.fadeUp, 100)}>MY AVAILABILITY</h1>
        <p className="page-subtitle" {...withDelay(aosAnimations.fadeUp, 200)}>
          I'm available for new projects and collaborations. Let's discuss how we
          can work together to bring your ideas to life.
        </p>
      </section>

      {/* Main Content */}
      <section className="availability-content">
        <div className="content-container">

          {/* Current Status Card */}
          <div className="status-card" {...withDelay(aosAnimations.fadeUp, 100)}>
            <div className="status-header">
              <h2>Current Status</h2>
              <span>● Available</span>
            </div>
            <div className="status-body">
              <div className="status-info">
                <div className="info-item">
                  <span className="info-label">Accepting New Projects</span>
                  <span className="info-value" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <FaCheck style={{ color: '#00b894' }} /> Yes
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Response Time</span>
                  <span className="info-value">Within 24 hours</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Timezone</span>
                  <span className="info-value">PKT (UTC+5)</span>
                </div>
              </div>
              <div className="status-cta">
                <Link to="/lets-talk" className="cta-btn">Start a Project →</Link>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="details-card" {...withDelay(aosAnimations.fadeUp, 150)}>
            <h2>Working Hours</h2>
            <p className="card-desc">Available anytime for your project needs</p>
            <div className="hours-grid">
              <div className="hour-row">
                <span className="hour-day">All Days</span>
                <span className="hour-time">Open Anytime</span>
                <span className="hour-status available">● Available</span>
              </div>
              <div className="hour-row">
                <span className="hour-day">Response Time</span>
                <span className="hour-time">Within 24 Hours</span>
                <span className="hour-status available">● Guaranteed</span>
              </div>
              <div className="hour-row">
                <span className="hour-day">Meeting Schedule</span>
                <span className="hour-time">Flexible Timing</span>
                <span className="hour-status available">● Your Timezone</span>
              </div>
              <div className="hour-row">
                <span className="hour-day">Emergency Support</span>
                <span className="hour-time">Available on Request</span>
                <span className="hour-status available">● Priority</span>
              </div>
            </div>
            <div className="hours-note">
              <p>* Feel free to contact me anytime - I'll respond within 24 hours</p>
              <p>* Flexible scheduling to match your timezone and preferences</p>
              <p>* Weekend and evening consultations available upon request</p>
              <p>* Video calls, voice calls, or text communication - your choice</p>
            </div>
          </div>

          {/* Service Options */}
          <div className="details-card" {...withDelay(aosAnimations.fadeUp, 200)}>
            <h2>Service Options</h2>
            <p className="card-desc">Available collaboration models</p>
            <div className="services-grid">
              <div className="service-item" {...withDelay(aosAnimations.zoomIn, 100)}>
                <div className="service-icon"><FaRocket /></div>
                <h3>Full-Time Projects</h3>
                <p>Dedicated focus on your project from start to finish with full commitment</p>
                <span className="service-status">Available</span>
              </div>
              <div className="service-item" {...withDelay(aosAnimations.zoomIn, 200)}>
                <div className="service-icon"><FaBolt /></div>
                <h3>Part-Time Work</h3>
                <p>Flexible hours for ongoing maintenance, updates, and smaller tasks</p>
                <span className="service-status">Available</span>
              </div>
              <div className="service-item" {...withDelay(aosAnimations.zoomIn, 300)}>
                <div className="service-icon"><FaBriefcase /></div>
                <h3>Consultation</h3>
                <p>Expert advice and technical guidance for your development team</p>
                <span className="service-status">Available</span>
              </div>
            </div>
          </div>

          {/* Project Timeline */}
          <div className="details-card" {...withDelay(aosAnimations.fadeUp, 250)}>
            <h2>Typical Project Timeline</h2>
            <p className="card-desc">Average turnaround time for different project types</p>
            <div className="timeline-list">
              <div className="timeline-item" {...withDelay(aosAnimations.fadeLeft, 100)}>
                <div className="timeline-icon"><FaMobileScreen /></div>
                <div className="timeline-content">
                  <h4>Landing Page</h4>
                  <p className="timeline-duration">1-2 Weeks</p>
                  <p className="timeline-desc">Single page website with responsive design</p>
                </div>
              </div>
              <div className="timeline-item" {...withDelay(aosAnimations.fadeLeft, 200)}>
                <div className="timeline-icon"><FaGlobe /></div>
                <div className="timeline-content">
                  <h4>Multi-Page Website</h4>
                  <p className="timeline-duration">3-4 Weeks</p>
                  <p className="timeline-desc">Complete website with multiple pages and features</p>
                </div>
              </div>
              <div className="timeline-item" {...withDelay(aosAnimations.fadeLeft, 300)}>
                <div className="timeline-icon"><FaCartShopping /></div>
                <div className="timeline-content">
                  <h4>E-Commerce Platform</h4>
                  <p className="timeline-duration">6-8 Weeks</p>
                  <p className="timeline-desc">Full e-commerce solution with payment integration</p>
                </div>
              </div>
              <div className="timeline-item" {...withDelay(aosAnimations.fadeLeft, 400)}>
                <div className="timeline-icon"><FaLaptopCode /></div>
                <div className="timeline-content">
                  <h4>Web Application</h4>
                  <p className="timeline-duration">8-12 Weeks</p>
                  <p className="timeline-desc">Custom web app with complex functionality</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="final-cta" {...withDelay(aosAnimations.fadeUp, 300)}>
            <h2>Ready to Work Together?</h2>
            <p>
              I'm available to take on new projects and would love to hear about
              yours. Let's discuss how we can collaborate.
            </p>
            <div className="cta-buttons" {...withDelay(aosAnimations.zoomIn, 400)}>
              <Link to="/lets-talk" className="btn-primary">Start a Project</Link>
              <Link to="/email-me" className="btn-secondary">Email Me</Link>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom Line */}
      <div className="availability-bottom-line"></div>
    </div>
  );
};

export default Availability;
