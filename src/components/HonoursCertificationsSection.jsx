import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Star, ExternalLink, X, Maximize2, ShieldCheck, Sparkles } from 'lucide-react';
import './HonoursCertificationsSection.css';

// Asset Imports
import acmKareImg from '../assets/ACM Kare.jpeg';
import tceImg from '../assets/TCE.jpeg';
import ictAcademyImg from '../assets/ICT Academy.png';
import nvidiaDlImg from '../assets/NVIDIA DL.png';
import ibmAiImg from '../assets/AI.png';
import ibmDesignImg from '../assets/design.png';
import javaImg from '../assets/Java.png';
import sqlImg from '../assets/SQL.png';
import awsAiImg from '../assets/AWS AI .png';

const CERTIFICATIONS = [
  {
    id: 'ict-youthtalk',
    name: 'ICT Academy YouthTalk',
    issuer: 'ICT Academy',
    year: '2025',
    tag: 'Public Speaking',
    badge: '🎤 PRE-FINALIST',
    image: ictAcademyImg,
    subtitle: 'Regional Pre-Finalist Speaker'
  },
  {
    id: 'nvidia-dl',
    name: 'Fundamentals of Deep Learning',
    issuer: 'NVIDIA Deep Learning Institute',
    year: '2025',
    tag: 'Deep Learning',
    image: nvidiaDlImg,
    link: 'https://learn.nvidia.com/certificates?id=seRAha32RkuvKAi20qYEAQ'
  },
  {
    id: 'ibm-ai',
    name: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM',
    year: '2025',
    tag: 'AI Core',
    image: ibmAiImg,
    link: 'https://www.credly.com/badges/34b4b5f2-185b-438d-8605-cc428834fdb6/public_url'
  },
  {
    id: 'ibm-design',
    name: 'Enterprise Design Thinking Practitioner',
    issuer: 'IBM',
    year: '2024',
    tag: 'UX & Product Design',
    image: ibmDesignImg,
    link: 'https://www.credly.com/badges/a2bd4a9e-fb5f-4c47-acdc-f6b84b78d1bd/public_url'
  },
  {
    id: 'java-dev',
    name: 'Java Developer Certification',
    issuer: 'LinkedIn Learning',
    year: '2024',
    tag: 'Software Engineering',
    image: javaImg,
    link: 'https://www.linkedin.com/learning/certificates/81e6f4413dfb7cc7c525eb5c8ddb1116d64bbdd7e02844e0332d499af66ba52b?trk=share_certificate'
  },
  {
    id: 'sql-cert',
    name: 'SQL Database Certification',
    issuer: 'Udemy',
    year: '2024',
    tag: 'Databases & SQL',
    image: sqlImg,
    link: 'https://www.udemy.com/certificate/UC-a6a9cbd5-352b-4922-867f-b6d337f1b8bf/'
  },
  {
    id: 'aws-ai',
    name: 'AWS AI Practitioner Certification',
    issuer: 'Amazon Web Services (AWS)',
    year: '2025',
    tag: 'Cloud & AI',
    image: awsAiImg,
    link: 'https://aws.amazon.com/certification/'
  }
];

const HonoursCertificationsSection = () => {
  const [activeModalItem, setActiveModalItem] = useState(null);

  return (
    <div className="bento-section-wrapper">
      {/* Bento Grid Layout */}
      <div className="bento-grid-container">

        {/* 1. HORIZONTAL FULL HERO BENTO CARD: ACM KARE (1st Place Winner) */}
        <motion.div
          className="bento-card bento-hero-horizontal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onClick={() => setActiveModalItem({
            title: 'ACM KARE HackOdyssey 3.0',
            subtitle: '1st Place Winner / Hackathon Champion',
            image: acmKareImg,
            tag: 'Hackathon Win',
            date: 'Mar 2026'
          })}
        >
          <div className="bento-hero-img-box">
            <img src={acmKareImg} alt="ACM KARE HackOdyssey 3.0 Winner" className="bento-hero-img" />
            <div className="bento-hero-overlay" />
            <span className="bento-hero-badge">🏆 1st PLACE WINNER</span>
          </div>
          <div className="bento-hero-content">
            <div className="bento-card-top-row">
              <span className="bento-card-tag">HackOdyssey 3.0</span>
              <span className="bento-card-date">Mar 2026</span>
            </div>
            <h3 className="bento-hero-title">ACM KARE HackOdyssey 3.0 Winner</h3>
            <p className="bento-hero-desc">
              Secured <strong>1st Place</strong> among 90+ competing engineering teams nationwide. Designed and deployed real-time AI solutions in an intensive 36-hour hackathon.
            </p>
            <div className="bento-card-preview-btn">
              <Sparkles className="w-3.5 h-3.5 mr-1" /> View Photo Preview
            </div>
          </div>
        </motion.div>

        {/* 2. VERTICAL FEATURED BENTO CARD: BEST PAPER AWARD (TCE) */}
        <motion.div
          className="bento-card bento-vertical-featured"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onClick={() => setActiveModalItem({
            title: 'Best Paper Award – CurvOpt-LLM',
            subtitle: 'Paradigm 2026, Thiagarajar College of Engineering (TCE)',
            image: tceImg,
            tag: 'Research Excellence',
            date: 'Mar 2026'
          })}
        >
          <div className="bento-vertical-img-box">
            <img src={tceImg} alt="Best Paper Award TCE" className="bento-vertical-img" />
            <div className="bento-vertical-overlay" />
            <span className="bento-vertical-badge">🎖️ BEST PAPER AWARD</span>
          </div>
          <div className="bento-vertical-content">
            <div className="bento-card-top-row">
              <span className="bento-card-tag">Research Award</span>
              <span className="bento-card-date">Mar 2026</span>
            </div>
            <h3 className="bento-vertical-title">Best Paper Award – TCE</h3>
            <p className="bento-vertical-sub">Paradigm 2026, Thiagarajar College of Engineering</p>
            <p className="bento-vertical-desc">
              Recognized for groundbreaking research in curvature-aware LLM mixed-precision quantization.
            </p>
            <div className="bento-card-preview-btn">
              <Maximize2 className="w-3.5 h-3.5 mr-1" /> View Award Document
            </div>
          </div>
        </motion.div>

        {/* 3. CERTIFICATIONS & PREVIEWS BENTO GRID CARDS */}
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={cert.id}
            className="bento-card bento-cert-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
          >
            {/* Image Preview Box */}
            <div
              className="bento-cert-img-box"
              onClick={() => setActiveModalItem({
                title: cert.name,
                subtitle: cert.subtitle || `${cert.issuer} • ${cert.year}`,
                image: cert.image,
                tag: cert.tag,
                link: cert.link
              })}
            >
              <img src={cert.image} alt={cert.name} className="bento-cert-img" />
              <div className="bento-cert-img-overlay" />
              {cert.badge && (
                <span className="bento-mini-badge">{cert.badge}</span>
              )}
            </div>

            {/* Cert Content Body */}
            <div className="bento-cert-body">
              <div className="bento-card-top-row">
                <span className="bento-card-tag">{cert.tag}</span>
                <span className="bento-card-date">{cert.year}</span>
              </div>

              <h4 className="bento-cert-title">{cert.name}</h4>
              <p className="bento-cert-issuer">{cert.issuer}</p>

              <div className="bento-cert-actions">
                <button
                  className="bento-preview-link-btn"
                  onClick={() => setActiveModalItem({
                    title: cert.name,
                    subtitle: cert.subtitle || `${cert.issuer} • ${cert.year}`,
                    image: cert.image,
                    tag: cert.tag,
                    link: cert.link
                  })}
                >
                  <Maximize2 className="w-3 h-3 mr-1" /> Preview
                </button>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bento-verify-link-btn"
                  >
                    Verify <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}

      </div>

      {/* FULL IMAGE LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeModalItem && (
          <div className="bento-modal-backdrop">
            <motion.div
              className="bento-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalItem(null)}
            />

            <motion.div
              className="bento-modal-box"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div className="bento-modal-header">
                <div>
                  <span className="bento-card-tag">{activeModalItem.tag}</span>
                  <h3 className="bento-modal-title">{activeModalItem.title}</h3>
                  <p className="bento-modal-sub">{activeModalItem.subtitle}</p>
                </div>
                <button
                  className="bento-modal-close"
                  onClick={() => setActiveModalItem(null)}
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="bento-modal-img-wrapper">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="bento-modal-full-img"
                />
              </div>

              {activeModalItem.link && (
                <div className="bento-modal-footer">
                  <a
                    href={activeModalItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bento-modal-verify-btn"
                  >
                    <ShieldCheck className="w-4 h-4 mr-2" /> Verify Official Credential
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HonoursCertificationsSection;
