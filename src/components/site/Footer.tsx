import { Link } from "@tanstack/react-router";
import { Compass, Instagram, Twitter, Facebook, Youtube, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[oklch(0.14_0.03_250)] text-white">
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-30"
        style={{ background: "var(--gradient-luxe)" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
                <Compass className="h-4 w-4" />
              </span>
              <span className="font-display text-2xl">Ceylon Escapes</span>
            </div>
            <p className="mt-6 max-w-md text-white/60 text-pretty leading-relaxed">
              Extraordinary journeys, quietly curated. Ceylon Escapes designs private travel
              experiences for those who move slowly, feel deeply, and travel well.
            </p>

            <form className="mt-8 max-w-md" onSubmit={(e) => e.preventDefault()}>
              <label className="eyebrow text-white/50">Field notes, monthly</label>
              <div className="mt-3 flex items-center rounded-full border border-white/15 bg-white/5 backdrop-blur pl-5 pr-1 py-1">
                <input
                  type="email"
                  placeholder="you@somewhere.com"
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-white/40"
                />
                <button className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--gold)] text-[color:var(--ink)] transition hover:scale-105">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-white/40">Explore</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li><Link to="/destinations" className="hover:text-white">Destinations</Link></li>
              <li><Link to="/packages" className="hover:text-white">Packages</Link></li>
              <li><Link to="/experiences" className="hover:text-white">Experiences</Link></li>
              <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-white/40">House</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/stories" className="hover:text-white">Stories</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><a href="#" className="hover:text-white">Travel guides</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-white/40">Elsewhere</p>
            <div className="mt-4 flex gap-2">
              {[Instagram, Twitter, Facebook, Youtube].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-xs text-white/40 leading-relaxed">
              Ceylon Escapes Travel Atelier<br />
              12 Galle Face Court, Colombo 03 · Sri Lanka
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Ceylon Escapes. Crafted with care in Colombo.</p>
          <div className="flex flex-wrap gap-6 text-xs text-white/50">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
