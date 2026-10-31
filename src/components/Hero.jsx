import { hospital, stats } from '../data.js'
import { useCountUp } from '../hooks.js'
import Icon from './Icon.jsx'

function Stat({ value, suffix, label }) {
  const [ref, n] = useCountUp(value)
  return (
    <div className="stat" ref={ref}>
      <strong>{n.toLocaleString('en-IN')}{suffix}</strong>
      <span>{label}</span>
    </div>
  )
}

export default function Hero() {
  const wa = `https://wa.me/${hospital.whatsapp}?text=${encodeURIComponent('Hello, I would like to book an appointment.')}`

  return (
    <section id="home" className="hero">
      <img src="/logo-white.png" alt="" className="hero-watermark" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-text">
          <span className="pill"><Icon name="eye" size={16} /> {hospital.tagline}</span>
          <h1>Advanced eye care with a <em>personal touch</em></h1>
          <p>
            From routine eye check-ups to cataract, LASIK and retina surgery —
            experienced specialists, modern technology and compassionate care, all under one roof.
          </p>
          <div className="hero-actions">
            <a href="#appointment" className="btn btn-light">
              <Icon name="calendar" size={18} /> Book Appointment
            </a>
            <a href="#services" className="btn btn-ghost">
              Explore Services <Icon name="arrow" size={18} />
            </a>
          </div>
        </div>

        <div className="hero-card reveal">
          <h2>How can we help you today?</h2>
          <a href="#appointment" className="quick">
            <span className="quick-icon"><Icon name="calendar" /></span>
            <span><strong>Book a visit</strong><small>Pick a date that suits you</small></span>
            <Icon name="arrow" size={18} />
          </a>
          <a href={wa} target="_blank" rel="noreferrer" className="quick">
            <span className="quick-icon wa"><Icon name="whatsapp" /></span>
            <span><strong>Chat on WhatsApp</strong><small>Quick replies from our desk</small></span>
            <Icon name="arrow" size={18} />
          </a>
          <a href="#doctors" className="quick">
            <span className="quick-icon"><Icon name="user" /></span>
            <span><strong>Find a doctor</strong><small>Meet our specialists</small></span>
            <Icon name="arrow" size={18} />
          </a>
          <a href={`tel:${hospital.emergency}`} className="quick emergency">
            <span className="quick-icon"><Icon name="emergency" /></span>
            <span><strong>Eye emergency?</strong><small>Call {hospital.emergency}</small></span>
            <Icon name="phone" size={18} />
          </a>
        </div>
      </div>

      <div className="container">
        <div className="stats">
          {stats.map((s) => <Stat key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  )
}
