import { motion } from 'framer-motion'

const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=mithun.chavan.a24%40gmail.com'

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mithun-chavan-a-8b9198254/' },
  { label: 'GitHub', href: 'https://github.com/mithun0524' },
  { label: 'LeetCode', href: 'https://leetcode.com/mithun0524' },
]

const languages = ['Marathi', 'English', 'Hindi', 'Kannada', 'Tamil', 'Telugu']

const channels = [
  {
    badge: 'EM',
    title: 'Project briefs & roles',
    description: 'Share product goals, timelines, and context so I can come prepared with ideas.',
    href: gmailComposeUrl,
    action: 'Email me',
    external: true,
  },
  {
    badge: 'LN',
    title: 'Networking & quick syncs',
    description: 'For rapid questions or collaboration notes, send a DM on LinkedIn.',
    href: 'https://www.linkedin.com/in/mithun-chavan-a-8b9198254/',
    action: 'Message on LinkedIn',
    external: true,
  },
  {
    badge: 'PH',
    title: 'Real-time coordination',
    description: 'Need to unblock something fast? Call me during IST evenings or leave a voice note.',
    href: 'tel:+916380691574',
    action: 'Call me',
  },
]

const collaborationFocus = [
  'End-to-end web product builds with React, Next.js, and TypeScript.',
  'Applied AI features using LangChain, Gemini/OpenAI APIs, and Python services.',
  'Automation, developer tooling, and data workflows for remote-first teams.',
]

const languageSummary =
  languages.length > 3
    ? `${languages.slice(0, 3).join(' · ')} +${languages.length - 3} more`
    : languages.join(' · ')

const meta = [
  { label: 'Based in', value: 'Bengaluru, India (GMT+5:30)' },
  { label: 'Response time', value: 'Usually within 24 hours' },
  { label: 'Languages', value: languageSummary },
]

export default function Contact() {
  return (
    <main className="page page--contact">
      <motion.section
        className="viewport-section"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.21, 1] }}
      >
        <div className="contact-hero">
          <div className="contact-hero__intro">
            <span className="label">Contact</span>
            <h1>Let’s build the next release together.</h1>
            <p>
              I partner with teams on product engineering, applied AI, and research-backed experiments. Share your
              goals, and I’ll reply from Bengaluru with next steps.
            </p>
            <ul className="contact-meta">
              {meta.map((item) => (
                <li key={item.label}>
                  <span className="contact-meta__label">{item.label}</span>
                  <span className="contact-meta__value">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-hero__details">
            <div className="contact-cards">
              {channels.map((channel) => {
                const content = (
                  <>
                    <span className="contact-card__badge" aria-hidden="true">
                      {channel.badge}
                    </span>
                    <h2>{channel.title}</h2>
                    <p>{channel.description}</p>
                    <span className="contact-card__action">{channel.action} ↗</span>
                  </>
                )

                if (channel.external) {
                  return (
                    <a
                      key={channel.title}
                      className="contact-card"
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {content}
                    </a>
                  )
                }

                return (
                  <a key={channel.title} className="contact-card" href={channel.href}>
                    {content}
                  </a>
                )
              })}
            </div>

            <div className="contact-socials">
              {socials.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="contact-social">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="viewport-section contact-brief"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.21, 1] }}
      >
        <div className="contact-brief__content">
          <h2>What to include in your brief</h2>
          <p>
            A quick outline of the problem, audience, and success metrics helps me respond with the right approach and
            timeline.
          </p>
          <ul className="contact-brief__list">
            {collaborationFocus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="contact-brief__cta">
          <a href={gmailComposeUrl} className="button button--primary" target="_blank" rel="noopener noreferrer">
            Start a conversation ↗
          </a>
          <p className="contact-brief__note">
            Prefer async? Send links to repositories, documentation, or datasets — I’ll review before we chat.
          </p>
        </div>
      </motion.section>
    </main>
  )
}
