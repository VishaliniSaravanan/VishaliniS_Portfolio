import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Users, Award, Mic, TreePine } from 'lucide-react';
import './LeadershipSection.css';

import training1  from '../assets/Training1 .jpeg';
import training2  from '../assets/Training2.jpeg';
import mocImg     from '../assets/MOC.png';
import ecoImg     from '../assets/Club.png';
import seminarsImg from '../assets/seminars.jpeg';

/* ── Lightbox ────────────────────────────────────────────────── */
function Lightbox({ images, startIdx, onClose }) {
  const [idx, setIdx] = useState(startIdx ?? 0);
  const multi = images.length > 1;
  return (
    <div className="ls-lb-backdrop" onClick={onClose}>
      <motion.div className="ls-lb-overlay"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
      <motion.div className="ls-lb-box"
        initial={{ opacity: 0, scale: 0.88, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.88, y: 30 }}
        transition={{ type: 'spring', damping: 26, stiffness: 300 }}
        onClick={e => e.stopPropagation()}
      >
        <button className="ls-lb-close" onClick={onClose}><X size={18} /></button>
        <img src={images[idx]} alt="" className="ls-lb-img" />
        {multi && (
          <div className="ls-lb-nav">
            <button onClick={() => setIdx(i => (i - 1 + images.length) % images.length)}><ChevronLeft size={18}/></button>
            <span>{idx + 1} / {images.length}</span>
            <button onClick={() => setIdx(i => (i + 1) % images.length)}><ChevronRight size={18}/></button>
          </div>
        )}
      </motion.div>
    </div>
  );
}

/* ── Main ────────────────────────────────────────────────────── */
export default function LeadershipSection() {
  const [lightbox, setLightbox] = useState(null);

  const open = (images, startIdx = 0) => setLightbox({ images, startIdx });

  return (
    <>
      <div className="ls-wrapper">
        <div className="ls-bento-grid">

          {/* ① PLACEMENT BATCH HEAD */}
          <motion.div className="ls-card ls-card--placement"
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }}>

            <div className="ls-split-stage">
              <div className="ls-split-left" onClick={() => open([training1, training2], 0)}>
                <img src={training1} alt="Placement Training Session 1" className="ls-split-img ls-split-img--session1" />
                <div className="ls-split-scrim" />
                <span className="ls-split-caption">Session I</span>
              </div>
              <div className="ls-split-right" onClick={() => open([training1, training2], 1)}>
                <img src={training2} alt="Placement Training Session 2" className="ls-split-img ls-split-img--session2" />
                <div className="ls-split-scrim" />
                <span className="ls-split-caption">Session II</span>
              </div>
              <div className="ls-split-divider" />
              <span className="ls-split-badge">Placement Batch Head</span>
            </div>

            <div className="ls-card-body">
              <div className="ls-card-top-row">
                <span className="ls-tag"><Users size={10} style={{marginRight:4}}/>Placement Batch Head</span>
                <span className="ls-period">2023 – Present</span>
              </div>
              <p className="ls-org">Velammal College of Engg. &amp; Tech.</p>
              <p className="ls-summary">
                Spearheaded campus recruitment drives and conducted soft skills training programs to prepare peers for industry placement.
              </p>
              <ul className="ls-bullets">
                {[
                  'Spearheaded campus recruitment for 60+ students',
                  'Trained 60+ students along with other batch heads on soft skills training'
                ].map((b,i) => (
                  <li key={i}><span className="ls-dot" />{b}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ② MASTER OF CEREMONIES */}
          <motion.div className="ls-card ls-card--moc"
            initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.08 }}>

            <div className="ls-poster" onClick={() => open([mocImg], 0)}>
              <img src={mocImg} alt="Master of Ceremonies" className="ls-poster-img" />
              <div className="ls-poster-gradient" />

              <div className="ls-poster-mic">
                <Mic size={16} />
              </div>

              <div className="ls-poster-text">
                <span className="ls-poster-tag">Stage & Media</span>
                <h3 className="ls-poster-role">Master of Ceremonies</h3>
                <p className="ls-poster-org">Velammal College of Engg. &amp; Tech.</p>
                <span className="ls-poster-period">2023 – Present</span>
              </div>
            </div>

            <div className="ls-moc-body">
              <ul className="ls-bullets">
                {[
                  "Anchored in Fresher's Day 2025 & Graduation Day 2025",
                  'Master of Ceremonies for National Science Day',
                  'Anchored KNIME Workshop session'
                ].map((b,i) => (
                  <li key={i}><span className="ls-dot" />{b}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ③ ECO CLUB */}
          <motion.div className="ls-card ls-card--eco"
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.14 }}>

            <div className="ls-eco-img-box" onClick={() => open([ecoImg], 0)}>
              <img src={ecoImg} alt="ECO Club" className="ls-eco-img" />
              <div className="ls-eco-overlay" />
              <span className="ls-eco-badge"><TreePine size={11} style={{marginRight:4}}/>ECO Club Member</span>
              <span className="ls-img-zoom-hint">⤢</span>
            </div>

            <div className="ls-card-body">
              <div className="ls-card-top-row">
                <span className="ls-tag ls-tag--green">Sustainability</span>
                <span className="ls-period">2024 – 2025</span>
              </div>
              <p className="ls-org">Velammal College of Engg. &amp; Tech.</p>
              <p className="ls-summary">
                Active member of the ECO Club, participating in environmental awareness workshops and campus green initiatives.
              </p>
              <ul className="ls-bullets">
                {[
                  'ECO Club Member',
                  'Participated in workshops regarding environmental awareness of ECO Club'
                ].map((b,i) => (
                  <li key={i}><span className="ls-dot ls-dot--green" />{b}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ④ DEPARTMENT SEMINARS */}
          <motion.div className="ls-card ls-card--cr"
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.2 }}>

            <div className="ls-seminar-img-box" onClick={() => open([seminarsImg], 0)}>
              <img src={seminarsImg} alt="Department Seminars" className="ls-seminar-img" />
              <div className="ls-film-scrim" />
              <span className="ls-film-label">Dept. Seminars</span>
            </div>

            <div className="ls-card-body">
              <div className="ls-card-top-row">
                <span className="ls-tag"><Award size={10} style={{marginRight:4}}/>Department Seminars</span>
                <span className="ls-period">2023 – Present</span>
              </div>
              <p className="ls-org">Velammal College of Engg. &amp; Tech.</p>
              <p className="ls-summary">
                Delivered technical seminars across multiple coursework modules in the department.
              </p>
              <ul className="ls-bullets">
                {[
                  'AIM: Seminar on Ensemble Learning concepts',
                  'Object Oriented Software Engineering: Seminar on Project Scheduling & Project Management',
                  'Computer Networks: Seminar on MAC sublayer of Data Link Layer, etc.'
                ].map((b,i) => (
                  <li key={i}><span className="ls-dot" />{b}</li>
                ))}
              </ul>
            </div>
          </motion.div>

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
