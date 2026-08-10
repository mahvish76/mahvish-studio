import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "../../lib/services";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  return (
    <section className="relative bg-MidnightViolet py-24" id="services">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-primaryBronze/5 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primaryBronze">
            What I Build
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Fast, Responsive, and SEO Optimized
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
            From focused landing pages to complete business websites, I create
            modern digital experiences that help your business look credible
            and connect with customers.
          </p>
        </div>

        {/* Service Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                variants={item}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className={`group relative overflow-hidden rounded-3xl border p-5 transition-all duration-300 lg:px-6 lg:py-8 ${
                  service.featured
                    ? "border-primaryBronze/40 bg-linear-to-br from-primaryBronze/10 via-[#220a26] to-[#140517] shadow-xl shadow-primaryBronze/5"
                    : "border-white/10 bg-white/3 hover:border-primaryBronze/30 hover:bg-white/5"
                }`}
              >
                {/* Card glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-smokyRose/10 blur-3xl transition-all duration-500 group-hover:bg-primaryBronze/10" />

                {/* Top row */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primaryBronze/20 bg-primaryBronze/10">
                    <Icon className="h-5 w-5 text-primaryBronze" />
                  </div>

                  <span className="font-mono text-sm text-white/30">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 mt-8">
                  <h3 className="text-2xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 min-h-[84px] text-sm leading-7 text-white/60">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mt-7 space-y-3 border-t border-white/10 pt-6">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 text-sm text-white/70"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primaryBronze" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom link */}
                <a
                  href="#contact"
                  className="relative z-10 mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primaryBronze transition-all duration-300 group-hover:gap-3"
                >
                  Discuss your project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}