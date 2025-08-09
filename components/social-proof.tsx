"use client"

import { motion } from "framer-motion"
import { Star, Users, Code, Coffee } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Section } from "@/components/section"
import { cn } from "@/lib/utils"

const stats = [
  {
    icon: Code,
    value: "50+",
    label: "Projects Completed",
    color: "text-blue-600",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Users,
    value: "25+",
    label: "Happy Clients",
    color: "text-emerald-600",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Average Rating",
    color: "text-amber-600",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: Coffee,
    value: "1000+",
    label: "Cups of Coffee",
    color: "text-orange-600",
    bgColor: "bg-orange-500/10",
  },
]

export function SocialProof() {
  return (
    <Section>
      <motion.div
        className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="text-center border-0 glass-card hover:glass transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-4 sm:p-6">
                <div
                  className={cn(
                    "w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110",
                    stat.bgColor,
                  )}
                >
                  <stat.icon className={cn("h-5 w-5 sm:h-6 sm:w-6", stat.color)} />
                </div>
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 gradient-text">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
