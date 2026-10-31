import { useState } from 'react'
import { faqs } from '../data.js'
import Icon from './Icon.jsx'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="section">
      <div className="container faq-wrap">
        <div className="section-head left reveal">
          <span className="eyebrow">Good to know</span>
          <h2>Frequently asked questions</h2>
          <p className="lead">Can't find your answer? Call or WhatsApp us — we're happy to help.</p>
        </div>
        <div className="faq reveal">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                  <span>{f.q}</span>
                  <Icon name="plus" size={20} className="faq-icon" />
                </button>
                <div className="faq-answer"><div><p>{f.a}</p></div></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
