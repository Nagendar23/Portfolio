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
      {/* Enhanced background with multiple gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20 animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Available for new projects</span>
            </motion.div>

            <motion.h1
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-balance px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Crafting Digital
              <br />
              <span className="gradient-text">Experiences</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Full-stack developer passionate about creating beautiful, performant, and accessible web applications that
              make a real impact.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-8 px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <MagneticButton asChild>
                <Button
                  size="lg"
                  className="group gradient-primary text-white hover:opacity-90 glow-hover px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
                  onClick={() => handleCTAClick("projects")}
                  asChild
                >
                  <Link href="/projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </MagneticButton>

              <MagneticButton asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-card hover:glass px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg bg-transparent w-full sm:w-auto"
                  asChild
                >
                  <Link href="/resume">
                    <Download className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                    Download Resume
                  </Link>
                </Button>
              </MagneticButton>

              <MagneticButton asChild>
                <Button
                  size="lg"
                  variant="ghost"
                  className="hover:bg-surface-hover px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
                  asChild
                >
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                    Get in Touch
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>

            <motion.div
              className="pt-16 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="flex items-center justify-center gap-2">
                <span>Scroll to discover more</span>
                <span className="text-primary">•</span>
                <span>Try the Konami code for a surprise 🎉</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Enhanced floating elements - hidden on mobile */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/30 rounded-full floating hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent/40 rounded-full floating-delayed hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-primary/50 rounded-full floating"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      />

      {/* Geometric shapes - hidden on mobile */}
      <motion.div
        className="absolute top-20 right-20 w-20 h-20 border border-primary/20 rounded-lg rotate-45 floating hidden lg:block"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 45 }}
        transition={{ delay: 1.5, duration: 1 }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full floating-delayed hidden lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      />
    </section>
  )
}
