import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    icon: 'fas fa-store',
    title: 'CampusBuy',
    subtitle: 'Campus Marketplace Platform',
    period: 'Feb 2026 – Apr 2026',
    featured: true,
    desc: 'An end-to-end campus-specific marketplace enabling peer-to-peer buying and selling with institution-based OTP authentication, real-time chat, and a full-featured listing system.',
    highlights: [
      'Institution-based OTP authentication for verified users only',
      'Real-time buyer/seller chat via Socket.IO',
      'Cloudinary image upload, storage & optimization',
      'Wishlist, reporting & lost-and-found modules',
      'JWT-secured scalable RESTful APIs',
      'Responsive UI built with Tailwind CSS',
      'Clean backend architecture with reusability in mind',
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.IO', 'JWT', 'Cloudinary', 'Tailwind CSS'],
    github: 'https://github.com/yogeshpandey800',
  },
  {
    id: 2,
    icon: 'fas fa-gavel',
    title: 'Online Bidding App',
    subtitle: 'Real-time Auction Platform',
    period: 'Sept 2025 – Nov 2025',
    featured: false,
    desc: 'A real-time web auction application where users submit competitive bids on items and services, with live bid progression and secure session management.',
    highlights: [
      'Live bid progression & real-time updates',
      'Bid validation & concurrency control',
      'Highest bid tracking for data integrity',
      'Secure user authentication & session management',
      'REST APIs for front-end/back-end interaction',
      'Fully responsive across all devices',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT'],
    github: 'https://github.com/yogeshpandey800',
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured <span className="accent">Projects</span></h2>
        <div className="projects-grid">
          {projects.map(p => (
            <div className={`project-card ${p.featured ? 'featured' : ''}`} key={p.id}>
              {p.featured && <div className="featured-badge">⭐ Featured</div>}
              <div className="project-top">
                <div className="project-icon"><i className={p.icon} /></div>
                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <i className="fab fa-github" />
                  </a>
                </div>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-meta">{p.subtitle} &nbsp;·&nbsp; {p.period}</p>
              <p className="project-desc">{p.desc}</p>

              <ul className={`project-highlights ${expanded === p.id ? 'expanded' : ''}`}>
                {p.highlights.map((h, i) => (
                  <li key={i}><i className="fas fa-check-circle" />{h}</li>
                ))}
              </ul>
              {p.highlights.length > 4 && (
                <button
                  className="expand-btn"
                  onClick={() => setExpanded(expanded === p.id ? null : p.id)}
                >
                  {expanded === p.id ? 'Show less ↑' : `+${p.highlights.length - 4} more ↓`}
                </button>
              )}

              <div className="project-tech">
                {p.tech.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
