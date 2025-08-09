export interface Project {
  slug: string
  title: string
  summary: string
  description: string
  tags: string[]
  tech: string[]
  cover: string
  repo?: string
  url?: string
  featured: boolean
  date: string
}

export function getProjects(): Project[] {
  return [
    {
      slug: "ai-chat-platform",
      title: "AI Chat Platform",
      summary: "Real-time chat application with AI-powered responses and sentiment analysis.",
      description:
        "A comprehensive chat platform built with Next.js and WebSocket technology, featuring AI-powered responses, real-time sentiment analysis, and advanced moderation tools.",
      tags: ["web", "ai", "real-time"],
      tech: ["Next.js", "TypeScript", "WebSocket", "OpenAI", "Prisma", "PostgreSQL"],
      cover: "/placeholder.svg?height=240&width=400&text=AI+Chat+Platform",
      repo: "https://github.com/alexchen/ai-chat-platform",
      url: "https://ai-chat-demo.vercel.app",
      featured: true,
      date: "2024-01-15",
    },
    {
      slug: "design-system",
      title: "Component Design System",
      summary: "Comprehensive design system with 50+ components, documentation, and Figma integration.",
      description:
        "A complete design system built from the ground up, featuring accessible components, comprehensive documentation, and seamless Figma integration for design-to-code workflows.",
      tags: ["design system", "web", "tool"],
      tech: ["React", "TypeScript", "Storybook", "Tailwind CSS", "Figma API"],
      cover: "/placeholder.svg?height=240&width=400&text=Design+System",
      repo: "https://github.com/alexchen/design-system",
      url: "https://design-system-demo.vercel.app",
      featured: true,
      date: "2023-11-20",
    },
    {
      slug: "mobile-fitness-app",
      title: "Fitness Tracking App",
      summary: "Cross-platform mobile app for workout tracking with social features and AI coaching.",
      description:
        "A React Native fitness application with workout tracking, social features, AI-powered coaching recommendations, and integration with popular fitness devices.",
      tags: ["mobile", "ai", "health"],
      tech: ["React Native", "Expo", "TypeScript", "Firebase", "TensorFlow Lite"],
      cover: "/placeholder.svg?height=240&width=400&text=Fitness+App",
      repo: "https://github.com/alexchen/fitness-app",
      featured: true,
      date: "2023-09-10",
    },
    {
      slug: "data-visualization-tool",
      title: "Data Visualization Dashboard",
      summary: "Interactive dashboard for complex data visualization with real-time updates.",
      description:
        "A powerful data visualization tool built with D3.js and React, featuring interactive charts, real-time data streaming, and customizable dashboard layouts.",
      tags: ["web", "tool", "data"],
      tech: ["React", "D3.js", "TypeScript", "WebSocket", "Node.js"],
      cover: "/placeholder.svg?height=240&width=400&text=Data+Viz+Dashboard",
      repo: "https://github.com/alexchen/data-viz-tool",
      url: "https://data-viz-demo.vercel.app",
      featured: false,
      date: "2023-07-05",
    },
    {
      slug: "e-commerce-platform",
      title: "E-commerce Platform",
      summary: "Full-stack e-commerce solution with payment processing and inventory management.",
      description:
        "A complete e-commerce platform featuring product management, secure payment processing, inventory tracking, and customer analytics.",
      tags: ["web", "e-commerce", "full-stack"],
      tech: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
      cover: "/placeholder.svg?height=240&width=400&text=E-commerce+Platform",
      repo: "https://github.com/alexchen/ecommerce-platform",
      featured: false,
      date: "2023-05-15",
    },
    {
      slug: "code-collaboration-tool",
      title: "Code Collaboration Tool",
      summary: "Real-time collaborative code editor with video chat and project management.",
      description:
        "A collaborative development environment featuring real-time code editing, integrated video chat, project management tools, and version control integration.",
      tags: ["web", "tool", "collaboration"],
      tech: ["React", "WebRTC", "Socket.io", "Monaco Editor", "Node.js"],
      cover: "/placeholder.svg?height=240&width=400&text=Code+Collab+Tool",
      repo: "https://github.com/alexchen/code-collab-tool",
      url: "https://code-collab-demo.vercel.app",
      featured: false,
      date: "2023-03-20",
    },
  ]
}

export function getProject(slug: string): Project | undefined {
  return getProjects().find((project) => project.slug === slug)
}
