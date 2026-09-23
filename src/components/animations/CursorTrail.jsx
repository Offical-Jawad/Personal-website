import React, { useEffect, useRef } from 'react';
import './cursortrail.css';

/**
 * CursorTrail Component
 * Creates colorful particle trail following mouse cursor
 * 
 * Props:
 * - color: Trail color (hex or rgba)
 * - particleCount: Number of particles in trail
 * - size: Particle size
 */

const CursorTrail = ({ 
  color = '#6c5ce7',
  particleCount = 15,
  size = 8
}) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * size + 2;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.opacity = 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= 0.02;
        if (this.size > 0.2) this.size -= 0.1;
      }

      draw() {
        ctx.fillStyle = `rgba(108, 92, 231, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Create new particles
      for (let i = 0; i < 2; i++) {
        particlesRef.current.push(
          new Particle(e.clientX, e.clientY)
        );
      }

      // Limit particle count
      if (particlesRef.current.length > particleCount) {
        particlesRef.current = particlesRef.current.slice(-particleCount);
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Remove dead particles
        if (particle.opacity <= 0) {
          particlesRef.current.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    };

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [particleCount, size]);

  return (
    <canvas
      ref={canvasRef}
      className="cursor-trail-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999
      }}
    />
  );
};

export default CursorTrail;
