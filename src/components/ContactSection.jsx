import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 4000);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-left">
          <p className="contact-subtext">
            Have a role in mind, an idea to share, or simply want to say hello? I’d be happy to hear from you.
          </p>
          <div className="contact-info-list">
            <a href="mailto:vishalinisaravanan546@gmail.com" className="contact-info-item">
              <span className="contact-label">Email</span>
              <p className="contact-val">vishalinisaravanan546@gmail.com</p>
            </a>
            <a href="tel:+916383117617" className="contact-info-item">
              <span className="contact-label">Phone</span>
              <p className="contact-val">+91 63831 17617</p>
            </a>
            <div className="social-links-row">
              <a href="https://linkedin.com/in/s-vishalini" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/VishaliniSaravanan" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="contact-right">
          {submitted ? (
            <div className="contact-success-box">
              <CheckCircle2 className="w-8 h-8 mb-3" />
              <h4>Sent</h4>
              <p>I’ll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button type="submit" className="submit-btn">
                Send <Send className="w-4 h-4 ml-2 inline" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
