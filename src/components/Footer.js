import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <p className="footer-copy">
            Designed & Built by <span className="accent">Yogesh Kumar Pandey</span>
          </p>
          <div className="footer-socials">
            <a href="https://github.com/yogeshpandey800" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fab fa-github" />
            </a>
            <a href="https://linkedin.com/in/yogeshkumarpandey" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin" />
            </a>
            <a href="mailto:ypandey.work@gmail.com" aria-label="Email">
              <i className="fas fa-envelope" />
            </a>
            <a href="https://yogeshpandey800.github.io/portfolio" target="_blank" rel="noreferrer" aria-label="Portfolio">
              <i className="fas fa-globe" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
