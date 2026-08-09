import Button from "../ui/Button";

export default function About() {
  return (
    <section className="relative bg-MidnightViolet" id="about">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-primaryBronze/5 to-transparent" />
      <div className="max-w-7xl mx-auto pt-16 pb-14 px-6">
        <div className="bg-MidnightViolet/45 backdrop-blur-lg rounded-3xl px-3 py-4 border border-primaryBronze/30 bg-linear-to-br from-MidnightViolet via-[#220a26] to-[#140517] relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-smokyRose/20 rounded-full blur-3xl pointer-events-none" />
          <div className="mx-auto max-w-5xl px-3 lg:px-8">
            {/* Label */}
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primaryBronze">
              About Me
            </p>

            {/* Heading */}
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-6xl">
              I Build fast, thoughtful websites that people love using.
            </h2>

            {/* Description */}
            <p className="mt-8 max-w-3xl text-sm leading-8 text-white/70">
              I enjoy transforming ideas into thoughtful digital experiences
              that feel premium, perform beautifully and help businesses build
              trust online.
            </p>
            <p className="mt-8 max-w-3xl text-sm leading-8 text-white/70">
              From landing pages to business websites, my focus is always the
              same—clean code, responsive layouts and interfaces that people
              genuinely enjoy using.
            </p>

            {/* Highlights */}
            <div className="mt-16 grid gap-6 sm:grid-cols-2">
              {[
                "Responsive Design",
                "Performance Focused",
                "Clean & Maintainable Code",
                "SEO-Friendly Development",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-primaryBronze" />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="my-16">
              <a href="/resume_mahvish_fatima.pdf"
              download
              className="bg-primaryBronze text-MidnightVoilet hover:bg-primaryBronze/10 hover:text-primaryBronze px-8 py-4 rounded-xl cursor-pointer transition-all
            duration-300">Download Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
