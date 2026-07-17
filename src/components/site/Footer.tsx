import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Facebook, Youtube, Send } from "lucide-react";
import logoImage from "@/assets/logo/logo.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[oklch(0.14_0.03_250)] text-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <img src={logoImage} alt=" Castle Cab  Logo" className="h-30 w-auto object-contain" />
            </div>
            <p className="mt-6 max-w-md text-white/60 text-pretty leading-relaxed">
              Extraordinary journeys, quietly curated.  Castle Cab  designs private travel
              experiences for those who move slowly, feel deeply, and travel well.
            </p>

            <form className="mt-8 max-w-md" onSubmit={(e) => e.preventDefault()}>
              <label className="eyebrow">Field notes, monthly</label>
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

          <div className="grid grid-cols-2 gap-8 md:col-span-4">
            <div>
              <p className="eyebrow text-white/40">Explore</p>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li><Link to="/destinations" className="hover:text-white">Destinations</Link></li>
                <li><Link to="/packages" className="hover:text-white">Packages</Link></li>
                <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
              </ul>
            </div>

            <div>
              <p className="eyebrow text-white/40">House</p>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li><Link to="/about" className="hover:text-white">About</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                <li><a href="#" className="hover:text-white">Travel guides</a></li>
              </ul>
            </div>
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
               Castle Cab  Travel Atelier<br />
              12 Galle Face Court, Colombo 03 · Sri Lanka
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()}  Castle Cab . Crafted with care in Colombo.</p>
          <p className="text-xs text-white/40">Development by <span className="text-white/60 font-medium">Brain<span style={{ color: "var(--gold)" }}>t</span>isa</span></p>
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
