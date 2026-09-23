import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./projectdetails.css";
import { fadeInUp, scaleIn, staggerContainer, viewport } from "../utils/animationVariants";

const JStoreDetails = () => {
  return (
    <div className="project-details-page">
      {/* Header */}
      <header className="project-header">
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
      <section className="project-hero">
        <div className="project-container">
          <div className="project-label">E-COMMERCE PLATFORM</div>
          <h1 className="project-title">J.Store - Modern E-Commerce Fashion Website</h1>
          <p className="project-subtitle">
            A premium, responsive e-commerce website built with React.js for a fashion brand selling pants and shirts for men and women.
          </p>

          <div className="project-meta">
            <div className="meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">Full-Stack Developer</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Year</span>
              <span className="meta-value">2024</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Platform</span>
              <span className="meta-value">Web Application</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Category</span>
              <span className="meta-value">Fashion E-Commerce</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="project-content">
        <div className="project-container">
          <div className="content-grid">
            <div className="content-main">

              {/* Features */}
              <h2>🌟 Features</h2>
              <ul className="features-list">
                <li><strong>Home Page</strong> — Hero section, featured products, categories</li>
                <li><strong>Shop Page</strong> — Product listing with filters and sorting</li>
                <li><strong>Product Details</strong> — Size/color selection</li>
                <li><strong>Cart & Wishlist</strong> — Quantity management, persistent with localStorage</li>
                <li><strong>About / Contact / Login</strong> — Full page set</li>
              </ul>

              {/* Design */}
              <h2>🎨 Design</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  marginBottom: '2rem',
                  border: '2px solid #070707'
                }}>
                  <thead>
                    <tr style={{ background: '#070707', color: '#fff' }}>
                      <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '800', borderRight: '1px solid #fff' }}>Element</th>
                      <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '800' }}>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                      <td style={{ padding: '1rem', fontWeight: '700', background: '#fafafa' }}>Primary</td>
                      <td style={{ padding: '1rem' }}>Purple gradient #667eea → #764ba2</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                      <td style={{ padding: '1rem', fontWeight: '700', background: '#fafafa' }}>Secondary</td>
                      <td style={{ padding: '1rem' }}>Pink gradient #f093fb → #f5576c</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                      <td style={{ padding: '1rem', fontWeight: '700', background: '#fafafa' }}>Font</td>
                      <td style={{ padding: '1rem' }}>Poppins (Google Fonts)</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '1rem', fontWeight: '700', background: '#fafafa' }}>UI Style</td>
                      <td style={{ padding: '1rem' }}>Glassmorphism, rounded corners, smooth animations</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Project Structure */}
              <h2>📁 Project Structure</h2>
              <pre style={{
                background: '#fafafa',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '2px solid #070707',
                overflowX: 'auto',
                fontSize: '0.9rem',
                lineHeight: '1.8',
                fontFamily: 'monospace'
              }}>
                {`j.Store/
├── src/
│   ├── components/    # Navbar, Hero, ProductCard, Footer
│   ├── pages/         # Home, Shop, Cart, Wishlist, About, Contact, Login
│   ├── context/       # CartContext.jsx
│   ├── data/          # products.js (12 sample products)
│   └── App.jsx
├── public/
└── package.json`}
              </pre>

              {/* Getting Started */}
              <h2>🚀 Getting Started</h2>
              <pre style={{
                background: '#070707',
                color: '#00ff00',
                padding: '1.5rem',
                borderRadius: '12px',
                overflowX: 'auto',
                fontSize: '0.95rem',
                lineHeight: '2',
                fontFamily: 'monospace'
              }}>
                {`cd j.Store
npm install
npm run dev         # Visit http://localhost:5173
npm run build       # Production build → /dist
npm run preview     # Preview build`}
              </pre>

              {/* Key Functionalities */}
              <h2>🎯 Key Functionalities</h2>
              <ul className="features-list">
                <li><strong>Cart</strong> — Add, update, remove items · localStorage persistence</li>
                <li><strong>Wishlist</strong> — Save/unsave products · localStorage persistence</li>
                <li><strong>Filters</strong> — By category, gender, price range · Sort by price & rating</li>
                <li><strong>Responsive</strong> — Mobile-first · Breakpoints: 480px / 768px / 1024px</li>
              </ul>

              {/* Tech Stack */}
              <h2>🔧 Tech Stack</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '2', color: '#444', fontWeight: '500' }}>
                React.js · React Router DOM · Context API · CSS3 · Vite · Google Fonts
              </p>

              {/* Notes */}
              <h2>📝 Notes</h2>
              <ul className="features-list">
                <li><strong>Frontend-only</strong> · No backend or database</li>
                <li><strong>Dummy product data</strong> (12 items)</li>
                <li><strong>Images from Unsplash</strong> (placeholder URLs)</li>
              </ul>

              {/* Created with Love */}
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                padding: '2.5rem',
                borderRadius: '16px',
                textAlign: 'center',
                marginTop: '3rem',
                marginBottom: '2rem',
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
              }}>
                <p style={{
                  margin: 0,
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  letterSpacing: '0.5px'
                }}>
                  Created with ❤️ for j.Store Fashion Brand — Happy Shopping! 🛍️
                </p>
              </div>

              {/* Project Links */}
              <div className="project-links">
                <a href="https://github.com/M-jawad-aslam/j.Store" target="_blank" rel="noopener noreferrer" className="project-btn secondary">
  <span>GitHub Link </span>
  <span>→</span>
</a>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="content-sidebar">
              <div className="sidebar-card">
                <h3>📊 Project Info</h3>
                <div className="info-list">
                  <div className="info-item">
                    <span className="info-label">Duration</span>
                    <span className="info-value">3 Months</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Team Size</span>
                    <span className="info-value">Solo Project</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Category</span>
                    <span className="info-value">E-Commerce</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Type</span>
                    <span className="info-value">Fashion Website</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Status</span>
                    <span className="info-value status-live">Live & Active</span>
                  </div>
                </div>
              </div>

              <div className="sidebar-card" style={{ marginTop: '2rem' }}>
                <h3>📱 Responsive</h3>
                <div className="info-list">
                  <div className="info-item">
                    <span className="info-label">Mobile</span>
                    <span className="info-value">&lt; 480px</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Tablet</span>
                    <span className="info-value">480px - 768px</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Desktop</span>
                    <span className="info-value">768px - 1024px</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Large</span>
                    <span className="info-value">&gt; 1024px</span>
                  </div>
                </div>
              </div>

              <div className="sidebar-card" style={{ marginTop: '2rem' }}>
                <h3>📦 Products</h3>
                <div className="info-list">
                  <div className="info-item">
                    <span className="info-label">Total Items</span>
                    <span className="info-value">12 Products</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Categories</span>
                    <span className="info-value">Pants & Shirts</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">For</span>
                    <span className="info-value">Men & Women</span>
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

export default JStoreDetails;
