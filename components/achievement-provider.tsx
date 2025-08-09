"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { AchievementToast } from "@/components/achievement-toast"
import { Confetti } from "@/components/confetti"
import { achievements, type AchievementId } from "@/lib/achievements"

interface AchievementContextType {
  unlockedAchievements: AchievementId[]
  unlockAchievement: (id: AchievementId) => void
  resetAchievements: () => void
}

const AchievementContext = createContext<AchievementContextType | undefined>(undefined)

export function useAchievements() {
  const context = useContext(AchievementContext)
  if (!context) {
    throw new Error("useAchievements must be used within AchievementProvider")
  }
  return context
}

export function AchievementProvider({ children }: { children: React.ReactNode }) {
  const [unlockedAchievements, setUnlockedAchievements] = useState<AchievementId[]>([])
  const [showConfetti, setShowConfetti] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // Load achievements from localStorage
    const stored = localStorage.getItem("portfolio-achievements")
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setUnlockedAchievements(parsed.achievements || [])
      } catch (error) {
        console.error("Failed to parse achievements:", error)
      }
    }

    // Mark first visit
    const hasVisited = localStorage.getItem("portfolio-first-visit")
    if (!hasVisited) {
      localStorage.setItem("portfolio-first-visit", "true")
      setTimeout(() => unlockAchievement("first-visit"), 1000)
    }

    // Konami code listener
    let konamiCode = ""
    const konamiSequence = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightKeyBKeyA"

    const handleKeyDown = (e: KeyboardEvent) => {
      konamiCode += e.code
      if (konamiCode.length > konamiSequence.length) {
        konamiCode = konamiCode.slice(-konamiSequence.length)
      }

      if (konamiCode === konamiSequence) {
        unlockAchievement("konami")
        setShowConfetti(true)
        konamiCode = ""
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const unlockAchievement = (id: AchievementId) => {
    if (unlockedAchievements.includes(id)) return

    const achievement = achievements[id]
    if (!achievement) return

    const newUnlocked = [...unlockedAchievements, id]
    setUnlockedAchievements(newUnlocked)

    // Save to localStorage
    localStorage.setItem(
      "portfolio-achievements",
      JSON.stringify({
        achievements: newUnlocked,
        version: 1,
      }),
    )

    // Show toast
    toast({
      title: "🎉 Achievement Unlocked!",
      description: (
        <AchievementToast title={achievement.title} description={achievement.description} icon={achievement.icon} />
      ),
      duration: 5000,
    })
  }

  const resetAchievements = () => {
    setUnlockedAchievements([])
    localStorage.removeItem("portfolio-achievements")
  }

  return (
    <AchievementContext.Provider
      value={{
        unlockedAchievements,
        unlockAchievement,
        resetAchievements,
      }}
    >
      {children}
      {showConfetti && <Confetti onComplete={() => setShowConfetti(false)} />}
    </AchievementContext.Provider>
  )
}
