interface AchievementToastProps {
  title: string
  description: string
  icon: string
}

export function AchievementToast({ title, description, icon }: AchievementToastProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-2xl">{icon}</span>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>
    </div>
  )
}
