import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/container"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Nagendar23",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nagendar-varkala/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:varkalanagendar777@gmail.com",
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <Container>
        <div className="py-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="font-display text-lg font-semibold mb-2">Nagendar Varkala</h3>
              <p className="text-sm text-muted-foreground">Turning ideas into lightning-fast, high-performance digital experiences.</p>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <Button key={link.name} variant="ghost" size="icon" asChild className="hover:text-primary">
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                    <link.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Nagendar Varkala. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
