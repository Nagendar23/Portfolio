import type { Metadata } from "next"
import Image from "next/image"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my background, approach, and what drives me as a developer.",
}

const principles = [
  {
    title: "User-Centered Design",
    description:
      "Every decision starts with the user. I believe in creating experiences that are intuitive, accessible, and delightful.",
  },
  {
    title: "Performance First",
    description:
      "Fast, efficient applications are not optional. I optimize for speed, scalability, and resource efficiency.",
  },
  {
    title: "Clean Code",
    description:
      "Maintainable, readable code is an investment in the future. I write code that my future self will thank me for.",
  },
  {
    title: "Continuous Learning",
    description: "Technology evolves rapidly. I stay current with best practices, new tools, and emerging patterns.",
  },
]

const timeline = [
  {
    year: "2024",
    title: "Senior Full Stack Developer",
    description: "Leading development of enterprise applications at TechCorp Inc.",
  },
  {
    year: "2022",
    title: "Freelance Developer",
    description: "Started consulting for startups and established companies.",
  },
  {
    year: "2020",
    title: "Frontend Developer",
    description: "Joined StartupXYZ to build their design system and web platform.",
  },
  {
    year: "2020",
    title: "Computer Science Graduate",
    description: "Graduated from UC Berkeley with a focus on software engineering.",
  },
]

export default function AboutPage() {
  return (
    <Container>
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-lg text-muted-foreground">
              Passionate about creating digital experiences that make a difference.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">My Story</h2>
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <p>
                    I'm a full-stack developer with over 4 years of experience building web applications that users
                    love. My journey started with a curiosity about how websites work, which led me to pursue Computer
                    Science at UC Berkeley.
                  </p>
                  <p>
                    What drives me is the intersection of technology and human experience. I believe that great software
                    should be invisible – it should solve problems so elegantly that users don't even think about the
                    technology behind it.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new coffee shops, hiking in the Bay Area, or
                    experimenting with new recipes in the kitchen. I'm also passionate about mentoring junior developers
                    and contributing to open source projects.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-6">My Principles</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {principles.map((principle) => (
                    <Card key={principle.title} className="border-0 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-2">{principle.title}</h3>
                        <p className="text-sm text-muted-foreground">{principle.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=128&width=128&text=Alex+Chen"
                      alt="Alex Chen"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg mb-1">Alex Chen</h3>
                    <p className="text-muted-foreground text-sm mb-4">Full Stack Developer</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div>
                <h3 className="font-display text-xl font-semibold mb-4">Timeline</h3>
                <div className="space-y-4">
                  {timeline.map((item) => (
                    <div key={item.year} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <Badge variant="outline">{item.year}</Badge>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{item.title}</h4>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  )
}
