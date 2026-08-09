import whitespace from "../../../assets/projects/whitespace.png"
import ProjectCard from "../../ui/ProjectCard";

export default function Projects() {
  return (
    <section className="bg-MidnightViolet py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.3em] text-primaryBronze">
          Selected Projects
        </p>

        <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
          Other Projects
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-white/70">
          A selection of projects focused on performance, usability and clean
          user experiences.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <ProjectCard
            image={whitespace}
            title="Whitespace"
            description="Modern SaaS landing page built from a Figma design community."
            tech={["React", "Tailwind"]}
            live="#"
            github="#"
          />

          <ProjectCard
            image={whitespace}
            title="CrabAdvice"
            description="SEO-focused comparison platform helping businesses choose digital tools."
            tech={["Next.js", "Sanity", "Tailwind"]}
            live="#"
            github="#"
          />
        </div>
      </div>
    </section>
  );
}