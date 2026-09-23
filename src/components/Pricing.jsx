import { Link } from "react-router-dom";
import "./pricing.css";
import { aosAnimations, withDelay } from "../utils/animations";

const Pricing = () => {
  return (
    <div className="pricing-page">
      {/* Background Elements */}
      <div className="bg-grid"></div>
      <div className="bg-blur blur-1"></div>
      <div className="bg-blur blur-2"></div>
      <div className="bg-blur blur-3"></div>

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

      {/* Container */}
      <div className="pricing-container">
        {/* Header */}
        <div className="pricing-header" {...aosAnimations.fadeUp}>
          <h1>Pricing Plans</h1>
          <p {...withDelay(aosAnimations.fadeUp, 100)}>Transparent pricing for quality web development services</p>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {/* Basic Plan */}
          <div className="pricing-card" {...withDelay(aosAnimations.fadeUp, 100)}>
            <div className="plan-badge">Popular</div>
            <div className="plan-header">
              <h3>Basic</h3>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">500</span>
                <span className="period">/ project</span>
              </div>
              <p className="plan-desc">Perfect for landing pages and simple websites</p>
            </div>
            <div className="plan-features">
              <div className="feature-item"><span className="feature-icon">✓</span><span>Single Page Website</span></div>
              <div className="feature-item"><span className="feature-icon">✓</span><span>Responsive Design</span></div>
              <div className="feature-item"><span className="feature-icon">✓</span><span>Basic SEO Optimization</span></div>
              <div className="feature-item"><span className="feature-icon">✓</span><span>Contact Form Integration</span></div>
              <div className="feature-item"><span className="feature-icon">✓</span><span>1 Month Support</span></div>
              <div className="feature-item"><span className="feature-icon">✓</span><span>1-2 Week Delivery</span></div>
            </div>
            <Link to="/lets-talk" className="plan-btn">Get Started</Link>
          </div>

          {/* Professional Plan */}
          <div className="pricing-card featured" {...withDelay(aosAnimations.zoomIn, 200)}>
            <div className="plan-badge recommended">Recommended</div>
            <div className="plan-header">
              <h3>Professional</h3>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">1,500</span>
                <span className="period">/ project</span>
              </div>
              <p className="plan-desc">Ideal for business websites and portfolios</p>
            </div>
            <div className="plan-features">
              <div className="feature-item"><span className="feature-icon">✓</span><span>Up to 5 Pages</span></div>
              <div className="feature-item"><span className="feature-icon">✓</span><span>Custom Design</span></div>
              <div className="feature-item"><span className="feature-icon">✓</span><span>Advanced SEO</span></div>
              <div className="feature-item"><span className="feature-icon">✓</span><span>CMS Integration</span></div>
              <div className="feature-item"><span className="feature-icon">✓</span><span>Analytics Setup</span></div>
              <div className="feature-item"><span className="feature-icon">✓</span><span>3 Months Support</span></div>
              <div className="feature-item"><span className="feature-icon">✓</span><span>3-4 Week Delivery</span></div>
            </div>
            <Link to="/lets-talk" className="plan-btn featured-btn">Get Started</Link>
          </div>

          {/* Enterprise Plan */}
          <div className="pricing-card" {...withDelay(aosAnimations.fadeUp, 300)}>
            <div className="plan-badge">Premium</div>
            <div className="plan-header">
              <h3>Enterprise</h3>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">3,000</span>
                <span className="period">+</span>
              </div>
              <p className="plan-desc">Complete solution for e-commerce and web apps</p>
            </div>
            <div className="plan-features">
              <div className="feature-item"><span className="feature-icon">✓</span><span>Unlimited Pages</span></div>
              <div className="feature-item"><span className="feature-icon">✓</span><span>Custom Web Application</span></div>
              <div className="feature-item"><span className="feature-icon">✓</span><span>E-Commerce Integration</span></div>
              <div className="feature-item"><span className="feature-icon">✓</span><span>Database Setup</span></div>
              <div className="feature-item"><span className="feature-icon">✓</span><span>API Development</span></div>
              <div className="feature-item"><span className="feature-icon">✓</span><span>6 Months Support</span></div>
              <div className="feature-item"><span className="feature-icon">✓</span><span>6-12 Week Delivery</span></div>
            </div>
            <Link to="/lets-talk" className="plan-btn">Get Started</Link>
          </div>
        </div>

        {/* Additional Services */}
        <div className="additional-services">
          <h2 {...aosAnimations.fadeUp}>Additional Services</h2>
          <div className="services-grid">
            <div className="service-card" {...withDelay(aosAnimations.fadeUp, 100)}>
              <div className="service-icon">🔧</div>
              <h4>Website Maintenance</h4>
              <p className="service-price">$50/month</p>
              <p className="service-desc">Regular updates, backups, and security monitoring</p>
            </div>
            <div className="service-card" {...withDelay(aosAnimations.fadeUp, 200)}>
              <div className="service-icon">⚡</div>
              <h4>Performance Optimization</h4>
              <p className="service-price">$200/project</p>
              <p className="service-desc">Speed optimization and performance improvements</p>
            </div>
            <div className="service-card" {...withDelay(aosAnimations.fadeUp, 300)}>
              <div className="service-icon">🎨</div>
              <h4>UI/UX Design</h4>
              <p className="service-price">$300/project</p>
              <p className="service-desc">Custom design mockups and prototypes</p>
            </div>
            <div className="service-card" {...withDelay(aosAnimations.fadeUp, 400)}>
              <div className="service-icon">📱</div>
              <h4>Mobile App Development</h4>
              <p className="service-price">Custom Quote</p>
              <p className="service-desc">React Native mobile applications</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2 {...aosAnimations.fadeUp}>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item" {...withDelay(aosAnimations.fadeUp, 100)}><h4>What's included in the price?</h4><p>All plans include responsive design, basic SEO, browser compatibility, and initial support period as mentioned.</p></div>
            <div className="faq-item" {...withDelay(aosAnimations.fadeUp, 150)}><h4>Do you offer custom packages?</h4><p>Yes! If none of these plans fit your needs, I can create a custom package tailored to your requirements.</p></div>
            <div className="faq-item" {...withDelay(aosAnimations.fadeUp, 200)}><h4>What's your payment process?</h4><p>50% upfront to start the project, 50% upon completion. Payment methods include bank transfer, PayPal, or other agreed methods.</p></div>
            <div className="faq-item" {...withDelay(aosAnimations.fadeUp, 250)}><h4>How long does a project take?</h4><p>Timeline depends on project complexity. Basic sites take 1-2 weeks, while complex applications may take 6-12 weeks.</p></div>
            <div className="faq-item" {...withDelay(aosAnimations.fadeUp, 300)}><h4>Do you provide hosting?</h4><p>I can help you set up hosting with your preferred provider or recommend reliable hosting solutions.</p></div>
            <div className="faq-item" {...withDelay(aosAnimations.fadeUp, 350)}><h4>What happens after the project?</h4><p>You'll receive all source files, documentation, and support for the period mentioned in your plan.</p></div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="pricing-cta" {...aosAnimations.fadeUp}>
          <h2 {...withDelay(aosAnimations.fadeDown, 100)}>Ready to Start Your Project?</h2>
          <p {...withDelay(aosAnimations.fadeUp, 200)}>Let's discuss your requirements and find the perfect plan for you</p>
          <div className="cta-buttons" {...withDelay(aosAnimations.zoomIn, 300)}>
            <Link to="/lets-talk" className="btn-primary">Start a Project</Link>
            <Link to="/contact-form" className="btn-secondary">Contact Me</Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="pricing-bottom-line"></div>
    </div>
  );
};

export default Pricing;
