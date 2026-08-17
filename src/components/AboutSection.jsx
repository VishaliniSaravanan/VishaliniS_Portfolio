import { motion } from 'framer-motion';
import { GraduationCap, Brain, Languages, Sparkles, Feather, Activity, Mic, Palette, Award, Terminal } from 'lucide-react';
import './AboutSection.css';

const INTERESTS = [
  'Applied Machine Learning Systems',
  'RAG & HyperRAG Architecture',
  'LLM Optimization & Quantization',
  'Computer Vision & ViT',
  'Sustainable & Green AI',
  'Deep Learning & Neural Networks'
];

const LANGUAGES = [
  { name: 'Tamil', level: 'Native / Bilingual' },
  { name: 'English', level: 'Professional Fluent' },
  { name: 'German', level: 'Basic Proficiency' }
];

const HOBBIES = [
  { label: 'Creative Writing', icon: <Feather className="w-4 h-4 text-amber-700" /> },
  { label: 'Badminton', icon: <Activity className="w-4 h-4 text-amber-700" /> },
  { label: 'Public Speaking', icon: <Mic className="w-4 h-4 text-amber-700" /> },
  { label: 'Painting', icon: <Palette className="w-4 h-4 text-amber-700" /> }
];

const AboutSection = () => {
  return (
    <div className="about-container">
      <div className="about-equal-split">

        {/* LEFT COLUMN: Expansive Bio + Languages + Passions */}
        <motion.div
          className="about-left-col"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bio-tag-compact">
            <Sparkles className="w-4 h-4 mr-1.5 inline text-amber-700" /> Computer Science Engineer &amp; AI/ML Researcher
          </div>
          
          <h3 className="about-heading-statement">
            Architecting Intelligent Systems &amp; Next-Gen Machine Learning Models
          </h3>

          <p className="about-para-lead">
            I am a <strong>Computer Science Engineer</strong> specializing in <strong>Applied Machine Learning</strong>, <strong>RAG &amp; Vector Search Architectures</strong>, <strong>LLM Optimization</strong>, and <b>Computer Vision</b>. Driven by research excellence and real-world deployment of intelligent systems that bridge theoretical AI breakthroughs with impactful applications.
          </p>

          {/* Languages Section */}
          <div className="about-left-sub mt-2">
            <h4 className="left-sub-title">
              <Languages className="w-4.5 h-4.5 text-amber-700 inline mr-2" /> Languages
            </h4>
            <div className="lang-inline-list">
              {LANGUAGES.map((lang, idx) => (
                <span key={idx} className="lang-pill">
                  <strong>{lang.name}</strong> <small>({lang.level})</small>
                </span>
              ))}
            </div>
          </div>

          {/* Passions Section */}
          <div className="about-left-sub mt-4">
            <h4 className="left-sub-title">
              <Terminal className="w-4.5 h-4.5 text-amber-700 inline mr-2" /> Passions &amp; Creative Pursuits
            </h4>
            <div className="passions-inline-grid">
              {HOBBIES.map((hobby, idx) => (
                <span key={idx} className="passion-item">
                  {hobby.icon} <span>{hobby.label}</span>
                </span>
              ))}
            </div>
          </div>

        </motion.div>

        {/* RIGHT COLUMN: Education & Areas of Interest Glass Cards */}
        <motion.div
          className="about-right-col"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >

          {/* Education Box */}
          <div className="about-box-card">
            <div className="card-header-compact">
              <GraduationCap className="w-5 h-5 text-amber-700 mr-2.5" />
              <h3>Education Journey</h3>
            </div>
            <div className="edu-stream">
              <div className="edu-stream-item">
                <div className="edu-top-row">
                  <h4 className="edu-title-sm">B.E., Computer Science &amp; Engineering</h4>
                  <span className="edu-badge-sm">CGPA: 8.62 / 10.0</span>
                </div>
                <p className="edu-inst-sm">Velammal College of Engineering &amp; Technology</p>
                <span className="edu-span-sm">2023 - 2027</span>
              </div>

              <div className="edu-stream-item mt-3 pt-3 border-t border-amber-900/10">
                <div className="edu-top-row">
                  <h4 className="edu-title-sm">Higher Secondary Education</h4>
                  <span className="edu-badge-sm">87.83%</span>
                </div>
                <p className="edu-inst-sm">Mahatma Montessori Matric. Hr. Sec. School</p>
                <span className="edu-span-sm">2021 - 2023</span>
              </div>
            </div>
          </div>

          {/* Areas of Interest Box */}
          <div className="about-box-card">
            <div className="card-header-compact">
              <Brain className="w-5 h-5 text-amber-700 mr-2.5" />
              <h3>Specializations &amp; Focus Areas</h3>
            </div>
            <div className="interests-pill-cloud">
              {INTERESTS.map((interest, idx) => (
                <span key={idx} className="interest-chip-sm">
                  {interest}
                </span>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </div>
  );
};

export default AboutSection;
