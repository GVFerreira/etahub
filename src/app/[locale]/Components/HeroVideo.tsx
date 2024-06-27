'use client'

import { useEffect } from 'react'

export default function HeroVideo() {
  useEffect(() => {
    const video = document.querySelector('video')

    if (video) {
      video.play().catch((error) => {
        console.log('Video playback failed:', error)
      })
    }
  }, [])

  return (
    <video
      className="absolute w-full min-h-full z-[-10] inset-0 scale-[3] md:scale-[1] sm:scale-[0.5]"
      loop
      autoPlay
      muted
      playsInline
      preload="auto"
    >
      <source src="/video/travelling-corridor.mp4" type="video/mp4" />
    </video>
  )
}
