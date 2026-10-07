import walkAnywayImg from '../assets/walk_anyway.png';
import './ModalCards.css';

const DEFAULT_BLOGS = [
  {
    id: 1,
    title: 'The Smallest Museum I Own',
    subtitle: 'The most meaningful trophy I own was never meant to be displayed.',
    date: 'Jun 26, 2026',
    image: 'https://miro.medium.com/v2/resize:fit:1200/1*W9vZF3zu0DiWE6q6iC8ZDg.jpeg',
    link: 'https://medium.com/@vishalinisaravanan/the-smallest-museum-i-own-7c31ab57474a?sharedUserId=vishalinisaravanan'
  },
  {
    id: 2,
    title: 'Thinker in Motion',
    subtitle: 'What separates a lived life from a dreamed one is the willingness to step into the motion.',
    date: 'Jul 9, 2026',
    image: 'https://miro.medium.com/v2/resize:fit:612/1*SdjZ6B1VlqY9Z-dv-pE4wQ.jpeg',
    link: 'https://medium.com/heartline-publications/thinker-in-motion-b1d305d17534?sharedUserId=vishalinisaravanan'
  },
  {
    id: 3,
    title: 'Walk Anyway',
    subtitle: 'For you who are so certain you can make a way where there is none…',
    date: 'Aug 17, 2026',
    image: walkAnywayImg,
    link: 'https://medium.com/no-time/walk-anyway-fae4a37114d5?sharedUserId=vishalinisaravanan'
  }
];

const ModalCards = ({ cards = DEFAULT_BLOGS }) => {
  return (
    <div className="modal-cards-container">
      <div className="medium-preview-grid">
        {cards.map((card) => (
          <a
            key={card.id}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="medium-preview-card"
          >
            <div className="medium-card-image-box">
              <img src={card.image} alt={card.title} className="medium-card-img" />
            </div>
            <div className="medium-card-content">
              <p className="medium-card-date">{card.date}</p>
              <h3 className="medium-card-title">{card.title}</h3>
              <p className="medium-card-subtitle">{card.subtitle}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ModalCards;
