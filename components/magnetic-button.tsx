"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
  asChild?: boolean
}

export function MagneticButton({ children, className = "", strength = 0.3, asChild = false }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      element.style.setProperty("--x", `${x * strength}px`)
      element.style.setProperty("--y", `${y * strength}px`)
    }

    const handleMouseLeave = () => {
      element.style.setProperty("--x", "0px")
      element.style.setProperty("--y", "0px")
    }

    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [strength])

  const Component = asChild ? "div" : motion.div

  return (
    <Component
      ref={ref}
      className={`magnetic ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </Component>
  )
}
