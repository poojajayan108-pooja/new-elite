import { useEffect, useState } from 'react'
import { gallery } from '../data.js'
import Icon from './Icon.jsx'
import Photo from './Photo.jsx'

export default function Gallery() {
  const [active, setActive] = useState(null) // index of the open photo, or null

  const step = (d) => setActive((i) => (i + d + gallery.length) % gallery.length)

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [active])

  return (
    <section id="gallery" className="section section-tint">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Take a look inside</span>
          <h2>Our hospital &amp; facilities</h2>
          <p className="lead">Modern, clean and welcoming spaces designed around your comfort.</p>
        </div>

        <div className="gallery-grid">
          {gallery.map((g, i) => (
            <button key={g.src} className="gallery-item reveal" onClick={() => setActive(i)} aria-label={`Open photo: ${g.caption}`}>
              <Photo src={g.src} alt={g.alt} />
              <span className="gallery-caption">{g.caption}</span>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={gallery[active].caption} onClick={() => setActive(null)}>
          <button className="lb-close" aria-label="Close" onClick={() => setActive(null)}><Icon name="close" size={26} /></button>
          <button className="lb-nav prev" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); step(-1) }}><Icon name="arrow" className="flip" /></button>
          <figure onClick={(e) => e.stopPropagation()}>
            <Photo src={gallery[active].src} alt={gallery[active].alt} />
            <figcaption>{gallery[active].caption}</figcaption>
          </figure>
          <button className="lb-nav next" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); step(1) }}><Icon name="arrow" /></button>
        </div>
      )}
    </section>
  )
}
