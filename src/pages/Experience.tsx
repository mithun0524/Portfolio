import { motion } from 'framer-motion'

const roles = [
  {
    period: '2023 → Present',
    title: 'Independent full stack developer',
    focus: 'Delivering web applications with integrated AI workflows',
    wins: [
      'ai-dev-team: multi-agent development workflow leveraging GitHub Copilot and local Ollama models',
      'InterPrep: real-time mock interview platform using Next.js, Google Gemini, Vapi AI',
      'Rocket AI App Generator: NL-to-Next.js scaffolder with Prisma/SQLite and streaming previews',
    ],
  },
  {
    period: '2024',
    title: 'Applied AI researcher · Jain (Deemed-to-be) University',
    focus: 'Computer vision for medical diagnostics',
    wins: [
      'Co-authored IEEE paper on MobileNetV2-based bone fracture detection',
      'Built reproducible training pipeline with TensorFlow and curated X-ray datasets',
      'Presented findings at ICRAIS 2024 with DOI 10.1109/ICRAIS62903.2024.10811726',
    ],
  },
  {
    period: '2022 → Present',
    title: 'B.Tech CSE student · Jain (Deemed-to-be) University',
    focus: 'Strengthening fundamentals in software engineering and AI',
    wins: [
      'Maintaining CGPA 8.67 while balancing project work and research',
      'Focused coursework on data structures, OOP, API development, and machine learning',
      'Active in collaborative labs exploring agentic AI development and integrations',
    ],
  },
]

export default function Experience() {
  return (
    <main className="page">
      <motion.section
        className="viewport-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.21, 1] }}
      >
        <div className="split">
          <div className="split__primary">
            <span className="label">Experience</span>
            <h1>Operate at founder pace, keep the quality bar high.</h1>
            <p>
              I jump into ambiguous problems, map the delivery plan, then stay close to metrics. These snapshots show the
              type of traction I ship.
            </p>
          </div>
          <div className="split__secondary">
            <ul className="trace-list">
              {roles.map((role) => (
                <li key={role.title}>
                  <div className="trace-list__header">
                    <span className="trace-list__period">{role.period}</span>
                    <p className="trace-list__title">{role.title}</p>
                  </div>
                  <p className="trace-list__focus">{role.focus}</p>
                  <div className="trace-list__wins">
                    {role.wins.map((win) => (
                      <span key={win}>{win}</span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
