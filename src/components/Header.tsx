import { NavLink, Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const links = [
  { to: '/', label: 'Overview' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=mithun.chavan.a24%40gmail.com'

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__mark">
          MITHUN<br />CHAVAN
        </Link>

        <nav className="site-header__nav">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `site-header__link${isActive ? ' site-header__link--active' : ''}`}
              end={link.to === '/'}
            >
              [ {link.label.toUpperCase()} ]
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <ThemeToggle />
          <a href={gmailComposeUrl} className="site-header__cta" target="_blank" rel="noopener noreferrer">
            EMAIL MITHUN ↗
          </a>
        </div>
      </div>
    </header>
  )
}
