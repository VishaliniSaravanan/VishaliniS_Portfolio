import { useState } from 'react';
import './SkillsSection.css';

const SKILLS = [
  {
    category: 'Languages',
    items: [
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MATLAB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg' }
    ]
  },
  {
    category: 'Quantum Frameworks',
    items: [
      { name: 'Qiskit', logo: 'https://cdn.simpleicons.org/ibm/052FAD' },
      { name: 'PennyLane', logo: 'https://cdn.simpleicons.org/python/3776AB' },
      { name: 'IBM Quantum', logo: 'https://cdn.simpleicons.org/ibm/052FAD' },
      { name: 'AWS Braket', logo: 'https://cdn.simpleicons.org/amazonaws/232F3E' }
    ]
  },
  {
    category: 'AI / ML',
    items: [
      { name: 'Machine Learning', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'Deep Learning', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
      { name: 'RAG', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'NLP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
      { name: 'LLMs', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      { name: 'Computer Vision', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
      { name: 'LangGraph', logo: 'https://cdn.simpleicons.org/python/3776AB' },
      { name: 'Scikit-learn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' }
    ]
  },
  {
    category: 'Databases',
    items: [
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB Atlas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
    ]
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github/181717' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Jupyter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
      { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' }
    ]
  }
];

const CATEGORIES = ['All', ...SKILLS.map((s) => s.category)];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const visibleGroups =
    activeCategory === 'All'
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === activeCategory);

  return (
    <div className="skills-outer">
      <div className="skills-tabs" role="tablist" aria-label="Skill categories">
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`skills-tab${isActive ? ' is-active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className={`skills-grid${activeCategory !== 'All' ? ' skills-grid--single' : ''}`}>
        {visibleGroups.map((skill) => (
          <div key={skill.category} className="skill-card">
            <span className="skill-card__category">{skill.category}</span>
            <div className="skill-card__items">
              {skill.items.map((item) => (
                <div key={item.name} className="skill-item">
                  <img src={item.logo} alt="" className="skill-item__logo" />
                  <span className="skill-item__name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
