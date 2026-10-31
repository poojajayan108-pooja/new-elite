import { useState } from 'react'
import { hospital, services, doctors } from '../data.js'
import Icon from './Icon.jsx'
import { emailConfigured, sendAppointmentEmails, openMailDraft } from '../email.js'

const empty = { name: '', phone: '', email: '', date: '', time: 'Morning', service: '', doctor: '', message: '' }

// Today's date in India, as YYYY-MM-DD, so past dates can't be picked.
const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' })

export default function Appointment() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(null)       // booking details after a successful submit
  const [sending, setSending] = useState(false)
  const [failure, setFailure] = useState('')

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const e = {}
    if (form.name.trim().length < 2) e.name = 'Please enter your name'
    if (!/^(\+?91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}$/.test(form.phone.trim())) e.phone = 'Enter a valid 10-digit mobile number'
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) e.email = 'Enter a valid email address'
    if (!form.date) e.date = 'Choose a preferred date'
    return e
  }

  const whatsappLink = (b) => {
    const lines = [
      `*New appointment request - ${hospital.name}*`,
      `Name: ${b.name}`,
      `Phone: ${b.phone}`,
      `Preferred date: ${b.dateText} (${b.time})`,
      `Service: ${b.service}`,
      `Doctor: ${b.doctor}`,
      b.message && `Note: ${b.message}`,
    ].filter(Boolean)
    return `https://wa.me/${hospital.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`
  }

  // The booking is e-mailed to the hospital (and a confirmation goes to the
  // patient if they gave an e-mail). WhatsApp stays available as a second option.
  const submit = async (ev) => {
    ev.preventDefault()
    if (sending) return
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }

    const booking = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      dateText: new Date(form.date + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      time: form.time,
      service: form.service || 'General eye check-up',
      doctor: form.doctor || 'Any available doctor',
      message: form.message.trim(),
    }

    setFailure('')

    // E-mail service not set up yet: open the visitor's own mail app instead.
    if (!emailConfigured) {
      openMailDraft(booking)
      setSent({ ...booking, patientEmailed: false, viaMailApp: true })
      setForm(empty)
      return
    }

    setSending(true)
    try {
      const { patientEmailed } = await sendAppointmentEmails(booking)
      setSent({ ...booking, patientEmailed })
      setForm(empty)
    } catch (err) {
      console.error('Appointment e-mail failed', err)
      setFailure(`We couldn't send your request just now. Please try again, or call ${hospital.phone} / message us on WhatsApp.`)
    } finally {
      setSending(false)
    }
  }

  const doctorNames = [...new Set(doctors.map((d) => d.name))]

  return (
    <section id="appointment" className="section section-tint">
      <div className="container appointment">
        <div className="appt-info reveal">
          <span className="eyebrow">Book an appointment</span>
          <h2>Your clearer vision starts here</h2>
          <p className="lead">
            Fill in the form and we'll receive your request by email right away.
            Our front desk will contact you to confirm your slot.
          </p>
          <ul className="appt-points">
            <li><Icon name="check" size={18} /> Confirmation within working hours</li>
            <li><Icon name="check" size={18} /> Reduced waiting time on arrival</li>
            <li><Icon name="check" size={18} /> Free re-scheduling</li>
          </ul>
          <a href={`tel:${hospital.phone}`} className="appt-call">
            <span className="quick-icon"><Icon name="phone" /></span>
            <span><small>Prefer to talk?</small><strong>{hospital.phone}</strong></span>
          </a>
        </div>

        <div className="appt-card reveal">
          {sent ? (
            <div className="success">
              <span className="success-icon"><Icon name="check" size={34} /></span>
              <h3>{sent.viaMailApp ? 'One last step!' : 'Request received!'}</h3>
              <p>
                {sent.viaMailApp
                  ? 'Your email app has opened with the details. Please press Send to submit your request.'
                  : sent.patientEmailed
                    ? `Thank you, ${sent.name}. A confirmation has been sent to ${sent.email}. Our team will call you to confirm your slot.`
                    : `Thank you, ${sent.name}. Our team will call you on ${sent.phone} to confirm your slot.`}
              </p>
              <p className="summary">{`Date: ${sent.dateText} (${sent.time})\nService: ${sent.service}\nDoctor: ${sent.doctor}`}</p>
              <div className="success-actions">
                <a className="btn btn-primary" href={whatsappLink(sent)} target="_blank" rel="noreferrer">
                  <Icon name="whatsapp" size={18} /> Also tell us on WhatsApp
                </a>
                <button className="btn btn-ghost-dark" onClick={() => setSent(null)}>Book another</button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="form">
              <div className="form-row">
                <Field label="Full name *" error={errors.name}>
                  <input name="name" value={form.name} onChange={update} placeholder="Your name" autoComplete="name" />
                </Field>
                <Field label="Mobile number *" error={errors.phone}>
                  <input name="phone" value={form.phone} onChange={update} placeholder="10-digit mobile" inputMode="tel" autoComplete="tel" />
                </Field>
              </div>
              <Field label="Email (for your confirmation)" error={errors.email}>
                <input type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com (optional)" autoComplete="email" />
              </Field>
              <div className="form-row">
                <Field label="Preferred date *" error={errors.date}>
                  <input type="date" name="date" min={today} value={form.date} onChange={update} />
                </Field>
                <Field label="Preferred time">
                  <select name="time" value={form.time} onChange={update}>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </select>
                </Field>
              </div>
              <div className="form-row">
                <Field label="Service">
                  <select name="service" value={form.service} onChange={update}>
                    <option value="">General eye check-up</option>
                    {services.map((s) => <option key={s.title}>{s.title}</option>)}
                  </select>
                </Field>
                <Field label="Doctor (optional)">
                  <select name="doctor" value={form.doctor} onChange={update}>
                    <option value="">Any available doctor</option>
                    {doctorNames.map((d) => <option key={d}>{d}</option>)}
                  </select>
                </Field>
              </div>
              <Field label="Message (optional)">
                <textarea name="message" rows="3" value={form.message} onChange={update} placeholder="Briefly describe your eye problem" />
              </Field>
              {failure && <p className="form-error" role="alert">{failure}</p>}
              <button type="submit" className="btn btn-primary btn-block" disabled={sending}>
                {sending ? <><span className="spinner" /> Sending…</> : <><Icon name="mail" size={20} /> Book appointment</>}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({ label, error, children }) {
  return (
    <label className={`field ${error ? 'has-error' : ''}`}>
      <span>{label}</span>
      {children}
      {error && <small className="error">{error}</small>}
    </label>
  )
}
