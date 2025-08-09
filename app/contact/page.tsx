import type { Metadata } from "next"
import { Mail, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch to discuss your next project or just say hello.",
}

export default function ContactPage() {
  return (
    <Container>
      <Section>
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">Let's Work Together</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing
            together.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Email</h3>
                </div>
                <p className="text-muted-foreground">alex@example.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Location</h3>
                </div>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Response Time</h3>
                </div>
                <p className="text-muted-foreground">Usually within 24 hours</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </Container>
  )
}
