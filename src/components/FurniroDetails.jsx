import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./projectdetails.css";
import { fadeInUp, scaleIn, staggerContainer, viewport } from "../utils/animationVariants";

const FurniroDetails = () => {
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
          <div className="project-label" style={{ background: "#1b4d3e", color: "#f8f9fa", border: "1px solid #B88E2F" }}>
            FURNITURE & HOME LIVING E-COMMERCE
          </div>
          <h1 className="project-title">Furniro — Modern Furniture & Living</h1>
          <p className="project-subtitle">
            A modern, elegant, and fully responsive furniture e-commerce platform crafted to deliver a seamless shopping experience for premium home living and lifestyle interior products.
          </p>

          <div className="project-meta">
            <div className="meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">Frontend Developer</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Year</span>
              <span className="meta-value">2024</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Platform</span>
              <span className="meta-value">Vite + React Web App</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Design Aesthetic</span>
              <span className="meta-value">Deep Green & Warm Gold</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="project-content">
        <div className="project-container">
          <div className="content-grid">
            <div className="content-main">

              {/* Project Purpose */}
              <h2>📁 Project Purpose</h2>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#374151", marginBottom: "2rem" }}>
                <strong>Furniro</strong> was designed and developed as a modern furniture e-commerce frontend project centered around fluid responsive design, intuitive product discovery, seamless shopping cart interactions, and a warm, sophisticated interior living aesthetic.
              </p>

              {/* Key Features */}
              <h2>✨ Key Features</h2>
              <ul className="features-list">
                <li><strong>🏠 Modern & Responsive Homepage</strong> — Engaging hero banner, curated showcase sections, and promotional call-outs.</li>
                <li><strong>🛋️ Furniture Product Collections</strong> — High-resolution product showcases with organized grid layouts.</li>
                <li><strong>🔎 Product Browsing & Category Filtering</strong> — Instant category navigation across living room, bedroom, office, and dining.</li>
                <li><strong>❤️ Wishlist Functionality</strong> — Easy one-click saving and management of favorite furniture items.</li>
                <li><strong>🛒 Shopping Cart System</strong> — Real-time drawer and quantity controls for instant cart management.</li>
                <li><strong>👁️ Quick Product Preview</strong> — Modal popup previewing product details, dimensions, and materials.</li>
                <li><strong>⭐ Ratings & Reviews UI</strong> — Customer review breakdown, star scoring, and authentic feedback UI.</li>
                <li><strong>🏷️ Discount & Promo Sections</strong> — Highlighted sales badges, percentage discounts, and promotional banners.</li>
                <li><strong>📱 Omnichannel Responsiveness</strong> — Tailored responsive layouts for mobile smartphones, tablets, and ultra-wide desktops.</li>
                <li><strong>⚡ Micro-Interactions</strong> — Silky smooth hover transitions, card elevations, and tactile feedback.</li>
                <li><strong>🔗 Product Detail Pages</strong> — Rich product specs, high-res galleries, related recommendations, and stock status.</li>
              </ul>

              {/* Furniture Categories */}
              <h2>🛋️ Furniture Categories</h2>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "1rem",
                marginBottom: "2.5rem"
              }}>
                {[
                  { name: "Living Room", icon: "🛋️" },
                  { name: "Bedroom", icon: "🛏️" },
                  { name: "Chairs", icon: "🪑" },
                  { name: "Office", icon: "💼" },
                  { name: "Lighting", icon: "💡" },
                  { name: "Sofas", icon: "🛋️" },
                  { name: "Dining Furniture", icon: "🍽️" }
                ].map((cat, idx) => (
                  <div key={idx} style={{
                    background: "#f9fafb",
                    border: "2px solid #070707",
                    borderRadius: "12px",
                    padding: "1rem 1.2rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontWeight: "700",
                    fontSize: "0.95rem"
                  }}>
                    <span style={{ fontSize: "1.3rem" }}>{cat.icon}</span>
                    <span>{cat.name}</span>
                  </div>
                ))}
              </div>

              {/* Design System & Aesthetics */}
              <h2>🎨 Design System & Palette</h2>
              <div style={{ overflowX: "auto" }}>
                <table style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  marginBottom: "2rem",
                  border: "2px solid #070707"
                }}>
                  <thead>
                    <tr style={{ background: "#070707", color: "#fff" }}>
                      <th style={{ textAlign: "left", padding: "1rem", fontWeight: "800", borderRight: "1px solid #fff" }}>Element</th>
                      <th style={{ textAlign: "left", padding: "1rem", fontWeight: "800" }}>Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid #e0e0e0" }}>
                      <td style={{ padding: "1rem", fontWeight: "700", background: "#fafafa" }}>Primary Color</td>
                      <td style={{ padding: "1rem" }}>
                        <span style={{ display: "inline-block", width: "16px", height: "16px", background: "#1b4d3e", borderRadius: "4px", verticalAlign: "middle", marginRight: "8px" }}></span>
                        Deep Green (#1B4D3E) — Natural, calming, high-end furniture tone
                      </td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e0e0e0" }}>
                      <td style={{ padding: "1rem", fontWeight: "700", background: "#fafafa" }}>Accent Color</td>
                      <td style={{ padding: "1rem" }}>
                        <span style={{ display: "inline-block", width: "16px", height: "16px", background: "#B88E2F", borderRadius: "4px", verticalAlign: "middle", marginRight: "8px" }}></span>
                        Warm Golden (#B88E2F) — Premium luxury highlights
                      </td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e0e0e0" }}>
                      <td style={{ padding: "1rem", fontWeight: "700", background: "#fafafa" }}>Backgrounds</td>
                      <td style={{ padding: "1rem" }}>Clean white (#FFFFFF) & neutral cream tones (#FCF8F3)</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e0e0e0" }}>
                      <td style={{ padding: "1rem", fontWeight: "700", background: "#fafafa" }}>Typography</td>
                      <td style={{ padding: "1rem" }}>Google Fonts (Poppins / Montserrat) with modern geometric numerals</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "1rem", fontWeight: "700", background: "#fafafa" }}>UI Styling</td>
                      <td style={{ padding: "1rem" }}>Soft rounded cards, micro-elevations, smooth transitions, minimal aesthetic</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Shopping Experience */}
              <h2>🛒 Shopping Experience</h2>
              <ul className="features-list">
                <li><strong>Add to Wishlist:</strong> Heart icon toggle with instant feedback state.</li>
                <li><strong>Quick Preview:</strong> Accessible hover modal to examine color swatches and specs without leaving the catalog.</li>
                <li><strong>Add to Cart:</strong> Interactive slide-in cart drawer with live subtotal calculation.</li>
                <li><strong>View Product Details:</strong> Deep-link routing to full comprehensive product specifications.</li>
              </ul>

              {/* Getting Started */}
              <h2>🚀 Getting Started</h2>
              <pre style={{
                background: "#070707",
                color: "#22c55e",
                padding: "1.5rem",
                borderRadius: "12px",
                overflowX: "auto",
                fontSize: "0.95rem",
                lineHeight: "2",
                fontFamily: "monospace"
              }}>
{`# 1. Clone the Repository
git clone https://github.com/Offical-Jawad/furniro.git

# 2. Navigate to the Project Directory
cd furniro

# 3. Install Dependencies
npm install

# 4. Start the Development Server
npm run dev

# Application runs at http://localhost:5173`}
              </pre>

              {/* Tech Stack */}
              <h2>🛠️ Technologies Used</h2>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.6rem",
                marginBottom: "2rem"
              }}>
                {["React.js", "Vite", "Tailwind CSS", "JavaScript (ES6+)", "React Router", "Lucide Icons", "Google Fonts"].map((tech, idx) => (
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

              {/* Highlight Banner */}
              <div style={{
                background: "linear-gradient(135deg, #1b4d3e 0%, #0d281e 100%)",
                border: "2px solid #B88E2F",
                color: "#fff",
                padding: "2.5rem",
                borderRadius: "16px",
                textAlign: "center",
                marginTop: "3rem",
                marginBottom: "2rem",
                boxShadow: "0 10px 30px rgba(27, 77, 62, 0.3)"
              }}>
                <p style={{
                  margin: 0,
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  letterSpacing: "0.5px"
                }}>
                  🪑 Crafted for Premium Furniture & Modern Home Living — Furniro Store
                </p>
                <p style={{ margin: "0.75rem 0 0", fontSize: "0.95rem", color: "#d1fae5" }}>
                  Designed & Developed by Jawad Aslam · Full-Stack Developer
                </p>
              </div>

              {/* Project Links */}
              <div className="project-links">
                <a 
                  href="https://github.com/Offical-Jawad/furniro" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-btn primary"
                  style={{ background: "#070707", color: "#fff" }}
                >
                  <span>Explore GitHub Repository</span>
                  <span>→</span>
                </a>
                <Link to="/projects" className="project-btn secondary">
                  <span>← Back to All Projects</span>
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
                    <span className="info-label">Domain</span>
                    <span className="info-value">Furniture E-Commerce</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Primary Stack</span>
                    <span className="info-value">React + Tailwind CSS</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Bundler</span>
                    <span className="info-value">Vite</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Status</span>
                    <span className="info-value status-live">Active Project</span>
                  </div>
                </div>
              </div>

              <div className="sidebar-card" style={{ marginTop: "2rem" }}>
                <h3>🎨 Color Scheme</h3>
                <div className="info-list">
                  <div className="info-item">
                    <span className="info-label">Primary</span>
                    <span className="info-value">Deep Forest Green</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Accent</span>
                    <span className="info-value">Warm Golden (#B88E2F)</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Surfaces</span>
                    <span className="info-value">Ivory & Pure White</span>
                  </div>
                </div>
              </div>

              <div className="sidebar-card" style={{ marginTop: "2rem" }}>
                <h3>🔗 Quick Links</h3>
                <div className="info-list">
                  <div className="info-item">
                    <span className="info-label">Repository</span>
                    <a 
                      href="https://github.com/Offical-Jawad/furniro" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: "#070707", fontWeight: "700", textDecoration: "underline", fontSize: "0.85rem" }}
                    >
                      github.com/Offical-Jawad/furniro
                    </a>
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

export default FurniroDetails;
