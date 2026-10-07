import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import './HonoursCertificationsSection.css';

import acmKareImg from '../assets/ACM Kare.jpeg';
import tceImg from '../assets/TCE.jpeg';
import ictAcademyImg from '../assets/ICT Academy.png';
import nvidiaDlImg from '../assets/NVIDIA DL.png';
import ibmAiImg from '../assets/AI.png';
import ibmDesignImg from '../assets/design.png';
import javaImg from '../assets/Java.png';
import sqlImg from '../assets/SQL.png';
import awsAiImg from '../assets/AWS AI .png';

const FEATURED = [
  {
    title: 'ACM KARE HackOdyssey 3.0',
    subtitle: '1st place · Mar 2026',
    image: acmKareImg,
    text: 'First among 90+ teams. Built and shipped a real-time AI solution in a 36-hour hackathon.'
  },
  {
    title: 'Best Paper Award — TCE',
    subtitle: 'Paradigm 2026 · Thiagarajar College of Engineering',
    image: tceImg,
    text: 'Awarded for work on curvature-aware mixed-precision quantization for LLMs.'
  }
];

const CERTIFICATIONS = [
  {
    id: 'ict-youthtalk',
    name: 'ICT Academy YouthTalk',
    issuer: 'ICT Academy',
    year: '2025',
    image: ictAcademyImg
  },
  {
    id: 'sap-badger',
    name: 'Learning Basic ABAP Programming',
    issuer: 'SAP',
    year: '2025',
    image: ictAcademyImg,
    link: 'https://badger.learning.sap.com/verify/xuvyk-gusut-dilon-hifep-bepul'
  },
  {
    id: 'ibm-design',
    name: 'Enterprise Design Thinking Practitioner',
    issuer: 'IBM',
    year: '2024',
    image: ibmDesignImg,
    link: 'https://www.credly.com/badges/a2bd4a9e-fb5f-4c47-acdc-f6b84b78d1bd/public_url'
  },
  {
    id: 'java-dev',
    name: 'Java Developer Certification',
    issuer: 'LinkedIn Learning',
    year: '2024',
    image: javaImg,
    link: 'https://www.linkedin.com/learning/certificates/81e6f4413dfb7cc7c525eb5c8ddb1116d64bbdd7e02844e0332d499af66ba52b?trk=share_certificate'
  },
  {
    id: 'sql-cert',
    name: 'SQL Database Certification',
    issuer: 'Udemy',
    year: '2024',
    image: sqlImg,
    link: 'https://www.udemy.com/certificate/UC-a6a9cbd5-352b-4922-867f-b6d337f1b8bf/'
  },
  {
    id: 'aws-ai',
    name: 'AWS AI Practitioner',
    issuer: 'Amazon Web Services',
    year: '2025',
    image: awsAiImg,
    link: 'https://aws.amazon.com/certification/'
  }
];

const HonoursCertificationsSection = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="bento-section-wrapper">
      <div className="honors-featured">
        {FEATURED.map((item) => (
          <button
            type="button"
            key={item.title}
            className="honors-feature"
            onClick={() => setActive(item)}
          >
            <div className="honors-feature-img">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="honors-feature-copy">
              <p className="honors-kicker">{item.subtitle}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="honors-certs">
        {CERTIFICATIONS.map((cert) => (
          <article key={cert.id} className="honors-cert">
            <button
              type="button"
              className="honors-cert-img"
              onClick={() => setActive({ title: cert.name, subtitle: `${cert.issuer} · ${cert.year}`, image: cert.image, link: cert.link })}
            >
              <img src={cert.image} alt={cert.name} />
            </button>
            <div className="honors-cert-body">
              <p className="honors-kicker">
                {cert.issuer} · {cert.year}
              </p>
              <h4>{cert.name}</h4>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  Verify <ExternalLink size={12} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <div className="bento-modal-backdrop">
            <motion.div
              className="bento-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            />
            <motion.div
              className="bento-modal-box"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
            >
              <div className="bento-modal-header">
                <div>
                  <h3 className="bento-modal-title">{active.title}</h3>
                  <p className="bento-modal-sub">{active.subtitle}</p>
                </div>
                <button type="button" className="bento-modal-close" onClick={() => setActive(null)} aria-label="Close">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="bento-modal-img-wrapper">
                <img src={active.image} alt={active.title} className="bento-modal-full-img" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HonoursCertificationsSection;
