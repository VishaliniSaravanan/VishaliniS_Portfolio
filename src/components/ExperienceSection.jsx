import { motion } from 'framer-motion';
import { Briefcase, Code, Database } from 'lucide-react';
import './ExperienceSection.css';

const INTERNSHIPS = [
  {
    id: 1,
    role: 'Data Science Intern',
    company: 'Vinsup Infotech (P) Limited',
    location: 'Madurai, India',
    period: 'Jun – Jul 2025',
    icon: <Database className="w-5 h-5 text-pink-700" />,
    bullets: [
      'Built and deployed Netcurea, a full-stack Hospital Management System with an ML-based diabetes prediction module for patient risk analysis.',
      'Developed real-time clinical dashboards using Power BI and Streamlit for healthcare data visualization.'
    ]
  },
  {
    id: 2,
    role: 'Web Development Intern',
    company: 'Kevell Corp',
    location: 'Madurai, India',
    period: 'Dec 2024',
    icon: <Code className="w-5 h-5 text-pink-700" />,
    bullets: [
      'Designed and developed an e-commerce floral shop application, focusing on intuitive UI/UX to drive a seamless user journey and boost conversions.'
    ]
  }
];

const ExperienceSection = () => {
  return (
    <div className="exp-container">

      <div className="exp-sub-title">
        <Briefcase className="w-5 h-5 text-pink-800 mr-2 inline" /> Professional &amp; Research Internships
      </div>

      <div className="exp-grid">
        {INTERNSHIPS.map((exp, idx) => (
          <motion.div
            key={exp.id}
            className="exp-card intern-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            <div className="exp-card-header">
              <div className="exp-icon-box">{exp.icon}</div>
              <div>
                <span className="exp-period">{exp.period}</span>
                <h3 className="exp-role">{exp.role}</h3>
                <h4 className="exp-company">{exp.company} &bull; <span className="exp-loc">{exp.location}</span></h4>
              </div>
            </div>

            <ul className="exp-bullets">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default ExperienceSection;
