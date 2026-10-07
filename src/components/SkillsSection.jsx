import './SkillsSection.css';

const SKILLS = [
  {
    category: 'Languages',
    items: [
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'ABAP (Basics)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' }
    ]
  },
  {
    category: 'Software Development',
    items: [
      { name: 'HTML/CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'React (Vite)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' }
    ]
  },
  {
    category: 'AI / ML',
    items: [
      { name: 'Machine Learning', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'RAG', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'NLP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
      { name: 'LLMs', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' }
    ]
  },
  {
    category: 'Databases',
    items: [
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
    ]
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github/181717' },
      { name: 'Streamlit', logo: 'https://cdn.simpleicons.org/streamlit/FF4B4B' },
      { name: 'Power BI', logo: 'https://cdn.simpleicons.org/powerbi/F2C811' }
    ]
  }
];

const SkillsSection = () => (
  <div className="skills-outer">
    <div className="skills-grid">
      {SKILLS.map((skill) => (
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

export default SkillsSection;
