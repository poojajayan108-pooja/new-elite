import { doctors } from '../data.js'
import Icon from './Icon.jsx'

const initials = (name) =>
  name.replace(/^Dr\.?\s*/i, '').split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('')

export default function Doctors() {
  return (
    <section id="doctors" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Meet our team</span>
          <h2>Experienced eye specialists</h2>
          <p className="lead">Skilled surgeons and caring clinicians, dedicated to your vision.</p>
        </div>
        <div className="doctors-grid">
          {doctors.map((d, i) => (
            <article key={i} className="doctor reveal">
              <div className="doctor-photo">
                {d.photo ? <img src={d.photo} alt={d.name} /> : <span>{initials(d.name)}</span>}
                <span className="exp">{d.exp}+ yrs</span>
              </div>
              <div className="doctor-body">
                <h3>{d.name}</h3>
                <p className="role">{d.role}</p>
                <p className="qual">{d.qual}</p>
                <a href="#appointment" className="doctor-link">
                  Book with doctor <Icon name="arrow" size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
