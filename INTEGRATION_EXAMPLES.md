# 🎯 Quick Integration Examples

Ye file aapko dikhati hai ke kaise aap existing components mein animations jaldi se add kar sakte hain.

---

## 🏠 Example 1: Home Component Update

### Before:
```jsx
function Home() {
  return (
    <section className="home">
      <h1>Jawad Khan</h1>
      <p>Full Stack Developer</p>
    </section>
  );
}
```

### After (with animations):
```jsx
import GlitchText from './animations/GlitchText';
import SplitText from './animations/SplitText';
import { motion } from 'framer-motion';

function Home() {
  return (
    <section className="home">
      <GlitchText trigger="load">
        Jawad Khan
      </GlitchText>
      
      <SplitText type="words" delay={0.5}>
        Full Stack Developer
      </SplitText>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        {/* Rest of your content */}
      </motion.div>
    </section>
  );
}
```

---

## 📱 Example 2: Projects Component Update

### Before:
```jsx
function Projects() {
  const projects = [
    { id: 1, title: "Project 1", image: "project1.jpg" },
    { id: 2, title: "Project 2", image: "project2.jpg" },
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
```

### After (with animations):
```jsx
import SplitText from './animations/SplitText';
import TiltCard from './animations/TiltCard';
import ImageHoverZoom from './animations/ImageHoverZoom';
import LoadingSkeleton from './animations/LoadingSkeleton';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Projects() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  const projects = [
    { id: 1, title: "Project 1", image: "project1.jpg" },
    { id: 2, title: "Project 2", image: "project2.jpg" },
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <section className="projects">
      <SplitText type="words">My Projects</SplitText>
      
      <div className="projects-grid">
        {loading ? (
          <LoadingSkeleton variant="card" count={6} />
        ) : (
          projects.map(project => (
            <TiltCard key={project.id} maxTilt={10}>
              <div className="project-card">
                <ImageHoverZoom
                  src={project.image}
                  alt={project.title}
                  overlayText="View Details"
                  onClick={() => navigate(`/project/${project.id}`)}
                />
                <h3>{project.title}</h3>
              </div>
            </TiltCard>
          ))
        )}
      </div>
    </section>
  );
}
```

---

## 🎨 Example 3: Skills Component with Marquee

### Before:
```jsx
function Skills() {
  const skills = ['React', 'Node.js', 'MongoDB', 'TypeScript'];

  return (
    <section className="skills">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skills.map(skill => (
          <div key={skill}>{skill}</div>
        ))}
      </div>
    </section>
  );
}
```

### After (with animations):
```jsx
import SplitText from './animations/SplitText';
import MarqueeText from './animations/MarqueeText';

function Skills() {
  const skills = [
    '⚛️ React',
    '🚀 Next.js',
    '💙 TypeScript',
    '🔥 Node.js',
    '🐘 PostgreSQL',
    '🎨 Tailwind CSS',
    '📱 React Native',
    '🐍 Python',
  ];

  return (
    <section className="skills">
      <SplitText type="words">My Skills</SplitText>
      
      <MarqueeText 
        items={skills}
        speed={30}
        direction="left"
        pauseOnHover={true}
      />
      
      {/* Rest of skills content */}
    </section>
  );
}
```

---

## 📝 Example 4: Contact Form with Validation Shake

### Before:
```jsx
function Contact() {
  const [formData, setFormData] = useState({ email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
```

### After (with animations):
```jsx
import SplitText from './animations/SplitText';
import ShakeAnimation from './animations/ShakeAnimation';
import RippleButton from './animations/RippleButton';
import { fireworkConfetti } from './animations/ConfettiEffect';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    const newErrors = {};
    if (!formData.email.includes('@')) {
      newErrors.email = true;
    }
    if (!formData.message.trim()) {
      newErrors.message = true;
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTimeout(() => setErrors({}), 500);
      return;
    }
    
    // Submit logic
    await submitForm(formData);
    
    // Success animation
    fireworkConfetti();
    setFormData({ email: '', message: '' });
  };

  return (
    <section className="contact">
      <SplitText type="words">Contact Me</SplitText>
      
      <form onSubmit={handleSubmit}>
        <ShakeAnimation trigger={errors.email}>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={errors.email ? 'error' : ''}
          />
        </ShakeAnimation>
        
        <ShakeAnimation trigger={errors.message}>
          <textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={errors.message ? 'error' : ''}
          />
        </ShakeAnimation>
        
        <RippleButton type="submit" className="submit-btn">
          Send Message
        </RippleButton>
      </form>
    </section>
  );
}
```

---

## 🔗 Example 5: Navbar with Underline Animation

### Create New Navbar Component:

```jsx
// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import UnderlineDraw from './animations/UnderlineDraw';
import { motion } from 'framer-motion';
import './navbar.css';

function Navbar() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact-form', label: 'Contact' },
  ];

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-container">
        <Link to="/" className="logo">
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Jawad Khan
          </motion.span>
        </Link>

        <div className="nav-links">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={location.pathname === path ? 'active' : ''}
            >
              <UnderlineDraw color="#6366f1">
                {label}
              </UnderlineDraw>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
```

### navbar.css:
```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  color: #333;
}

.nav-links {
  display: flex;
  gap: 40px;
}

.nav-links a {
  text-decoration: none;
  color: #666;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover,
.nav-links a.active {
  color: #6366f1;
}
```

### Add to App.jsx:
```jsx
import Navbar from './components/Navbar';

function App() {
  return (
    <CurtainReveal delay={0.3}>
      <Router>
        <Navbar />  {/* Add this */}
        <CursorTrailEnhanced />
        <ScrollProgress />
        <ScrollToTop />
        <MorphingShape />
        
        <AnimatedRoutes />
      </Router>
    </CurtainReveal>
  );
}
```

---

## 💳 Example 6: Pricing Cards with Tilt

### Before:
```jsx
function Pricing() {
  const plans = [
    { name: 'Basic', price: '$49', features: ['Feature 1', 'Feature 2'] },
    { name: 'Pro', price: '$99', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
  ];

  return (
    <section className="pricing">
      <h2>Pricing Plans</h2>
      <div className="pricing-grid">
        {plans.map(plan => (
          <div key={plan.name} className="pricing-card">
            <h3>{plan.name}</h3>
            <div className="price">{plan.price}</div>
            <ul>
              {plan.features.map(feature => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <button>Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
}
```

### After (with animations):
```jsx
import SplitText from './animations/SplitText';
import TiltCard from './animations/TiltCard';
import RippleButton from './animations/RippleButton';
import { motion } from 'framer-motion';

function Pricing() {
  const plans = [
    { name: 'Basic', price: '$49', features: ['Feature 1', 'Feature 2'] },
    { name: 'Pro', price: '$99', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
  ];

  return (
    <section className="pricing">
      <SplitText type="words">Pricing Plans</SplitText>
      
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <TiltCard key={plan.name} maxTilt={8}>
            <motion.div
              className="pricing-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <h3>{plan.name}</h3>
              <motion.div
                className="price"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
              >
                {plan.price}
              </motion.div>
              <ul>
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.1 * i }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <RippleButton className="choose-btn">
                Choose Plan
              </RippleButton>
            </motion.div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
```

---

## 🎓 Example 7: Experience Timeline with Sticky Scroll

```jsx
import StickyScroll from './animations/StickyScroll';
import SplitText from './animations/SplitText';

function Experience() {
  const experiences = [
    {
      icon: '💼',
      title: 'Senior Developer at TechCorp',
      description: '2022 - Present',
      content: (
        <div className="experience-details">
          <p>Leading development of enterprise applications</p>
          <ul>
            <li>Built scalable microservices architecture</li>
            <li>Managed team of 5 developers</li>
            <li>Improved performance by 40%</li>
          </ul>
        </div>
      )
    },
    {
      icon: '🚀',
      title: 'Full Stack Developer at StartupXYZ',
      description: '2020 - 2022',
      content: (
        <div className="experience-details">
          <p>Developed full-stack web applications</p>
          <ul>
            <li>Built 10+ client projects</li>
            <li>Implemented CI/CD pipelines</li>
            <li>Mentored junior developers</li>
          </ul>
        </div>
      )
    },
    // More experiences...
  ];

  return (
    <section className="experience">
      <SplitText type="words">Work Experience</SplitText>
      
      <StickyScroll sections={experiences} />
    </section>
  );
}
```

---

## 🎨 Example 8: All Buttons with Ripple Effect

### Quick Replace All Buttons:

```jsx
// Instead of:
<button onClick={handleClick}>Click Me</button>

// Use:
<RippleButton onClick={handleClick} className="your-btn-class">
  Click Me
</RippleButton>
```

### Example in Multiple Places:

```jsx
import RippleButton from './animations/RippleButton';

// CTA Button
<RippleButton className="cta-btn" onClick={() => navigate('/contact')}>
  Get In Touch
</RippleButton>

// Submit Button
<RippleButton type="submit" className="submit-btn">
  Send Message
</RippleButton>

// Download Button
<RippleButton className="download-btn" onClick={downloadCV}>
  Download CV
</RippleButton>

// View Project Button
<RippleButton onClick={() => openProject(id)}>
  View Details
</RippleButton>
```

---

## 🎯 Complete Page Example

### Complete Contact Page with All Animations:

```jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import SplitText from './animations/SplitText';
import ShakeAnimation from './animations/ShakeAnimation';
import RippleButton from './animations/RippleButton';
import { fireworkConfetti, simpleConfetti } from './animations/ConfettiEffect';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.includes('@')) newErrors.email = true;
    if (formData.message.length < 10) newErrors.message = true;
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTimeout(() => setErrors({}), 500);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Your API call here
      await submitContactForm(formData);
      
      // Success!
      fireworkConfetti();
      setFormData({ name: '', email: '', message: '' });
      
      // Show success message
      alert('Message sent successfully!');
    } catch (error) {
      alert('Error sending message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <SplitText type="words" className="section-title">
          Get In Touch
        </SplitText>
        
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Have a project in mind? Let's work together!
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="contact-form"
        >
          <ShakeAnimation trigger={errors.name}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={errors.name ? 'error' : ''}
            />
          </ShakeAnimation>

          <ShakeAnimation trigger={errors.email}>
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={errors.email ? 'error' : ''}
            />
          </ShakeAnimation>

          <ShakeAnimation trigger={errors.message}>
            <textarea
              placeholder="Your Message (min 10 characters)"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={errors.message ? 'error' : ''}
              rows={6}
            />
          </ShakeAnimation>

          <RippleButton
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </RippleButton>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
```

---

## ✅ Integration Checklist

Use this checklist to track your progress:

### Phase 1: Global Animations (Already Done ✅)
- [x] CurtainReveal (page load)
- [x] CursorTrailEnhanced
- [x] ScrollProgress
- [x] ScrollToTop
- [x] MorphingShape

### Phase 2: Text Animations
- [ ] Add GlitchText to Home heading
- [ ] Add SplitText to all section headings
- [ ] Add TypingText where appropriate

### Phase 3: Cards & Images
- [ ] Wrap project cards in TiltCard
- [ ] Replace project images with ImageHoverZoom
- [ ] Wrap pricing cards in TiltCard
- [ ] Add LoadingSkeleton to data loading states

### Phase 4: Interactions
- [ ] Replace all buttons with RippleButton
- [ ] Add ShakeAnimation to form validation
- [ ] Add fireworkConfetti to form success
- [ ] Add UnderlineDraw to navbar links

### Phase 5: Advanced Features
- [ ] Add StickyScroll to Experience timeline
- [ ] Add MarqueeText to Skills section
- [ ] Add TestimonialSlider (if testimonials exist)
- [ ] Add SVGLineDraw to icons/decorations

---

## 🎉 You're All Set!

Start integrating animations ek-ek karke. Chhoti shuruat karen (Home page) aur phir baaki pages par move karen.

**Pro Tip:** Ek section complete karne ke baad browser mein check karen, phir next section par jaye.

Happy Coding! 🚀
