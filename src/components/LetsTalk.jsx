import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaLinkedinIn, FaGithub, FaTwitter, FaDribbble, FaInstagram, FaFacebook } from "react-icons/fa";
import "./letstalk.css";
import { aosAnimations, withDelay } from "../utils/animations";

const LetsTalk = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);
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

    // Using the same Web3Forms key as Contact.jsx
    const accessKey = "8afe0aad-4ae1-4766-95d5-34334b120ab5";
    const formDataToSend = {
      access_key: accessKey,
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "Not provided",
      subject: formData.subject,
      message: formData.message,
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
          text: "✅ Project inquiry sent successfully! I'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
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
      setTimeout(() => {
        setMessage({ type: "", text: "" });
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: <HiMail />,
      label: "Email",
      value: "jawadaslam425@gmail.com",
      link: "mailto:jawadaslam425@gmail.com",
    },
    {
      icon: <HiPhone />,
      label: "Phone",
      value: "+92 328 8630600",
      link: "tel:+923288630600",
    },
    {
      icon: <HiLocationMarker />,
      label: "Location",
      value: "Islamabad, Pakistan",
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/m-jawad-aslam",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/Offical-Jawad",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/jawad.diary",
    },
    {
      name: "Facebook",
      icon: <FaFacebook/>,
      url: "https://web.facebook.com/Mr.Perfect.Jawad",
    },
  ];

  return (
    <div className="letstalk-page">
      {/* Background Elements */}
      <div className="bg-grid"></div>
      <div className="bg-blur blur-1"></div>
      <div className="bg-blur blur-2"></div>
      <div className="bg-blur blur-3"></div>

      {/* Top Header with Back Button and Logo */}
      <header className="letstalk-top-header" {...aosAnimations.fadeDown}>
        <Link to="/" className="back-btn">
          <span className="back-icon">←</span>
          <span>Back to Home</span>
        </Link>
        <div className="logo">
          <span className="logo-mark">J</span>
          <span className="logo-text">Jawad</span>
        </div>
      </header>

      {/* Header Section */}
      <section className="letstalk-header">
        <div className="header-badge" {...aosAnimations.zoomIn}>
          <span>START A PROJECT</span>
        </div>
        <h1 className="page-title" {...withDelay(aosAnimations.fadeUp, 100)}>
          LET'S BUILD
          <br />
          <span>SOMETHING AMAZING</span>
        </h1>
        <p className="page-subtitle" {...withDelay(aosAnimations.fadeUp, 200)}>
          Ready to bring your ideas to life? Share your project details with me
          and let's collaborate to create a digital solution that exceeds your
          expectations.
        </p>
      </section>

      {/* Main Content Grid */}
      <section className="letstalk-content">
        {/* Left Side - Contact Info */}
        <div className="contact-info-section" {...aosAnimations.fadeRight}>
          <div className="info-header">
            <h2>Project Inquiries</h2>
            <p>Ready to start your project? Reach out through any channel</p>
          </div>

          <div className="info-cards">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-card" {...withDelay(aosAnimations.fadeRight, index * 100)}>
                <div className="info-icon">{info.icon}</div>
                <div className="info-content">
                  <span className="info-label">{info.label}</span>
                  {info.link ? (
                    <a href={info.link} className="info-value">{info.value}</a>
                  ) : (
                    <span className="info-value">{info.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="social-section" {...withDelay(aosAnimations.fadeUp, 300)}>
            <h3>Follow Me</h3>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.name}
                  {...withDelay(aosAnimations.zoomIn, 300 + index * 80)}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Availability Badge */}
          <div className="availability-badge" {...withDelay(aosAnimations.fadeUp, 400)}>
            <div className="pulse-indicator">
              <span className="pulse-dot"></span>
            </div>
            <div className="availability-text">
              <strong>Available for New Projects</strong>
              <span>Currently accepting client work</span>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form-section" {...aosAnimations.fadeLeft}>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div
                className={`form-group ${
                  focusedField === "name" ? "focused" : ""
                }`}
              >
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required
                  placeholder="Muhammad "
                />
              </div>

              <div
                className={`form-group ${
                  focusedField === "email" ? "focused" : ""
                }`}
              >
                <label htmlFor="email">Your Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                  placeholder="jawadaslam425@gmail.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div
                className={`form-group ${
                  focusedField === "phone" ? "focused" : ""
                }`}
              >
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="+92 328 8630600"
                />
              </div>

              <div
                className={`form-group ${
                  focusedField === "subject" ? "focused" : ""
                }`}
              >
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  required
                  placeholder="Website Development, E-Commerce, etc."
                />
              </div>
            </div>

            <div
              className={`form-group full-width ${
                focusedField === "message" ? "focused" : ""
              }`}
            >
              <label htmlFor="message">Your Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                required
                rows="6"
                placeholder="Describe your project requirements, goals, timeline, and budget..."
              ></textarea>
            </div>

            {message.text && (
              <div className={`form-message ${message.type}`}>
                {message.text}
              </div>
            )}

            <button type="submit" className="submit-btn" disabled={loading}>
              <span className="btn-text">
                {loading ? "Sending..." : "Start My Project"}
              </span>
              <span className="btn-icon">→</span>
            </button>
          </form>
        </div>
      </section>

      {/* Bottom Line */}
      <div className="letstalk-bottom-line"></div>
    </div>
  );
};

export default LetsTalk;
