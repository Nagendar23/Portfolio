"use client"

import { useEffect } from "react"
import confetti from "canvas-confetti"

interface ConfettiProps {
  onComplete?: () => void
}

export function Confetti({ onComplete }: ConfettiProps) {
  useEffect(() => {
    const duration = 3000
    const end = Date.now() + duration

    const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"]

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      })
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      } else {
        onComplete?.()
      }
    }

    frame()
  }, [onComplete])

  return null
}
