import { useEffect, useState } from 'react'
import { services } from '../data.js'
import Icon from './Icon.jsx'

export default function Services() {
  const [active, setActive] = useState(null)

  // Close the pop-up with the Escape key and stop the page scrolling behind it.
  useEffect(() => {
    if (!active) return
    const onKey = (e) => e.key === 'Escape' && setActive(null)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [active])

  return (
    <section id="services" className="section section-tint">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Our specialities</span>
          <h2>Complete eye care under one roof</h2>
          <p className="lead">Tap any service to learn more.</p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <button key={s.title} className="service reveal" onClick={() => setActive(s)}>
              <span className="service-icon"><Icon name={s.icon} size={28} /></span>
              <h3>{s.title}</h3>
              <p>{s.short}</p>
              <span className="more">Learn more <Icon name="arrow" size={16} /></span>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="modal-backdrop" onClick={() => setActive(null)}>
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActive(null)} aria-label="Close">
              <Icon name="close" />
            </button>
            <span className="service-icon"><Icon name={active.icon} size={30} /></span>
            <h3 id="modal-title">{active.title}</h3>
            <p>{active.long}</p>
            <a href="#appointment" className="btn btn-primary" onClick={() => setActive(null)}>
              <Icon name="calendar" size={18} /> Book a consultation
            </a>
          </div>
        </div>
      )}
    </section>
  )
}
