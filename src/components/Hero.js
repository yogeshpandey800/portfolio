import React, { useEffect, useState } from 'react';
import './Hero.css';
import profilePhoto from '../images/Profile.jpg';

const roles = ['Full Stack Developer', 'MERN Stack Developer', 'React.js Developer', 'Node.js Developer'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-orb orb1" />
        <div className="hero-orb orb2" />
        <div className="grid-overlay" />
      </div>

      <div className="hero-inner container">
        <div className="hero-content fade-up">
          <p className="hero-greeting">Hi there, I'm</p>
          <h1 className="hero-name">
            Yogesh Kumar<br />
            <span className="accent">Pandey</span>
          </h1>
          <p className="hero-role">
            <span className="typed">{displayed}</span>
            <span className="cursor">|</span>
          </p>
          <p className="hero-desc">
            Building high-impact web applications with the <strong>MERN stack</strong>,
            real-time features via <strong>Socket.IO</strong>, and clean scalable architecture.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary" onClick={e => { e.preventDefault(); document.getElementById('projects').scrollIntoView({behavior:'smooth'}); }}>
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline" onClick={e => { e.preventDefault(); document.getElementById('contact').scrollIntoView({behavior:'smooth'}); }}>
              Get in Touch
            </a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/yogeshpandey800" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github" /></a>
            <a href="https://linkedin.com/in/yogeshkumarpandey" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin" /></a>
            <a href="mailto:ypandey.work@gmail.com" aria-label="Email"><i className="fas fa-envelope" /></a>
            <a href="https://MathtoData.com" target="_blank" rel="noreferrer" aria-label="Portfolio"><i className="fas fa-globe" /></a>
          </div>
        </div>

        <div className="hero-photo fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="hero-photo-wrapper">
            <div className="hero-photo-bg" />
            <img src={profilePhoto} alt="Yogesh Kumar Pandey" className="hero-photo-img" />
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="scroll-down"
        onClick={e => { e.preventDefault(); document.getElementById('about').scrollIntoView({behavior:'smooth'}); }}
        aria-label="Scroll down"
      >
        <i className="fas fa-chevron-down" />
      </a>
    </section>
  );
}
