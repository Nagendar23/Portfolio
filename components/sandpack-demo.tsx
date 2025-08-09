"use client"

import { Sandpack } from "@codesandbox/sandpack-react"
import { useTheme } from "next-themes"
import { Card } from "@/components/ui/card"

interface SandpackDemoProps {
  files: Record<string, string>
  entry?: string
  height?: number
  showNavigator?: boolean
  template?: "react" | "react-ts" | "vanilla" | "vanilla-ts"
}

export function SandpackDemo({
  files,
  entry = "/App.js",
  height = 400,
  showNavigator = true,
  template = "react-ts",
}: SandpackDemoProps) {
  const { theme } = useTheme()

  return (
    <Card className="overflow-hidden">
      <Sandpack
        template={template}
        files={files}
        theme={theme === "dark" ? "dark" : "light"}
        options={{
          showNavigator,
          showTabs: true,
          showLineNumbers: true,
          showInlineErrors: true,
          wrapContent: true,
          editorHeight: height,
          autorun: true,
          autoReload: true,
        }}
        customSetup={{
          entry,
        }}
      />
    </Card>
  )
}
