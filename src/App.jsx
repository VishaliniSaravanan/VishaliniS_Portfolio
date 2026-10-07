import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import profilePhoto from './assets/Vish.jpeg';
import noteLoomsImg from './assets/notelooms.jpg';
import AccordionGallery from './components/AccordionGallery';
import ModalCards from './components/ModalCards';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import HonoursCertificationsSection from './components/HonoursCertificationsSection';
import LeadershipSection from './components/LeadershipSection';
import ContactSection from './components/ContactSection';
import SkillsSection from './components/SkillsSection';

const SECTIONS = [
  { id: 'home', label: 'Home', theme: 'theme-blue' },
  { id: 'about', label: 'About', theme: 'theme-yellow' },
  { id: 'experience', label: 'Experience', theme: 'theme-pink' },
  { id: 'projects', label: 'Projects', theme: 'theme-purple' },
  { id: 'honours', label: 'Honours', theme: 'theme-orange' },
  { id: 'skills', label: 'Skills', theme: 'theme-cyan' },
  { id: 'blogs', label: 'Blog', theme: 'theme-pink' },
  { id: 'leadership', label: 'Leadership', theme: 'theme-yellow' },
  { id: 'contact', label: 'Contact', theme: 'theme-cyan' }
];

const PROJECTS_DATA = [
  {
    image: 'https://api.microlink.io/?url=https%3A%2F%2Fnetcurea.netlify.app%2F&screenshot=true&meta=false&embed=screenshot.url',
    label: 'Netcurea',
    alt: 'Netcurea — hospital management system. Run backend first: https://netcurea-backend-qd0r.onrender.com, then open: https://netcurea.netlify.app/',
    link: 'https://netcurea.netlify.app/'
  },
  {
    image: 'https://api.microlink.io/?url=https%3A%2F%2Fearthpulse-ai-v.onrender.com%2F&screenshot=true&meta=false&embed=screenshot.url',
    label: 'EarthPulse AI (2026)',
    alt: 'EarthPulse AI — Climate Risk & Multimodal Document Intelligence RAG Platform',
    link: 'https://earthpulse-ai-v.onrender.com/'
  },
  // {
  //   image: sentinelwatchImg,
  //   label: 'SentinelWatch (2026)',
  //   alt: 'Satellite Change Detection System',
  //   link: 'https://huggingface.co/spaces/VishaliniS456/SentinelWatch'
  // },
  {
    image: noteLoomsImg,
    label: 'NoteLooms (2024)',
    alt: 'AI-Powered Study Platform',
    link: 'https://github.com/VishaliniSaravanan'
  }
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [navVisible, setNavVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [revealedSections, setRevealedSections] = useState(['home', 'about', 'skills', 'contact']);
  const [pendingScrollId, setPendingScrollId] = useState(null);
  const observer = useRef(null);
  const lastScrollY = useRef(0);
  const navListRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setNavVisible(currentY < lastScrollY.current || currentY < 80);
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      rootMargin: '-30% 0px -60% 0px'
    });

    SECTIONS.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.current.observe(el);
    });

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [revealedSections]);

  useEffect(() => {
    const activeEl = navListRef.current?.querySelector('.pill-nav-item.active');
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [activeSection]);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    setRevealedSections((current) => current.includes(id) ? current : [...current, id]);
    setPendingScrollId(id);
  };

  useEffect(() => {
    if (!pendingScrollId) return;
    const el = document.getElementById(pendingScrollId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setPendingScrollId(null);
  }, [pendingScrollId, revealedSections]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const currentThemeClass = SECTIONS.find(s => s.id === activeSection)?.theme || 'theme-blue';

  return (
    <div className={`min-h-screen transition-colors duration-700 ${currentThemeClass}`}>

      <div className={`top-nav-row${navVisible ? '' : ' nav-hidden'}`}>
        <nav className="pill-nav-container" ref={navListRef} aria-label="Primary">
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                type="button"
                key={sec.id}
                className={`pill-nav-item ${isActive ? 'active' : ''}`}
                onClick={() => scrollToSection(sec.id)}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="pill-nav-indicator"
                    style={{ backgroundColor: 'var(--accent-color)' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{sec.label}</span>
              </button>
            );
          })}
        </nav>
        <button type="button" className="hello-btn" onClick={() => scrollToSection('contact')}>
          Say Hello
        </button>
      </div>

      <div className={`mobile-nav-bar${navVisible || menuOpen ? '' : ' nav-hidden'}`}>
        <button
          type="button"
          className="nav-burger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Site menu">
          <nav className="mobile-menu-list">
            {SECTIONS.map((sec) => (
              <button
                type="button"
                key={sec.id}
                className={`mobile-menu-link${activeSection === sec.id ? ' is-active' : ''}`}
                onClick={() => scrollToSection(sec.id)}
              >
                {sec.label}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Section 1: Hero (Home) */}
      <section id="home" className="theme-blue relative min-h-screen">
        <div className="grid-overlay" />

        <div className="home-inner">
          {/* LEFT — Blob + Arc icons */}
          <motion.div
            className="hero-profile-card"
            initial={{ opacity: 0, scale: 0.88, x: -40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, type: 'spring', stiffness: 80 }}
          >
            <div className="hero-card-with-arc">
              <div className="hero-arc-zone">
                <svg className="hero-arc-svg" viewBox="0 0 160 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 160 80 C 10 80 10 420 160 420" stroke="var(--accent-color)" strokeWidth="1.2" strokeDasharray="5 5" opacity="0.25"/>
                </svg>
                <a href="tel:+916383117617" className="hero-arc-icon" style={{top:'16%', left:'100%'}} data-label="Phone">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                </a>
                <a href="mailto:vishalinisaravanan546@gmail.com" className="hero-arc-icon" style={{top:'27%', left:'47%'}} data-label="Email">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </a>
                <a href="https://linkedin.com/in/s-vishalini" target="_blank" rel="noreferrer" className="hero-arc-icon" style={{top:'50%', left:'30%'}} data-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://github.com/VishaliniSaravanan" target="_blank" rel="noreferrer" className="hero-arc-icon" style={{top:'73%', left:'47%'}} data-label="GitHub">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
                <a href="https://medium.com/@vishalinisaravanan" target="_blank" rel="noreferrer" className="hero-arc-icon" style={{top:'84%', left:'100%'}} data-label="Medium">
                  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403H7.26l5.378 11.795 4.728-11.795H24v.403l-1.917 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.87 1.837v.403h-9.41v-.403l1.937-1.882c.19-.19.19-.246.19-.537V8.608l-5.39 13.688h-.727L4.278 8.608v9.168c-.052.385.076.774.347 1.052l2.52 3.058v.402H0v-.402l2.52-3.058c.27-.279.39-.67.326-1.052V6.887z"/></svg>
                </a>
              </div>

              <div className="hero-blob-outer">
                <div className="hero-photo-blob">
                  <img src={profilePhoto} alt="Vishalini Saravanan" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-name"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <h1 className="name-text-filled">VISHALINI</h1>
            <h1 className="name-text-outlined">SARAVANAN</h1>
            <p className="hero-role">CSE Undergraduate · Developer</p>

            <a
              href="/VISHALINI.pdf"
              download="VISHALINI.pdf"
              className="download-cv-btn"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>
        </div>
      </section>

      <section id="about" className="theme-yellow page-section">
        <div className="grid-overlay" />
        <div className="page-inner">
          <h2 className="section-title">About</h2>
          <AboutSection />
        </div>
      </section>

      {revealedSections.includes('experience') && (
      <section id="experience" className="theme-pink page-section">
        <div className="grid-overlay" />
        <div className="page-inner">
          <h2 className="section-title">Experience</h2>
          <ExperienceSection />
        </div>
      </section>
      )}

      {revealedSections.includes('projects') && (
      <section id="projects" className="theme-purple page-section">
        <div className="grid-overlay" />
        <div className="page-inner">
          <h2 className="section-title">Projects</h2>
          <AccordionGallery
            items={PROJECTS_DATA}
            defaultIndex={0}
            expandRatio={0.52}
            trigger="hover"
            height={400}
            accentColor="var(--accent-color)"
            overlayColor="#1a0a2e"
            radius={8}
          />
        </div>
      </section>
      )}

      {revealedSections.includes('honours') && (
      <section id="honours" className="theme-orange page-section">
        <div className="grid-overlay" />
        <div className="page-inner">
          <h2 className="section-title">Honors</h2>
          <HonoursCertificationsSection />
        </div>
      </section>
      )}

      {revealedSections.includes('skills') && (
      <section id="skills" className="theme-cyan page-section">
        <div className="grid-overlay" />
        <div className="page-inner">
          <h2 className="section-title">Skills</h2>
          <SkillsSection />
        </div>
      </section>
      )}

      {revealedSections.includes('blogs') && (
      <section id="blogs" className="theme-pink page-section">
        <div className="grid-overlay" />
        <div className="page-inner">
          <h2 className="section-title">Blog</h2>
          <ModalCards />
        </div>
      </section>
      )}

      {revealedSections.includes('leadership') && (
      <section id="leadership" className="theme-yellow page-section">
        <div className="grid-overlay" />
        <div className="page-inner">
          <h2 className="section-title">Leadership</h2>
          <LeadershipSection />
        </div>
      </section>
      )}

      {revealedSections.includes('contact') && (
      <section id="contact" className="theme-blue page-section">
        <div className="page-inner">
          <h2 className="section-title">Contact</h2>
          <ContactSection />
        </div>
      </section>
      )}

    </div>
  );
}

export default App;

