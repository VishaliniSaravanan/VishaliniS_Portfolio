import { motion } from 'framer-motion';
import './ResearchSection.css';

const PAPERS = [
  {
    id: 1,
    tag: 'Conference · NCVPRIPG 2026 · Springer',
    title: 'Reimagining Smart Surveillance: Scene-Aware Ownership and Intent Detection',
    learnMore: 'Intelligent surveillance & ownership tracking',
    paper: 'https://github.com/VishaliniSaravanan',
    challenge: 'Surveillance systems fail in crowded scenes — occlusion, re-entry and identity switches break frame-level detectors.',
    solution: 'SOID models person–object ownership as a persistent temporal relationship, not a one-shot frame decision.',
    approach: 'YOLO + Kalman tracking + Re-ID embeddings + spatio-temporal affinity → 84% ownership precision, 0.158 false alarm rate.'
  },
  {
    id: 2,
    tag: 'Journal · Elsevier EAAI · Under Review',
    title: 'Rethinking Retrieval: Future Reasoning Value for Knowledge Residency Optimization',
    learnMore: 'Memory-aware Retrieval-Augmented Generation',
    paper: 'https://github.com/VishaliniSaravanan',
    challenge: 'Standard RAG treats all knowledge equally — high-value, reusable knowledge is not prioritized over ephemeral content.',
    solution: 'FRV-RAG assigns each knowledge object a Future Reasoning Value to tier it into Retrieve, Compressed or Persistent memory.',
    approach: 'BGE-M3 embeddings + knowledge graph + FRV scoring → Recall@10 of 0.7275, +21.2% over Vanilla RAG.'
  }
];

const ResearchSection = () => {
  return (
    <div className="rs-outer">
      {PAPERS.map((p, idx) => (
        <motion.div
          key={p.id}
          className="rs-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: idx * 0.15 }}
        >
          <div className="rs-top">
            <span className="rs-tag">{p.tag}</span>
            <a href={p.paper} target="_blank" rel="noreferrer" className="rs-link">
              → {p.learnMore}
            </a>
          </div>

          <h2 className="rs-title">{p.title}</h2>

          <div className="rs-divider" />

          <div className="rs-pills">
            <div className="rs-pill">
              <span className="rs-pill__label">Challenge</span>
              <p className="rs-pill__text">{p.challenge}</p>
            </div>
            <div className="rs-pill rs-pill--mid">
              <span className="rs-pill__label">Solution</span>
              <p className="rs-pill__text">{p.solution}</p>
            </div>
            <div className="rs-pill">
              <span className="rs-pill__label">Approach</span>
              <p className="rs-pill__text">{p.approach}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ResearchSection;
