import { useState } from 'react'

// An <img> that never shows a broken icon: if the file is missing, a soft
// tinted block is shown instead.
export default function Photo({ src, alt, className = '', ...rest }) {
  const [failed, setFailed] = useState(false)
  if (failed || !src) return <div className={`photo-fallback ${className}`} role="img" aria-label={alt} />
  return <img src={src} alt={alt} className={className} loading="lazy" onError={() => setFailed(true)} {...rest} />
}
