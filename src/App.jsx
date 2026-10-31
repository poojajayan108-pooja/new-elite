import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Doctors from './components/Doctors.jsx'
import Gallery from './components/Gallery.jsx'
import Testimonials from './components/Testimonials.jsx'
import Appointment from './components/Appointment.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Footer, { FloatingButtons } from './components/Footer.jsx'
import { useReveal } from './hooks.js'

export default function App() {
  useReveal()
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Doctors />
        <Gallery />
        <Testimonials />
        <Appointment />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
