import { Fragment, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import FooterNav from '../components/FooterNav'

const heroMetrics = [
  { label: 'Major GitHub projects', value: '05' },
  { label: 'Research publications', value: '01' },
  { label: 'Current CGPA', value: '8.67' },
]

const featureBuild = {
  name: 'InterPrep – AI mock interview platform',
  impact: 'Real-time, voice-led interview prep with automated scoring',
  stack: ['Next.js', 'TypeScript', 'Firebase', 'Google Gemini', 'Vapi AI'],
  link: 'https://interpreppy.vercel.app',
  repo: 'https://github.com/mithun0524/InterPrep-AI',
}

const focusAreas = [
  {
    title: 'Frontends that scale',
    description: 'Own Next.js and React delivery with strongly typed components, accessibility, and performance budgets.',
    meta: 'TypeScript · UI architecture',
  },
  {
    title: 'Applied AI integrations',
    description: 'Wire Gemini, OpenAI, and local LLMs into production workflows for automation, analysis, and agent flows.',
    meta: 'LLM APIs · LangChain · Vapi',
  },
  {
    title: 'Research-grade automation',
    description: 'Publish and prototype with Python, TensorFlow, OpenCV, and data pipelines that power medical and finance tooling.',
    meta: 'Python · TensorFlow · OpenCV',
  },
]

const stackTicker = [
  'Java',
  'Python',
  'TypeScript',
  'Next.js',
  'React',
  'FastAPI',
  'Flask',
  'MongoDB',
  'PostgreSQL',
  'Firebase',
  'Prisma',
  'Google Gemini API',
  'Hugging Face',
  'OpenCV',
  'AWS Basics',
]

const recentActivity = [
  {
    title: 'ai-dev-team',
    description: 'Nine-agent development workflow coordinating PM, QA, and delivery agents across GitHub Copilot (GPT-4) and Ollama.',
    link: 'https://github.com/mithun0524/ai-dev-team',
  },
  {
    title: 'Rocket AI App Generator',
    description: 'Transform natural language prompts into Next.js codebases with Prisma/SQLite, auth scaffolds, and streaming previews.',
    link: 'https://github.com/mithun0524/rocket-ai-app-generator',
  },
  {
    title: 'IEEE MobileNetV2 publication',
    description: 'MobileNetV2 fracture detection paper presented at ICRAIS 2024 · DOI 10.1109/ICRAIS62903.2024.10811726.',
    link: 'https://doi.org/10.1109/ICRAIS62903.2024.10811726',
  },
]

const connectMenuItems = [
  {
    text: 'GitHub',
    link: 'https://github.com/mithun0524',
  },
  {
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/in/mithun-chavan-a-8b9198254/',
  },
  {
    text: 'Resume',
    link: '/resume.pdf',
  },
]

const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=mithun.chavan.a24%40gmail.com'

const getClockSnapshot = () => {
  const now = new Date()
  const timeZone = 'Asia/Kolkata'

  return {
    time: now.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone,
    }),
    date: now.toLocaleDateString('en-IN', {
      weekday: 'long',
      month: 'long',
      day: '2-digit',
      timeZone,
    }),
  }
}

export default function Home() {
  const [clock, setClock] = useState(getClockSnapshot)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setClock(getClockSnapshot())
    }, 1000)

    return () => window.clearInterval(interval)
  }, [])

  const timeSegments = clock.time.split(':')
  const timeSchema = [
    { value: timeSegments[0] ?? '--', label: 'hrs' as const },
    { value: timeSegments[1] ?? '--', label: 'min' as const },
  ]

  return (
    <main className="page" id="overview">
      <motion.section
        className="viewport-section hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.21, 1] }}
      >
        <div className="hero__left">
          <span className="label">Mithun Chavan · Bangalore, India</span>
          <h1 className='hero-h1'>Full stack developer building web + applied AI solutions.</h1>
          <p>
            Delivering Next.js/React products, Python automation, and AI integrations that move from prototype to
            production with measurable outcomes.
          </p>
          <div className="hero__cta">
            <a href="/resume.pdf" className="button button--primary" download>
              Download PDF
            </a>
            <a href={gmailComposeUrl} className="button button--outline" target="_blank" rel="noopener noreferrer">
              Email Mithun
            </a>
          </div>
          <div className="hero__scroll">
            <span>Scroll</span>
            <span aria-hidden="true">↓</span>
          </div>
        </div>

        <motion.div
          className="hero__right"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.5, 0, 0.2, 1] }}
        >
          <motion.div
            className="hero__clock"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            role="timer"
            aria-label={`Local time in Bangalore, India is ${clock.time}`}
            aria-live="off"
          >
            <div className="hero__clock-header">
              <span className="hero__clock-label">Local time</span>
              <span className="hero__clock-location">Bangalore · IST (UTC+5:30)</span>
            </div>
            <div className="hero__clock-time" aria-hidden="true">
              {timeSchema.map((segment, index) => (
                <Fragment key={`segment-${index}`}>
                  <div className="hero__clock-segment">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={`${index}-${segment.value}`}
                        className="hero__clock-digit"
                        initial={{ y: 16, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -16, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                      >
                        {segment.value}
                      </motion.span>
                    </AnimatePresence>
                    <span className="hero__clock-segment-label" aria-hidden="true">
                      {segment.label}
                    </span>
                  </div>
                  {index < timeSchema.length - 1 ? (
                    <span key={`colon-${index}`} className="hero__clock-colon" aria-hidden="true">
                      :
                    </span>
                  ) : null}
                </Fragment>
              ))}
            </div>
            <div className="hero__clock-date">{clock.date}</div>
          </motion.div>
          <div className="hero__metrics">
            {heroMetrics.map((metric) => (
              <div key={metric.label}>
                <span>{metric.value}</span>
                <p>{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="viewport-section highlight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.21, 1] }}
      >
        <div className="highlight__label">Latest proof of work</div>
        <div className="highlight__content">
          <div className="highlight__header">
            <div className="highlight__title">{featureBuild.name}</div>
          </div>
          <div className="highlight__meta">
            <p className="highlight__subtitle">{featureBuild.impact}</p>
            <div className="highlight__tags">
              {featureBuild.stack.map((tech) => (
                <span key={tech} className="highlight__tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="highlight__actions">
            <a
              href={featureBuild.link}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--primary"
            >
              Live demo ↗
            </a>
            <a
              href={featureBuild.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--outline"
            >
              View GitHub ↗
            </a>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="viewport-section overview"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.21, 1] }}
      >
        <div className="overview-grid">
          {focusAreas.map((area) => (
            <motion.div
              key={area.title}
              className="overview-grid__item"
              whileHover={{ x: 6 }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            >
              <span className="overview-grid__meta">{area.meta}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section className="stack-ticker" aria-label="Primary toolchain">
        <div className="stack-ticker__rail">
          {[...stackTicker, ...stackTicker].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      <motion.section
        className="viewport-section activity"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.21, 1] }}
      >
        <div className="activity__header">
          <span className="label">Recent shipping</span>
          <h2>Keeping velocity high across AI builds and research.</h2>
        </div>
        <div className="activity-list">
          {recentActivity.map((item) => (
            <motion.div
              key={item.title}
              className="activity-list__item"
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            >
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                Explore ↗
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <motion.footer
        className="overview-footer"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.21, 1] }}
      >
        <div className="overview-footer__background" aria-hidden="true" />
        <div className="overview-footer__inner">
          {/* Mobile/Tablet Navigation */}
          <FooterNav />
          
          <div className="overview-footer__grid">
            <div className="overview-footer__headline">
              <span className="label">Let&apos;s collaborate</span>
              <h2>Product engineering that ships with clarity.</h2>
              <p>
                I partner with teams to deliver React frontends, Python automation, and applied AI flows with
                documented handoffs and stable velocity.
              </p>
            </div>

            <div className="overview-footer__details">
              <div className="overview-footer__contact">
                <span className="overview-footer__caption">Contact</span>
                <a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer">mithun.chavan.a24@gmail.com</a>
                <p>Bangalore, India · IST (UTC+5:30)</p>
              </div>
              <div className="overview-footer__connect">
                <span className="overview-footer__caption">Connect</span>
                <nav className="overview-footer__links" aria-label="External profiles">
                  {connectMenuItems.map((item) => (
                    <a
                      key={item.text}
                      href={item.link}
                      className="overview-footer__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{item.text}</span>
                      <span aria-hidden="true" className="overview-footer__link-arrow">↗</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          <div className="overview-footer__bottom">
            <div className="overview-footer__cta">
              <span className="overview-footer__caption">Work with me</span>
              <a href={gmailComposeUrl} className="button button--primary" target="_blank" rel="noopener noreferrer">
                Start a project
              </a>
            </div>
            <div className="overview-footer__baseline">
              <span>© {new Date().getFullYear()} Mithun Chavan · Crafted with intent.</span>
            </div>
          </div>
        </div>
      </motion.footer>
    </main>
  )
}
