import './ResearchSection.css';

const PAPERS = [
  {
    id: 1,
    tag: 'NCVPRIPG 2026 · Springer',
    title: 'Reimagining Smart Surveillance: Scene-Aware Ownership and Intent Detection',
    learnMore: 'Read more',
    paper: 'https://github.com/VishaliniSaravanan',
    challenge: 'Surveillance systems fail in crowded scenes — occlusion, re-entry and identity switches break frame-level detectors.',
    solution: 'SOID models person–object ownership as a persistent temporal relationship, not a one-shot frame decision.',
    approach: 'YOLO + Kalman tracking + Re-ID embeddings + spatio-temporal affinity → 84% ownership precision, 0.158 false alarm rate.'
  },
  {
    id: 2,
    tag: 'Elsevier EAAI · Under Review',
    title: 'Rethinking Retrieval: Future Reasoning Value for Knowledge Residency Optimization',
    learnMore: 'Read more',
    paper: 'https://github.com/VishaliniSaravanan',
    challenge: 'Standard RAG treats all knowledge equally — high-value, reusable knowledge is not prioritized over ephemeral content.',
    solution: 'FRV-RAG assigns each knowledge object a Future Reasoning Value to tier it into Retrieve, Compressed or Persistent memory.',
    approach: 'BGE-M3 embeddings + knowledge graph + FRV scoring → Recall@10 of 0.7275, +21.2% over Vanilla RAG.'
  }
];

const ResearchSection = () => {
  return (
    <div className="rs-outer">
      {PAPERS.map((p) => (
        <article key={p.id} className="rs-card">
          <div className="rs-top">
            <span className="rs-tag">{p.tag}</span>
            <a href={p.paper} target="_blank" rel="noreferrer" className="rs-link">
              {p.learnMore} →
            </a>
          </div>
          <h3 className="rs-title">{p.title}</h3>
          <dl className="rs-details">
            <div className="rs-detail">
              <dt>Challenge</dt>
              <dd>{p.challenge}</dd>
            </div>
            <div className="rs-detail">
              <dt>Solution</dt>
              <dd>{p.solution}</dd>
            </div>
            <div className="rs-detail">
              <dt>Approach</dt>
              <dd>{p.approach}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
};

export default ResearchSection;
