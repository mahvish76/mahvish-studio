import { ArrowRight } from "lucide-react";

export default function PersonalProject() {
  return (
    <section className="relative bg-MidnightViolet" id="crabadvice">
      <div className="pb-16 px-6 max-w-7xl mx-auto">
      <div className="glass-card rounded-3xl p-8 lg:p-14 border border-primaryBronze/30 bg-linear-to-br from-MidnightViolet via-[#220a26] to-[#140517] relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-smokyRose/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-smokyRose/20 text-primaryBronze border border-smokyRose/30 text-xs font-mono">
            <span>🦀 BEYOND CLIENT WORK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white leading-tight">
            Outside client work, <br />
            <span className="gradient-bronze-text">
              I'm building CrabAdvice.
            </span>
          </h2>

          <p className="text-muted text-base md:text-lg leading-relaxed font-light">
            A platform helping small businesses choose the right digital tools
            through practical comparisons, transparent benchmarks, and
            educational content.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-[#140517]/60 border border-white/10 space-y-1">
              <span className="text-primaryBronze font-bold block">
                Tool Comparisons
              </span>
              <span className="text-muted">
                Side-by-side technical & pricing breakdown.
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#140517]/60 border border-white/10 space-y-1">
              <span className="text-primaryBronze font-bold block">
                Practical Guides
              </span>
              <span className="text-muted">
                No-fluff setup tutorials for local founders.
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#140517]/60 border border-white/10 space-y-1">
              <span className="text-primaryBronze font-bold block">
                Community First
              </span>
              <span className="text-muted">
                Empowering independent business growth.
              </span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a href="https://crabadvice.com" target="_blank"
              className="px-6 py-3 rounded-xl bg-primaryBronze text-[#220a26] font-bold text-sm hover:bg-[#f7e7da] transition-all shadow-lg flex items-center gap-2"
            >
              <span>Explore CrabAdvice Overview</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
