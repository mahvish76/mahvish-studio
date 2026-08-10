import { useState } from "react";
import { IconLinkedin } from "../../lib/icons";
import Button from "../ui/Button";
import { Check, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const email = "mahvish.fatima794@gmail.com";

  // Toast Notification Trigger
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      triggerToast("Email copied to clipboard!");
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      triggerToast(`Failed to copy.`);
    }
  };

  return (
    <>
      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl bg-MidnightViolet text-[#f7e7da] border border-primaryBronze/40 shadow-2xl flex items-center gap-3 animate-bounce font-medium text-sm">
          <Check className="w-5 h-5 text-primaryBronze" />
          <span>{toastMessage}</span>
        </div>
      )}
      <section className="relative bg-muted " id="contact">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-primaryBronze/5 to-transparent" />
        <div className="px-6 py-16 text-center relative max-w-5xl mx-auto">
          <div className="bg-MidnightViolet/95 backdrop-blur-lg rounded-3xl p-8 sm:p-16 border border-primaryBronze/30 space-y-8 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 space-y-6">
              <span className="text-sm font-medium font-mono uppercase tracking-widest text-primaryBronze">
                Contact
              </span>

              <h2 className="text-5xl sm:text-6xl font-display font-extrabold text-white leading-tight mt-4">
                Have a project in mind? <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primaryBronze to-muted italic">
                  {" "}
                  Let's talk.
                </span>
              </h2>
              <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                Whether you're launching your first business website or
                redesigning an existing product, I'd love to hear from you.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <a
                  href="https://wa.me/918090771059"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 rounded-xl glass-card text-white hover:text-primaryBronze font-semibold text-base transition-all duration-300 border border-primaryBronze/30 flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 text-primaryBronze" />
                  <span>Message on Whatsapp</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mahvishfatima/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 rounded-xl glass-card text-white hover:text-primaryBronze font-semibold text-base transition-all duration-300 border border-primaryBronze/30 flex items-center gap-2"
                >
                  <IconLinkedin className="w-5 h-5 text-primaryBronze" />
                  <span>Connect on LinkedIn</span>
                </a>
                <button
                  onClick={copyEmail}
                  className="px-8 py-4 rounded-xl bg-primaryBronze text-black font-bold text-base hover:bg-primaryBronze/85 transition-all duration-300 shadow-xl flex items-center gap-2"
                >
                  <Mail className="w-5 h-5 text-MidnightViolet" />
                  <span>
                    {copied ? "Email Address Copied!" : "Copy Email Address"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
