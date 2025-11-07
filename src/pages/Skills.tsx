const languages = ['Java', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS']

const frameworks = ['React.js', 'Next.js', 'Node.js', 'Flask', 'FastAPI', 'Tailwind CSS']

const databases = ['MongoDB', 'PostgreSQL', 'SQL', 'Firebase']

const tools = ['Git', 'GitHub', 'Visual Studio Code', 'Postman', 'Figma', 'Linux', 'AWS Basics']

const concepts = ['Data Structures & Algorithms', 'Object-Oriented Programming', 'API Development', 'Machine Learning']

const interests = ['Software Engineering', 'Full Stack Development', 'Agentic AI Development', 'AI Integration']

export default function Skills() {
  return (
    <main className="page">
      <section className="viewport-section">
        <div className="split">
          <div className="split__primary">
            <span className="label">Skills</span>
            <h1>Tooling I rely on to design, build, and ship.</h1>
            <p>
              This stack reflects my day-to-day: modern JavaScript frameworks up front, Python where AI or automation is
              required, and disciplined fundamentals to keep everything maintainable.
            </p>
          </div>
          <div className="split__secondary skills-grid">
            <div>
              <h2>Languages</h2>
              <ul>
                {languages.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Frameworks & Libraries</h2>
              <ul>
                {frameworks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Databases</h2>
              <ul>
                {databases.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Developer Tools</h2>
              <ul>
                {tools.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="viewport-section">
        <div className="skills-detail">
          <div>
            <h2>Core Concepts</h2>
            <ul>
              {concepts.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Areas of Interest</h2>
            <ul>
              {interests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
