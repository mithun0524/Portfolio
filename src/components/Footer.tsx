import { Link } from 'react-router-dom'
import FooterNav from './FooterNav'

export default function Footer() {
  const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=mithun.chavan.a24%40gmail.com'

  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__inner">
        {/* Mobile/Tablet Navigation - Only visible on small/medium screens */}
        <FooterNav />
        
        <div className="site-footer__brand">
          <p className="site-footer__label">Let’s collaborate</p>
          <a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer" className="site-footer__mail">mithun.chavan.a24@gmail.com</a>
          <p className="site-footer__note">Based in Bangalore · Working across time zones</p>
        </div>

        <div className="site-footer__grid">
          <div className="site-footer__column">
            <h3 className="site-footer__heading">Navigate</h3>
            <Link to="/" className="site-footer__link">Overview</Link>
            <Link to="/about" className="site-footer__link">About</Link>
            <Link to="/projects" className="site-footer__link">Projects</Link>
            <Link to="/skills" className="site-footer__link">Skills</Link>
            <Link to="/contact" className="site-footer__link">Contact</Link>
          </div>
          <div className="site-footer__column">
            <h3 className="site-footer__heading">Connect</h3>
            <a href="https://github.com/mithun0524" target="_blank" rel="noopener noreferrer" className="site-footer__link">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/mithun-chavan-a-8b9198254/" target="_blank" rel="noopener noreferrer" className="site-footer__link">LinkedIn ↗</a>
            <a href="https://leetcode.com/mithun0524" target="_blank" rel="noopener noreferrer" className="site-footer__link">LeetCode ↗</a>
          </div>
          <div className="site-footer__column">
            <h3 className="site-footer__heading">Status</h3>
            <p className="site-footer__text">Open to internships, freelance gigs, and collaborative research.</p>
            <p className="site-footer__text">Current response time: under 24 hours.</p>
          </div>
        </div>

        <div className="site-footer__base">
          <p>© {new Date().getFullYear()} Mithun Chavan</p>
          <p className="site-footer__tag">Portfolio v2 · Crafted with care</p>
        </div>
      </div>
    </footer>
  )
}
