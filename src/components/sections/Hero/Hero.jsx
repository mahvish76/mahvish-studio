import { motion } from "framer-motion";

import Button from "../../ui/Button";
import HeroBg from "./HeroBg";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16" id="hero">
      <HeroBg />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="py-4 mx-auto w-full max-w-6xl px-6 text-center lg:px-8"
      >
        {/* Eyebrow */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-primaryBronze/20 bg-white/5 px-4 py-2 backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-primaryBronze" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primaryBronze">
            Websites for Businesses • India
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="mx-auto mt-8 max-w-5xl text-4xl font-semibold leading-[1.05] text-white md:text-6xl lg:text-7xl"
        >
          I design and build modern websites that turn visitors
          <span className="block text-primaryBronze">into customers.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={item}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/70"
        >
          I am a frontend developer crafting fast, responsive and premium digital
          experiences with React, Next.js and Tailwind CSS.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#projects" 
            className="px-8 py-4 rounded-xl bg-primaryBronze text-[#220a26] font-bold text-base hover:bg-[#f7e7da] transition-all duration-300 shadow-xl shadow-primaryBronze/20 hover:scale-105 cursor-pointer">
              View Projects
          </a>

          <a href="#contact" 
            className="px-8 py-4 rounded-xl text-white hover:text-primaryBronze font-semibold text-base transition-all duration-300 border border-primaryBronze/30 hover:border-primaryBronze hover:bg-MidnightViolet/60 cursor-pointer">
            Let's Talk
          </a>
        </motion.div>

        {/* Tech */}
        <motion.div variants={item} className="mt-20">
          <p className="mb-6 text-sm text-white/40">
            Built with technologies businesses trust
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {["React", "Next.js", "Tailwind CSS", "Framer Motion"].map(
              (tech) => (
                <motion.span
                  whileHover={{
                    y: -3,
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/70 backdrop-blur"
                >
                  {tech}
                </motion.span>
              ),
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
