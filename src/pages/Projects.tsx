const spotlight = {
  id: 'interprep',
  title: 'InterPrep – AI mock interview platform',
  context: 'EdTech · 2024',
  summary:
    'AI-powered interviewer that runs real-time voice sessions, scores responses, and tracks progress. Built end to end with Next.js, TypeScript, Firebase, shadcn/ui, Google Gemini, and Vapi AI.',
  links: {
    live: 'https://interpreppy.vercel.app',
    repo: 'https://github.com/mithun0524/InterPrep-AI',
  },
  stack: ['Next.js', 'TypeScript', 'Firebase', 'Google Gemini API', 'Vapi AI', 'shadcn/ui'],
}

const supporting = [
  {
    id: 'ai-dev-team',
    title: 'ai-dev-team · Multi-agent AI development org',
    context: 'AI engineering workflow · 2025',
    summary:
      'Nine specialized agents (PM, architecture, security, QA, docs, and more) orchestrated with GitHub Copilot (GPT-4) and local Ollama models. Ships coordinated delivery via real-time dashboards, REST APIs, and WebSocket updates.',
    stack: ['GitHub Copilot', 'Ollama', 'REST APIs', 'WebSockets', 'Dashboards'],
    repo: 'https://github.com/mithun0524/ai-dev-team',
  },
  {
    id: 'emotion-aware-ai-tutor',
    title: 'Emotion-Aware AI Tutor',
    context: 'EdTech research · 2024',
    summary:
      'Adaptive tutor that blends computer vision and NLP to read student engagement and deliver context-aware explanations via a split Next.js frontend and FastAPI backend.',
    stack: ['Next.js', 'FastAPI', 'Google GenAI', 'Hugging Face', 'OpenCV'],
    repo: 'https://github.com/mithun0524/Emotion-Aware-AI-Tutor',
  },
  {
    id: 'rocket-ai-app-generator',
    title: 'rocket-ai-app-generator',
    context: 'DevTools · 2024',
    summary:
      'Full-stack generator that converts natural-language prompts into production-ready Next.js apps. Includes multi-phase planning, auth, Prisma/SQLite, streaming previews, and local LLM integration.',
    stack: ['Next.js', 'Prisma', 'SQLite', 'Local LLM', 'Streaming APIs'],
    repo: 'https://github.com/mithun0524/rocket-ai-app-generator',
  },
  {
    id: 'apex-ai',
    title: 'Apex AI Trading Platform',
    context: 'FinTech · 2024',
    summary:
      'Privacy-first trading assistant that generates AI signals, runs paper trades, and backtests strategies in a single dashboard using Python, Flask-SocketIO, SQLite, and Yahoo Finance feeds.',
    stack: ['Python', 'Flask-SocketIO', 'SQLite', 'Yahoo Finance API'],
    repo: 'https://github.com/mithun0524/Apex-AI-Trading-Platform',
  },
]

export default function Projects() {
  return (
    <main className="page">
      <section className="viewport-section">
        <div className="split">
          <div className="split__primary">
            <span className="label">Projects</span>
            <h1>Applied builds that pair solid engineering with usable AI.</h1>
            <p>
              Each repository is available at github.com/mithun0524. The focus stays on practical delivery — real
              deployments, automation that saves time, and research that moves beyond demos.
            </p>
          </div>
          <div className="split__secondary project-spotlight">
            <div className="project-spotlight__meta">{spotlight.context}</div>
            <h2 className="project-spotlight__title">{spotlight.title}</h2>
            <p className="project-spotlight__summary">{spotlight.summary}</p>
            <div className="project-spotlight__stack">
              {spotlight.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="project-spotlight__links">
              {spotlight.links.live && (
                <a
                  href={spotlight.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--primary"
                >
                  View live ↗
                </a>
              )}
              <a href={spotlight.links.repo} target="_blank" rel="noopener noreferrer" className="button button--outline">
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="viewport-section project-list">
        <ul>
          {supporting.map((project) => (
            <li key={project.id} className="project-list__item">
              <div className="project-list__header">
                <span className="project-list__context">{project.context}</span>
                <h3>{project.title}</h3>
              </div>
              <p className="project-list__summary">{project.summary}</p>
              <div className="project-list__stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="project-list__links">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer">Live ↗</a>
                )}
                <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                {project.paper && (
                  <a href={project.paper} target="_blank" rel="noopener noreferrer">Read paper ↗</a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
