// ============================================================
//  ALL WEBSITE TEXT LIVES IN THIS FILE.
//  Anything marked  ⚠ REPLACE  is a placeholder - put in your
//  real details before the site goes live.
// ============================================================

export const hospital = {
  name: 'Elite Eye Hospital',
  shortName: 'Elite',
  tagline: 'See the world clearly',
  phone: '+91 00000 00000',            // ⚠ REPLACE - main reception number
  emergency: '+91 00000 00000',        // ⚠ REPLACE - 24x7 emergency number
  whatsapp: '910000000000',            // ⚠ REPLACE - WhatsApp number: country code + number, no + or spaces
  email: 'info@eliteeyehospital.in',   // ⚠ REPLACE
  addressLines: ['Elite Eye Hospital', 'Street / Building name', 'Town, District', 'Kerala - PIN'], // ⚠ REPLACE
  // ⚠ REPLACE - what you would type into Google Maps to find the hospital,
  // e.g. "Elite Eye Hospital, MG Road, Thrissur". The more exact, the better.
  mapQuery: 'Elite Eye Hospital, Kerala',
  hours: [
    { days: 'Monday – Saturday', time: '8:30 AM – 7:00 PM', open: [8.5, 19], dayNums: [1, 2, 3, 4, 5, 6] },
    { days: 'Sunday', time: '9:00 AM – 1:00 PM', open: [9, 13], dayNums: [0] },
  ],
  social: {
    facebook: '#',   // ⚠ REPLACE with your page links, or leave '#' to hide nothing
    instagram: '#',
    youtube: '#',
  },
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: 15, suffix: '+', label: 'Years of excellence' },
  { value: 50000, suffix: '+', label: 'Happy patients' },
  { value: 20000, suffix: '+', label: 'Successful surgeries' },
  { value: 10, suffix: '+', label: 'Eye specialists' },
]

export const services = [
  {
    icon: 'lens', title: 'Cataract Surgery',
    short: 'Stitchless micro-incision phaco surgery with premium lens options.',
    long: 'Our cataract surgery uses advanced phacoemulsification through a tiny self-sealing cut, so there are no stitches and recovery is quick. You can choose from monofocal, toric (for astigmatism) and multifocal lenses. Most patients go home the same day.',
  },
  {
    icon: 'laser', title: 'LASIK & Refractive',
    short: 'Laser vision correction to free you from glasses and contact lenses.',
    long: 'After a detailed corneal assessment we recommend the right procedure for your eyes — LASIK, PRK or ICL. The treatment takes minutes per eye and most people return to normal activities within a day or two.',
  },
  {
    icon: 'retina', title: 'Retina & Vitreous',
    short: 'Care for diabetic retinopathy, macular degeneration and retinal detachment.',
    long: 'Using OCT scans and fundus imaging we detect retinal disease early. Treatment includes laser, intravitreal injections and vitreo-retinal surgery. Regular screening is strongly advised for anyone with diabetes.',
  },
  {
    icon: 'drop', title: 'Glaucoma Clinic',
    short: 'Early detection and lifelong management of the "silent thief of sight".',
    long: 'Glaucoma often has no symptoms until vision is lost. We check eye pressure, optic nerve health and visual fields, and offer medicines, laser and surgery to protect your sight.',
  },
  {
    icon: 'child', title: 'Paediatric & Squint',
    short: 'Gentle, child-friendly eye care, squint correction and lazy-eye treatment.',
    long: 'Children\'s eye problems are easiest to treat when caught early. We provide school-vision screening, glasses for children, lazy-eye (amblyopia) therapy and squint surgery in a friendly setting.',
  },
  {
    icon: 'cornea', title: 'Cornea & Dry Eye',
    short: 'Treatment for infections, keratoconus, dry eye and corneal transplants.',
    long: 'From stubborn dry eye to keratoconus, our cornea clinic offers medical treatment, collagen cross-linking and corneal transplant surgery.',
  },
  {
    icon: 'eyelid', title: 'Oculoplasty',
    short: 'Eyelid, tear-duct and orbit surgery, both functional and cosmetic.',
    long: 'We treat droopy eyelids (ptosis), watering eyes from blocked tear ducts, eyelid lumps and orbital problems with care for both function and appearance.',
  },
  {
    icon: 'glasses', title: 'Optical Store',
    short: 'Spectacles, contact lenses and blue-light glasses under one roof.',
    long: 'Our in-house optical store offers a wide range of frames, lenses and contact lenses, with prescriptions checked and fitted by trained optometrists.',
  },
]

export const highlights = [
  { icon: 'scan', title: 'Advanced technology', text: 'OCT, digital perimetry, biometry and modern surgical microscopes.' },
  { icon: 'shield', title: 'Cashless insurance', text: 'Tie-ups with major insurers and government health schemes.' },
  { icon: 'clock', title: '24×7 emergency', text: 'Eye injuries and sudden vision loss are seen at any hour.' },
  { icon: 'heart', title: 'Patient-first care', text: 'Clear explanations, transparent pricing and no hidden charges.' },
]

export const steps = [
  { title: 'Book', text: 'Call, WhatsApp or use the form to choose a time.' },
  { title: 'Examine', text: 'A complete eye check-up with modern diagnostics.' },
  { title: 'Consult', text: 'Your doctor explains the findings and every option.' },
  { title: 'Treat & follow up', text: 'Treatment, surgery if needed, and caring follow-ups.' },
]

// ⚠ REPLACE - put your real doctors here. Add a photo by putting e.g. "dr-anjali.jpg"
// in the public folder and setting  photo: '/dr-anjali.jpg'
export const doctors = [
  { name: 'Dr. Doctor Name', role: 'Medical Director · Cataract & Refractive', qual: 'MBBS, MS (Ophthalmology)', exp: 18, photo: '' },
  { name: 'Dr. Doctor Name', role: 'Retina & Vitreous Surgeon', qual: 'MBBS, MS, FVRS', exp: 14, photo: '' },
  { name: 'Dr. Doctor Name', role: 'Paediatric Ophthalmology & Squint', qual: 'MBBS, DNB, FPOS', exp: 10, photo: '' },
  { name: 'Dr. Doctor Name', role: 'Glaucoma & Cornea Specialist', qual: 'MBBS, MS, FICO', exp: 12, photo: '' },
]

export const testimonials = [
  { name: 'Ramesh K.', detail: 'Cataract surgery', rating: 5, text: 'The surgery took less than half an hour and I could read the newspaper the next morning. Very caring staff.' },
  { name: 'Divya S.', detail: 'LASIK', rating: 5, text: 'After LASIK I finally stopped carrying glasses everywhere. The doctor explained every step and I felt completely at ease.' },
  { name: 'Sameer P.', detail: 'Parent of a young patient', rating: 5, text: 'They were so patient with my son. His squint treatment is going really well and he actually enjoys the visits.' },
  { name: 'Lakshmi N.', detail: 'Retina care', rating: 5, text: 'My diabetic retinopathy was found early during a routine check. I am grateful for the timely treatment.' },
]

export const insurers = ['Star Health', 'Care Health', 'HDFC ERGO', 'Niva Bupa', 'ICICI Lombard', 'Medisep', 'Ayushman Bharat'] // ⚠ REPLACE with your actual tie-ups

export const faqs = [
  { q: 'Do I need an appointment?', a: 'Walk-ins are welcome, but booking ahead reduces your waiting time. You can call, message us on WhatsApp, or use the booking form on this page.' },
  { q: 'How long does a full eye check-up take?', a: 'A complete check-up takes about 60–90 minutes, as some tests need eye drops to dilate the pupils. Please bring someone to drive you home if your eyes are dilated.' },
  { q: 'Is cataract surgery painful?', a: 'No. The eye is numbed with drops, and most patients feel only mild pressure. The procedure usually takes 15–20 minutes and you go home the same day.' },
  { q: 'Am I suitable for LASIK?', a: 'Generally, if you are over 18, your power has been stable for a year and your cornea is healthy. A free LASIK screening at our hospital will confirm suitability.' },
  { q: 'Do you accept insurance?', a: 'Yes. We offer cashless treatment with most major insurance companies and government schemes. Please bring your insurance card and ID.' },
  { q: 'What should I bring to my first visit?', a: 'Your current glasses, any previous eye reports or prescriptions, a list of medicines you take, and your insurance details if applicable.' },
]

// ============================================================
//  HOSPITAL IMAGES  ⚠ REPLACE with your real photos
//  Put your photos in  public/images/  (e.g. public/images/reception.jpg)
//  then change the  src  below, e.g.  src: '/images/reception.jpg'
//  Landscape photos (about 1200 x 800) work best.
// ============================================================
export const images = {
  about: { src: '/images/reception.svg', alt: 'Reception and waiting area' },
}

export const gallery = [
  { src: '/images/hospital-building.svg', alt: 'Hospital building', caption: 'Our hospital' },
  { src: '/images/reception.svg', alt: 'Reception and waiting area', caption: 'Reception & waiting area' },
  { src: '/images/consultation.svg', alt: 'Consultation room', caption: 'Consultation room' },
  { src: '/images/diagnostics.svg', alt: 'Diagnostic equipment', caption: 'Advanced diagnostics' },
  { src: '/images/operation-theatre.svg', alt: 'Operation theatre', caption: 'Modern operation theatre' },
  { src: '/images/optical-store.svg', alt: 'Optical store', caption: 'Optical store' },
]
