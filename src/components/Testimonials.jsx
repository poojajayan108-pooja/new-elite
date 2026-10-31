import { useEffect, useState } from 'react'
import { testimonials, insurers } from '../data.js'
import Icon from './Icon.jsx'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = testimonials.length

  // Auto-advance every 6 seconds unless the visitor is hovering/touching.
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setI((x) => (x + 1) % n), 6000)
    return () => clearInterval(id)
  }, [paused, n])

  const t = testimonials[i]

  return (
    <section className="section section-dark">
      <div className="container">
        <div
          className="testimonial reveal"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
        >
          <span className="eyebrow light">Patient stories</span>
          <div className="stars" aria-label={`${t.rating} out of 5 stars`}>
            {Array.from({ length: t.rating }).map((_, k) => <Icon key={k} name="star" size={20} />)}
          </div>
          <blockquote key={i}>“{t.text}”</blockquote>
          <p className="who"><strong>{t.name}</strong> · {t.detail}</p>
          <div className="slider-controls">
            <button onClick={() => setI((i - 1 + n) % n)} aria-label="Previous review">
              <Icon name="arrow" size={18} className="flip" />
            </button>
            {testimonials.map((_, k) => (
              <button key={k} className={`dot ${k === i ? 'active' : ''}`} onClick={() => setI(k)} aria-label={`Review ${k + 1}`} />
            ))}
            <button onClick={() => setI((i + 1) % n)} aria-label="Next review">
              <Icon name="arrow" size={18} />
            </button>
          </div>
        </div>

        <div className="insurers">
          <p>Cashless treatment with leading insurers &amp; schemes</p>
          <div className="marquee">
            <div className="marquee-track">
              {[...insurers, ...insurers].map((name, k) => (
                <span key={k} className="insurer"><Icon name="shield" size={16} /> {name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
