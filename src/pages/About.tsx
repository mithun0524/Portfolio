import { motion } from 'framer-motion'

const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=mithun.chavan.a24%40gmail.com'

const profile = {
  title: 'Engineering reliable, measurable software outcomes.',
  lead:
    'I build pragmatic digital products that pair TypeScript-first interfaces with production-grade AI and Python automation. Teams work with me when they need requirements translated into stable releases that scale.',
  body:
    'Currently pursuing B.Tech CSE at Jain (Deemed-to-be) University (CGPA 8.67). My work spans IEEE-recognised research, autonomous delivery tooling, and production-ready web applications that keep stakeholders aligned.',
}

const stats = [
  { label: 'Active Projects', value: '15+' },
  { label: 'Tech Stack Depth', value: '25+' },
  { label: 'Research Outputs', value: '01' },
  { label: 'Client Turnaround', value: '< 24h' },
]

const pillars = [
  {
    id: '01',
    title: 'Delivery mindset',
    description:
      'Ship quickly without sacrificing reliability. Each engagement centres on measurable outcomes, confident launches, and clearly owned responsibilities.',
  },
  {
    id: '02',
    title: 'Systems thinking',
    description:
      'Architect solutions that can evolve with product direction. Typed contracts, modular design, and automated quality checks keep iteration calm.',
  },
  {
    id: '03',
    title: 'Practical AI adoption',
    description:
      'Embed AI where it de-risks execution: context-aware agents, workflow automation, and ML enhancements wired to business constraints.',
  },
]

const capabilities = [
  {
    heading: 'Interface execution',
    detail:
      'Next.js, React, TypeScript, and motion systems that respect accessibility, design tokens, and performance budgets.',
  },
  {
    heading: 'Application layer',
    detail:
      'Python and Node.js services with REST, GraphQL, and WebSocket APIs deployed across Vercel, Railway, and Supabase.',
  },
  {
    heading: 'Intelligent workflows',
    detail:
      'LLM integrations via Gemini, OpenAI, and LangChain, alongside TensorFlow and computer vision pipelines for research-backed delivery.',
  },
  {
    heading: 'Tooling & operations',
    detail:
      'CI/CD automation, typed API contracts, telemetry essentials, and documentation that keeps multi-disciplinary teams aligned.',
  },
]

const milestones = [
  { year: '2024', headline: 'Published MobileNetV2 fracture detection research with IEEE', meta: 'Research & Publication' },
  { year: '2024', headline: 'Shipped InterPrep – AI mock interview platform with live scoring', meta: 'Product Launch' },
  { year: '2023', headline: 'Built ai-dev-team: a nine-agent workflow for autonomous delivery', meta: 'Systems Engineering' },
  { year: '2022', headline: 'Transitioned prototypes into production React/Next.js delivery', meta: 'Journey Start' },
]

const focusAreas = [
  'Extending autonomous agent pipelines for dependable product delivery.',
  'Pairing analytics dashboards with AI assistants for decision clarity.',
  'Strengthening design systems with accessible, motion-aware components.',
  'Documenting delivery playbooks through technical writing and workshops.',
]

export default function About() {
  return (
    <main className="page page--about">
      <motion.section
        className="viewport-section about-hero"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.21, 1] }}
      >
        <div className="about-hero__content">
          <span className="label">About</span>
          <h1 className="about-hero__title">{profile.title}</h1>
          <p className="about-hero__intro">{profile.lead}</p>
          <p className="about-hero__body">{profile.body}</p>

          <div className="about-metrics">
            {stats.map((stat) => (
              <div key={stat.label} className="about-metrics__item">
                <span className="about-metrics__value">{stat.value}</span>
                <span className="about-metrics__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="viewport-section about-pillars"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.21, 1] }}
      >
        <div className="section-heading">
          <h2>Principles in practice</h2>
          <p>How delivery stays predictable while exploring emerging technology.</p>
        </div>
        <div className="pillar-grid">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              className="pillar-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.42, 0, 0.21, 1] }}
            >
              <span className="pillar-card__index">{pillar.id}</span>
              <h3 className="pillar-card__title">{pillar.title}</h3>
              <p className="pillar-card__description">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="viewport-section about-capabilities"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.21, 1] }}
      >
        <div className="section-heading">
          <h2>Capability snapshot</h2>
          <p>Where I spend most of my engineering time when shipping products.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <motion.div
              key={capability.heading}
              className="capability-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.42, 0, 0.21, 1] }}
            >
              <h3>{capability.heading}</h3>
              <p>{capability.detail}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="viewport-section about-journey"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.21, 1] }}
      >
        <div className="section-heading">
          <h2>Milestones</h2>
          <p>Key moments that shaped my delivery approach and technical depth.</p>
        </div>
        <div className="journey-list">
          {milestones.map((item) => (
            <motion.div
              key={item.year}
              className="journey-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.42, 0, 0.21, 1] }}
            >
              <div className="journey-item__year">{item.year}</div>
              <div className="journey-item__content">
                <span className="journey-item__meta">{item.meta}</span>
                <p>{item.headline}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="viewport-section about-focus"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.21, 1] }}
      >
        <div className="focus-panel">
          <div className="focus-panel__header">
            <span className="label">Now</span>
            <h2>Current focus areas</h2>
          </div>
          <ul className="focus-panel__list">
            {focusAreas.map((item) => (
              <li key={item}>
                <span className="focus-panel__bullet" aria-hidden="true">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      <motion.section
        className="viewport-section about-cta"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.21, 1] }}
      >
        <div className="about-cta__shell">
          <div>
            <span className="label">Start a conversation</span>
            <h2>Available for internships, freelance work, and research collaborations.</h2>
            <p>
              If your roadmap needs an engineer who pairs delivery discipline with AI fluency, I would love to discuss how we can work together.
            </p>
          </div>
          <div className="about-cta__actions">
            <a
              href={gmailComposeUrl}
              className="button button--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email Mithun
            </a>
            <a
              href="https://www.linkedin.com/in/mithun-chavan-a-8b9198254/"
              target="_blank"
              rel="noopener noreferrer"
              className="button button--outline"
            >
              Connect on LinkedIn ↗
            </a>
          </div>
        </div>
      </motion.section>
    </main>
  )
}

