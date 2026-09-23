import { useRef } from "react";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import "./resume.css";

const Resume = () => {
  const resumeRef = useRef();
  const breakRef = useRef(); // page break before Portfolio project

  const handleDownload = async () => {
    const element = resumeRef.current;
    const breakEl = breakRef.current;
    if (!element) return;

    const noprint = document.querySelectorAll(".no-print");
    noprint.forEach((el) => (el.style.display = "none"));

    // Force A4 width for accurate capture
    const prevWidth = element.style.width;
    element.style.width = "794px";

    // Scroll to top so getBoundingClientRect is accurate
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 100));

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        scrollX: 0,
        scrollY: 0,
        windowWidth: 794,
        logging: false,
      });

      element.style.width = prevWidth;

      const A4_W = 210;   // mm
      const A4_H = 297;   // mm
      const imgWpx = canvas.width;
      const pxToMm = A4_W / imgWpx;

      // Find page break pixel row
      let breakPx = null;
      if (breakEl) {
        const elemRect = element.getBoundingClientRect();
        const breakRect = breakEl.getBoundingClientRect();
        breakPx = Math.round((breakRect.top - elemRect.top) * 2);
      }

      const pdf = new jsPDF({
        unit: "mm",
        format: "a4",
        orientation: "portrait",
        compress: true,
      });

      const addSlice = (y0, y1, isFirst) => {
        const h = Math.round(y1 - y0);
        if (h <= 0) return;
        const c = document.createElement("canvas");
        c.width = imgWpx;
        c.height = h;
        c.getContext("2d").drawImage(canvas, 0, Math.round(y0), imgWpx, h, 0, 0, imgWpx, h);
        if (!isFirst) pdf.addPage();
        const sliceHmm = Math.min(h * pxToMm, A4_H);
        pdf.addImage(c.toDataURL("image/jpeg", 1.0), "JPEG", 0, 0, A4_W, sliceHmm);
      };

      if (breakPx && breakPx > 0 && breakPx < canvas.height) {
        // Page 1: 0 → breakPx
        addSlice(0, breakPx, true);
        // Page 2+: breakPx → end, in A4-sized chunks
        const pageHpx = A4_H / pxToMm;
        let cur = breakPx;
        while (cur < canvas.height) {
          addSlice(cur, Math.min(cur + pageHpx, canvas.height), false);
          cur += pageHpx;
        }
      } else {
        // Single/auto pages
        const pageHpx = A4_H / pxToMm;
        let cur = 0;
        let first = true;
        while (cur < canvas.height) {
          addSlice(cur, Math.min(cur + pageHpx, canvas.height), first);
          cur += pageHpx;
          first = false;
        }
      }

      pdf.save("Muhammad_Jawad_Resume.pdf");
    } catch (err) {
      element.style.width = prevWidth;
      console.error("PDF error:", err);
      alert("PDF failed: " + err.message);
    } finally {
      noprint.forEach((el) => (el.style.display = ""));
    }
  };

  return (
    <div className="resume-page" id="resume">

      {/* Nav Header */}
      <header className="about-header no-print">
        <Link to="/" className="back-btn">
          <span className="back-icon">←</span>
          <span>Back to Home</span>
        </Link>
        <div className="logo">
          <span className="logo-mark">J</span>
          <span className="logo-text">Jawad</span>
        </div>
      </header>

      <div className="resume-container-wrapper">
        <div className="resume-container" ref={resumeRef}>

          {/* NAME & CONTACT */}
          <header className="rv-header">
            <h1 className="rv-name">MUHAMMAD JAWAD</h1>
            <p className="rv-subtitle">(MERN Stack | PHP | Laravel | Python | Real ERP/GST ERP | Multi-Company ERP Development)</p>
            <div className="rv-contact-row">
              <span>Gujranwala, Pakistan</span>
              <span className="rv-sep">|</span>
              <a href="mailto:jawadaslam425@gmail.com">jawadaslam425@gmail.com</a>
              <span className="rv-sep">|</span>
              <span>+92 328 8630600</span>
            </div>
            <div className="rv-contact-row">
              <span>LinkedIn:&nbsp;</span>
              <a href="https://www.linkedin.com/in/jawad-devlp" target="_blank" rel="noopener noreferrer">jawad-devlp</a>
              <span className="rv-sep">|</span>
              <span>GitHub:&nbsp;</span>
              <a href="https://github.com/Offical-Jawad" target="_blank" rel="noopener noreferrer">offical-Jawad</a>
            </div>
          </header>

          {/* PROFESSIONAL SUMMARY */}
          <section className="rv-section">
            <h2 className="rv-section-title">PROFESSIONAL SUMMARY</h2>
            <p className="rv-summary">
              BS (IT) student and Full-Stack Developer specializing in the MERN stack
              (React.js, Node.js, Express, MongoDB), PHP, Laravel, and Python. Experienced
              in developing responsive, scalable web applications, RESTful APIs,
              and real-world ERP/GST ERP systems with multi-company data and permission management.
              Skilled in building dashboards, authentication systems, database-driven applications,
              and optimizing web performance for smooth user experiences. Proven ability to write clean,
              maintainable code using modern technologies and UI tools such as Tailwind CSS and
              TypeScript.

            </p>
          </section>

          {/* SKILLS */}
          <section className="rv-section">
            <h2 className="rv-section-title">SKILLS</h2>
            <ul className="rv-skills-list">
              <li><strong>Frontend Development:</strong> React.js, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap, Responsive Web Design</li>
              <li><strong>Backend &amp; Databases:</strong> Node.js, Express.js, PHP, Laravel, Python, RESTful APIs, JWT Authentication, CRUD Operations, MongoDB, Mongoose, MySQL, Firebase</li>
              <li><strong>Tools &amp; Technologies:</strong> Git, GitHub, VS Code, Postman, Figma, Vercel, Netlify, Heroku</li>
              <li><strong>Core Competencies:</strong> Full Stack Web Development, API Integration, Database Design, Web Performance Optimization, MVC Architecture</li>
            </ul>
          </section>

          {/* PROJECT EXPERIENCE */}
          <section className="rv-section">
            <h2 className="rv-section-title">PROJECT EXPERIENCE</h2>

            <div className="rv-exp-header">
              <span className="rv-exp-title">Web Development Projects (Self-Employed)</span>
              <span className="rv-exp-location">Remote</span>
              <span className="rv-exp-date">• Nov 2025 – Present</span>
            </div>

            {/* Project 1 — j.Store */}
            <div className="rv-project rv-project-first">
              <div className="rv-project-header">
                <span className="rv-project-title">
                  j.Store E-Commerce Website
                  <span className="rv-project-tech"> (React.js, REST API)</span>
                </span>
                <span className="rv-project-date">Nov 2025 – Present</span>
              </div>
              <ul className="rv-bullets">
                <li>Architected a fully responsive e-commerce platform using React, improving UI consistency and navigation flow efficiency by <strong>75%</strong>.</li>
                <li>Integrated RESTful APIs to dynamically fetch and display product catalogs with client-side multi-filtering and real-time search capabilities.</li>
                <li>Implemented client-side routing using React Router for seamless SPA navigation, optimizing dynamic page load times by <strong>65%</strong>.</li>
              </ul>
            </div>

            {/* Project 2 — Snow Removal */}
            <div className="rv-project rv-project-second">
              <div className="rv-project-header">
                <span className="rv-project-title">
                  Snow Removal Service Platform
                  <span className="rv-project-tech"> (Node.js, Express, MongoDB, Google Maps API)</span>
                </span>
                <span className="rv-project-date">Dec 2025</span>
              </div>
              <ul className="rv-bullets">
                <li>Developed a full-stack booking service web application featuring real-time appointment scheduling and secure JWT authentication.</li>
                <li>Built an intuitive admin dashboard for efficient booking management, reducing daily administrative processing time by <strong>70%</strong>.</li>
                <li>Integrated Google Maps API for precise location-based booking and deployed the production-ready application on cloud hosting platforms.</li>
              </ul>
            </div>

            {/* ── PAGE BREAK — Portfolio starts on Page 2 ── */}
            <div ref={breakRef} className="rv-page-break" />

            {/* Project 3 — Portfolio */}
            <div className="rv-project rv-project-last">
              <div className="rv-project-header">
                <span className="rv-project-title">
                  Developer Portfolio Website
                  <span className="rv-project-tech"> (React.js, JavaScript, CSS3)</span>
                </span>
                <span className="rv-project-date">2025</span>
              </div>
              <ul className="rv-bullets">
                <li>Designed and deployed a modern personal portfolio showcasing web engineering projects, technical skill sets, and personal achievements.</li>
                <li>Utilized modular React component structures and optimized state management to deliver a fast-loading UI, achieving a <strong>95+ Performance Score</strong>.</li>
              </ul>
            </div>
          </section>

          {/* EDUCATION */}
          <section className="rv-section rv-section-p2">
            <h2 className="rv-section-title">EDUCATION</h2>
            <div className="rv-edu-item">
              <div className="rv-edu-header">
                <span className="rv-edu-degree">Bachelor of Science in Information Technology (BSIT)</span>
                <span className="rv-edu-date">2023 – Present</span>
              </div>
              <div className="rv-edu-institution">University of Gujrat — Gujrat , Pakistan</div>
              <p className="rv-edu-course">
                <strong>Relevant Coursework:</strong> Web Development, Database Management Systems, Software Engineering, Object-Oriented Programming (OOP), Data Structures & Algorithms (DSA), Operating Systems, Computer Networks & Security, Cloud Computing, System Analysis & Design, DevOps Fundamentals, Computer Science Fundamentals
              </p>
            </div>
          </section>

          {/* CERTIFICATIONS */}
          <section className="rv-section rv-section-p2">
            <h2 className="rv-section-title">CERTIFICATIONS</h2>
            <div className="rv-cert-row">
              <span className="rv-cert-name">Web Design &amp; Development (MERN Stack)</span>
              <span className="rv-cert-status">Certified</span>
            </div>
          </section>

          {/* INTERNSHIP */}
          <section className="rv-section rv-section-p2">
            <h2 className="rv-section-title">INTERNSHIP</h2>
            <div className="rv-exp-header">
              <span className="rv-exp-title">Web Development Intern</span>
              <span className="rv-exp-location">Softfix technology , Dc ,Gujranwala </span>
              <span className="rv-exp-date">Jun 2026 – Dec 2026</span>
            </div>
            <ul className="rv-bullets">
              <li>Worked on a Real ERP / GST ERP system supporting multi-company operations, with company-specific data management and permission controls.</li>
              <li>Contributed to 4 ERP projects, developing and maintaining modules for sales, purchases, accounts, inventory, reporting, and other business workflows using Laravel, PHP, MySQL, and JavaScript.</li>
              <li>Implemented and maintained RESTful APIs, role-based permissions, company-level access controls, bug fixes, and performance improvements across ERP applications.</li>
            </ul>
          </section>

          {/* ADDITIONAL INFORMATION */}
          <section className="rv-section rv-section-p2">
            <h2 className="rv-section-title">ADDITIONAL INFORMATION</h2>
            <ul className="rv-bullets">
              <li><strong>Development Workflow:</strong> Proficient in Git/GitHub version control, branching strategies, and automated deployment pipelines via Vercel and Netlify.</li>
              <li><strong>Soft Skills:</strong> Strong technical communication, problem-solving, code optimization, and agile project planning.</li>
              <li><strong>Career Objective:</strong> Actively seeking MERN Stack / Frontend Developer Internship or Entry-Level opportunities.</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="header-actions resume-bottom-actions no-print">
        <button className="btn-download" onClick={handleDownload}>📥 Download PDF</button>
        <button className="btn-print" onClick={() => window.print()}>🖨 Print CV</button>
      </div>

      <div className="resume-bottom-line no-print"></div>
    </div>
  );
};

export default Resume;
