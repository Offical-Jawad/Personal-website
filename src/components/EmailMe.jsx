import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./emailme.css";
import { aosAnimations, withDelay } from "../utils/animations";
import {
  FaArrowLeft,
  FaEnvelope,
  FaCopy,
  FaCheck,
  FaPaperPlane,
  FaEnvelopeOpenText,
  FaComments,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa6";

const EmailMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/email-me", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Email sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert(data.error || "Failed to send email");
      }
    } catch (error) {
      alert("Failed to connect to server");
      console.error("Error:", error);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("jawadaslam425@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="emailme-page">
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
      <section className="emailme-hero">
        <div className="hero-content">
          <div className="email-icon" {...aosAnimations.zoomIn}>
            <FaEnvelope />
          </div>
          <h1 className="page-title" {...withDelay(aosAnimations.fadeUp, 100)}>EMAIL ME</h1>
          <p className="page-subtitle" {...withDelay(aosAnimations.fadeUp, 200)}>
            Get in touch directly through email. I'll respond within 24 hours.
          </p>

          {/* Email Display with Copy Button */}
          <div className="email-display" {...withDelay(aosAnimations.zoomIn, 300)}>
            <div className="email-box">
              <span className="email-address">jawadaslam425@gmail.com</span>
              <button
                className={`copy-btn ${copied ? "copied" : ""}`}
                onClick={copyEmail}
              >
                {copied ? (
                  <>
                    <FaCheck /> Copied!
                  </>
                ) : (
                  <>
                    <FaCopy /> Copy
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Email Form */}
      <section className="quick-email-section">
        <div className="section-container">
          <h2 className="section-title" {...aosAnimations.fadeUp}>Send Quick Email</h2>
          <p className="section-desc" {...withDelay(aosAnimations.fadeUp, 100)}>
            Fill out the form below and it will open your default email client
          </p>

          <form className="email-form" onSubmit={handleSubmit} {...withDelay(aosAnimations.fadeUp, 200)}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Muhammad"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="jawadaslam425@example.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Inquiry"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {typeof window !== "undefined" && (
              <div className="message-container">
                {typeof alert === "function" && <div />}
              </div>
            )}

            <button type="submit" className="submit-btn" disabled={loading}>
              <span>{loading ? "Sending..." : "Send Email"}</span>
              <span className="btn-arrow" style={{ display: 'inline-flex', alignItems: 'center' }}>
                <FaPaperPlane />
              </span>
            </button>
          </form>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="alternative-contacts">
        <div className="section-container">
          <h2 className="section-title" {...aosAnimations.fadeUp}>Other Ways to Connect</h2>
          <div className="contact-grid">
            <Link to="/contact-form" className="contact-card" {...withDelay(aosAnimations.fadeUp, 100)}>
              <div className="card-icon"><FaEnvelopeOpenText /></div>
              <h3>Contact Form</h3>
              <p>Fill out our detailed contact form</p>
              <span className="card-arrow"><FaArrowRight /></span>
            </Link>

            <Link to="/lets-talk" className="contact-card" {...withDelay(aosAnimations.fadeUp, 200)}>
              <div className="card-icon"><FaComments /></div>
              <h3>Start a Project</h3>
              <p>Discuss your project requirements</p>
              <span className="card-arrow"><FaArrowRight /></span>
            </Link>

            <a
              href="https://www.linkedin.com/in/m-jawad-aslam"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              {...withDelay(aosAnimations.fadeUp, 300)}
            >
              <div className="card-icon"><FaLinkedinIn /></div>
              <h3>LinkedIn</h3>
              <p>Connect with me professionally</p>
              <span className="card-arrow"><FaArrowRight /></span>
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <div className="emailme-bottom-line"></div>
    </div>
  );
};

export default EmailMe;
