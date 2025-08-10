"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { getProjects } from "@/lib/projects"

const allTags = ["All", "Web", "Mobile", "AI", "ML", "Tool"]

export function ProjectGrid() {
  const [selectedTag, setSelectedTag] = useState("All")
  const projects = getProjects()

  const filteredProjects =
    selectedTag === "All" ? projects : projects.filter((project) => project.tags.includes(selectedTag.toLowerCase()))

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {allTags.map((tag) => (
          <Button
            key={tag}
            variant={selectedTag === tag ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedTag(tag)}
            className="transition-all duration-200"
          >
            {tag}
          </Button>
        ))}
      </div>

      {/* Project grid */}
      <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" layout>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No projects found for this filter.</p>
        </div>
      )}
    </div>
  )
}
