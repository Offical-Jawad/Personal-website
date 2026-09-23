import React from "react";
import { Link } from "react-router-dom";
import "./projectdetails.css";

const SnowRemovalDetails = () => {
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
          <div className="project-label">SERVICE WEBSITE</div>
          <h1 className="project-title">❄️ ProSnow — Snow Removal Service</h1>
          <p className="project-subtitle">
            A Node.js + Express web app for a snow removal business using EJS templating.
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
              <span className="meta-label">Port</span>
              <span className="meta-value">3000</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="project-content">
        <div className="project-container">
          <div className="content-grid">
            <div className="content-main">
              
              {/* Overview */}
              <h2>📋 Overview</h2>
              <p>
                A <strong>Node.js + Express</strong> web application for a snow removal business using <strong>EJS templating</strong>. The app features multiple service pages, contact forms, and testimonials for a professional snow removal service.
              </p>

              {/* Tech Stack */}
              <h2>🔧 Tech Stack</h2>
              <div style={{overflowX: 'auto'}}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  marginBottom: '2rem',
                  border: '2px solid #070707'
                }}>
                  <thead>
                    <tr style={{background: '#070707', color: '#fff'}}>
                      <th style={{textAlign: 'left', padding: '1rem', fontWeight: '800', borderRight: '1px solid #fff'}}>Tool</th>
                      <th style={{textAlign: 'left', padding: '1rem', fontWeight: '800'}}>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '1rem', fontWeight: '700', background: '#fafafa'}}>Express.js</td>
                      <td style={{padding: '1rem'}}>Web server & routing</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '1rem', fontWeight: '700', background: '#fafafa'}}>EJS</td>
                      <td style={{padding: '1rem'}}>Server-side HTML templating</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '1rem', fontWeight: '700', background: '#fafafa'}}>express.urlencoded</td>
                      <td style={{padding: '1rem'}}>Form data parsing</td>
                    </tr>
                    <tr>
                      <td style={{padding: '1rem', fontWeight: '700', background: '#fafafa'}}>express.static</td>
                      <td style={{padding: '1rem'}}>Serving public assets</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={{fontSize: '1.05rem', fontWeight: '600', color: '#070707'}}>
                Port: 3000 → <code style={{background: '#fafafa', padding: '0.25rem 0.5rem', borderRadius: '4px'}}>http://localhost:3000</code>
              </p>

              {/* Shared Data */}
              <h2>📦 Shared Data</h2>
              
              <h3>site — Global Brand Info</h3>
              <p style={{background: '#fafafa', padding: '1rem', borderRadius: '8px', border: '1px solid #e0e0e0'}}>
                <code>{'{ name, phone, email }'}</code>
              </p>

              <h3>services — 4 Service Cards</h3>
              <p>Used on Home & Services pages</p>
              <div style={{overflowX: 'auto'}}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  marginBottom: '2rem',
                  border: '2px solid #070707'
                }}>
                  <thead>
                    <tr style={{background: '#070707', color: '#fff'}}>
                      <th style={{textAlign: 'left', padding: '1rem', fontWeight: '800', borderRight: '1px solid #fff'}}>Service</th>
                      <th style={{textAlign: 'left', padding: '1rem', fontWeight: '800'}}>Route</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '1rem', fontWeight: '600'}}>Residential Snow Plowing</td>
                      <td style={{padding: '1rem'}}>/services/residential</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '1rem', fontWeight: '600'}}>Commercial Snow Removal</td>
                      <td style={{padding: '1rem'}}>/services/commercial</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '1rem', fontWeight: '600'}}>Ice Control & Deicing</td>
                      <td style={{padding: '1rem'}}>/services/deicing</td>
                    </tr>
                    <tr>
                      <td style={{padding: '1rem', fontWeight: '600'}}>Preventative Salting</td>
                      <td style={{padding: '1rem'}}>/services/salting</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>serviceDetails — Detailed info per service</h3>
              <p>Each entry contains:</p>
              <p style={{background: '#fafafa', padding: '1rem', borderRadius: '8px', border: '1px solid #e0e0e0', fontFamily: 'monospace', fontSize: '0.95rem'}}>
                title, headline, description, detailedText, image, features[]
              </p>

              <h3>testimonials — 3 client reviews</h3>
              <p style={{fontSize: '1.05rem'}}>
                <strong>Anna Smith</strong> · <strong>Robert Davis</strong> · <strong>Mina Patel</strong>
              </p>

              {/* Routes */}
              <h2>🛣️ Routes</h2>
              
              <h3>GET Routes</h3>
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
                      <th style={{textAlign: 'left', padding: '0.75rem', fontWeight: '800', borderRight: '1px solid #fff'}}>Route</th>
                      <th style={{textAlign: 'left', padding: '0.75rem', fontWeight: '800', borderRight: '1px solid #fff'}}>View</th>
                      <th style={{textAlign: 'left', padding: '0.75rem', fontWeight: '800'}}>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '0.75rem', fontFamily: 'monospace', background: '#fafafa'}}>/</td>
                      <td style={{padding: '0.75rem', fontWeight: '600'}}>index</td>
                      <td style={{padding: '0.75rem'}}>Home — hero, stats, services, testimonials</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '0.75rem', fontFamily: 'monospace', background: '#fafafa'}}>/about</td>
                      <td style={{padding: '0.75rem', fontWeight: '600'}}>about</td>
                      <td style={{padding: '0.75rem'}}>Brand story</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '0.75rem', fontFamily: 'monospace', background: '#fafafa'}}>/services</td>
                      <td style={{padding: '0.75rem', fontWeight: '600'}}>services</td>
                      <td style={{padding: '0.75rem'}}>All services listing</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '0.75rem', fontFamily: 'monospace', background: '#fafafa'}}>/services/residential</td>
                      <td style={{padding: '0.75rem', fontWeight: '600'}}>residential</td>
                      <td style={{padding: '0.75rem'}}>Residential detail</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '0.75rem', fontFamily: 'monospace', background: '#fafafa'}}>/services/commercial</td>
                      <td style={{padding: '0.75rem', fontWeight: '600'}}>commercial</td>
                      <td style={{padding: '0.75rem'}}>Commercial detail</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '0.75rem', fontFamily: 'monospace', background: '#fafafa'}}>/services/deicing</td>
                      <td style={{padding: '0.75rem', fontWeight: '600'}}>deicing</td>
                      <td style={{padding: '0.75rem'}}>Deicing detail</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '0.75rem', fontFamily: 'monospace', background: '#fafafa'}}>/services/salting</td>
                      <td style={{padding: '0.75rem', fontWeight: '600'}}>salting</td>
                      <td style={{padding: '0.75rem'}}>Salting detail</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '0.75rem', fontFamily: 'monospace', background: '#fafafa'}}>/testimonials</td>
                      <td style={{padding: '0.75rem', fontWeight: '600'}}>testimonials</td>
                      <td style={{padding: '0.75rem'}}>All reviews</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '0.75rem', fontFamily: 'monospace', background: '#fafafa'}}>/contact</td>
                      <td style={{padding: '0.75rem', fontWeight: '600'}}>contact</td>
                      <td style={{padding: '0.75rem'}}>Contact form</td>
                    </tr>
                    <tr>
                      <td style={{padding: '0.75rem', fontFamily: 'monospace', background: '#fafafa'}}>/quote</td>
                      <td style={{padding: '0.75rem', fontWeight: '600'}}>quote</td>
                      <td style={{padding: '0.75rem'}}>Quote request form</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>POST Routes</h3>
              <div style={{overflowX: 'auto'}}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  marginBottom: '1rem',
                  border: '2px solid #070707'
                }}>
                  <thead>
                    <tr style={{background: '#070707', color: '#fff'}}>
                      <th style={{textAlign: 'left', padding: '1rem', fontWeight: '800', borderRight: '1px solid #fff'}}>Route</th>
                      <th style={{textAlign: 'left', padding: '1rem', fontWeight: '800'}}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{borderBottom: '1px solid #e0e0e0'}}>
                      <td style={{padding: '1rem', fontFamily: 'monospace', background: '#fafafa'}}>/contact</td>
                      <td style={{padding: '1rem'}}>Receives form · re-renders with sent: true</td>
                    </tr>
                    <tr>
                      <td style={{padding: '1rem', fontFamily: 'monospace', background: '#fafafa'}}>/quote</td>
                      <td style={{padding: '1rem'}}>Receives form · re-renders with submitted: true</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div style={{
                background: '#fff3cd',
                border: '2px solid #ffc107',
                borderRadius: '8px',
                padding: '1rem',
                marginBottom: '2rem'
              }}>
                <p style={{margin: 0, color: '#856404', fontWeight: '600'}}>
                  ⚠️ Both forms are demo only — no DB or email integration yet.
                </p>
              </div>

              {/* Home Page Data */}
              <h2>🏠 Home Page Data (/)</h2>
              <ul className="features-list">
                <li><strong>hero</strong> → heading + description</li>
                <li><strong>stats</strong> → 500+ Clients · 24/7 Support · 99% Satisfaction · 15+ Years</li>
                <li><strong>services</strong> → 4 service cards</li>
                <li><strong>testimonials</strong> → 3 reviews</li>
              </ul>

              {/* Project Structure */}
              <h2>📁 Expected Folder Structure</h2>
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
{`ProSnow/
├── app.js
├── views/
│   ├── index.ejs
│   ├── about.ejs
│   ├── services.ejs
│   ├── residential.ejs
│   ├── commercial.ejs
│   ├── deicing.ejs
│   ├── salting.ejs
│   ├── testimonials.ejs
│   ├── contact.ejs
│   └── quote.ejs
├── public/
│   └── images/
│       ├── residential_plow.png
│       └── commercial_removal.png
└── package.json`}
              </pre>

              {/* Getting Started */}
              <h2>🚀 Run Locally</h2>
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
{`npm install express ejs
node app.js
# Visit http://localhost:3000`}
              </pre>

              <div style={{
                background: '#d1ecf1',
                border: '2px solid #0c5460',
                borderRadius: '8px',
                padding: '1.25rem',
                marginTop: '2rem'
              }}>
                <p style={{margin: 0, color: '#0c5460', fontWeight: '600', fontSize: '1.05rem'}}>
                  💡 Frontend-only demo — no database or email backend connected.
                </p>
              </div>

              {/* Project Links */}
              <div className="project-links">
                <a href="https://github.com/M-jawad-aslam/project--17" target="_blank" rel="noopener noreferrer" className="project-btn secondary">
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
                    <span className="info-value">4 Months</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Team Size</span>
                    <span className="info-value">2 Developers</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Category</span>
                    <span className="info-value">Service Platform</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Type</span>
                    <span className="info-value">Business Website</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Status</span>
                    <span className="info-value status-live">Live</span>
                  </div>
                </div>
              </div>

              <div className="sidebar-card" style={{marginTop: '2rem'}}>
                <h3>🌟 Features</h3>
                <div className="info-list">
                  <div className="info-item">
                    <span className="info-label">Pages</span>
                    <span className="info-value">10 Pages</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Services</span>
                    <span className="info-value">4 Services</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Testimonials</span>
                    <span className="info-value">3 Reviews</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Forms</span>
                    <span className="info-value">Contact & Quote</span>
                  </div>
                </div>
              </div>

              <div className="sidebar-card" style={{marginTop: '2rem'}}>
                <h3>⚙️ Server</h3>
                <div className="info-list">
                  <div className="info-item">
                    <span className="info-label">Framework</span>
                    <span className="info-value">Express.js</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Template</span>
                    <span className="info-value">EJS</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Port</span>
                    <span className="info-value">3000</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Runtime</span>
                    <span className="info-value">Node.js</span>
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

export default SnowRemovalDetails;
