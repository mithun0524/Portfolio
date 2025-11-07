import { motion } from 'framer-motion'

const meta = [
  { label: 'Primary focus', value: 'Product engineering · AI enablement' },
  { label: 'Core toolkit', value: 'TypeScript · Python · LangChain' },
  { label: 'Deployment', value: 'Vercel · Railway · Supabase · GitHub Actions' },
]

const groups = [
  {
    badge: 'FE',
    title: 'Frontend systems',
    points: ['React & Next.js interfaces', 'TypeScript-first component kits', 'Motion design with Framer Motion'],
  },
  {
    badge: 'BE',
    title: 'Application layer',
    points: ['FastAPI & Node.js services', 'REST / GraphQL contracts', 'Background jobs & webhooks'],
  },
  {
    badge: 'AI',
    title: 'Applied AI',
    points: ['LangChain + Gemini/OpenAI flows', 'TensorFlow & OpenCV pipelines', 'Agentic automation experiments'],
  },
  {
    badge: 'OPS',
    title: 'Delivery ops',
    points: ['PostgreSQL & Supabase data', 'CI pipelines with lint + tests', 'Observability and release notes'],
  },
]

const favoriteTools = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
  'Python',
  'FastAPI',
  'LangChain',
  'Gemini API',
  'PostgreSQL',
  'Supabase',
  'GitHub Actions',
]

export default function Skills() {
  return (
    <main className="page page--skills">
      <motion.section
        className="viewport-section"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.21, 1] }}
      >
        <div className="skills-hero">
          <div className="skills-hero__intro">
            <span className="label">Skills</span>
            <h1>Stack I trust to move ideas into production.</h1>
            <p>
              Focused on shipping fast without breaking quality. TypeScript and design systems up front, Python and AI on the back end, all wired with delivery guardrails so teams can iterate safely.
            </p>
            <ul className="skills-meta">
              {meta.map((item) => (
                <li key={item.label}>
                  <span className="skills-meta__label">{item.label}</span>
                  <span className="skills-meta__value">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="skills-cards">
            {groups.map((group) => (
              <div key={group.title} className="skill-card">
                <span className="skill-card__icon" aria-hidden="true">{group.badge}</span>
                <h2>{group.title}</h2>
                <ul>
                  {group.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="viewport-section"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.21, 1] }}
      >
        <div className="skills-stack">
          <div className="skills-stack__header">
            <h2>Favorite tools in rotation</h2>
            <p>The essentials I reach for when shipping client work and experiments.</p>
          </div>
          <div className="skills-tags">
            {favoriteTools.map((tool) => (
              <span key={tool} className="skills-tag">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  )
}
