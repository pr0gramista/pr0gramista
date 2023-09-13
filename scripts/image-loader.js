'use client'

// TODO: Warning! Incomplete implementation
export default function loader({ src, width, quality }) {
  let variant = 'base'

  console.log(src) // -> /_next/static/media/avatar.3bd62ca9.jpg

  const extension = src.split('.').pop()
  const base = src.replace('.' + extension)

  return `http://localhost:8080/${base}_${variant}.${extension}`
}
