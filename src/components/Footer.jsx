import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import './footer.css';
import { floatingVariant, floatingRotateVariant } from '../utils/animations';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const footerLinks = {
    navigation: [
      { to: "/", label: "Home" },
      { to: "/about", label: "About" },
      { to: "/projects", label: "Projects" },
      { to: "/resume", label: "Resume" },
    ],
    work: [
      { to: "/lets-talk", label: "Start a Project" },
      { to: "/email-me", label: "Email Me" },
      { to: "/availability", label: "Availability" },
      { to: "/pricing", label: "Pricing" },
    ],
    social: [
      { href: "https://wa.me/923288630600", label: "WhatsApp", icon: <FaWhatsapp /> },
      { href: "https://www.instagram.com/jawad.diary", label: "Instagram", icon: <FaInstagram /> },
      { href: "https://web.facebook.com/Mr.Perfect.Jawad", label: "Facebook", icon: <FaFacebookF /> },
      { href: "https://www.linkedin.com/in/m-jawad-aslam", label: "LinkedIn", icon: <FaLinkedinIn /> },
      { href: "https://github.com/Offical-Jawad", label: "GitHub", icon: <FaGithub /> },
    ],
  };

  return (
    <footer className="footer">
      {/* Floating decorative shapes */}
      <motion.div
        className="footer-float-shape shape-1"
        variants={floatingVariant}
        animate="animate"
        style={{
          position: 'absolute',
          top: '50px',
          right: '100px',
          width: '60px',
          height: '60px',
          background: 'rgba(7, 7, 7, 0.05)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <motion.div
        className="footer-float-shape shape-2"
        variants={floatingRotateVariant}
        animate="animate"
        style={{
          position: 'absolute',
          bottom: '100px',
          left: '80px',
          width: '40px',
          height: '40px',
          background: 'rgba(7, 7, 7, 0.08)',
          borderRadius: '8px',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-mark">J</span>
                <span className="logo-text">Jawad</span>
              </div>
              <p className="footer-tagline">
                Creating modern, responsive, accessible websites with intuitive
                design, fast performance, and memorable experiences.
              </p>

              {/* Quick Social Icons Row */}
              <div className="footer-social-icons-row">
                {footerLinks.social.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-bubble"
                    aria-label={link.label}
                    title={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Navigation</h4>
                <ul>
                  {footerLinks.navigation.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-column">
                <h4>Let's Work</h4>
                <ul>
                  {footerLinks.work.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p className="copyright">
                &copy; {currentYear} Jawad Aslam. All rights reserved.
              </p>
              <p className="built-with">Built with React & Passion ✨</p>
            </div>

            <button
              className="back-to-top"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
