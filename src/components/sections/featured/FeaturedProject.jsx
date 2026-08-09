import { useState } from "react";
import { projects } from "./projects";
import BrowserPreview from "../../ui/BrowserPreview";
import ProjectDetail from "./ProjectDetail";

export default function FeaturedProject() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  return (
    <section className="relative bg-MidnightViolet" id="projects">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-primaryBronze/5 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-4xl md:text-6xl font-display font-semibold text-smokyRose tracking-tight">
            Browse Projects
          </h2>
          <p className="text-muted text-sm md:text-base">
            Experience the standard of build quality deliverable to every
            client.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 gap-8 font-sans">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`rounded-full px-6 relative py-2 text-lg transition ${
                  activeProject.id === project.id
                    ? " bg-primaryBronze text-black font-bold"
                    : "text-muted hover:text-white"
                }`}
              >
                {project.name}
              </button>
            ))}
          </div>
        </div>
        <BrowserPreview project={activeProject} />
        <ProjectDetail project={activeProject} />
      </div>
    </section>
  );
}
