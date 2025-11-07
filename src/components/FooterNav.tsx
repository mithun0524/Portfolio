import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Overview' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
]

export default function FooterNav() {
  const location = useLocation()

  return (
    <nav className="footer-nav">
      <h3 className="footer-nav__title">Quick Links</h3>
      <ul className="footer-nav__list">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={`footer-nav__link ${location.pathname === link.to ? 'active' : ''}`}
            >
              {link.label}
              <span className="footer-nav__arrow">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
