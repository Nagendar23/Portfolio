"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/magnetic-button"
import { Container } from "@/components/container"
import { useAchievements } from "@/components/achievement-provider"

export function Hero() {
  const { unlockAchievement } = useAchievements()

  const handleCTAClick = (type: string) => {
    if (type === "projects") {
      unlockAchievement("explorer")
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent pointer-events-none" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Available for new projects & internships</span>
            </motion.div>

            <motion.h1
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Crafting Digital
              <br />
              <span className="gradient-text">Experiences</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-foreground font-medium max-w-3xl mx-auto text-balance leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Full-stack developer passionate about creating beautiful, performant, and accessible web applications that
              make a real impact.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <MagneticButton asChild>
                <Button
                  size="lg"
                  className="group gradient-primary text-white hover:opacity-90 glow-hover px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base w-full sm:w-auto"
                  onClick={() => handleCTAClick("projects")}
                  asChild
                >
                  <Link href="/projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </MagneticButton>

              <MagneticButton asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-card hover:glass px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base bg-transparent w-full sm:w-auto"
                  asChild
                >
                  <Link href="/NagendarFullStack.pdf">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
              </MagneticButton>

              <MagneticButton asChild>
                <Button
                  size="lg"
                  variant="ghost"
                  className="hover:bg-surface-hover px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base w-full sm:w-auto"
                  asChild
                >
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Get in Touch
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>

            <motion.div
              className="pt-12 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="flex items-center justify-center gap-2">
                <span>Scroll to discover more</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Floating + geometric elements unchanged */}
    </section>
  )
}
