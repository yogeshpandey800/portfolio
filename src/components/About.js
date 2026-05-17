import React from 'react';
import './About.css';

const stats = [
  { num: '2+',   label: 'Projects Shipped' },
  { num: '100+', label: 'LeetCode Problems' },
  { num: '5★',   label: 'HackerRank Java' },
];

const info = [
  { icon: 'fas fa-map-marker-alt', text: 'Noida, Uttar Pradesh' },
  { icon: 'fas fa-envelope',       text: 'ypandey.work@gmail.com',      href: 'mailto:ypandey.work@gmail.com' },
  { icon: 'fas fa-phone',          text: '+91 9839682710',               href: 'tel:+919839682710' },
  { icon: 'fas fa-globe',          text: 'yogeshpandey800.github.io/portfolio', href: 'https://yogeshpandey800.github.io/portfolio' },
  { icon: 'fab fa-github',         text: 'yogeshpandey800',              href: 'https://github.com/yogeshpandey800' },
  { icon: 'fab fa-linkedin',       text: 'yogeshkumarpandey',            href: 'https://linkedin.com/in/yogeshkumarpandey' },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">About <span className="accent">Me</span></h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a Computer Science student and full stack web developer with hands-on experience
              building production-ready applications using the <strong>MERN stack</strong>.
            </p>
            <p>
              I specialize in crafting scalable REST APIs, real-time communication with{' '}
              <strong>Socket.IO</strong>, secure authentication with <strong>JWTs</strong>,
              and cloud storage integration via <strong>Cloudinary</strong>.
            </p>
            <p>
              Passionate about exploring new technologies and turning complex problems into
              elegant, high-impact software solutions.
            </p>
            <div className="about-stats">
              {stats.map(s => (
                <div className="stat" key={s.label}>
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-card">
            {info.map(item => (
              <div className="info-row" key={item.text}>
                <i className={item.icon} />
                {item.href
                  ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{item.text}</a>
                  : <span>{item.text}</span>
                }
              </div>
            ))}
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ marginTop: '1.5rem', display: 'inline-flex' }}
              onClick={e => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
