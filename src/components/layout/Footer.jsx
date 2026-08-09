export default function Footer() {
  return (
    <footer className="border-t border-primaryBronze/15 py-16 px-6 relative z-10 bg-[#140517]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 text-xs text-muted">
        <div className="flex items-start gap-3">
          <div className="w-7 h-7 rounded-lg bg-primaryBronze/20 flex items-center justify-center font-display font-bold text-primaryBronze text-sm">
            M
          </div>
          <p className="flex flex-col space-y-3 text-[10px] sm:text-sm">
            <span>Mahvish Fatima | Frontend Developer</span>
            <span className="text-left sm:text-center">&copy; 2026</span>
          </p>
        </div>

        <div className="flex items-center gap-6 font-sans text-[10px] sm:text-sm">
          <a
            href="#hero"
            className="hover:text-primaryBronze transition-colors flex items-center gap-1"
          >
            <span>Back to Top ↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
