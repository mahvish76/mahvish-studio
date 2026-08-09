import noise from "../../../assets/images/noise.png";
import { motion } from "framer-motion";

export default function HeroBg() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-MidnightViolet" />

      {/* Bronze Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-20 h-137.5 w-137.5 -translate-x-1/2 rounded-full bg-primaryBronze blur-[140px]"
      />

      {/* Smokey Rose Glow */}
      <div className="absolute right-0 top-1/3 h-87.5 w-87.5 rounded-full bg-smokeyRose/10 blur-[120px]" />

      {/* Radial Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(15,10,25,0.25) 45%, #0F0A19 100%)",
        }}
      />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-soft-light"
        style={{
          backgroundImage: `url(${noise})`,
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}
