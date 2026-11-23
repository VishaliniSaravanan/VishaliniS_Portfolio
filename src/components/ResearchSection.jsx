import './ResearchSection.css';

const CONTRIBUTIONS = [
  {
    id: 1,
    kind: 'Conference',
    year: '2027',
    tag: 'IEEE · QCNC 2027',
    status: 'In submission',
    title: 'Resource Bounds and Break-Even Analysis of Coherent Recovery Using Quantum Autoencoders and Quantum Signal Processing',
    learnMore: 'Research profile',
    paper: 'https://github.com/VishaliniSaravanan',
    detail: 'Break-even analysis for quantum resource bounds and coherent recovery using quantum autoencoders and quantum signal processing.',
  },
  {
    id: 2,
    kind: 'Conference',
    year: '2026',
    tag: 'QUANCOM 2026 · Trento, Italy',
    status: 'Presented',
    title: 'QFIM-Guided Variational Quantum Classification for Information-Geometric Circuit Diagnostics',
    learnMore: 'Research profile',
    paper: 'https://github.com/VishaliniSaravanan',
    detail: 'Variational quantum classification guided by the quantum Fisher information matrix for information-geometric circuit diagnostics.',
  },
  {
    id: 3,
    kind: 'Conference',
    year: '2026',
    tag: 'NCVPRIPG 2026 · Springer',
    status: 'Presented',
    title: 'Reimagining Smart Surveillance: Scene-Aware Ownership and Intent Detection',
    learnMore: 'Read more',
    paper: 'https://github.com/VishaliniSaravanan',
    detail: 'SOID models person–object ownership as a persistent temporal relationship using YOLO, Kalman tracking, Re-ID embeddings and spatio-temporal affinity.',
  },
  {
    id: 4,
    kind: 'Journal',
    year: '2026',
    tag: 'Engineering Applications of Artificial Intelligence · Elsevier',
    status: 'Preprint published · Under review',
    title: 'Rethinking Retrieval: Future Reasoning Value for Knowledge Residency Optimization in Environmental, Social and Governance Intelligence',
    learnMore: 'View journal preprint',
    paper: 'https://www.researchgate.net/publication/414385233_Rethinking_Retrieval_Future_Reasoning_Value_for_Knowledge_Residency_Optimization_in_Environmental_Social_and_Governance_Intelligence',
    detail: 'FRV-RAG performs knowledge residency optimization using reasoning contribution, graph importance, temporal persistence, knowledge reuse and information preservation across 23 ESG reports.',
  }
];

const ResearchSection = () => {
  return (
    <div className="rs-outer">
      {CONTRIBUTIONS.map((p) => (
        <article key={p.id} className={`rs-card${p.kind === 'Journal' ? ' rs-journal' : ''}`}>
          <div className="rs-card-head">
            <div className="rs-kind">
              <span className="rs-kind-dot" />
              {p.kind}
            </div>
            <span className="rs-year">{p.year}</span>
          </div>

          <div className="rs-publication">
            <span className="rs-status">{p.status}</span>
            <span className="rs-tag">{p.tag}</span>
          </div>

          <h3 className="rs-title">{p.title}</h3>
          {p.detail && <p className="rs-detail">{p.detail}</p>}

          <a href={p.paper} target="_blank" rel="noreferrer" className="rs-link">
            <span>{p.learnMore}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </article>
      ))}
    </div>
  );
};

export default ResearchSection;
