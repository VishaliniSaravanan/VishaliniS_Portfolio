import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './LeadershipSection.css';

import training1 from '../assets/Training1 .jpeg';
import training2 from '../assets/Training2.jpeg';
import mocImg from '../assets/MOC.png';
import ecoImg from '../assets/Club.png';
import seminarsImg from '../assets/seminars.jpeg';

function Lightbox({ images, startIdx, onClose }) {
  const [idx, setIdx] = useState(startIdx ?? 0);
  const multi = images.length > 1;

  return (
    <div className="ls-lb-backdrop" onClick={onClose} role="presentation">
      <motion.div className="ls-lb-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
      <motion.div
        className="ls-lb-box"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="ls-lb-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>
        <img src={images[idx]} alt="" className="ls-lb-img" />
        {multi && (
          <div className="ls-lb-nav">
            <button type="button" onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)}>
              <ChevronLeft size={18} />
            </button>
            <span>
              {idx + 1} / {images.length}
            </span>
            <button type="button" onClick={() => setIdx((i) => (i + 1) % images.length)}>
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}

const ENTRIES = [
  {
    id: 'placement',
    title: 'Placement Batch Head',
    period: '2023 – Present',
    org: 'Velammal College of Engineering & Technology',
    summary: 'Coordinated campus recruitment and soft-skills training for peers heading into placements.',
    bullets: ['Outreach for 60+ students', 'Soft-skills sessions with other batch heads'],
    images: [
      { src: training1, alt: 'Placement training session I', focus: 'focus-blue-chudi' },
      { src: training2, alt: 'Placement training session II', focus: 'focus-blue-chudi' }
    ]
  },
  {
    id: 'moc',
    title: 'Master of Ceremonies',
    period: '2023 – Present',
    org: 'Velammal College of Engineering & Technology',
    summary: 'Hosted flagship college events and technical workshops.',
    bullets: [
      "Fresher's Day 2025",
      'Graduation Day 2025',
      'National Science Day',
      'Power BI Workshop'
    ],
    images: [{ src: mocImg, alt: 'Master of Ceremonies', focus: 'focus-top' }]
  },
  {
    id: 'eco',
    title: 'ECO Club',
    period: '2024 – 2025',
    org: 'Velammal College of Engineering & Technology',
    summary: 'Campus sustainability work and environmental awareness workshops.',
    bullets: ['Club member', 'Awareness workshops'],
    images: [{ src: ecoImg, alt: 'ECO Club activity', focus: 'focus-center' }]
  },
  {
    id: 'seminars',
    title: 'Department Seminars',
    period: '2023 – Present',
    org: 'Velammal College of Engineering & Technology',
    summary: 'Technical seminars across core CS coursework.',
    bullets: [
      'Ensemble Learning',
      'System and Inflight Testing of UAV',
      'MAC Layer Random Access Protocols',
      'Project scheduling & management'
    ],
    images: [{ src: seminarsImg, alt: 'Department seminar', focus: 'focus-seminar' }]
  }
];

export default function LeadershipSection() {
  const [lightbox, setLightbox] = useState(null);
  const open = (images, startIdx = 0) => setLightbox({ images, startIdx });

  return (
    <>
      <div className="ls-wrapper">
        <div className="ls-editorial">
          {ENTRIES.map((entry, index) => {
            const imageSources = entry.images.map((img) => img.src);
            const reverse = index % 2 === 1;

            return (
              <article key={entry.id} className={`ls-entry${reverse ? ' ls-entry--reverse' : ''}`}>
                <div className={`ls-visual${entry.images.length > 1 ? ' ls-visual--duo' : ''}`}>
                  {entry.images.map((img, imgIdx) => (
                    <button
                      key={img.alt}
                      type="button"
                      className="ls-visual-btn"
                      onClick={() => open(imageSources, imgIdx)}
                    >
                      <img src={img.src} alt={img.alt} className={`ls-photo ${img.focus}`} loading="lazy" />
                    </button>
                  ))}
                </div>
                <div className="ls-copy">
                  <p className="ls-meta">
                    {entry.period} · {entry.org}
                  </p>
                  <h3 className="ls-title">{entry.title}</h3>
                  <p className="ls-summary">{entry.summary}</p>
                  <ul className="ls-bullets">
                    {entry.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <Lightbox images={lightbox.images} startIdx={lightbox.startIdx} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
