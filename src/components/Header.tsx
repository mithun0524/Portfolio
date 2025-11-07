import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import FooterNav from './FooterNav'

const links = [
  { to: '/', label: 'Overview' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=mithun.chavan.a24%40gmail.com'
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className={`site-header${menuOpen ? ' site-header--open' : ''}`}>
      <div className="site-header__inner">
        <Link to="/" className="site-header__mark">
          MITHUN<br />CHAVAN
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
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
          <button
            type="button"
            className="site-header__menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-quick-links"
            onClick={toggleMenu}
          >
            {menuOpen ? 'Close Menu' : 'Quick Links'}
          </button>
          <a href={gmailComposeUrl} className="site-header__cta" target="_blank" rel="noopener noreferrer">
            EMAIL MITHUN ↗
          </a>
        </div>
      </div>

      <div id="site-quick-links" className="site-header__menu" data-open={menuOpen}>
        <FooterNav />
      </div>
    </header>
  )
}
