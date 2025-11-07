import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

// ────────────────────────────────────────────────────────────────────────────
// Types
// ────────────────────────────────────────────────────────────────────────────

export interface MenuItem {
  label: string
  href: string
  external?: boolean
}

export interface SocialLink {
  label: string
  href: string
}

export interface StaggeredMenuProps {
  items: MenuItem[]
  socialLinks?: SocialLink[]
  position?: 'left' | 'right'
  accentColor?: string
  className?: string
}

// ────────────────────────────────────────────────────────────────────────────
// Component
// ────────────────────────────────────────────────────────────────────────────

export default function StaggeredMenu({
  items,
  socialLinks = [],
  position = 'right',
  accentColor,
  className = '',
}: StaggeredMenuProps) {
  // ──────────────────────────────────────────────────────────────────────────
  // State & Refs
  // ──────────────────────────────────────────────────────────────────────────
  
  const [isOpen, setIsOpen] = useState(false)
  
  const menuRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const iconRef = useRef<HTMLSpanElement>(null)
  
  const animationRef = useRef<gsap.core.Timeline | null>(null)
  const isAnimatingRef = useRef(false)

  // ──────────────────────────────────────────────────────────────────────────
  // Initial Setup
  // ──────────────────────────────────────────────────────────────────────────
  
  useLayoutEffect(() => {
    const panel = panelRef.current
    const backdrop = backdropRef.current
    
    if (!panel || !backdrop) return

    // Set initial states
    const direction = position === 'left' ? -100 : 100
    
    gsap.set(panel, { xPercent: direction, visibility: 'hidden' })
    gsap.set(backdrop, { opacity: 0, pointerEvents: 'none' })
    
  }, [position])

  // ──────────────────────────────────────────────────────────────────────────
  // Animation Functions
  // ──────────────────────────────────────────────────────────────────────────
  
  const open = useCallback(() => {
    if (isAnimatingRef.current) return
    isAnimatingRef.current = true

    const panel = panelRef.current
    const backdrop = backdropRef.current
    
    if (!panel || !backdrop) return

    // Kill any existing animation
    animationRef.current?.kill()

    // Create opening timeline
    const tl = gsap.timeline({
      onStart: () => {
        gsap.set(panel, { visibility: 'visible' })
      },
      onComplete: () => {
        isAnimatingRef.current = false
      }
    })

    // Backdrop fade in
    tl.to(backdrop, {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
      onStart: () => {
        gsap.set(backdrop, { pointerEvents: 'auto' })
      }
    }, 0)

    // Panel slide in
    tl.to(panel, {
      xPercent: 0,
      duration: 0.6,
      ease: 'power4.out'
    }, 0.1)

    // Stagger menu items
    const items = panel.querySelectorAll('.menu-item-label')
    if (items.length) {
      gsap.set(items, { y: 50, opacity: 0 })
      
      tl.to(items, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out'
      }, 0.3)
    }

    // Social links
    const socials = panel.querySelectorAll('.menu-social-link')
    if (socials.length) {
      gsap.set(socials, { y: 20, opacity: 0 })
      
      tl.to(socials, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: 'power2.out'
      }, 0.5)
    }

    animationRef.current = tl
  }, [])

  const close = useCallback(() => {
    if (isAnimatingRef.current) return
    isAnimatingRef.current = true

    const panel = panelRef.current
    const backdrop = backdropRef.current
    
    if (!panel || !backdrop) return

    // Kill any existing animation
    animationRef.current?.kill()

    const direction = position === 'left' ? -100 : 100

    // Create closing timeline
    const tl = gsap.timeline({
      onComplete: () => {
        isAnimatingRef.current = false
        gsap.set(panel, { visibility: 'hidden' })
      }
    })

    // Panel slide out
    tl.to(panel, {
      xPercent: direction,
      duration: 0.4,
      ease: 'power3.in'
    }, 0)

    // Backdrop fade out
    tl.to(backdrop, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        gsap.set(backdrop, { pointerEvents: 'none' })
      }
    }, 0)

    animationRef.current = tl
  }, [position])

  // ──────────────────────────────────────────────────────────────────────────
  // Event Handlers
  // ──────────────────────────────────────────────────────────────────────────
  
  const handleToggle = useCallback(() => {
    if (isAnimatingRef.current) return
    
    if (isOpen) {
      close()
      setIsOpen(false)
    } else {
      open()
      setIsOpen(true)
    }
  }, [isOpen, open, close])

  const handleClose = useCallback(() => {
    if (isOpen && !isAnimatingRef.current) {
      close()
      setIsOpen(false)
    }
  }, [isOpen, close])

  // ──────────────────────────────────────────────────────────────────────────
  // Cleanup
  // ──────────────────────────────────────────────────────────────────────────
  
  useEffect(() => {
    return () => {
      animationRef.current?.kill()
    }
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // ──────────────────────────────────────────────────────────────────────────
  // Render
  // ──────────────────────────────────────────────────────────────────────────
  
  return (
    <div 
      ref={menuRef}
      className={`staggered-menu ${className}`}
      data-position={position}
      data-open={isOpen ? 'true' : undefined}
      style={accentColor ? { '--menu-accent': accentColor } as React.CSSProperties : undefined}
    >
      {/* Toggle Button */}
      <button
        ref={toggleRef}
        type="button"
        className="menu-toggle"
        onClick={handleToggle}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <span ref={iconRef} className="menu-icon" aria-hidden="true">
          <span className="menu-icon-line" />
          <span className="menu-icon-line" />
          <span className="menu-icon-line" />
        </span>
      </button>

      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="menu-backdrop"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        ref={panelRef}
        className="menu-panel"
        aria-label="Navigation menu"
      >
        <div className="menu-panel-inner">
          {/* Close Button */}
          <button
            type="button"
            className="menu-close"
            onClick={handleClose}
            aria-label="Close menu"
          >
            <span aria-hidden="true">×</span>
          </button>

          {/* Navigation Items */}
          <nav className="menu-nav">
            <ul className="menu-list">
              {items.map((item, index) => (
                <li key={item.href} className="menu-item">
                  {item.external ? (
                    <a
                      href={item.href}
                      className="menu-item-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleClose}
                    >
                      <span className="menu-item-label">{item.label}</span>
                      <span className="menu-item-number" aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="menu-item-link"
                      onClick={handleClose}
                    >
                      <span className="menu-item-label">{item.label}</span>
                      <span className="menu-item-number" aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="menu-social">
              <h3 className="menu-social-title">Connect</h3>
              <ul className="menu-social-list">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="menu-social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </aside>
    </div>
  )
}
