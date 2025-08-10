import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about my background, approach, and what drives me as a developer.",
};

const principles = [
  {
    title: "User-Centered Design",
    description:
      "Every decision starts with the user. I create experiences that are intuitive, accessible, and delightful.",
  },
  {
    title: "Performance First",
    description:
      "Fast, efficient applications are essential. I optimize for speed, scalability, and reliability.",
  },
  {
    title: "Clean Code",
    description:
      "Maintainable, readable code is a long-term investment. I follow best practices for scalability and collaboration.",
  },
  {
    title: "Continuous Learning",
    description:
      "I stay current with industry trends, new tools, and emerging technologies to build better solutions.",
  },
];

const timeline = [
  {
    year: "2025",
    title: "Recognized for UI Excellence",
    description:
      "Won most user-friendly interface design award in a college web development competition.",
  },
  {
    year: "2024",
    title: "Full Stack Developer (Freelance & Personal Projects)",
    description:
      "Built and deployed multiple MERN stack and Next.js projects with secure authentication and CI/CD workflows.",
  },
  {
    year: "2024",
    title: "Frontend Developer (Projects & Hackathons)",
    description:
      "Developed responsive UI components using React.js, Tailwind CSS, and JavaScript.",
  },
  {
    year: "2020",
    title: "Completed High School",
    description:
      "Graduated from Dilsukhnagar Public School with a CGPA of 10.0.",
  },
];

export default function AboutPage() {
  return (
    <Container>
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              About Me
            </h1>
            <p className="text-lg text-muted-foreground">
              Full Stack Developer crafting scalable, high-performance web
              solutions with a user-first approach.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">
                  My Story
                </h2>
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <p>
                    I'm a Full Stack Developer from Hyderabad with expertise in
                    React.js, Next.js, Node.js, and MongoDB (MERN stack). My
                    journey began with a deep curiosity about how web
                    applications work, which eventually grew into a passion for
                    building scalable, high-performance digital solutions.
                  </p>
                  <p>
                    Over the years, I’ve developed projects ranging from
                    responsive dashboards to secure authentication systems,
                    optimizing performance and user experience. I believe that
                    great software should feel effortless — solving problems so
                    intuitively that the technology fades into the background.
                  </p>
                  <p>
                    Outside of development, I enjoy exploring new tech trends,
                    taking part in hackathons, and constantly learning new
                    skills to stay ahead in the fast-paced world of web
                    development. I’m driven by the challenge of turning complex
                    ideas into seamless, user-focused experiences.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-6">
                  My Principles
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {principles.map((principle) => (
                    <Card
                      key={principle.title}
                      className="border-0 bg-card/50 backdrop-blur-sm"
                    >
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-2">
                          {principle.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {principle.description}
                        </p>
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
                      src="/images/profile.jpg"
                      alt="Nagendar Varkala"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg mb-1">
                      Nagendar Varkala
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Full Stack Developer
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="secondary">React.js</Badge>
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">MongoDB</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div>
                <h3 className="font-display text-xl font-semibold mb-4">
                  Timeline
                </h3>
                <div className="space-y-4">
                  {timeline.map((item) => (
                    <div key={item.year} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <Badge variant="outline">{item.year}</Badge>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{item.title}</h4>
                        <p className="text-xs text-muted-foreground">
                          {item.description}
                        </p>
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
  );
}
