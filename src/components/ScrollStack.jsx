import { motion } from 'framer-motion';
import { Clock, ExternalLink, BookOpen } from 'lucide-react';
import './ScrollStack.css';

const DEFAULT_STACK_ITEMS = [
  {
    id: 1,
    title: 'Understanding Vision Transformers & Attention Mechanisms',
    tag: 'AI / Machine Learning',
    readTime: '5 min read',
    date: 'Aug 2024',
    summary: 'A deep dive into how self-attention mechanisms revolutionize computer vision tasks beyond traditional convolutional networks.',
    snippet: 'Vision Transformers (ViT) break down images into 16x16 visual patches treated as token sequences, unlocking spatial dependencies across massive datasets.',
    link: 'https://medium.com/@vishalinisaravanan',
    bgGradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(168, 85, 247, 0.25) 100%)',
    borderColor: 'rgba(168, 85, 247, 0.4)'
  },
  {
    id: 2,
    title: 'Optimizing Deep Neural Networks for Edge Deployment',
    tag: 'Deep Learning',
    readTime: '7 min read',
    date: 'Jul 2024',
    summary: 'Techniques for quantizing and pruning complex deep learning models for real-time mobile and embedded inference.',
    snippet: 'Exploring post-training INT8 quantization and structural channel pruning to reduce inference latency by 4x without sacrificing accuracy.',
    link: 'https://medium.com/@vishalinisaravanan',
    bgGradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.25) 0%, rgba(244, 63, 94, 0.25) 100%)',
    borderColor: 'rgba(244, 63, 94, 0.4)'
  },
  {
    id: 3,
    title: 'Building Intelligent Autonomous Agents with LLMs',
    tag: 'Generative AI',
    readTime: '6 min read',
    date: 'May 2024',
    summary: 'Architecting multi-agent workflows using tool calling, vector memory, and retrieval-augmented generation.',
    snippet: 'How ReAct framework loops enable large language models to reason dynamically, interact with external APIs, and maintain long-term memory state.',
    link: 'https://medium.com/@vishalinisaravanan',
    bgGradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.25) 0%, rgba(59, 130, 246, 0.25) 100%)',
    borderColor: 'rgba(6, 182, 212, 0.4)'
  }
];

const ScrollStack = ({ items = DEFAULT_STACK_ITEMS }) => {
  return (
    <div className="scroll-stack-wrapper">
      {items.map((item, index) => {
        // Sticky offset per card to stack cleanly below title & navbar
        const topOffset = 160 + index * 30;

        return (
          <div
            key={item.id}
            className="scroll-stack-card"
            style={{
              top: `${topOffset}px`,
              background: item.bgGradient,
              borderColor: item.borderColor,
              zIndex: index + 1
            }}
          >
            <div className="scroll-stack-header">
              <span className="scroll-stack-tag">{item.tag}</span>
              <div className="scroll-stack-meta">
                <Clock className="w-3.5 h-3.5 inline mr-1 opacity-70" />
                <span>{item.readTime}</span>
                <span className="mx-2">&bull;</span>
                <span>{item.date}</span>
              </div>
            </div>

            <div className="scroll-stack-body">
              <h3 className="scroll-stack-title">{item.title}</h3>
              <p className="scroll-stack-summary">{item.summary}</p>
              <div className="scroll-stack-snippet">
                <BookOpen className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <p>{item.snippet}</p>
              </div>
            </div>

            <div className="scroll-stack-footer">
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="scroll-stack-link"
              >
                <span>Read on Medium</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ScrollStack;
