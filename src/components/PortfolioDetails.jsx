import React from "react";
import { Link } from "react-router-dom";
import "./projectdetails.css";

const PortfolioDetails = () => {
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
          <div className="project-label">PERSONAL WEBSITE</div>
          <h1 className="project-title">Portfolio — Jawad Aslam</h1>
          <p className="project-subtitle">
            Freelance Web Developer & UI/UX Designer based in Pakistan. Building fast, responsive, and beautiful websites with React.js.
          </p>

          <div className="project-meta">
            <div className="meta-item">
              <span className="meta-label">Profession</span>
              <span className="meta-value">Web Developer & UI/UX Designer</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Location</span>
              <span className="meta-value">Gujranwala, Pakistan</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Main Site</span>
              <span className="meta-value">jawad-aslam.vercel.app</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Hosted On</span>
              <span className="meta-value">Netlify</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="project-content">
        <div className="project-container">
          <div className="content-grid">
            <div className="content-main">
              
              {/* Field Details */}
              <h2>📋 Field Details</h2>
              <div style={{overflowX: 'auto'}}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  marginBottom: '2rem',
                  border: '2px solid #070707'
                }}>
                  <thead>
                    <tr style={{background: '#070707', color: '#fff'}}>
                      <th style={{textAlign: 'left', padding: '1rem', fontWeight: '800', borderRight: '1px solid #fff'}}>Field</th>
                      <th style={{textAlign: 'left', padding: '1rem', fontWeight: '800'}}>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '1rem', fontWeight: '700', background: '#fafafa'}}>Naam</td>
                      <td style={{padding: '1rem'}}>Jawad Aslam</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '1rem', fontWeight: '700', background: '#fafafa'}}>Profession</td>
                      <td style={{padding: '1rem'}}>Freelance Web Developer & UI/UX Designer</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '1rem', fontWeight: '700', background: '#fafafa'}}>Location</td>
                      <td style={{padding: '1rem'}}>Gujranwala, Pakistan</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '1rem', fontWeight: '700', background: '#fafafa'}}>Main Site</td>
                      <td style={{padding: '1rem'}}>jawad-aslam.vercel.app</td>
                    </tr>
                    <tr>
                      <td style={{padding: '1rem', fontWeight: '700', background: '#fafafa'}}>Hosted On</td>
                      <td style={{padding: '1rem'}}>Netlify (redirect via jawad-developer.netlify.app)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Technical Skills */}
              <h2>💻 Technical Skills (Meta se Confirmed)</h2>
              <ul className="features-list">
                <li><strong>React.js</strong> — Primary frontend framework</li>
                <li><strong>UI/UX Design</strong> — Interface aur experience design</li>
                <li><strong>Responsive Design</strong> — Mobile/tablet friendly layouts</li>
                <li><strong>Performance-Optimized Websites</strong> — Fast loading sites</li>
              </ul>

              {/* SEO / Meta Details */}
              <h2>🔑 SEO / Meta Details</h2>
              <div style={{overflowX: 'auto'}}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  marginBottom: '2rem',
                  border: '2px solid #070707',
                  fontSize: '0.95rem'
                }}>
                  <thead>
                    <tr style={{background: '#070707', color: '#fff'}}>
                      <th style={{textAlign: 'left', padding: '1rem', fontWeight: '800', borderRight: '1px solid #fff', width: '30%'}}>Field</th>
                      <th style={{textAlign: 'left', padding: '1rem', fontWeight: '800'}}>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '1rem', fontWeight: '700', background: '#fafafa'}}>Page Title</td>
                      <td style={{padding: '1rem'}}>Jawad Aslam | Web Developer & UI/UX Designer in Pakistan</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '1rem', fontWeight: '700', background: '#fafafa'}}>Description</td>
                      <td style={{padding: '1rem'}}>Freelance Web Developer & UI/UX Designer based in Pakistan. Building fast, responsive, and beautiful websites with React.js.</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '1rem', fontWeight: '700', background: '#fafafa'}}>Keywords</td>
                      <td style={{padding: '1rem'}}>web developer Pakistan, React developer, UI UX designer, freelance developer Gujranwala, hire web developer</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '1rem', fontWeight: '700', background: '#fafafa'}}>Robots</td>
                      <td style={{padding: '1rem'}}>index, follow ✅</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '1rem', fontWeight: '700', background: '#fafafa'}}>OG Tags</td>
                      <td style={{padding: '1rem'}}>Properly configured ✅</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '1rem', fontWeight: '700', background: '#fafafa'}}>Twitter Card</td>
                      <td style={{padding: '1rem'}}>summary_large_image ✅</td>
                    </tr>
                    <tr>
                      <td style={{padding: '1rem', fontWeight: '700', background: '#fafafa'}}>Language</td>
                      <td style={{padding: '1rem'}}>en_US</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Technology Stack */}
              <h2>⚙️ Technology Stack</h2>
              <div style={{overflowX: 'auto'}}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  marginBottom: '2rem',
                  border: '2px solid #070707'
                }}>
                  <thead>
                    <tr style={{background: '#070707', color: '#fff'}}>
                      <th style={{textAlign: 'left', padding: '1rem', fontWeight: '800', borderRight: '1px solid #fff'}}>Layer</th>
                      <th style={{textAlign: 'left', padding: '1rem', fontWeight: '800'}}>Tech</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '1rem', fontWeight: '700', background: '#fafafa'}}>Frontend</td>
                      <td style={{padding: '1rem'}}>React.js</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '1rem', fontWeight: '700', background: '#fafafa'}}>Hosting</td>
                      <td style={{padding: '1rem'}}>Vercel (main) + Netlify (redirect)</td>
                    </tr>
                    <tr>
                      <td style={{padding: '1rem', fontWeight: '700', background: '#fafafa'}}>Design</td>
                      <td style={{padding: '1rem'}}>Custom UI/UX</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Key Features */}
              <h2>✨ Key Features</h2>
              <ul className="features-list">
                <li><strong>SEO Optimized</strong> — Complete meta tags for search engines</li>
                <li><strong>Fast Performance</strong> — Optimized for quick loading</li>
                <li><strong>Responsive Design</strong> — Works on all devices</li>
                <li><strong>Modern UI/UX</strong> — Clean and professional interface</li>
                <li><strong>Social Media Ready</strong> — OG tags and Twitter cards configured</li>
                <li><strong>Search Engine Friendly</strong> — Proper robots and sitemap</li>
              </ul>

              {/* Hosting Details */}
              <h2>🌐 Hosting & Deployment</h2>
              <div style={{
                background: '#f8f9fa',
                border: '2px solid #070707',
                borderRadius: '12px',
                padding: '1.5rem',
                marginBottom: '2rem'
              }}>
                <p style={{margin: '0 0 1rem', fontSize: '1.05rem'}}>
                  <strong>Primary:</strong> <code style={{background: '#fff', padding: '0.25rem 0.75rem', borderRadius: '4px', fontWeight: '600'}}>jawad-aslam.vercel.app</code>
                </p>
                <p style={{margin: 0, fontSize: '1.05rem'}}>
                  <strong>Redirect:</strong> <code style={{background: '#fff', padding: '0.25rem 0.75rem', borderRadius: '4px', fontWeight: '600'}}>jawad-developer.netlify.app</code>
                </p>
              </div>

              {/* Project Links */}
              <div className="project-links">
                
                <a href="#" className="project-btn secondary">
                  <span>GitHub Link</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="content-sidebar">
              <div className="sidebar-card">
                <h3>👤 Personal Info</h3>
                <div className="info-list">
                  <div className="info-item">
                    <span className="info-label">Name</span>
                    <span className="info-value">Jawad Aslam</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Role</span>
                    <span className="info-value">Web Developer</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Specialization</span>
                    <span className="info-value">UI/UX Design</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Location</span>
                    <span className="info-value">Gujranwala, PK</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Status</span>
                    <span className="info-value status-live">Available</span>
                  </div>
                </div>
              </div>

              <div className="sidebar-card" style={{marginTop: '2rem'}}>
                <h3>🚀 Tech Stack</h3>
                <div className="info-list">
                  <div className="info-item">
                    <span className="info-label">Frontend</span>
                    <span className="info-value">React.js</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Styling</span>
                    <span className="info-value">Custom CSS</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Hosting</span>
                    <span className="info-value">Vercel</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Backup Host</span>
                    <span className="info-value">Netlify</span>
                  </div>
                </div>
              </div>

              <div className="sidebar-card" style={{marginTop: '2rem'}}>
                <h3>📈 SEO Status</h3>
                <div className="info-list">
                  <div className="info-item">
                    <span className="info-label">Indexing</span>
                    <span className="info-value">✅ Enabled</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Meta Tags</span>
                    <span className="info-value">✅ Complete</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">OG Tags</span>
                    <span className="info-value">✅ Configured</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Twitter Card</span>
                    <span className="info-value">✅ Large Image</span>
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

export default PortfolioDetails;
