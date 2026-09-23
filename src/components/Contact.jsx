import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./contact.css";
import { aosAnimations, withDelay } from "../utils/animations";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaInstagram, FaFacebook } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    // Web3Forms - Free & Easy Email Sending
    // Get your access key from: https://web3forms.com/
    const accessKey = "8afe0aad-4ae1-4766-95d5-34334b120ab5"; // Replace with your key from web3forms.com

    const formDataToSend = {
      access_key: accessKey,
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: "jawadaslam425@gmail.com", // Your email
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      const result = await response.json();

      if (result.success) {
        setMessage({
          type: "success",
          text: "✅ Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setMessage({
          type: "error",
          text: "❌ Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage({
        type: "error",
        text: "❌ Network error. Please check your internet connection.",
      });
    } finally {
      setLoading(false);
      // Clear message after 5 seconds
      setTimeout(() => {
        setMessage({ type: "", text: "" });
      }, 5000);
    }
  };

  return (
    <main className="contact-page">
      {/* Animated Background */}
      <div className="bg-grid"></div>
      <div className="bg-blur blur-1"></div>
      <div className="bg-blur blur-2"></div>
      <div className="bg-blur blur-3"></div>

      {/* Decorative Elements */}
      <div className="contact-glow-dot"></div>
      <div className="contact-dot-pattern"></div>

      {/* Header */}
      <header className="projects-header" {...aosAnimations.fadeDown}>
        <Link to="/" className="back-btn">
          <span className="back-icon">←</span>
          <span>Back to Home</span>
        </Link>
        <div className="logo">
          <span className="logo-mark">J</span>
          <span className="logo-text">Jawad</span>
        </div>
      </header>

      <div className="contact-container">
        {/* Header Section */}
        <section className="contact-header" {...aosAnimations.fadeUp}>
          <h1>GET IN TOUCH</h1>
          <p {...withDelay(aosAnimations.fadeUp, 100)}>
            Have a question or want to work together? Drop me a message and I'll
            get back to you as soon as possible.
          </p>
        </section>

        {/* Contact Content */}
        <section className="contact-content">
          {/* Contact Form */}
          <div className="form-wrapper" {...aosAnimations.fadeRight}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div
                className="form-group"
                {...withDelay(aosAnimations.fadeRight, 100)}
              >
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Muhammmad"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div
                className="form-group"
                {...withDelay(aosAnimations.fadeRight, 200)}
              >
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="jawadaslam425@email.com  "
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div
                className="form-group"
                {...withDelay(aosAnimations.fadeRight, 300)}
              >
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can I help you?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div
                className="form-group"
                {...withDelay(aosAnimations.fadeRight, 400)}
              >
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {message.text && (
                <div className={`form-message ${message.type}`}>
                  {message.text}
                </div>
              )}

              <button
                type="submit"
                className="submit-btn"
                disabled={loading}
                {...withDelay(aosAnimations.zoomIn, 500)}
              >
                <span>{loading ? "Sending..." : "Send Message"}</span>
                <span className="btn-arrow">→</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-wrapper" {...aosAnimations.fadeLeft}>
            <div className="info-box">
              <h3>Contact Information</h3>
              <p className="info-description">
                Feel free to reach out through any of these channels
              </p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <HiMail />
                  </div>
                  <div className="info-content">
                    <h4>Email</h4>
                    <a href="mailto:jawadaslam425@gmail.com">jawadaslam425@gmail.com</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <HiPhone />
                  </div>
                  <div className="info-content">
                    <h4>Phone</h4>
                    <a href="tel:+923288630600">+92 328 8630-600</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <HiLocationMarker />
                  </div>
                  <div className="info-content">
                    <h4>Location</h4>
                    <p>Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="social-connect">
                <h4>Connect With Me</h4>
                <div className="social-icons">
                  <a
                    href="https://github.com/Offical-Jawad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/m-jawad-aslam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/jawad.diary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaInstagram />Instagram</a>
                  <a
                    href="https://web.facebook.com/Mr.Perfect.Jawad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaFacebook />FaceBook</a>
                </div>
              </div>

              <div className="availability">
                <span className="status-indicator"></span>
                <span>Available for freelance projects</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="quick-nav">
          <Link to="/projects" className="nav-card">
            <div className="nav-card-content">
              <h3>View Projects</h3>
              <p>Check out my portfolio</p>
            </div>
            <span className="nav-arrow">→</span>
          </Link>

          <Link to="/resume" className="nav-card">
            <div className="nav-card-content">
              <h3>My Resume</h3>
              <p>Download my CV</p>
            </div>
            <span className="nav-arrow">↓</span>
          </Link>

          <Link to="/about" className="nav-card">
            <div className="nav-card-content">
              <h3>About Me</h3>
              <p>Learn more about me</p>
            </div>
            <span className="nav-arrow">→</span>
          </Link>
        </section>
      </div>

      {/* Bottom Line */}
      <div className="contact-bottom-line"></div>
    </main>
  );
};

export default Contact;
