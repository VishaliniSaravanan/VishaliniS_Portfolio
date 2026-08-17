import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, BookOpen, Clock, Calendar, Bookmark } from 'lucide-react';
import './ModalCards.css';

const DEFAULT_BLOGS = [
  {
    id: 1,
    title: 'The Smallest Museum I Own',
    subtitle: 'The most meaningful trophy I own was never meant to be displayed.',
    tag: 'Essays & Reflections',
    author: 'Vishalini Saravanan',
    publisher: 'Medium',
    date: 'Jun 26, 2026',
    readTime: '4 min read',
    image: 'https://miro.medium.com/v2/resize:fit:1200/1*W9vZF3zu0DiWE6q6iC8ZDg.jpeg',
    summary: 'The most meaningful trophy I own was never meant to be displayed. An introspective narrative exploring memory, quiet collections of human experiences, and personal philosophy.',
    link: 'https://medium.com/@vishalinisaravanan/the-smallest-museum-i-own-7c31ab57474a?sharedUserId=vishalinisaravanan'
  },
  {
    id: 2,
    title: 'Thinker in Motion',
    subtitle: 'What separates a lived life from a dreamed one is the willingness to step into the motion.',
    tag: 'Heartline Publications',
    author: 'Vishalini Saravanan',
    publisher: 'Heartline Publications',
    date: 'Jul 9, 2026',
    readTime: '6 min read',
    image: 'https://miro.medium.com/v2/resize:fit:612/1*SdjZ6B1VlqY9Z-dv-pE4wQ.jpeg',
    summary: 'What separates a lived life from a dreamed one is the willingness to step into the motion. Featured in Heartline Publications on Medium.',
    link: 'https://medium.com/heartline-publications/thinker-in-motion-b1d305d17534?sharedUserId=vishalinisaravanan'
  }
];

const ModalCards = ({ cards = DEFAULT_BLOGS }) => {
  return (
    <div className="modal-cards-container">
      {/* Grid of Medium Link Preview Cards */}
      <div className="medium-preview-grid">
        {cards.map((card) => (
          <motion.a
            key={card.id}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="medium-preview-card"
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.25 }}
          >
            {/* Image Header */}
            <div className="medium-card-image-box">
              <img src={card.image} alt={card.title} className="medium-card-img" />
              <div className="medium-pub-badge">
                <BookOpen className="w-3.5 h-3.5 mr-1 inline" /> {card.publisher}
              </div>
            </div>

            {/* Content Body */}
            <div className="medium-card-content">
              <div className="medium-card-meta">
                <span className="medium-card-tag">{card.tag}</span>
                <span className="medium-card-readtime">
                  <Clock className="w-3 h-3 mr-1 inline" /> {card.readTime}
                </span>
              </div>

              <h3 className="medium-card-title">{card.title}</h3>
              <p className="medium-card-subtitle">"{card.subtitle}"</p>

              {/* Card Footer */}
              <div className="medium-card-footer">
                <div className="medium-author-info">
                  <span className="medium-author-name">{card.author}</span>
                  <span className="medium-date">
                    <Calendar className="w-3 h-3 mr-1 inline" /> {card.date}
                  </span>
                </div>
                <div className="medium-open-btn">
                  Read Article <ExternalLink className="w-3.5 h-3.5 ml-1 inline" />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ModalCards;
