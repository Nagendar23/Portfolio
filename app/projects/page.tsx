import type { Metadata } from "next"
import { ProjectGrid } from "@/components/project-grid"
import { Container } from "@/components/container"
import { Section } from "@/components/section"

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of my recent work and side projects.",
}

export default function ProjectsPage() {
  return (
    <Container>
      <Section>
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work, side projects, and experiments. Each project represents a unique challenge
            and learning opportunity.
          </p>
        </div>
        <ProjectGrid />
      </Section>
    </Container>
  )
}
