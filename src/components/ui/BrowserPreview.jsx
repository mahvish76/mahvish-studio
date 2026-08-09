import {
  motion,
  useAnimation,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useInView } from "framer-motion";
import { Lock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const BrowserPreview = ({ project }) => {
  const ref = useRef(null);
  const controls = useAnimation();

  const inView = useInView(ref, {
    once: true,
    amount: 0.35,
  });

  const [isHovered, setIsHovered] = useState(false);

  // Subtle 3D mouse movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [3, -3]),
    {
      stiffness: 120,
      damping: 20,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-3, 3]),
    {
      stiffness: 120,
      damping: 20,
    }
  );

  // Start scrolling when browser enters viewport
  useEffect(() => {
    if (inView && !isHovered) {
      controls.start({
        y: "-55%",
        transition: {
          duration: 7,
          ease: "linear",
        },
      });
    }
  }, [inView, isHovered, controls]);

  // Reset + replay when changing projects
  useEffect(() => {
    controls.stop();
    controls.set({ y: 0 });

    if (inView && !isHovered) {
      controls.start({
        y: "-55%",
        transition: {
          duration: 7,
          ease: "linear",
        },
      });
    }
  }, [project.id]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width - 0.5;

    const y =
      (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    controls.stop();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);

    mouseX.set(0);
    mouseY.set(0);

    // Resume from current position
    if (inView) {
      controls.start({
        y: "-55%",
        transition: {
          duration: 5,
          ease: "linear",
        },
      });
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1800,
      }}
      className="relative mx-auto w-full max-w-5xl"
    >
      {/* Bronze glow */}
      <div className="absolute inset-0 -z-10 rounded-[40px] bg-primaryBronze/10 blur-[100px]" />

      {/* Browser */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-MidnightViolet/80 shadow-[0_40px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:rounded-[28px]">

        {/* Browser toolbar */}
        <div className="flex h-12 items-center justify-between border-b border-white/10 px-4 sm:h-14 sm:px-6">

          {/* Dots */}
          <div className="flex gap-1.5 sm:gap-2">
            <div className="h-2 w-2 rounded-full bg-white/30 sm:h-3 sm:w-3" />
            <div className="h-2 w-2 rounded-full bg-white/20 sm:h-3 sm:w-3" />
            <div className="h-2 w-2 rounded-full bg-white/10 sm:h-3 sm:w-3" />
          </div>

          {/* URL */}
          <div className="hidden rounded-full bg-white/5 px-5 py-1 text-xs text-white/40 sm:flex gap-2">
            <Lock className="w-4 h-4 text-muted" />
            {project.live}
          </div>

          <div className="w-8 sm:w-10" />
        </div>

        {/* Screenshot viewport */}
        <div className="relative h-140 overflow-hidden sm:h-155 lg:h-180">

          <motion.img
            key={project.id}
            src={project.image}
            alt={`${project.name} website`}
            initial={{ y: 0 }}
            animate={controls}
            className="block w-full max-w-none"
          />

          {/* Glass reflection */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent" />

          {/* Bottom fade */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-MidnightViolet/20 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
};

export default BrowserPreview;