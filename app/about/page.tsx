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
    title: "Full Stack Intern – InnoRize Enterprises",
    description:
      "Worked on backend and frontend development using MERN stack and Next.js, building user and admin modules, integrating REST APIs, improving SEO to a score of 100, and collaborating with teams using Git and GitHub.",
  },
  {
    year: "2025",
    title: "Exploring AI, ML & Data Science",
    description:
      "Hands-on learning in Data Science and AI using Python, statistics, NumPy, Pandas, Scikit-learn, NLP techniques, and visualization tools like Power BI, while experimenting with projects.",
  },
  {
    year: "2024",
    title: "Full Stack Projects & Hackathons",
    description:
      "Built and deployed multiple personal and hackathon projects using MERN stack and Next.js, focusing on responsive UI, authentication, and scalable application design.",
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
                    👋 Hello! I’m <b>Nagendar Varkala</b>, a passionate <b>Full Stack Developer</b> focused on building scalable and user-centric web applications. During my <b>internship at InnoRize</b>, I worked extensively with the <b>MERN stack</b> and <b>Next.js</b>, contributing to backend development, user-facing features, and admin dashboards while collaborating with teams using <b>Git and GitHub</b>.
                  </p>
                  <p>
                    I enjoy solving real-world problems through clean system design, performance optimization, and measurable improvements such as achieving a 100 SEO score. Alongside full stack development, I’m actively exploring AI-powered features including text-to-speech and content moderation, while expanding my knowledge in Data Science, Machine Learning, NLP, and Generative AI. My goal is to combine strong software engineering fundamentals with intelligent, future-ready solutions.
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
                      <Badge variant="secondary">Express.js</Badge>
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
