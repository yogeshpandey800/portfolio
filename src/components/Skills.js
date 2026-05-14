import React from 'react';
import './Skills.css';

const skillGroups = [
  { icon: 'fas fa-code',      title: 'Languages', tags: ['Java', 'JavaScript', 'Python', 'SQL'],                          color: '#1c1c1c' },
  { icon: 'fas fa-desktop',   title: 'Frontend',  tags: ['HTML', 'CSS', 'React.js', 'Tailwind CSS', 'Bootstrap'],         color: '#1c1c1c' },
  { icon: 'fas fa-server',    title: 'Backend',   tags: ['Node.js', 'Express.js'],                                        color: '#1c1c1c' },
  { icon: 'fas fa-database',  title: 'Database',  tags: ['MongoDB', 'Mongoose', 'MySQL'],                                 color: '#1c1c1c' },
  { icon: 'fas fa-tools',     title: 'Tools',     tags: ['Git', 'GitHub', 'Postman', 'Cloudinary', 'Socket.IO'],          color: '#1c1c1c' },
  { icon: 'fas fa-lightbulb', title: 'Concepts',  tags: ['REST APIs', 'JWT Auth', 'OOP', 'Real-time Comm.'],              color: '#1c1c1c' },
];

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <h2 className="section-title">Tech <span className="accent">Skills</span></h2>
        <div className="skills-grid">
          {skillGroups.map(group => (
            <div className="skill-card" key={group.title} style={{ '--card-color': group.color }}>
              <div className="skill-icon">
                <i className={group.icon} style={{ color: group.color }} />
              </div>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
