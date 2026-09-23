import { useEffect, useRef, useState } from 'react';
import './cursortrailenhanced.css';

const CursorTrailEnhanced = () => {
  const canvasRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particleArray = [];
    const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 2;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.life = 100;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
        this.life -= 2;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.life / 100;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      for (let i = 0; i < 3; i++) {
        particleArray.push(new Particle(mouseX, mouseY));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
        particleArray[i].draw();
        
        if (particleArray[i].size <= 0.2 || particleArray[i].life <= 0) {
          particleArray.splice(i, 1);
          i--;
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="cursor-trail-canvas"
    />
  );
};

export default CursorTrailEnhanced;
