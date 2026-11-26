import './ExperienceSection.css';

const INTERNSHIPS = [
  {
    id: 1,
    role: 'Data Science Intern',
    company: 'Vinsup Infotech (P) Limited',
    location: 'Madurai, India',
    period: 'Jun – Jul 2025',
    bullets: [
      'Built Netcurea, an end-to-end hospital management system for organizing patient and clinical workflows.',
      'Developed an ML-based diabetes-risk module to collect health inputs and present interpretable risk predictions.',
      'Created interactive clinical dashboards in Power BI and Streamlit for exploring trends and monitoring key metrics.',
      'Performed data cleaning and preparation, and translated analytical findings into clear, user-facing visualizations.',
      'Worked across frontend, backend, machine-learning, and reporting components and handled testing for the integrated application.'
    ]
  },
  {
    id: 2,
    role: 'Web Development Intern',
    company: 'Kevell Corp',
    location: 'Madurai, India',
    period: 'Dec 2024',
    bullets: [
      'Designed and developed a responsive e-commerce floral shop with a polished, mobile-friendly product catalogue.',
      'Built a clear product-to-checkout journey, including product discovery, selection, cart, and order-placement views.',
      'Structured reusable web components and organized product content to keep the interface consistent and easy to maintain.',
      'Tested layouts and interactions across screen sizes, refined the visual hierarchy, and improved overall usability.'
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