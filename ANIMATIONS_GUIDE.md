# Framer Motion Animations Guide

## 🎨 Available Animations

### 1. **Right to Left Slide Animation**
```jsx
import { slideRightToLeft, staggerContainer } from "../utils/animations";

<motion.div
  variants={slideRightToLeft}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  Content slides from right
</motion.div>
```

### 2. **Progress Bar Animation (Skills)**
```jsx
import { progressBarVariant } from "../utils/animations";

<motion.div
  className="progress-fill"
  custom={85} // percentage
  variants={progressBarVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
/>
```

### 3. **Count-Up Animation (Stats)**
```jsx
// Use the custom hook
const [count, ref] = useCountUp(100, 2000);

<div ref={ref}>
  {count}+
</div>
```

### 4. **Card Flip Effect (Projects)**
```jsx
const [flipped, setFlipped] = useState(false);

<div style={{ perspective: "1000px" }}>
  <motion.div
    onClick={() => setFlipped(!flipped)}
    style={{ transformStyle: "preserve-3d" }}
    animate={{ rotateY: flipped ? 180 : 0 }}
    transition={{ duration: 0.6 }}
  >
    {/* Front */}
    <div style={{ backfaceVisibility: "hidden" }}>
      Front Content
    </div>
    
    {/* Back */}
    <div style={{ 
      backfaceVisibility: "hidden",
      transform: "rotateY(180deg)",
      position: "absolute",
      top: 0
    }}>
      Back Content
    </div>
  </motion.div>
</div>
```

### 5. **Floating Animation (Icons/Shapes)**
```jsx
import { floatingVariant, floatingRotateVariant } from "../utils/animations";

// Simple floating
<motion.div
  variants={floatingVariant}
  animate="animate"
>
  Floating Icon
</motion.div>

// Floating with rotation
<motion.div
  variants={floatingRotateVariant}
  animate="animate"
>
  Floating + Rotating
</motion.div>
```

### 6. **Navbar Fade Down**
```jsx
import { navbarFadeDown } from "../utils/animations";

<motion.header
  initial="hidden"
  animate="visible"
  variants={navbarFadeDown}
>
  Navbar content
</motion.header>
```

### 7. **Magnetic Button Effect**
```jsx
import MagneticButton from "./animations/MagneticButton";

<MagneticButton strength={0.3}>
  <button className="btn">
    Hover Me!
  </button>
</MagneticButton>
```

### 8. **Typewriter Effect**
```jsx
import TypingText from "./animations/TypingText";

<TypingText
  texts={[
    "Full-Stack Developer",
    "UI/UX Designer",
    "Problem Solver"
  ]}
  typingSpeed={80}
  deletingSpeed={45}
  pauseDuration={2000}
/>
```

### 9. **Stagger Children (Sequential Animation)**
```jsx
import { staggerContainer, slideRightToLeft } from "../utils/animations";

<motion.section
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <motion.div variants={slideRightToLeft}>Item 1</motion.div>
  <motion.div variants={slideRightToLeft}>Item 2</motion.div>
  <motion.div variants={slideRightToLeft}>Item 3</motion.div>
</motion.section>
```

## 📦 Import Cheat Sheet

```jsx
// From animations.js
import { 
  slideRightToLeft,
  slideRightToLeftItem,
  staggerContainer,
  staggerContainerFast,
  progressBarVariant,
  cardFlipVariant,
  floatingVariant,
  floatingRotateVariant,
  navbarFadeDown,
  fadeInUp,
  scaleIn,
  zoomIn
} from "../utils/animations";

// From animationVariants.js (legacy)
import { 
  viewport,
  fadeInUp,
  staggerContainer
} from "../utils/animationVariants";

// Animation Components
import MagneticButton from "./animations/MagneticButton";
import TypingText from "./animations/TypingText";
import TiltCard from "./animations/TiltCard";
```

## 🎯 Common Patterns

### Section Animation
```jsx
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={staggerContainer}
>
  {/* Content */}
</motion.section>
```

### Card Grid with Stagger
```jsx
<motion.div 
  className="grid"
  variants={staggerContainerFast}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {items.map(item => (
    <motion.div 
      key={item.id}
      variants={slideRightToLeft}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Button with Hover + Magnetic
```jsx
<MagneticButton strength={0.3}>
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Click Me
  </motion.button>
</MagneticButton>
```

## 🚀 Performance Tips

1. Use `viewport={{ once: true }}` to prevent re-animation on scroll
2. Use `staggerContainerFast` for many items (faster timing)
3. Avoid animating expensive properties (box-shadow, filter)
4. Use `will-change: transform` for smoother animations
5. Test on mobile devices for performance

## 🎨 Customization

### Custom Timing
```jsx
<motion.div
  variants={slideRightToLeft}
  transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
>
  Custom timing
</motion.div>
```

### Custom Viewport
```jsx
viewport={{ 
  once: true,      // Animate only once
  amount: 0.3,     // 30% visible to trigger
  margin: "100px"  // Trigger 100px before entering
}}
```

### Combining Animations
```jsx
<motion.div
  initial={{ opacity: 0, x: 100, scale: 0.8 }}
  whileInView={{ opacity: 1, x: 0, scale: 1 }}
  whileHover={{ scale: 1.05, rotate: 2 }}
  transition={{ duration: 0.6 }}
>
  Combined effects
</motion.div>
```

## 📱 Mobile Optimization

```jsx
// Disable complex animations on mobile
const isMobile = window.innerWidth < 768;

<motion.div
  variants={isMobile ? fadeInUp : slideRightToLeft}
  initial="hidden"
  whileInView="visible"
>
  Responsive animation
</motion.div>
```

## ✅ Implementation Checklist

- [x] Right-to-left slide animations on all sections
- [x] Progress bars animate from 0% to target in Skills
- [x] Stats numbers count up from 0 to target
- [x] Project cards flip on click (front/back)
- [x] Floating decorative shapes in Footer
- [x] Navbar fades down on page load
- [x] Magnetic hover effect on buttons
- [x] Typewriter effect on Home heading

## 🔗 Components Updated

- ✅ `animations.js` - All animation variants
- ✅ `Skills.jsx` - Progress bars + count-up stats
- ✅ `Projects.jsx` - Card flip effect
- ✅ `Home.jsx` - Navbar animation + typewriter
- ✅ `Services.jsx` - Right-to-left slides
- ✅ `Experience.jsx` - Staggered cards
- ✅ `Certifications.jsx` - Staggered content
- ✅ `Footer.jsx` - Floating shapes
- ✅ `MagneticButton.jsx` - Already implemented

---

**Author:** Muhammad Jawad  
**Framework:** React + Framer Motion  
**Version:** 2.0
