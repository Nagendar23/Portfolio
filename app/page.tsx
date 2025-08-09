import { Hero } from "@/components/hero"
import { ProjectHighlights } from "@/components/project-highlights"
import { SocialProof } from "@/components/social-proof"
import { Container } from "@/components/container"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Container>
        <ProjectHighlights />
        <SocialProof />
      </Container>
    </>
  )
}
