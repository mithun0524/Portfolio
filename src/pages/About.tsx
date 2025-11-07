import { motion } from 'framer-motion'

const essentials = [
  'B.Tech CSE · Jain (Deemed-to-be) University · CGPA 8.67',
  'IEEE author · MobileNetV2 fracture detection (2024)',
  'Building applied AI and full stack projects since 2022',
]

const strengths = [
  'React/Next.js delivery with TypeScript-first patterns',
  'AI feature deployment using Gemini, OpenAI, LangChain',
  'Infra automation on Vercel, Railway, Supabase',
]

export default function About() {
  return (
    <main className="page">
      <motion.section
        className="viewport-section about"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.21, 1] }}
      >
        <div className="split">
          <div className="split__primary">
            <span className="label">About</span>
            <h1>Engineer focused on reliable, measurable software.</h1>
            <p>
              I turn requirements into deployed products by pairing TypeScript-first frontends with Python-powered AI.
              The aim is always practical impact — automation that saves time, dashboards that clarify data, and tools
              teams can iterate on quickly.
            </p>
          </div>
          <div className="split__secondary">
            <div className="about__block">
              <h2>Snapshot</h2>
              <ul>
                {essentials.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="about__block">
              <h2>Strengths</h2>
              <ul>
                {strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
