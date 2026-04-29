import React, { useState } from 'react';
import './Contact.css';

const contactItems = [
  { icon: 'fas fa-envelope',  label: 'Email',    value: 'ypandey.work@gmail.com',        href: 'mailto:ypandey.work@gmail.com' },
  { icon: 'fas fa-phone',     label: 'Phone',    value: '+91 9839682710',                 href: 'tel:+919839682710' },
  { icon: 'fab fa-linkedin',  label: 'LinkedIn', value: 'yogeshkumarpandey',              href: 'https://linkedin.com/in/yogeshkumarpandey' },
  { icon: 'fab fa-github',    label: 'GitHub',   value: 'yogeshpandey800',                href: 'https://github.com/yogeshpandey800' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // Opens default mail client with pre-filled content
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:ypandey.work@gmail.com?subject=${subject}&body=${body}`;
    setStatus('Opening your mail client...');
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <h2 className="section-title">Get in <span className="accent">Touch</span></h2>
        <p className="contact-sub">
          Open to new opportunities, collaborations, or just a good tech conversation.
        </p>
        <div className="contact-grid">

          <div className="contact-info">
            {contactItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                className="contact-card"
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <div className="contact-icon"><i className={item.icon} /></div>
                <div>
                  <span className="contact-label">{item.label}</span>
                  <span className="contact-value">{item.value}</span>
                </div>
                <i className="fas fa-arrow-right contact-arrow" />
              </a>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text" id="name" name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email" id="email" name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message" name="message"
                rows="5"
                placeholder="What's on your mind?"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-full">
              <i className="fas fa-paper-plane" /> Send Message
            </button>
            {status && <p className="form-status">{status}</p>}
          </form>

        </div>
      </div>
    </section>
  );
}
