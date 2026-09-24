import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Loader from "./components/Loader"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Services from "./components/Services"
import Experience from "./components/Experience"
import Certifications from "./components/Certifications"
import Skills from "./components/Skills"
import Internship from "./components/Internship"
import Resume from "./components/Resume"
import Projects from "./components/Projects"
import About from "./components/About"
import LetsTalk from "./components/LetsTalk"
import EmailMe from "./components/EmailMe"
import Availability from "./components/Availability"
import Pricing from "./components/Pricing"
import Footer from "./components/Footer"
import JStoreDetails from "./components/JStoreDetails"
import PortfolioDetails from "./components/PortfolioDetails"
import SnowRemovalDetails from "./components/SnowRemovalDetails"
import FurniroDetails from "./components/FurniroDetails"
import { pageTransition } from './utils/animationVariants'

// Global components
import CursorTrailEnhanced from './components/animations/CursorTrailEnhanced'
import ScrollProgress from './components/animations/ScrollProgress'
import ScrollToTop from './components/animations/ScrollToTop'

import './App.css'

// Animated Page Wrapper Component
const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  )
}

// Routes Component with AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation()

  // Scroll to top whenever the route/page changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <AnimatedPage>
            <Home />
            <Services />
            <Experience />
            <Certifications />
            <Skills />
            <Internship />
            <Footer />
          </AnimatedPage>
        } />

        {/* Full Contact Page - supports both /contact and /contact-form */}
        <Route path="/contact" element={
          <AnimatedPage>
            <Contact />
            <Footer />
          </AnimatedPage>
        } />
        <Route path="/contact-form" element={
          <AnimatedPage>
            <Contact />
            <Footer />
          </AnimatedPage>
        } />

        {/* Separate Resume/CV Page */}
        <Route path="/resume" element={
          <AnimatedPage>
            <Resume />
            <Footer />
          </AnimatedPage>
        } />

        {/* Separate Internship Page */}
        <Route path="/internship" element={
          <AnimatedPage>
            <Internship />
            <Footer />
          </AnimatedPage>
        } />

        {/* Projects Page */}
        <Route path="/projects" element={
          <AnimatedPage>
            <Projects />
            <Footer />
          </AnimatedPage>
        } />

        {/* About Page */}
        <Route path="/about" element={
          <AnimatedPage>
            <About />
            <Footer />
          </AnimatedPage>
        } />

        {/* Let's Talk Page */}
        <Route path="/lets-talk" element={
          <AnimatedPage>
            <LetsTalk />
            <Footer />
          </AnimatedPage>
        } />

        {/* Email Me Page */}
        <Route path="/email-me" element={
          <AnimatedPage>
            <EmailMe />
            <Footer />
          </AnimatedPage>
        } />

        {/* Availability Page */}
        <Route path="/availability" element={
          <AnimatedPage>
            <Availability />
            <Footer />
          </AnimatedPage>
        } />

        {/* Pricing Page */}
        <Route path="/pricing" element={
          <AnimatedPage>
            <Pricing />
            <Footer />
          </AnimatedPage>
        } />

        {/* J.Store Details Page */}
        <Route path="/project/jstore-details" element={
          <AnimatedPage>
            <JStoreDetails />
            <Footer />
          </AnimatedPage>
        } />

        {/* Portfolio Details Page */}
        <Route path="/project/portfolio-details" element={
          <AnimatedPage>
            <PortfolioDetails />
            <Footer />
          </AnimatedPage>
        } />

        {/* Snow Removal Details Page */}
        <Route path="/project/snow-removal-details" element={
          <AnimatedPage>
            <SnowRemovalDetails />
            <Footer />
          </AnimatedPage>
        } />

        {/* Furniro Details Page */}
        <Route path="/project/furniro-details" element={
          <AnimatedPage>
            <FurniroDetails />
            <Footer />
          </AnimatedPage>
        } />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <Router>
      {/* Global Animations - Always visible */}
      <CursorTrailEnhanced />
      <ScrollProgress />
      <ScrollToTop />

      <AnimatedRoutes />
    </Router>
  )
}

export default App;