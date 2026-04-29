import React from 'react';
import './Certifications.css';

const certs = [
  { icon: 'fab fa-docker',      title: 'Docker Essentials: A Developer Introduction', issuer: 'IBM / Cognitive Class', color: '#2496ed' },
  { icon: 'fas fa-shield-alt',  title: 'Cybersecurity Fundamentals',                  issuer: 'IBM / Cognitive Class', color: '#f472b6' },
  { icon: 'fas fa-laptop-code', title: 'Certificate of Internship',                   issuer: 'CDAC',                  color: '#34d399' },
];

const achievements = [
  {
    icon: 'fab fa-hackerrank',
    title: '5-Star Rating on HackerRank',
    desc: 'Java — demonstrating strong problem-solving skills',
    color: '#00ea64',
  },
  {
    icon: 'fas fa-code',
    title: '100+ Problems on LeetCode',
    desc: 'Data Structures & Algorithms using Java',
    color: '#ffa116',
  },
];

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <h2 className="section-title">Certs & <span className="accent">Achievements</span></h2>
        <div className="ca-grid">

          <div className="ca-col">
            <h3 className="ca-heading">
              <i className="fas fa-certificate" /> Certifications
            </h3>
            <div className="cert-list">
              {certs.map(c => (
                <div className="cert-card" key={c.title}>
                  <div className="cert-icon" style={{ background: `${c.color}18`, color: c.color }}>
                    <i className={c.icon} />
                  </div>
                  <div className="cert-info">
                    <h4>{c.title}</h4>
                    <p>{c.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ca-col">
            <h3 className="ca-heading">
              <i className="fas fa-trophy" /> Achievements
            </h3>
            <div className="ach-list">
              {achievements.map(a => (
                <div className="ach-card" key={a.title}>
                  <div className="ach-icon" style={{ background: `${a.color}18`, color: a.color }}>
                    <i className={a.icon} />
                  </div>
                  <div className="ach-info">
                    <h4>{a.title}</h4>
                    <p>{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
