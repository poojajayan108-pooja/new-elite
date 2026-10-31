import { useEffect, useRef, useState } from 'react'
import { hospital } from './data.js'

// Fades sections in as you scroll down to them.
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) }
      }),
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

// Counts a number up from 0 when it scrolls into view.
export function useCountUp(target, duration = 1600) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let started = false
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || started) return
      started = true
      const t0 = performance.now()
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / duration)
        setValue(Math.round(target * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [target, duration])
  return [ref, value]
}

// Works out if the hospital is open right now (India time).
export function useOpenNow() {
  const calc = () => {
    const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))
    const day = now.getDay()
    const hr = now.getHours() + now.getMinutes() / 60
    return hospital.hours.some((h) => h.dayNums.includes(day) && hr >= h.open[0] && hr < h.open[1])
  }
  const [open, setOpen] = useState(calc)
  useEffect(() => {
    const id = setInterval(() => setOpen(calc()), 60000)
    return () => clearInterval(id)
  }, [])
  return open
}

// True once the page has been scrolled down a bit.
export function useScrolled(offset = 40) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])
  return scrolled
}
