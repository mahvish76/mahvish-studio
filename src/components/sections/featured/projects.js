import smilecare from "../../../assets/projects/smilecare.webp"
import whitespace from "../../../assets/projects/whitespace.webp"

export const projects = [
  {
    id: "smilecare",
    name: "SmileCare",
    image: smilecare,
    tagline: "Building trust for modern dental clinics.",
    description: "A premium dental clinic landing page focused on creating a trustworthy first impression through clean UI, responsive design and clear appointment flows.",
    problem: "Many clinic websites look outdated, making it difficult to build trust with new patients.",
    approach: "Designed a modern, responsive interface with a clear information hierarchy and fast performance.",
    tech: ["React", "Tailwind CSS", "Vite"],
    live: "https://smilecare-dental-website-henna.vercel.app/",
    github: "https://github.com/mahvish76/smilecare-dental-website",
  },
  {
    id: "whitespace",
    name: "Whitespace",
    image: whitespace,
    tagline: "Modern SaaS landing page.",
    description: "A responsive SaaS landing page built from a Figma design with a strong focus on layout, typography and polished user experience.",
    problem: "Transform a static design into a responsive, production-quality landing page.",
    approach: "Implemented reusable React components, responsive layouts and subtle animations while staying faithful to the original design.",
    tech: ["React", "Tailwind CSS", "Vite"],
    live: "https://whitespace-landing-page-22fh.vercel.app/",
    github: "https://github.com/mahvish76/whitespace-landing-page",
  },
];