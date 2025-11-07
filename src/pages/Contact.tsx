const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/mithun-chavan-8b9198254' },
  { label: 'GitHub', href: 'https://github.com/mithun0524' },
  { label: 'LeetCode', href: 'https://leetcode.com/mithun0524' },
]

const languages = ['Marathi', 'English', 'Hindi', 'Kannada', 'Tamil', 'Telugu']

export default function Contact() {
  return (
    <main className="page">
      <section className="viewport-section">
        <div className="split">
          <div className="split__primary">
            <span className="label">Contact</span>
            <h1>Let’s collaborate on software, AI systems, or research.</h1>
            <p>
              I’m open to software engineering roles, AI integration projects, and applied research collaborations. Share
              your scope and timeline — I’ll respond from Bangalore (GMT+5:30).
            </p>
          </div>
          <div className="split__secondary contact-panel">
            <div>
              <h2>Email</h2>
              <a href="mailto:mithun.chavan.a24@gmail.com">mithun.chavan.a24@gmail.com</a>
            </div>
            <div>
              <h2>Phone</h2>
              <a href="tel:+916380691574">+91 6380691574</a>
            </div>
            <div>
              <h2>Socials</h2>
              <ul>
                {socials.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">{item.label} ↗</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Languages</h2>
              <ul>
                {languages.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="viewport-section contact-cta">
        <div>
          <h2>How I can help</h2>
          <ul>
            <li>Full stack web development with React, Next.js, Node.js</li>
            <li>Applied AI integrations using Python, FastAPI, Flask, and LLM APIs</li>
            <li>Data analysis, automation scripts, and collaborative tooling</li>
          </ul>
        </div>
        <a href="mailto:mithun.chavan.a24@gmail.com" className="button button--primary">Start a conversation ↗</a>
      </section>
    </main>
  )
}
