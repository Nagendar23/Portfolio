export type AchievementId = "first-visit" | "explorer" | "reader" | "night-owl" | "communicator" | "konami"

export interface Achievement {
  id: AchievementId
  title: string
  description: string
  icon: string
}

export const achievements: Record<AchievementId, Achievement> = {
  "first-visit": {
    id: "first-visit",
    title: "Welcome!",
    description: "Thanks for visiting my portfolio",
    icon: "👋",
  },
  explorer: {
    id: "explorer",
    title: "Explorer",
    description: "Checked out my projects",
    icon: "🔍",
  },
  reader: {
    id: "reader",
    title: "Bookworm",
    description: "Read through my blog posts",
    icon: "📚",
  },
  "night-owl": {
    id: "night-owl",
    title: "Night Owl",
    description: "Switched to dark mode",
    icon: "🌙",
  },
  communicator: {
    id: "communicator",
    title: "Communicator",
    description: "Sent me a message",
    icon: "💬",
  },
  konami: {
    id: "konami",
    title: "Secret Discoverer",
    description: "Found the Konami code easter egg!",
    icon: "🎮",
  },
}
