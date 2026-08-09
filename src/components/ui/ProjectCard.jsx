import { motion } from "framer-motion";

export default function ProjectCard({
  image,
  title,
  description,
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
    >
      <img
        src={image}
        alt={title}
        className="aspect-video w-full object-cover"
      />

      <div className="p-8">
        <h3 className="text-2xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-white/70">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/60"
            >
              {item}
            </span>
          ))}
        </div>

        <button className="mt-8 text-primaryBronze transition hover:translate-x-1">
          View Project →
        </button>
      </div>
    </motion.div>
  );
}