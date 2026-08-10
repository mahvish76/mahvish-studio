import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Services",
    href: "#services"
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-MidnightViolet/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-primaryBronze/20 flex items-center justify-center font-display font-extrabold text-primaryBronze text-lg">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base font-bold text-white tracking-wide group-hover:text-primaryBronze transition-colors">
                Mahvish Fatima
              </span>
              <span className="text-[10px] text-muted uppercase tracking-widest font-mono">
                Frontend Developer
              </span>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-sm font-medium tracking-wider text-white/70 transition-colors hover:text-white"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primaryBronze transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="/resume_mahvish_fatima.pdf"
              target="_blank"
              className="bg-primaryBronze text-MidnightVoilet hover:bg-primaryBronze/10 hover:text-primaryBronze px-8 py-4 rounded-xl cursor-pointer transition-all
            duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      </header>

      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed inset-0 z-999 min-h-screen w-screen border-t border-white/10 bg-MidnightViolet/95 backdrop-blur-xl mt-16 md:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/5 py-4 text-white/80 transition hover:text-primaryBronze"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/resume_mahvish_fatima.pdf"
              target="_blank"
              className="bg-primaryBronze text-MidnightVoilet hover:bg-primaryBronze/10 hover:text-primaryBronze px-8 py-4 rounded-xl cursor-pointer transition-all
            duration-300 text-center"
            >
              See Resume
            </a>
          </nav>
        </motion.div>
      )}
    </>
  );
}
