import React from 'react';
import './Education.css';

const education = [
  {
    year: '2024 – 2026',
    degree: 'Master of Computer Applications',
    institution: 'MMMUT, Gorakhpur',
    icon: 'fas fa-university',
    current: true,
  },
  {
    year: '2020 – 2023',
    degree: 'Bachelor of Computer Applications',
    institution: 'Ewing Christian College, Prayagraj',
    icon: 'fas fa-university',
    current: false,
  },
  {
    year: '2019 – 2020',
    degree: 'Class XII',
    institution: 'Prayag Public School',
    icon: 'fas fa-school',
    current: false,
  },
  {
    year: '2017 – 2018',
    degree: 'Class X',
    institution: 'Prayag Public School',
    icon: 'fas fa-school',
    current: false,
  },
];

export default function Education() {
  return (
    <section className="section section-alt" id="education">
      <div className="container">
        <h2 className="section-title">Edu<span className="accent">cation</span></h2>
        <div className="timeline">
          {education.map((item, i) => (
            <div className="timeline-item" key={i}>
              <div className={`timeline-dot ${item.current ? 'current' : ''}`} />
              <div className={`timeline-card ${item.current ? 'current' : ''}`}>
                <span className="timeline-year">{item.year}</span>
                <h3>{item.degree}</h3>
                <p className="timeline-inst">
                  <i className={item.icon} /> {item.institution}
                </p>
                {item.current && <span className="current-badge">Current</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
