# Portfolio Animations Usage Guide

Is guide mein aapko har animation ka usage samjhaya gaya hai with examples.

## Installation

Pehle zaroori packages install karen:

```bash
npm install framer-motion react-tsparticles tsparticles-slim canvas-confetti react-intersection-observer
```

## 1. GLITCH EFFECT

**Location:** `src/components/animations/GlitchText.jsx`

**Usage:**
```jsx
import { GlitchText } from './components/animations';

// Home page heading par
<GlitchText trigger="hover">Jawad Khan</GlitchText>
<GlitchText trigger="load">Portfolio</GlitchText>
<GlitchText trigger="always">Developer</GlitchText>
```

**Props:**
- `trigger`: 'hover' | 'load' | 'always'
- `className`: Additional CSS classes

---

## 2. MORPHING SHAPE

**Location:** `src/components/animations/MorphingShape.jsx`

**Usage:**
```jsx
import { MorphingShape } from './components/animations';

// Background mein add karen
<MorphingShape />
```

Background mein automatically shapes morph hoti rahegi.

---

## 3. SPLIT TEXT ANIMATION

**Location:** `src/components/animations/SplitText.jsx`

**Usage:**
```jsx
import { SplitText } from './components/animations';

// Section headings par
<SplitText type="words" delay={0.2}>
  My Amazing Projects
</SplitText>

<SplitText type="letters" duration={0.03}>
  About Me
</SplitText>
```

**Props:**
- `type`: 'letters' | 'words'
- `delay`: Animation start delay
- `duration`: Stagger duration between items

---

## 4. STICKY SCROLL

**Location:** `src/components/animations/StickyScroll.jsx`

**Usage:**
```jsx
import { StickyScroll } from './components/animations';

// Experience ya Skills section mein
const sections = [
  {
    icon: '💻',
    title: 'Frontend Development',
    description: 'React, Next.js, TypeScript',
    content: <div>Additional content here</div>
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Figma, Adobe XD',
  },
  // More sections...
];

<StickyScroll sections={sections} />
```

---

## 5. CURSOR TRAIL

**Location:** `src/components/animations/CursorTrailEnhanced.jsx`

**Usage:**
```jsx
import { CursorTrailEnhanced } from './components/animations';

// App.jsx ya main layout mein
function App() {
  return (
    <>
      <CursorTrailEnhanced />
      {/* Rest of your app */}
    </>
  );
}
```

Automatically colorful particle trail mouse ke peeche chhodta rahega.

---

## 6. TILT/3D HOVER

**Location:** `src/components/animations/TiltCard.jsx`

**Usage:**
```jsx
import { TiltCard } from './components/animations';

// Project cards par
<TiltCard maxTilt={12}>
  <div className="project-card">
    <img src="project.jpg" alt="Project" />
    <h3>Project Name</h3>
  </div>
</TiltCard>

// Pricing cards par
<TiltCard maxTilt={8}>
  <div className="pricing-card">
    <h3>Premium Plan</h3>
    <p>$99/month</p>
  </div>
</TiltCard>
```

**Props:**
- `maxTilt`: Tilt intensity (default: 12)
- `className`: Additional classes

---

## 7. UNDERLINE DRAW

**Location:** `src/components/animations/UnderlineDraw.jsx`

**Usage:**
```jsx
import { UnderlineDraw } from './components/animations';

// Navbar links par
<nav>
  <UnderlineDraw>Home</UnderlineDraw>
  <UnderlineDraw>About</UnderlineDraw>
  <UnderlineDraw color="#6366f1">Projects</UnderlineDraw>
</nav>

// Headings ke neeche
<h2>
  <UnderlineDraw>Featured Work</UnderlineDraw>
</h2>
```

---

## 8. MARQUEE TEXT

**Location:** `src/components/animations/MarqueeText.jsx`

**Usage:**
```jsx
import { MarqueeText } from './components/animations';

// Skills section mein
const skills = [
  '⚛️ React',
  '🚀 Next.js',
  '💙 TypeScript',
  '🎨 Tailwind CSS',
  '📱 React Native',
];

<MarqueeText 
  items={skills} 
  speed={30} 
  direction="left"
  pauseOnHover={true}
/>

// Tech stack icons ke liye
const techIcons = [
  <img src="react.svg" alt="React" />,
  <img src="nodejs.svg" alt="Node.js" />,
  // More icons...
];

<MarqueeText items={techIcons} speed={40} />
```

**Props:**
- `items`: Array of strings or JSX elements
- `speed`: Speed in seconds (default: 30)
- `direction`: 'left' | 'right'
- `pauseOnHover`: Boolean

---

## 9. CURTAIN REVEAL

**Location:** `src/components/animations/CurtainReveal.jsx`

**Usage:**
```jsx
import { CurtainReveal } from './components/animations';

// App.jsx mein wrap karen
function App() {
  return (
    <CurtainReveal delay={0.5}>
      {/* Your entire app content */}
      <Home />
      <About />
      <Projects />
    </CurtainReveal>
  );
}
```

Website load hote hi 2 curtains side se hatke content reveal karengi.

---

## 10. CONFETTI EFFECT

**Location:** `src/components/animations/ConfettiEffect.jsx`

**Usage:**
```jsx
import { triggerConfetti, fireworkConfetti, simpleConfetti } from './components/animations';

// Contact form submit hone par
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Form submission logic
  const success = await submitForm(data);
  
  if (success) {
    fireworkConfetti(); // Ya triggerConfetti() ya simpleConfetti()
  }
};

<form onSubmit={handleSubmit}>
  {/* Form fields */}
</form>
```

**Functions:**
- `triggerConfetti()`: Continuous confetti from sides
- `fireworkConfetti()`: Firework explosion effect
- `simpleConfetti()`: Simple burst

---

## 11. SHAKE ANIMATION

**Location:** `src/components/animations/ShakeAnimation.jsx`

**Usage:**
```jsx
import { ShakeAnimation } from './components/animations';
import { useState } from 'react';

function ContactForm() {
  const [errors, setErrors] = useState({});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email.includes('@')) {
      setErrors({ email: true });
      setTimeout(() => setErrors({}), 500);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <ShakeAnimation trigger={errors.email}>
        <input 
          type="email" 
          placeholder="Email"
          className={errors.email ? 'error' : ''}
        />
      </ShakeAnimation>
    </form>
  );
}
```

---

## 12. RIPPLE CLICK

**Location:** `src/components/animations/RippleButton.jsx`

**Usage:**
```jsx
import { RippleButton } from './components/animations';

// Har button par
<RippleButton 
  onClick={() => console.log('Clicked')}
  className="primary-btn"
>
  Contact Me
</RippleButton>

<RippleButton className="secondary-btn">
  Download CV
</RippleButton>
```

Click karne par water ripple effect dikhega.

---

## 13. SVG LINE DRAW

**Location:** `src/components/animations/SVGLineDraw.jsx`

**Usage:**
```jsx
import { DrawPath } from './components/animations';

// Certification icons ya decorative elements
<DrawPath 
  d="M10 80 Q 95 10 180 80"
  stroke="#6366f1"
  strokeWidth={3}
  duration={2}
/>

// Complex SVG icons ke liye
<svg viewBox="0 0 100 100">
  <motion.path
    d="M50 10 L90 90 L10 90 Z"
    stroke="#8b5cf6"
    initial={{ pathLength: 0 }}
    whileInView={{ pathLength: 1 }}
    transition={{ duration: 2 }}
  />
</svg>
```

---

## 14. STICKY NAVBAR SHRINK

**Location:** `src/components/animations/StickyNavbar.jsx`

**Usage:**
```jsx
import { StickyNavbar } from './components/animations';

function App() {
  return (
    <>
      <StickyNavbar threshold={50}>
        <div className="logo">My Portfolio</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </nav>
      </StickyNavbar>
      
      {/* Rest of content */}
    </>
  );
}
```

Scroll karne par navbar automatically shrink hoga aur blur background lelega.

---

## 15. IMAGE HOVER ZOOM

**Location:** `src/components/animations/ImageHoverZoom.jsx`

**Usage:**
```jsx
import { ImageHoverZoom } from './components/animations';

// Project images par
<ImageHoverZoom
  src="project1.jpg"
  alt="E-commerce Website"
  overlayText="View Project"
  onClick={() => navigate('/project/1')}
/>

// Gallery mein
<div className="gallery-grid">
  {projects.map(project => (
    <ImageHoverZoom
      key={project.id}
      src={project.image}
      alt={project.title}
      overlayText="View Details"
    />
  ))}
</div>
```

---

## 16. LOADING SKELETON

**Location:** `src/components/animations/LoadingSkeleton.jsx`

**Usage:**
```jsx
import { LoadingSkeleton } from './components/animations';
import { useState, useEffect } from 'react';

function Projects() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    fetchProjects().then(data => {
      setProjects(data);
      setLoading(false);
    });
  }, []);
  
  if (loading) {
    return (
      <div className="projects-grid">
        <LoadingSkeleton variant="card" count={6} />
      </div>
    );
  }
  
  return (
    <div className="projects-grid">
      {projects.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}

// Different variants
<LoadingSkeleton variant="text" count={3} width="80%" />
<LoadingSkeleton variant="image" width="300px" height="200px" />
<LoadingSkeleton variant="avatar" width="60px" />
<LoadingSkeleton variant="card" count={4} />
```

---

## 17. TESTIMONIAL SLIDER

**Location:** `src/components/animations/TestimonialSlider.jsx`

**Usage:**
```jsx
import { TestimonialSlider } from './components/animations';

const testimonials = [
  {
    text: "Jawad is an exceptional developer. His attention to detail and creativity is outstanding!",
    name: "Sarah Johnson",
    title: "CEO, TechCorp",
    image: "sarah.jpg"
  },
  {
    text: "Working with Jawad was a pleasure. He delivered beyond our expectations.",
    name: "Mike Chen",
    title: "Product Manager, StartupXYZ"
  },
  // More testimonials...
];

<TestimonialSlider 
  testimonials={testimonials}
  autoPlay={true}
  interval={5000}
/>
```

---

## Complete Example Integration

### App.jsx

```jsx
import { 
  CurtainReveal, 
  CursorTrailEnhanced, 
  ScrollProgress,
  MorphingShape 
} from './components/animations';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
// ... other imports

function App() {
  return (
    <CurtainReveal delay={0.5}>
      <CursorTrailEnhanced />
      <ScrollProgress />
      <MorphingShape />
      
      <div className="app-container">
        <Home />
        <About />
        <Projects />
        {/* Other sections */}
      </div>
    </CurtainReveal>
  );
}

export default App;
```

### Home.jsx Example

```jsx
import { GlitchText, SplitText, TiltCard } from './components/animations';

function Home() {
  return (
    <section className="home">
      <GlitchText trigger="load" className="main-heading">
        Jawad Khan
      </GlitchText>
      
      <SplitText type="words" delay={0.5}>
        Full Stack Developer & UI/UX Designer
      </SplitText>
      
      <TiltCard>
        <div className="intro-card">
          <p>Welcome to my portfolio</p>
        </div>
      </TiltCard>
    </section>
  );
}
```

### Projects.jsx Example

```jsx
import { 
  SplitText, 
  ImageHoverZoom, 
  LoadingSkeleton,
  TiltCard 
} from './components/animations';
import { useState, useEffect } from 'react';

function Projects() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProjects([/* project data */]);
      setLoading(false);
    }, 2000);
  }, []);
  
  return (
    <section className="projects">
      <SplitText type="words">
        Featured Projects
      </SplitText>
      
      <div className="projects-grid">
        {loading ? (
          <LoadingSkeleton variant="card" count={6} />
        ) : (
          projects.map(project => (
            <TiltCard key={project.id}>
              <ImageHoverZoom
                src={project.image}
                alt={project.title}
                overlayText="View Project"
                onClick={() => openProject(project.id)}
              />
            </TiltCard>
          ))
        )}
      </div>
    </section>
  );
}
```

### Contact.jsx Example

```jsx
import { 
  ShakeAnimation, 
  RippleButton,
  fireworkConfetti 
} from './components/animations';
import { useState } from 'react';

function Contact() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({});
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    const newErrors = {};
    if (!formData.email?.includes('@')) {
      newErrors.email = true;
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTimeout(() => setErrors({}), 500);
      return;
    }
    
    // Submit form
    await submitContactForm(formData);
    fireworkConfetti();
  };
  
  return (
    <section className="contact">
      <form onSubmit={handleSubmit}>
        <ShakeAnimation trigger={errors.email}>
          <input 
            type="email"
            placeholder="Your Email"
            className={errors.email ? 'error' : ''}
          />
        </ShakeAnimation>
        
        <ShakeAnimation trigger={errors.message}>
          <textarea 
            placeholder="Your Message"
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

## Performance Tips

1. **Mobile par heavy animations disable karen:**
```jsx
const isMobile = window.innerWidth < 768;

{!isMobile && <CursorTrailEnhanced />}
```

2. **Lazy load animations:**
```jsx
import { lazy, Suspense } from 'react';

const HeavyAnimation = lazy(() => import('./components/animations/HeavyAnimation'));

<Suspense fallback={<LoadingSkeleton />}>
  <HeavyAnimation />
</Suspense>
```

3. **Use will-change CSS property sparingly:**
```css
.animated-element {
  will-change: transform, opacity;
}
```

4. **Prefer transform over top/left:**
```jsx
// Good ✅
animate={{ x: 100, y: 100 }}

// Bad ❌
animate={{ left: 100, top: 100 }}
```

---

## Troubleshooting

### Animation lag ho rahi hai?
- `will-change` property use karen
- Heavy animations ko mobile par disable karen
- Chrome DevTools Performance tab use karke debug karen

### Animations trigger nahi ho rahi?
- `react-intersection-observer` check karen
- `threshold` values adjust karen
- Browser console mein errors check karen

---

## Summary

Sab animations ready hain! Bas import karke apne components mein use kar sakte hain. Har animation modular, reusable aur performance-optimized hai.

**Main Features:**
✅ Smooth 60fps animations
✅ Mobile responsive
✅ Easy to customize
✅ Performance optimized
✅ Clean modular code
✅ TypeScript compatible (props optional)

Happy Coding! 🚀
