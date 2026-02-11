import type { Metadata } from "next"
import { Download, Eye, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/container"
import { Section } from "@/components/section"

export const metadata: Metadata = {
  title: "Resume",
  description: "Download my resume or view it online.",
}

const resumeData = {
  lastUpdated: "2026-02-11",
  experience: [
  {
    title: "Full Stack Intern",
    company: "InnoRize Enterprises",
    period: "2025",
    description:
      "Worked on backend and frontend development using the MERN stack and Next.js, building user and admin modules, integrating REST APIs, improving SEO to a perfect score of 100, and collaborating with teams using Git and GitHub.",
    achievements: [
      "Developed scalable user and admin modules using MERN & Next.js",
      "Optimized backend performance through structured REST API integrations",
      "Achieved a 100/100 SEO score for production pages",
      "Collaborated with cross-functional teams using Git and GitHub",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Personal Projects",
    period: "2024 - Present",
    description:
      "Developed and deployed responsive, scalable web applications using the MERN stack and Next.js.",
    achievements: [
      "Built responsive web apps with 30%+ performance improvements",
      "Implemented secure JWT authentication supporting 100+ concurrent users",
      "Deployed projects on Vercel, Netlify, and Render with CI/CD workflows",
    ],
  },
  ],
  education: [
    {
      degree: "B.Tech in Artificial Intelligence & Data Science",
      school: "Sri Indu College of Engineering & Technology, Hyderabad",
      period: "2022 – Present",
    },
    {
      degree: "Intermediate (MPC)",
      school: "Sri Chaitanya Junior College, Hyderabad",
      period: "2020 – 2022",
    },
    {
      degree: "High School",
      school: "Dilsukhnagar Public School, Hyderabad",
      period: "Completed 2020",
    },
  ],
  skills: {
    Frontend: ["React.js", "Next.js", "Vite",  "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "BootStrap" ],
    Backend: ["Node.js", "Express.js", "RESTful API Design", "JWT Authentication", "API Integration", "WebSockets","WebRTC"],
    Databases: ["MongoDB", "SQL", "Database Design", "Data Modeling", "CRUD Operations"],
    "DevOps & Tools": ["Git", "GitHub", "AWS" ,"Docker (Basics)", "CI/CD", "Vercel", "Netlify", "Render"],
    "Programming Languages": ["Python","JavaScript", "Java (Basics)", "C (Basics)"],
    "Soft Skills": ["Problem-Solving", "Collaborative Teamwork", "Technical Communication", "Time Management"],
  },
}

export default function ResumePage() {
  return (
    <Container>
      <Section>
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">Resume</h1>
          <p className="text-lg text-muted-foreground mb-8">Download my resume or view it online below.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild>
              <a href="/NagendarFullStack.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/NagendarFullStack.pdf" target="_blank" rel="noopener noreferrer">
                <Eye className="mr-2 h-4 w-4" />
                View Online
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2">
            <Calendar className="h-4 w-4" />
            Last updated: {new Date(resumeData.lastUpdated).toLocaleDateString()}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Experience */}
          <Card>
            <CardHeader>
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {resumeData.experience.map((job, index) => (
                <div key={index} className="border-l-2 border-primary/20 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <Badge variant="outline">{job.period}</Badge>
                  </div>
                  <p className="text-primary font-medium mb-2">{job.company}</p>
                  <p className="text-muted-foreground mb-3">{job.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary/20 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-semibold text-lg">{edu.degree}</h3>
                    <Badge variant="outline">{edu.period}</Badge>
                  </div>
                  <p className="text-primary font-medium">{edu.school}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(resumeData.skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className="font-semibold text-sm text-muted-foreground mb-3 uppercase tracking-wide">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </Section>
    </Container>
  )
}
