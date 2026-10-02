import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./projectdetails.css";
import { fadeInUp, scaleIn, staggerContainer, viewport } from "../utils/animationVariants";

const VSDMSDetails = () => {
  return (
    <div className="project-details-page">
      {/* Header */}
      <header className="project-header">
        <Link to="/projects" className="back-btn">
          <span className="back-icon">←</span>
          <span>Back to Projects</span>
        </Link>
        <div className="logo">
          <span className="logo-mark">J</span>
          <span className="logo-text">Jawad</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="project-hero">
        <div className="project-container">
          <div
            className="project-label"
            style={{
              background: "linear-gradient(135deg, #0f172a 0%, #0369a1 100%)",
              color: "#38bdf8",
              border: "1px solid #38bdf8",
              letterSpacing: "1px"
            }}
          >
            SMART TRAFFIC MANAGEMENT & MONITORING SYSTEM
          </div>
          <h1 className="project-title">VSDMS – Vehicle Speed Detection & Management System</h1>
          <p className="project-subtitle">
            A modern Vehicle Speed Detection & Management System designed to support traffic monitoring, vehicle speed tracking, and traffic data management through a centralized dashboard.
          </p>

          <div className="project-meta">
            <div className="meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">Full-Stack Developer</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Year</span>
              <span className="meta-value">2026</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Category</span>
              <span className="meta-value">Web Application | Dashboard | Traffic Monitoring</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Technologies</span>
              <span className="meta-value">React.js • Vite • JavaScript • CSS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="project-content">
        <div className="project-container">
          <div className="content-grid">
            <div className="content-main">

              {/* Project Preview Image */}
              <div style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                border: "2px solid #070707",
                marginBottom: "2.5rem",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
                background: "#0f172a"
              }}>
                <img 
                  src="/vsdms-preview.jpg" 
                  alt="VSDMS - Vehicle Speed Detection & Management System" 
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "440px",
                    objectFit: "cover",
                    display: "block"
                  }}
                />
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.5) 60%, transparent 100%)",
                  padding: "1.5rem 2rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  color: "#fff",
                  flexWrap: "wrap",
                  gap: "1rem"
                }}>
                  <div>
                    <span style={{ 
                      display: "inline-block",
                      background: "#38bdf8", 
                      color: "#0f172a", 
                      fontSize: "0.75rem", 
                      fontWeight: "800", 
                      padding: "4px 12px", 
                      borderRadius: "20px",
                      marginBottom: "6px"
                    }}>
                      SYSTEM PREVIEW
                    </span>
                    <h3 style={{ margin: 0, fontSize: "1.25rem", fontWeight: "700", color: "#f8fafc" }}>
                      Traffic Speed Detection & Monitoring System
                    </h3>
                  </div>
                  <span style={{ 
                    color: "#38bdf8", 
                    fontSize: "0.85rem", 
                    fontWeight: "600",
                    background: "rgba(15, 23, 42, 0.8)",
                    padding: "6px 14px",
                    borderRadius: "30px",
                    border: "1px solid rgba(56, 189, 248, 0.4)"
                  }}>
                    ● Live Telemetry Active
                  </span>
                </div>
              </div>

              {/* Project Overview */}
              <h2>🎯 Project Overview</h2>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#374151", marginBottom: "1.5rem" }}>
                <strong>VSDMS</strong> is a modern Vehicle Speed Detection & Management System designed to support traffic monitoring, vehicle speed tracking, and traffic data management through a centralized dashboard. It features a modern interface with real-time monitoring components, analytics, activity tracking, and organized management modules.
              </p>

              {/* Project Goal Card */}
              <div style={{
                background: "linear-gradient(135deg, #0b132b 0%, #1c2541 100%)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                borderRadius: "14px",
                padding: "1.5rem 1.8rem",
                marginBottom: "2.5rem",
                color: "#e2e8f0",
                boxShadow: "0 8px 24px rgba(3, 105, 161, 0.15)"
              }}>
                <span style={{
                  display: "inline-block",
                  color: "#38bdf8",
                  fontWeight: "800",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "0.5rem"
                }}>
                  🎯 Project Goal
                </span>
                <p style={{ margin: 0, fontSize: "1.05rem", fontWeight: "600", color: "#f8fafc", lineHeight: "1.6" }}>
                  To provide a centralized and user-friendly interface for vehicle speed monitoring and traffic management.
                </p>
              </div>

              {/* Interactive Dashboard KPI Preview Showcase (Dark theme with cyan/blue glassmorphism) */}
              <h2>📊 Dashboard KPI & Analytics Modules</h2>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1.2rem",
                marginBottom: "2.5rem"
              }}>
                {[
                  { title: "Average Speed", value: "54.8 km/h", change: "+2.1% Normal flow", color: "#38bdf8", icon: "⚡" },
                  { title: "Monitored Vehicles", value: "14,890+", change: "Real-time updates", color: "#06b6d4", icon: "🚗" },
                  { title: "Speed Violations", value: "18 Flagged", change: "Automated alert", color: "#f43f5e", icon: "🚨" },
                  { title: "Active Camera Feeds", value: "32/32 Online", change: "99.9% uptime", color: "#10b981", icon: "📹" }
                ].map((kpi, idx) => (
                  <div key={idx} style={{
                    background: "radial-gradient(120% 120% at 50% 0%, #1e293b 0%, #0f172a 100%)",
                    border: "1px solid rgba(56, 189, 248, 0.2)",
                    borderRadius: "12px",
                    padding: "1.2rem",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                      <span style={{ fontSize: "0.85rem", color: "#94a3b8", fontWeight: "600" }}>{kpi.title}</span>
                      <span style={{ fontSize: "1.2rem" }}>{kpi.icon}</span>
                    </div>
                    <div style={{ fontSize: "1.5rem", fontWeight: "800", color: "#f8fafc", marginBottom: "0.25rem" }}>
                      {kpi.value}
                    </div>
                    <span style={{ fontSize: "0.75rem", fontWeight: "600", color: kpi.color }}>
                      {kpi.change}
                    </span>
                  </div>
                ))}
              </div>

              {/* Key Features */}
              <h2>✨ Key Features</h2>
              <ul className="features-list">
                <li><strong>🚦 Modern Traffic Monitoring Dashboard</strong> — Centralized live control room interface designed for traffic operators.</li>
                <li><strong>⚡ Vehicle Speed Detection & Monitoring Interface</strong> — Real-time telemetry, vehicle speed tracking, and instant threshold alert flags.</li>
                <li><strong>📈 Analytics & Performance Visualization</strong> — Dynamic graphs, hourly traffic flow density, and trend analyses.</li>
                <li><strong>📋 Traffic Activity & Record Management</strong> — Organized vehicle logs, timestamps, license detection metadata, and audit records.</li>
                <li><strong>📊 Interactive KPI Cards & Data Summaries</strong> — High-level metrics for quick decision-making and rapid situational assessment.</li>
                <li><strong>📱 Responsive UI for Desktop, Tablet, and Mobile</strong> — Pixel-perfect adaptive layouts optimized for control desks and mobile supervisors.</li>
                <li><strong>🌌 Modern Dark-Themed Interface</strong> — Premium glassmorphism components with electric blue & cyan neon gradients for visual clarity.</li>
                <li><strong>🗂️ Organized Navigation & Management Modules</strong> — Streamlined routing between cameras, alert feeds, speed sensors, and reporting.</li>
              </ul>

              {/* My Contribution */}
              <h2>💼 My Contribution</h2>
              <div style={{
                background: "#f8fafc",
                border: "2px solid #070707",
                borderRadius: "14px",
                padding: "1.5rem",
                marginBottom: "2.5rem"
              }}>
                <p style={{ margin: 0, fontSize: "1rem", lineHeight: "1.8", color: "#1e293b", fontWeight: "500" }}>
                  Designed and developed the user interface, dashboard layout, reusable UI components, and management screens, focusing on usability, responsive design, and a consistent visual experience.
                </p>
              </div>

              {/* Design System & Aesthetics */}
              <h2>🎨 Design System & Visual Aesthetics</h2>
              <div style={{ overflowX: "auto" }}>
                <table style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  marginBottom: "2rem",
                  border: "2px solid #070707"
                }}>
                  <thead>
                    <tr style={{ background: "#070707", color: "#fff" }}>
                      <th style={{ textAlign: "left", padding: "1rem", fontWeight: "800", borderRight: "1px solid #fff" }}>Component</th>
                      <th style={{ textAlign: "left", padding: "1rem", fontWeight: "800" }}>Design Choice</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid #e0e0e0" }}>
                      <td style={{ padding: "1rem", fontWeight: "700", background: "#fafafa" }}>Theme Mode</td>
                      <td style={{ padding: "1rem" }}>Modern Dark Theme with deep slate backdrop (#0b132b, #0f172a)</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e0e0e0" }}>
                      <td style={{ padding: "1rem", fontWeight: "700", background: "#fafafa" }}>Primary Accent</td>
                      <td style={{ padding: "1rem" }}>
                        <span style={{ display: "inline-block", width: "16px", height: "16px", background: "#38bdf8", borderRadius: "4px", verticalAlign: "middle", marginRight: "8px" }}></span>
                        Electric Cyan & Sky Blue (#38bdf8) — Real-time telemetry indicators
                      </td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e0e0e0" }}>
                      <td style={{ padding: "1rem", fontWeight: "700", background: "#fafafa" }}>Secondary Accent</td>
                      <td style={{ padding: "1rem" }}>
                        <span style={{ display: "inline-block", width: "16px", height: "16px", background: "#0284c7", borderRadius: "4px", verticalAlign: "middle", marginRight: "8px" }}></span>
                        Deep Navy & Cobalt Blue (#0284c7)
                      </td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e0e0e0" }}>
                      <td style={{ padding: "1rem", fontWeight: "700", background: "#fafafa" }}>Visual Effects</td>
                      <td style={{ padding: "1rem" }}>Glassmorphism panels, backdrop-filter blur, subtle neon glows, tactile interactions</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "1rem", fontWeight: "700", background: "#fafafa" }}>Responsiveness</td>
                      <td style={{ padding: "1rem" }}>Fully fluid multi-breakpoint layout spanning mobile, tablets, laptops, and ultra-wide monitor screens</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Technologies Used */}
              <h2>🛠️ Technologies & Tools</h2>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.6rem",
                marginBottom: "2.5rem"
              }}>
                {[
                  "React.js",
                  "Vite",
                  "JavaScript (ES6+)",
                  "CSS3 & Modern CSS",
                  "Responsive UI Design",
                  "Glassmorphism UI",
                  "KPI Analytics",
                  "Dashboard Architecture"
                ].map((tech, idx) => (
                  <span key={idx} style={{
                    padding: "0.5rem 1rem",
                    background: "#070707",
                    color: "#fff",
                    borderRadius: "50px",
                    fontSize: "0.85rem",
                    fontWeight: "700"
                  }}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Showcase Banner */}
              <div style={{
                background: "linear-gradient(135deg, #091322 0%, #0369a1 100%)",
                border: "2px solid #38bdf8",
                color: "#fff",
                padding: "2.5rem",
                borderRadius: "16px",
                textAlign: "center",
                marginTop: "2rem",
                marginBottom: "2rem",
                boxShadow: "0 10px 30px rgba(3, 105, 161, 0.3)"
              }}>
                <p style={{
                  margin: 0,
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  letterSpacing: "0.5px"
                }}>
                  🚦 VSDMS — Intelligent Vehicle Speed Detection & Traffic Monitoring
                </p>
                <p style={{ margin: "0.75rem 0 0", fontSize: "0.95rem", color: "#bae6fd" }}>
                  Designed & Developed by Jawad Aslam · Full-Stack Developer
                </p>
              </div>

              {/* Project Action Buttons */}
              <div className="project-links">
                <Link to="/projects" className="project-btn primary" style={{ background: "#070707", color: "#fff" }}>
                  <span>← Back to All Projects</span>
                </Link>
                <Link to="/contact" className="project-btn secondary">
                  <span>Get in Touch</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="content-sidebar">
              <div className="sidebar-card">
                <h3>📊 Project Info</h3>
                <div className="info-list">
                  <div className="info-item">
                    <span className="info-label">Developer</span>
                    <span className="info-value">Jawad Aslam</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Role</span>
                    <span className="info-value">Full-Stack Developer</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Domain</span>
                    <span className="info-value">Smart Traffic Management</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Primary Stack</span>
                    <span className="info-value">React.js + Vite</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">UI Design</span>
                    <span className="info-value">Dark Glassmorphism</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Status</span>
                    <span className="info-value status-live">Completed</span>
                  </div>
                </div>
              </div>

              <div className="sidebar-card" style={{ marginTop: "2rem" }}>
                <h3>🎨 Theme & Accents</h3>
                <div className="info-list">
                  <div className="info-item">
                    <span className="info-label">Theme</span>
                    <span className="info-value">Modern Dark Mode</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Gradients</span>
                    <span className="info-value">Cyan & Deep Blue</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Interface</span>
                    <span className="info-value">Glassmorphism Cards</span>
                  </div>
                </div>
              </div>

              <div className="sidebar-card" style={{ marginTop: "2rem" }}>
                <h3>🔗 Quick Links</h3>
                <div className="info-list">
                  <div className="info-item">
                    <span className="info-label">Navigation</span>
                    <Link
                      to="/projects"
                      style={{ color: "#070707", fontWeight: "700", textDecoration: "underline", fontSize: "0.85rem" }}
                    >
                      All Projects Directory
                    </Link>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Profile</span>
                    <a
                      href="https://github.com/Offical-Jawad"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#070707", fontWeight: "700", textDecoration: "underline", fontSize: "0.85rem" }}
                    >
                      github.com/Offical-Jawad
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <div className="project-bottom-line"></div>
    </div>
  );
};

export default VSDMSDetails;
