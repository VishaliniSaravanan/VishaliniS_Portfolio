import './AboutSection.css';

const INTERESTS = [
  'Applied Machine Learning',
  'RAG & Vector Search',
  'LLM Optimization',
  'Computer Vision',
  'Green AI'
];

const LANGUAGES = [
  { name: 'Tamil', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'German', level: 'Basic' }
];

const AboutSection = () => {
  return (
    <div className="about-container">
      <div className="about-equal-split">
        <div className="about-left-col">
          <h3 className="about-heading-statement">
            I build systems where machine learning meets real use — retrieval, vision, and practical product decisions that hold up in the field.
          </h3>
          <p className="about-para-lead">
            I spend most of my time on projects, internships, and experiments that need to work outside a demo. I like practical work more than polished hype.
          </p>

          <div className="about-left-sub">
            <h4 className="left-sub-title">Languages</h4>
            <ul className="about-plain-list">
              {LANGUAGES.map((lang) => (
                <li key={lang.name}>
                  <strong>{lang.name}</strong> — {lang.level}
                </li>
              ))}
            </ul>
          </div>

          <div className="about-left-sub">
            <h4 className="left-sub-title">Outside work</h4>
            <p className="about-hobbies-line">Writing · Badminton · Public speaking · Painting</p>
          </div>
        </div>

        <div className="about-right-col">
          <div className="about-box-card">
            <h3 className="card-kicker">Education</h3>
            <div className="edu-stream-item">
              <div className="edu-top-row">
                <h4 className="edu-title-sm">B.E. Computer Science &amp; Engineering</h4>
                <span className="edu-note-sm">CGPA 8.62</span>
              </div>
              <p className="edu-inst-sm">Velammal College of Engineering &amp; Technology</p>
              <span className="edu-span-sm">2023 – 2027</span>
            </div>
            <div className="edu-stream-item edu-stream-item--next">
              <div className="edu-top-row">
                <h4 className="edu-title-sm">Higher Secondary</h4>
                <span className="edu-note-sm">87.83%</span>
              </div>
              <p className="edu-inst-sm">Mahatma Montessori Matric. Hr. Sec. School</p>
              <span className="edu-span-sm">2021 – 2023</span>
            </div>
          </div>

          <div className="about-box-card">
            <h3 className="card-kicker">Focus</h3>
            <ul className="about-focus-list">
              {INTERESTS.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
