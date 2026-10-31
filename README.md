# Elite Eye Hospital — website (React + Vite)

## Run it on a Windows PC

1. Install **Node.js (LTS)** from https://nodejs.org (just click Next through the installer).
2. Unzip this folder, e.g. to `E:\website\elite-eye-hospital`.
3. Open **PowerShell** and run these one at a time:

   ```
   cd E:\website\elite-eye-hospital
   npm install
   npm run dev
   ```

4. Open **http://localhost:5173** in Chrome or Edge. Changes you save appear instantly.
   Press `Ctrl + C` in PowerShell to stop.

## Before going live — fill in your real details

Open **`src/data.js`**. Everything marked `⚠ REPLACE` is a placeholder:

| Item | Field in `src/data.js` |
|---|---|
| Phone, emergency number, email | `phone`, `emergency`, `email` |
| WhatsApp number (bookings go here) | `whatsapp` — country code + number, no `+` or spaces, e.g. `919876543210` |
| Address | `addressLines` |
| Google Map pin | `mapQuery` — e.g. `"Elite Eye Hospital, MG Road, Thrissur"` |
| Opening hours | `hours` |
| Doctors (names, qualifications, photos) | `doctors` |
| Insurance tie-ups | `insurers` |
| Facebook / Instagram / YouTube links | `social` |

**Doctor photos:** put the photo in the `public` folder (e.g. `public/dr-anjali.jpg`)
and set `photo: '/dr-anjali.jpg'` for that doctor. Square or portrait photos work best.

**Colours:** the brand colours from the logo are at the top of `src/styles.css`.

## Hospital photos

1. Copy your photos into `public/images/` (e.g. `reception.jpg`).
2. In `src/data.js`, find `images` and `gallery`, and change each `src`, e.g. `src: '/images/reception.jpg'`.
   Add or remove lines in `gallery` freely — the grid adjusts.

The `.svg` pictures supplied are placeholders so the layout is visible. Landscape photos (about 1200 x 800) work best.

## Appointment e-mails (EmailJS — free, no server)

Every booking sends an e-mail to the hospital, and a confirmation to the patient if they typed an e-mail address.

1. Create a free account at https://www.emailjs.com.
2. **Email Services** → *Add new service* (Gmail / Outlook etc.) → note the **Service ID**.
3. **Email Templates** → create **two** templates and note each **Template ID**:
   - **Hospital template** — set *To email* to `{{to_email}}`, subject `New appointment: {{patient_name}} - {{appointment_date}}`, body for example:
     ```
     New appointment request for {{hospital_name}}

     {{summary}}
     ```
   - **Patient template** — set *To email* to `{{to_email}}`, subject `Your appointment request - {{hospital_name}}`, body for example:
     ```
     Dear {{to_name}},

     Thank you for choosing {{hospital_name}}. We have received your request:

     {{summary}}

     Our team will call you to confirm your slot. For help call {{hospital_phone}}.
     ```
4. **Account** → copy your **Public Key**.
5. In the project folder, copy `.env.example` to `.env` and paste the four values. Restart `npm run dev`.
6. Set the hospital's real e-mail in `src/data.js` (`email`) — the booking e-mail is delivered there.

Other variables you can use in templates: `patient_name`, `patient_phone`, `patient_email`, `appointment_date`, `appointment_time`, `service`, `doctor`, `message`.

When you deploy (Netlify/Vercel), add the same four `VITE_EMAILJS_...` values in the host's *Environment variables* settings, then rebuild.
If the keys are missing, the form simply opens the visitor's own e-mail app with the details filled in.

## Features

- Sticky header with logo, live **"Open now / Closed now"** status (India time)
- Hero with quick actions: book, WhatsApp, find a doctor, emergency call
- Animated number counters, fade-in sections on scroll
- 8 services with a "Learn more" pop-up for each
- Step-by-step "Your visit" guide
- Doctor cards with "Book with doctor"
- Auto-playing patient reviews + scrolling insurance partners strip
- **Appointment form that e-mails the booking to the hospital** (and a confirmation to the patient) — no server needed; WhatsApp is offered as an extra option
- **Photo gallery** with click-to-enlarge viewer, plus a hospital photo in the About section
- FAQ accordion
- Contact section with **Google Maps**, directions link, phone, email and hours
- Floating WhatsApp, call (on phones) and back-to-top buttons
- Fully responsive for phone, tablet and desktop

## Publish online

```
npm run build
```

This creates a `dist` folder. Upload it to Netlify (drag-and-drop at app.netlify.com/drop),
Vercel, or your hosting provider. Then connect your domain (e.g. eliteeyehospital.in).
