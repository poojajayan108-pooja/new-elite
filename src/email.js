// ============================================================
//  Appointment e-mails, sent straight from the browser with EmailJS
//  (https://www.emailjs.com - free plan: 200 e-mails/month). No server needed.
//
//  Two e-mails are sent for every booking:
//    1. to the HOSPITAL  - "New appointment request"
//    2. to the PATIENT   - "Your appointment request" (only if they gave an e-mail)
//
//  Setup steps are in README.md. Put your keys in a file called  .env
//  (see .env.example). If the keys are missing, the form falls back to
//  opening the visitor's own e-mail app with the details filled in.
// ============================================================
import { hospital } from './data.js'

const env = import.meta.env
const cfg = {
  serviceId: env.VITE_EMAILJS_SERVICE_ID,
  publicKey: env.VITE_EMAILJS_PUBLIC_KEY,
  hospitalTemplate: env.VITE_EMAILJS_TEMPLATE_HOSPITAL,
  patientTemplate: env.VITE_EMAILJS_TEMPLATE_PATIENT,
}

export const emailConfigured = Boolean(cfg.serviceId && cfg.publicKey && cfg.hospitalTemplate)

async function send(templateId, params) {
  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: cfg.serviceId,
      template_id: templateId,
      user_id: cfg.publicKey,
      template_params: params,
    }),
  })
  if (!res.ok) throw new Error(await res.text())
}

// Builds the plain-text summary used by both e-mails.
export function bookingSummary(b) {
  return [
    `Name: ${b.name}`,
    `Phone: ${b.phone}`,
    b.email && `Email: ${b.email}`,
    `Preferred date: ${b.dateText} (${b.time})`,
    `Service: ${b.service}`,
    `Doctor: ${b.doctor}`,
    b.message && `Note: ${b.message}`,
  ].filter(Boolean).join('\n')
}

// Sends the hospital e-mail (must succeed) and the patient confirmation
// (best effort - a typo in the patient's address must not lose the booking).
export async function sendAppointmentEmails(b) {
  const params = {
    hospital_name: hospital.name,
    hospital_email: hospital.email,
    hospital_phone: hospital.phone,
    patient_name: b.name,
    patient_phone: b.phone,
    patient_email: b.email || 'Not provided',
    appointment_date: b.dateText,
    appointment_time: b.time,
    service: b.service,
    doctor: b.doctor,
    message: b.message || '-',
    summary: bookingSummary(b),
    to_email: hospital.email,
  }
  await send(cfg.hospitalTemplate, params)

  if (b.email && cfg.patientTemplate) {
    try {
      await send(cfg.patientTemplate, { ...params, to_email: b.email, to_name: b.name })
    } catch (err) {
      console.warn('Patient confirmation e-mail failed', err)
      return { patientEmailed: false }
    }
    return { patientEmailed: true }
  }
  return { patientEmailed: false }
}

// Fallback when EmailJS is not set up: open the visitor's mail app.
export function openMailDraft(b) {
  const subject = `Appointment request - ${b.name}`
  const body = `Hello ${hospital.name},\n\nI would like to book an appointment.\n\n${bookingSummary(b)}\n`
  window.location.href = `mailto:${hospital.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
