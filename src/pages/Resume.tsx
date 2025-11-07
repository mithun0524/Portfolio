const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=mithun.chavan.a24%40gmail.com'

export default function Resume() {
  return (
    <main className="page">
      <section className="viewport-section resume-download">
        <div>
          <span className="label">Resume</span>
          <h1>Detailed snapshot of education, skills, and projects.</h1>
          <p>
            Download the PDF to view my complete resume, including academic record, technical skills, project
            highlights, publications, and certifications.
          </p>
          <div className="resume-download__actions">
            <a href="/resume.pdf" download className="button button--primary">Download PDF ↗</a>
            <a href="/contact" className="button button--outline">Request additional info ↗</a>
          </div>
        </div>
        <div className="resume-download__meta">
          <p><strong>Name:</strong> Mithun Chavan A</p>
          <p><strong>Location:</strong> Bangalore, India</p>
          <p>
            <strong>Email:</strong>{' '}
            <a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer">
              mithun.chavan.a24@gmail.com
            </a>
          </p>
          <p><strong>Phone:</strong> +91 6380691574</p>
        </div>
      </section>
    </main>
  )
}
