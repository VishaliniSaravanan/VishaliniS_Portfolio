import './ExperienceSection.css';

const INTERNSHIPS = [
  {
    id: 1,
    role: 'Data Science Intern',
    company: 'Vinsup Infotech (P) Limited',
    location: 'Madurai, India',
    period: 'Jun – Jul 2025',
    bullets: [
      'Built Netcurea, a hospital management system with an ML diabetes-risk module.',
      'Designed clinical dashboards in Power BI and Streamlit.'
    ]
  },
  {
    id: 2,
    role: 'Web Development Intern',
    company: 'Kevell Corp',
    location: 'Madurai, India',
    period: 'Dec 2024',
    bullets: [
      'Designed and developed an e-commerce floral shop with a clear product-to-checkout flow.'
    ]
  }
];

const ExperienceSection = () => {
  return (
    <div className="exp-container">
      <div className="exp-grid">
        {INTERNSHIPS.map((exp) => (
          <article key={exp.id} className="exp-card">
            <p className="exp-period">{exp.period}</p>
            <h3 className="exp-role">{exp.role}</h3>
            <p className="exp-company">
              {exp.company} · {exp.location}
            </p>
            <ul className="exp-bullets">
              {exp.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
