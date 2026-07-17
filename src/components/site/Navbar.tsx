import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Compass } from "lucide-react";
import logoImage from "@/assets/logo/logo.png";
const links = [
  { to: "/", label: "Home" },
  { to: "/destinations", label: "Destinations" },
  { to: "/packages", label: "Packages" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled
              ? "glass shadow-float"
              : "bg-transparent border border-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logoImage} alt="Ceylon Escapes Logo" className={`h-20 w-auto object-contain transition-all duration-500 group-hover:scale-105 -my-5 ${scrolled ? 'drop-shadow-[0_0_15px_rgba(0,0,0,0.6)]' : ''}`} />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className={`relative px-3 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                  scrolled ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"
                }`}
                activeProps={{ className: scrolled ? "text-foreground font-bold underline underline-offset-4" : "text-white font-bold underline underline-offset-4" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-[13px] font-medium text-background transition hover:bg-primary"
            >
              Plan a journey
            </Link>
          </div>

          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden grid h-11 w-11 place-items-center rounded-full transition ${
              scrolled ? "bg-foreground/5 text-foreground" : "bg-white/10 text-white backdrop-blur"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            open ? "max-h-[520px] opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass rounded-3xl p-4 shadow-luxe">
            <nav className="flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-foreground/5"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-foreground text-sm font-medium text-background"
              >
                Plan a journey
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
