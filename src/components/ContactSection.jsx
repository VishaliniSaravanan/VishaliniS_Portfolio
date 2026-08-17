import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
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

      <motion.div
        className="contact-card"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="contact-left">
          <h3 className="contact-heading">Let's Connect &amp; Collaborate</h3>
          <p className="contact-subtext">
            Whether you have a research collaboration idea, AI project opportunity, or just want to talk about machine learning, feel free to drop a message!
          </p>

          <div className="contact-info-list">
            <a href="mailto:vishalinisaravanan546@gmail.com" className="contact-info-item">
              <div className="contact-icon-wrapper">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="contact-label">Email Me</span>
                <p className="contact-val">vishalinisaravanan546@gmail.com</p>
              </div>
            </a>

            <a href="tel:+916383117617" className="contact-info-item">
              <div className="contact-icon-wrapper">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="contact-label">Call / Phone</span>
                <p className="contact-val">+91 63831 17617</p>
              </div>
            </a>

            <div className="social-links-row">
              <a href="https://linkedin.com/in/s-vishalini" target="_blank" rel="noreferrer" className="social-circle" title="LinkedIn">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://github.com/VishaliniSaravanan" target="_blank" rel="noreferrer" className="social-circle" title="GitHub">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-right">
          {submitted ? (
            <div className="contact-success-box">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mb-3" />
              <h4>Message Sent!</h4>
              <p>Thank you for reaching out. I will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hi Vishalini, I'd like to discuss..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Message <Send className="w-4 h-4 ml-2 inline" />
              </button>
            </form>
          )}
        </div>
      </motion.div>

    </div>
  );
};

export default ContactSection;
