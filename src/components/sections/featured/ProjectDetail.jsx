import { ExternalLink } from "lucide-react";
import { IconGithub } from "../../../lib/icons";
import Button from "../../ui/Button";
import { motion } from "framer-motion";

export default function ProjectDetail({ project }) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mx-auto py-16 max-w-5xl"
    >
      <div className="space-y-4 max-w-lg">
        <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white leading-tight">
          {project.name}
        </h3>
        <p className="text-primaryBronze text-lg font-sans leading-8">
          {project.tagline}
        </p>
        <p className="text-sm text-white leading-8">{project.description}</p>
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-white/10" />

      {/* Problem & Approach */}
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primaryBronze">
            The Problem
          </p>

          <p className="leading-8 text-white/70">{project.problem}</p>
        </div>

        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primaryBronze">
            My Approach
          </p>

          <p className="leading-8 text-white/70">{project.approach}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-white/10" />

      {/* Buttons */}
      <div className="mt-12 flex gap-4">
        <a href={project.live} target="_blank">
          <Button>
            <span className="pr-2">Live Dome</span>
            <ExternalLink className="w-4 h-4" /></Button>
        </a>
        <a href={project.github} target="_blank">
          <Button variant="secondary" className="flex gap-2 items-center">
            <IconGithub className="w-5 h-5 text-primaryBronze" />
            <span className="pl-2">GitHub</span>
          </Button>
        </a>
      </div>
    </motion.div>
  );
}
