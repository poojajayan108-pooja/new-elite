import { hospital, highlights, steps, images } from '../data.js'
import Icon from './Icon.jsx'
import Photo from './Photo.jsx'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about-visual reveal">
          <div className="about-photo">
            <Photo src={images.about.src} alt={images.about.alt} />
          </div>
          <div className="about-badge">
            <strong>15+</strong>
            <span>years caring<br />for your vision</span>
          </div>
        </div>

        <div className="reveal">
          <span className="eyebrow">About {hospital.name}</span>
          <h2>Trusted eye care for the whole family</h2>
          <p className="lead">
            {hospital.name} brings world-class diagnosis and treatment closer to home.
            Our specialists combine modern equipment with a warm, unhurried approach,
            so every patient understands their eyes and their options.
          </p>
          <div className="highlights">
            {highlights.map((h) => (
              <div key={h.title} className="highlight">
                <span className="hl-icon"><Icon name={h.icon} /></span>
                <div>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="steps reveal">
          <h3 className="steps-title">Your visit, step by step</h3>
          <ol>
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="step-num">{i + 1}</span>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
