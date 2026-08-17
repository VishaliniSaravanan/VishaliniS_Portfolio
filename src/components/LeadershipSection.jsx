import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Users, Award, Mic, TreePine } from 'lucide-react';
import './LeadershipSection.css';

import training1  from '../assets/Training1 .jpeg';
import training2  from '../assets/Training2.jpeg';
import mocImg     from '../assets/MOC.png';
import ecoImg     from '../assets/Club.png';
import seminarsImg from '../assets/seminars.jpeg';
import ipImg      from '../assets/Image processing Workshop.png';

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

          {/* ① PLACEMENT — hero wide card, diagonal split images */}
          <motion.div className="ls-card ls-card--placement"
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }}>

            {/* Diagonal image split */}
            <div className="ls-split-stage">
              <div className="ls-split-left" onClick={() => open([training1, training2], 0)}>
                <img src={training1} alt="Placement Training 1" className="ls-split-img" />
                <div className="ls-split-scrim" />
                <span className="ls-split-caption">Session I</span>
              </div>
              <div className="ls-split-right" onClick={() => open([training1, training2], 1)}>
                <img src={training2} alt="Placement Training 2" className="ls-split-img" />
                <div className="ls-split-scrim" />
                <span className="ls-split-caption">Session II</span>
              </div>
              {/* diagonal divider */}
              <div className="ls-split-divider" />
              {/* badge over the divider */}
              <span className="ls-split-badge">🎯 Placement Batch Head</span>
            </div>

            <div className="ls-card-body">
              <div className="ls-card-top-row">
                <span className="ls-tag"><Users size={10} style={{marginRight:4}}/>Student Leader</span>
                <span className="ls-period">2023 – Present</span>
              </div>
              <p className="ls-org">Velammal College of Engg. &amp; Tech.</p>
              <p className="ls-summary">
                Spearheaded campus recruitment for 60+ students — coordinated 8+ drives with top-tier companies, ran intensive aptitude boot-camps, and mentored peers on résumé building and interview readiness.
              </p>
              <ul className="ls-bullets">
                {['8+ campus drives with Fortune 500 recruiters','Mock interviews & aptitude training sessions','Resume workshops & soft-skills mentoring'].map((b,i) => (
                  <li key={i}><span className="ls-dot" />{b}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ② MOC — tall magazine-cover portrait card */}
          <motion.div className="ls-card ls-card--moc"
            initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.08 }}>

            <div className="ls-poster" onClick={() => open([mocImg], 0)}>
              <img src={mocImg} alt="Master of Ceremonies" className="ls-poster-img" />
              <div className="ls-poster-gradient" />

              {/* floating mic badge */}
              <div className="ls-poster-mic">
                <Mic size={16} />
              </div>

              {/* text overlaid at bottom */}
              <div className="ls-poster-text">
                <span className="ls-poster-tag">Stage & Media</span>
                <h3 className="ls-poster-role">Master of Ceremonies</h3>
                <p className="ls-poster-org">Velammal College of Engg. &amp; Tech.</p>
                <span className="ls-poster-period">2023 – Present</span>
              </div>
            </div>

            {/* bullets below image */}
            <div className="ls-moc-body">
              <ul className="ls-bullets">
                {['Anchored National Symposium "Innovision 2024"','Hosted Annual Day & farewell ceremonies','Bilingual (Tamil / English) stage anchoring'].map((b,i) => (
                  <li key={i}><span className="ls-dot" />{b}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ③ ECO CLUB — accent-tinted image + nature feel */}
          <motion.div className="ls-card ls-card--eco"
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.14 }}>

            <div className="ls-eco-img-box" onClick={() => open([ecoImg], 0)}>
              <img src={ecoImg} alt="ECO Club" className="ls-eco-img" />
              <div className="ls-eco-overlay" />
              <span className="ls-eco-badge"><TreePine size={11} style={{marginRight:4}}/>ECO Club</span>
              <span className="ls-img-zoom-hint">⤢</span>
            </div>

            <div className="ls-card-body">
              <div className="ls-card-top-row">
                <span className="ls-tag ls-tag--green">Sustainability</span>
                <span className="ls-period">2024 – 2025</span>
              </div>
              <p className="ls-org">Velammal College of Engg. &amp; Tech.</p>
              <p className="ls-summary">Championed green campus initiatives — tree-planting drives, zero-waste workshops, and awareness campaigns for 500+ students.</p>
              <ul className="ls-bullets">
                {['200+ saplings planted on World Environment Day','"Go Green" awareness rally','E-waste collection drives on campus'].map((b,i) => (
                  <li key={i}><span className="ls-dot ls-dot--green" />{b}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ④ CLASS REP — two-image filmstrip */}
          <motion.div className="ls-card ls-card--cr"
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.2 }}>

            <div className="ls-filmstrip">
              <div className="ls-film-frame" onClick={() => open([seminarsImg, ipImg], 0)}>
                <img src={seminarsImg} alt="Department Seminar" className="ls-film-img" />
                <div className="ls-film-scrim" />
                <span className="ls-film-label">Dept. Seminar</span>
              </div>
              <div className="ls-film-frame" onClick={() => open([seminarsImg, ipImg], 1)}>
                <img src={ipImg} alt="IP Workshop" className="ls-film-img" />
                <div className="ls-film-scrim" />
                <span className="ls-film-label">IP Workshop</span>
              </div>
            </div>

            <div className="ls-card-body">
              <div className="ls-card-top-row">
                <span className="ls-tag"><Award size={10} style={{marginRight:4}}/>Academic</span>
                <span className="ls-period">2023 – Present</span>
              </div>
              <p className="ls-org">Velammal College of Engg. &amp; Tech.</p>
              <p className="ls-summary">Primary liaison between faculty and 60-student cohort — coordinating schedules, resolving grievances, and organising 12+ department events.</p>
              <ul className="ls-bullets">
                {['12+ department-level academic events','Student grievances resolved (95% rate)','Maintained attendance & academic records'].map((b,i) => (
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
