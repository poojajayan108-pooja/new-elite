import { useEffect, useState } from 'react'
import { hospital, navLinks, services } from '../data.js'
import Icon from './Icon.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img src="/logo-white.png" alt={hospital.name} className="footer-logo" />
          <p>Compassionate, advanced eye care for every member of your family.</p>
          <div className="socials">
            {Object.entries(hospital.social).map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name}><Icon name={name} size={19} /></a>
            ))}
          </div>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul>{navLinks.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}</ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>{services.slice(0, 6).map((s) => <li key={s.title}><a href="#services">{s.title}</a></li>)}</ul>
        </div>
        <div>
          <h4>Reach us</h4>
          <ul className="footer-contact">
            <li><Icon name="pin" size={17} /> {hospital.addressLines.slice(1).join(', ')}</li>
            <li><Icon name="phone" size={17} /> <a href={`tel:${hospital.phone}`}>{hospital.phone}</a></li>
            <li><Icon name="mail" size={17} /> <a href={`mailto:${hospital.email}`}>{hospital.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {hospital.name}. All rights reserved.</p>
        <p>The information on this website is general and is not a substitute for a medical consultation.</p>
      </div>
    </footer>
  )
}

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="floating">
      <button
        className={`fab fab-top ${showTop ? 'show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <Icon name="up" size={20} />
      </button>
      <a className="fab fab-call" href={`tel:${hospital.phone}`} aria-label="Call us"><Icon name="phone" size={22} /></a>
      <a className="fab fab-wa" href={`https://wa.me/${hospital.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp us">
        <Icon name="whatsapp" size={28} />
      </a>
    </div>
  )
}
