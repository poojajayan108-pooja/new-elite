import { useState } from 'react'
import { hospital, navLinks } from '../data.js'
import { useOpenNow, useScrolled } from '../hooks.js'
import Icon from './Icon.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const isOpen = useOpenNow()
  const close = () => setOpen(false)

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <a href={`tel:${hospital.phone}`}><Icon name="phone" size={15} /> {hospital.phone}</a>
            <a href={`mailto:${hospital.email}`} className="hide-sm"><Icon name="mail" size={15} /> {hospital.email}</a>
          </div>
          <div className="topbar-right">
            <span className={`status ${isOpen ? 'on' : 'off'}`}>
              <span className="status-dot" /> {isOpen ? 'Open now' : 'Closed now'}
            </span>
            <a href={`tel:${hospital.emergency}`} className="topbar-emergency">
              <Icon name="emergency" size={15} /> 24×7 Emergency
            </a>
          </div>
        </div>
      </div>

      <nav className="nav container" aria-label="Main">
        <a href="#home" className="brand" onClick={close}>
          <img src="/logo.png" alt={hospital.name} />
        </a>

        <button className="menu-btn" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <Icon name={open ? 'close' : 'menu'} size={26} />
        </button>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map((l) => (
            <li key={l.href}><a href={l.href} onClick={close}>{l.label}</a></li>
          ))}
          <li>
            <a href="#appointment" className="btn btn-primary btn-sm" onClick={close}>
              <Icon name="calendar" size={17} /> Book Appointment
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
