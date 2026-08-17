import { motion } from 'framer-motion';
import './SkillsSection.css';

const SKILLS = [
  {
    category: 'Languages',
    color: 'blue',
    items: [
      { name: 'Python',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Java',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'SQL',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ]
  },
  {
    category: 'Frameworks',
    color: 'purple',
    items: [
      { name: 'React',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Streamlit',  logo: 'https://cdn.simpleicons.org/streamlit/FF4B4B' },
    ]
  },
  {
    category: 'AI / ML',
    color: 'red',
    items: [
      { name: 'PyTorch',          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
      { name: 'TensorFlow',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'OpenCV',           logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
      { name: 'Pandas',           logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      { name: 'NumPy',            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
      { name: 'Scikit-learn',     logo: 'https://cdn.simpleicons.org/scikitlearn/F7931E' },
    ]
  },
  {
    category: 'Databases',
    color: 'green',
    items: [
      { name: 'MySQL',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ]
  },
  {
    category: 'Tools & Platforms',
    color: 'orange',
    items: [
      { name: 'Git',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub',  logo: 'https://cdn.simpleicons.org/github/181717' },
      { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    ]
  }
];

const colorMap = {
  blue:   { border: 'rgba(59,130,246,0.22)',  bg: 'rgba(59,130,246,0.07)',  label: '#2563eb' },
  purple: { border: 'rgba(139,92,246,0.22)',  bg: 'rgba(139,92,246,0.07)',  label: '#7c3aed' },
  red:    { border: 'rgba(239,68,68,0.20)',   bg: 'rgba(239,68,68,0.07)',   label: '#dc2626' },
  green:  { border: 'rgba(34,197,94,0.20)',   bg: 'rgba(34,197,94,0.07)',   label: '#16a34a' },
  orange: { border: 'rgba(249,115,22,0.20)',  bg: 'rgba(249,115,22,0.07)',  label: '#ea580c' },
};

const SkillsSection = () => (
  <div className="skills-outer">
    <div className="skills-grid">
      {SKILLS.map((skill, idx) => {
        const c = colorMap[skill.color];
        return (
          <motion.div
            key={skill.category}
            className="skill-card"
            style={{ background: c.bg, borderColor: c.border }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            whileHover={{ y: -3, transition: { duration: 0.18 } }}
          >
            <span className="skill-card__category" style={{ color: c.label }}>
              {skill.category}
            </span>
            <div className="skill-card__items">
              {skill.items.map(item => (
                <div key={item.name} className="skill-item">
                  <img src={item.logo} alt={item.name} className="skill-item__logo" />
                  <span className="skill-item__name">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
);

export default SkillsSection;
