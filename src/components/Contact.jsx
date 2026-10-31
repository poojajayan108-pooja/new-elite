import { hospital } from '../data.js'
import { useOpenNow } from '../hooks.js'
import Icon from './Icon.jsx'

export default function Contact() {
  const isOpen = useOpenNow()
  const q = encodeURIComponent(hospital.mapQuery)
  // Google Maps embed - no API key needed.
  const mapSrc = `https://maps.google.com/maps?q=${q}&z=16&output=embed`
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${q}`

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Contact us</span>
          <h2>Visit or get in touch</h2>
          <p className="lead">We're here to help with appointments, reports and any questions.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-cards reveal">
            <div className="contact-card">
              <span className="cc-icon"><Icon name="pin" /></span>
              <div>
                <h3>Address</h3>
                <p>{hospital.addressLines.map((l, i) => <span key={i}>{l}<br /></span>)}</p>
                <a href={directions} target="_blank" rel="noreferrer" className="text-link">
                  Get directions <Icon name="arrow" size={16} />
                </a>
              </div>
            </div>

            <div className="contact-card">
              <span className="cc-icon"><Icon name="phone" /></span>
              <div>
                <h3>Phone</h3>
                <p>
                  Reception: <a href={`tel:${hospital.phone}`}>{hospital.phone}</a><br />
                  Emergency (24×7): <a href={`tel:${hospital.emergency}`}>{hospital.emergency}</a>
                </p>
                <a href={`https://wa.me/${hospital.whatsapp}`} target="_blank" rel="noreferrer" className="text-link">
                  WhatsApp us <Icon name="arrow" size={16} />
                </a>
              </div>
            </div>

            <div className="contact-card">
              <span className="cc-icon"><Icon name="mail" /></span>
              <div>
                <h3>Email</h3>
                <p><a href={`mailto:${hospital.email}`}>{hospital.email}</a></p>
              </div>
            </div>

            <div className="contact-card">
              <span className="cc-icon"><Icon name="clock" /></span>
              <div>
                <h3>
                  Working hours
                  <span className={`status ${isOpen ? 'on' : 'off'}`}><span className="status-dot" />{isOpen ? 'Open now' : 'Closed'}</span>
                </h3>
                <table className="hours">
                  <tbody>
                    {hospital.hours.map((h) => (
                      <tr key={h.days}><td>{h.days}</td><td>{h.time}</td></tr>
                    ))}
                    <tr><td>Emergency</td><td>24 hours, all days</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="map reveal">
            <iframe
              title={`${hospital.name} location on Google Maps`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
