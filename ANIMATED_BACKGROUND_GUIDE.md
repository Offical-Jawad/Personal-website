# 🎨 Animated Background Component Guide

## 📦 Component Overview

`AnimatedBackground.jsx` is a reusable React component that adds beautiful floating gradient orbs to any section background. It uses Framer Motion for smooth, performant animations.

---

## 🚀 Basic Usage

```jsx
import AnimatedBackground from "./animations/AnimatedBackground";

function MyComponent() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <AnimatedBackground />
      
      {/* Your content here */}
      <h1>Hello World</h1>
    </div>
  );
}
```

**Important:** Parent container must have `position: relative` or `absolute`.

---

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | string | `'default'` | Color scheme: `'default'`, `'purple'`, `'colorful'`, `'minimal'` |
| `opacity` | number | `0.6` | Orb opacity (0-1) |
| `blur` | string | `'100px'` | CSS blur amount |

---

## 🎨 Available Variants

### 1. **Default** (Current portfolio theme)
```jsx
<AnimatedBackground variant="default" />
```
**Colors:** Purple, Pink, Cyan gradients

### 2. **Purple**
```jsx
<AnimatedBackground variant="purple" />
```
**Colors:** Deep purple and blue tones

### 3. **Colorful**
```jsx
<AnimatedBackground variant="colorful" />
```
**Colors:** Vibrant pink, blue, and green

### 4. **Minimal**
```jsx
<AnimatedBackground variant="minimal" />
```
**Colors:** Grayscale for subtle effect

---

## 🎯 Examples

### Example 1: Subtle Background
```jsx
<AnimatedBackground 
  variant="minimal" 
  opacity={0.3} 
  blur="120px" 
/>
```

### Example 2: Intense Effect
```jsx
<AnimatedBackground 
  variant="colorful" 
  opacity={0.8} 
  blur="80px" 
/>
```

### Example 3: Home Section (Current Implementation)
```jsx
<div className="home-wrapper">
  <AnimatedBackground 
    variant="default" 
    opacity={0.6} 
    blur="100px" 
  />
  
  <header>...</header>
  <main>...</main>
</div>
```

### Example 4: Any Section
```jsx
<section style={{ position: 'relative', padding: '100px 0' }}>
  <AnimatedBackground variant="purple" opacity={0.5} />
  
  <div style={{ position: 'relative', zIndex: 2 }}>
    <h2>My Projects</h2>
    <p>Content here...</p>
  </div>
</section>
```

---

## 🏗️ CSS Structure

### Required Parent Styling
```css
.parent-container {
  position: relative; /* REQUIRED */
  overflow: hidden;   /* Prevents orbs from overflowing */
  z-index: 1;
}

/* Ensure content is above background */
.parent-container > *:not(.animated-background) {
  position: relative;
  z-index: 2;
}
```

---

## 🎨 Custom Colors

Want custom colors? Edit `AnimatedBackground.jsx`:

```jsx
const colorSchemes = {
  // Add your custom scheme
  myCustom: {
    orb1: 'linear-gradient(135deg, #FF6B6B, #FFE66D)',
    orb2: 'linear-gradient(135deg, #4ECDC4, #44A08D)',
    orb3: 'linear-gradient(135deg, #A8E6CF, #DCEDC8)'
  }
}
```

Then use:
```jsx
<AnimatedBackground variant="myCustom" />
```

---

## 🔧 Animation Customization

### Change Animation Speed
In `AnimatedBackground.jsx`, modify `duration`:

```jsx
const orbAnimation1 = {
  animate: {
    x: [0, 100, -50, 0],
    y: [0, -80, 60, 0],
    transition: {
      duration: 30, // Slower (was 20)
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};
```

### Change Movement Pattern
Modify `x` and `y` arrays:

```jsx
// More aggressive movement
x: [0, 200, -100, 0],
y: [0, -150, 120, 0],

// Smaller, subtle movement
x: [0, 50, -25, 0],
y: [0, -40, 30, 0],
```

---

## 📱 Responsive Behavior

Orbs automatically resize on different screens:

- **Desktop:** Large orbs (400-500px)
- **Tablet:** Medium orbs (350-400px)
- **Mobile:** Small orbs (220-320px)

Orbs also move off-screen edges on mobile to prevent clutter.

---

## ⚡ Performance Tips

1. **Blur Amount:** Lower blur = better performance
   ```jsx
   <AnimatedBackground blur="60px" /> // Faster
   ```

2. **Reduced Motion:** Respects user's accessibility preferences
   - Animations stop if user has "reduced motion" enabled

3. **GPU Acceleration:** Uses `will-change: transform` for smooth animations

4. **Mobile Optimization:** Smaller orbs on mobile devices

---

## 🎨 Use Cases

### ✅ Good For:
- Hero/Home sections
- About sections
- Contact forms
- Landing pages
- Feature showcases

### ❌ Avoid For:
- Sections with lots of text (can reduce readability)
- Image galleries (may distract from images)
- Data-heavy tables

---

## 🐛 Troubleshooting

### Problem: Orbs not visible
**Solution:** Ensure parent has `position: relative`

### Problem: Content not clickable
**Solution:** Add `z-index: 2` to content elements

### Problem: Orbs overflow screen
**Solution:** Add `overflow: hidden` to parent

### Problem: Performance issues
**Solution:** Reduce blur amount or use `variant="minimal"`

---

## 🔄 Pure CSS Version (No Framer Motion)

If you don't want Framer Motion dependency, uncomment the CSS animations section in `animatedbackground.css`:

```css
@keyframes float-orb-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(100px, -80px) scale(1.2); }
}

.orb-1 {
  animation: float-orb-1 20s ease-in-out infinite;
}
```

Then remove Framer Motion imports from the component.

---

## 📊 Before & After

### Before (Plain Background)
```jsx
<div className="home-wrapper">
  <header>...</header>
</div>
```

### After (Animated Background)
```jsx
<div className="home-wrapper">
  <AnimatedBackground variant="default" opacity={0.6} />
  <header style={{ position: 'relative', zIndex: 2 }}>...</header>
</div>
```

---

## 🎉 Implementation Checklist

- [x] Component created: `AnimatedBackground.jsx`
- [x] CSS file created: `animatedbackground.css`
- [x] Added to Home component
- [x] Responsive on all devices
- [x] Performance optimized
- [x] Accessible (respects reduced motion)
- [x] Reusable in any section

---

## 🌟 Quick Copy-Paste

**Add to any section:**
```jsx
import AnimatedBackground from "./animations/AnimatedBackground";

<section style={{ position: 'relative', minHeight: '80vh', overflow: 'hidden' }}>
  <AnimatedBackground variant="default" opacity={0.5} blur="100px" />
  
  <div style={{ position: 'relative', zIndex: 2, padding: '100px 20px' }}>
    {/* Your content */}
  </div>
</section>
```

---

**Author:** Muhammad Jawad  
**Component:** AnimatedBackground  
**Framework:** React + Framer Motion  
**Version:** 1.0

**Enjoy your animated backgrounds! 🎨✨**
