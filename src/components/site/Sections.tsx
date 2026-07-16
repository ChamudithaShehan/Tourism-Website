import { Link } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import {
  ArrowRight, ArrowUpRight, Star, MapPin, Play, ChevronDown,
  Mountain, Waves, Tent, TreePine, Bird, Car, Landmark, TreePalm, Footprints,
  Sparkles, Users, Globe, ShieldCheck, HeartHandshake, Award,
  Quote, Mail, Phone, MapPinned, Instagram, Twitter, Facebook,
  Plus, X, Maximize2, ChevronLeft, ChevronRight,
} from "lucide-react";

import hero from "@/assets/hero-maldives.jpg";
import santorini from "@/assets/dest-santorini.jpg";
import swiss from "@/assets/dest-swiss.jpg";
import kyoto from "@/assets/dest-kyoto.jpg";
import safari from "@/assets/dest-safari.jpg";
import iceland from "@/assets/dest-iceland.jpg";
import bali from "@/assets/dest-bali.jpg";
import story1 from "@/assets/story-1.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";

import { packages } from "@/data/packages";
/* ────────────────────────────────────────────────────────── HERO */
export function Hero() {
  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden text-white">
      <div className="absolute inset-0 -z-10">
        <img
          src={hero}
          alt="Aerial view of overwater villas at sunset"
          width={1920}
          height={1280}
          className="h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>

      {/* Floating decorative element */}
      <div
        aria-hidden
        className="absolute -right-40 top-1/3 h-[440px] w-[440px] rounded-full opacity-30 blur-3xl animate-float"
        style={{ background: "var(--gradient-sunset)" }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-4 sm:px-6 lg:px-8 pt-40 pb-16">
        <div className="grid lg:grid-cols-12 gap-10 items-end flex-1">
          {/* Headline */}
          <div className="lg:col-span-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs tracking-widest uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
              A world beyond the ordinary
            </div>
            <h1 className="fluid-display mt-8 font-display text-balance">
              Discover<br />
              <span className="italic font-light text-[color:var(--gold-soft)]">extraordinary</span> journeys
            </h1>
            <p className="mt-8 max-w-xl text-lg text-white/80 text-pretty leading-relaxed">
              Explore breathtaking destinations and unforgettable experiences,
              quietly composed by our atelier of travel designers across four continents.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/destinations"
                className="group inline-flex h-14 items-center gap-2 rounded-full bg-white pl-7 pr-3 text-sm font-medium text-[color:var(--ink)] transition hover:bg-[color:var(--gold)]"
              >
                Explore destinations
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--ink)] text-white transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
              <Link
                to="/packages"
                className="inline-flex h-14 items-center gap-3 rounded-full border border-white/25 bg-white/5 px-7 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
              >
                <Play className="h-4 w-4" />
                View packages
              </Link>
            </div>
          </div>

          {/* Floating destination preview */}
          <div className="lg:col-span-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="glass-dark rounded-[28px] p-4 shadow-luxe max-w-sm ml-auto">
              <p className="eyebrow text-white/60 px-2">Now trending</p>
              <div className="mt-3 flex items-start gap-3">
                <img src="https://themanduls.com/wp-content/uploads/2025/07/Nine-Arch-Bridge-Ella-Sri-Lanka-35-1.jpg" alt="Ella" className="h-20 w-20 rounded-2xl object-cover" width={160} height={160} loading="lazy" />
                <div className="flex-1 min-w-0">
                  <p className="font-display text-lg">Ella, Sri Lanka</p>
                  <p className="text-xs text-white/60 mt-1 flex items-center gap-1"><MapPin className="h-3 w-3" />Hill Country</p>
                  <div className="mt-2 flex items-center gap-1 text-xs">
                    <Star className="h-3 w-3 fill-[color:var(--gold)] text-[color:var(--gold)]" />
                    4.9 · 2,104 travelers
                  </div>
                </div>
              </div>
              <div className="mt-4 h-px bg-white/10" />
              <div className="mt-3 flex items-start gap-3">
                <img src="https://theportuguesetraveler.com/wp-content/uploads/2024/11/galle-fort-city-sri-lanka-drone-5.jpg.webp" alt="Galle" className="h-20 w-20 rounded-2xl object-cover" width={160} height={160} loading="lazy" />
                <div className="flex-1 min-w-0">
                  <p className="font-display text-lg">Galle, Sri Lanka</p>
                  <p className="text-xs text-white/60 mt-1 flex items-center gap-1"><MapPin className="h-3 w-3" />Southern Coast</p>
                  <div className="mt-2 flex items-center gap-1 text-xs">
                    <Star className="h-3 w-3 fill-[color:var(--gold)] text-[color:var(--gold)]" />
                    4.8 · 1,892 travelers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats + scroll */}
        <div className="mt-16 grid gap-8 md:grid-cols-[1fr_auto] items-end">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              ["100K+", "Travelers"],
              ["150+", "Destinations"],
              ["5,000+", "Signature tours"],
              ["98%", "Happy travelers"],
            ].map(([n, l]) => (
              <div key={l as string}>
                <p className="font-display text-3xl sm:text-4xl">{n}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-white/60">{l}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-white/70">
            Scroll to explore
            <span className="grid h-10 w-10 place-items-center rounded-full border border-white/25 animate-float">
              <ChevronDown className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── DESTINATIONS (magazine) */
const destinations = [
  { img: "https://imgix.theurbanlist.com/content/article/best-hotels-srilanka-1.jpg", country: "Sri Lanka", city: "Weligama", cat: "Luxury", rating: 4.9, blurb: "Cliffside resorts, endless ocean views, and tropical luxury at its finest." },
  { img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/471000/471485-Kandy-Sri-Lanka.jpg", country: "Sri Lanka", city: "Kandy", cat: "Culture", rating: 4.8, blurb: "Sacred temples, misty hills, and the heartbeat of Sri Lankan heritage." },
  { img: safari,    country: "Sri Lanka", city: "Yala", cat: "Safari", rating: 4.9, blurb: "Leopards at dusk, wild elephants, and luxury tented camps in the wild." },
  { img: "https://lp-cms-production.imgix.net/2019-06/GettyImages-497592261_high.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4", country: "Sri Lanka", city: "Ella", cat: "Nature", rating: 4.8, blurb: "Misty mountain passes, Nine Arch Bridge, and lush tea-covered hills." },
  { img: "https://cdn.audleytravel.com/-/-/79/1025644-galle-sri-lanka.jpg", country: "Sri Lanka", city: "Galle", cat: "Heritage", rating: 4.7, blurb: "Dutch colonial ramparts, boutique hotels, and the Indian Ocean at every turn." },
  { img: "https://img.freepik.com/premium-photo/nuwara-eliya-tea-plantation-sri-lanka-nuwara-eliya-is-most-important-place-tea-plantation-production-sri-lanka_78361-9432.jpg?w=2000", country: "Sri Lanka", city: "Nuwara Eliya", cat: "Retreat", rating: 4.9, blurb: "Misty tea plantations, colonial bungalows, and the cool highland air." },
];

export function FeaturedDestinations() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="eyebrow">Featured · Chapter One</p>
            <h2 className="fluid-h2 mt-4 font-display text-balance max-w-2xl">
              Places we return to,<br />season after season.
            </h2>
          </div>
          <Link to="/destinations" className="group inline-flex items-center gap-2 text-sm font-medium">
            All destinations
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>

        {/* Magazine layout: tall feature + stacked pair */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Big feature card */}
          <div className="lg:col-span-7 lg:row-span-2 group relative overflow-hidden rounded-[36px] min-h-[540px] hover-lift">
            <img src={destinations[0].img} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />
            <div className="absolute top-6 left-6 flex gap-2">
              <span className="rounded-full glass-dark px-3 py-1 text-[11px] uppercase tracking-widest text-white">{destinations[0].cat}</span>
              <span className="rounded-full glass-dark px-3 py-1 text-[11px] text-white flex items-center gap-1">
                <Star className="h-3 w-3 fill-[color:var(--gold)] text-[color:var(--gold)]" /> {destinations[0].rating}
              </span>
            </div>
            <div className="absolute inset-x-6 bottom-6 text-white">
              <p className="text-xs uppercase tracking-widest text-white/70 flex items-center gap-1"><MapPin className="h-3 w-3" /> {destinations[0].country}</p>
              <h3 className="font-display text-4xl sm:text-5xl mt-2">{destinations[0].city}</h3>
              <p className="mt-3 max-w-md text-white/80">{destinations[0].blurb}</p>
              <button className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-white pl-5 pr-2 text-sm text-[color:var(--ink)]">
                Discover journey
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[color:var(--ink)] text-white">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            </div>
          </div>

          {/* Stack: 2 medium */}
          {destinations.slice(1, 3).map((d) => (
            <DestCard key={d.city} d={d} className="lg:col-span-5" />
          ))}
        </div>

        {/* Row of three */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {destinations.slice(3).map((d) => (
            <DestCard key={d.city} d={d} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DestCard({ d, className = "" }: { d: (typeof destinations)[number]; className?: string }) {
  return (
    <article className={`group relative overflow-hidden rounded-[28px] min-h-[280px] hover-lift ${className}`}>
      <img src={d.img} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      <div className="absolute top-4 left-4">
        <span className="rounded-full glass-dark px-3 py-1 text-[10px] uppercase tracking-widest text-white">{d.cat}</span>
      </div>
      <div className="absolute inset-x-5 bottom-5 text-white">
        <p className="text-[11px] uppercase tracking-widest text-white/70 flex items-center gap-1"><MapPin className="h-3 w-3" /> {d.country}</p>
        <div className="mt-1 flex items-end justify-between gap-3">
          <h3 className="font-display text-2xl sm:text-3xl">{d.city}</h3>
          <span className="text-xs flex items-center gap-1">
            <Star className="h-3 w-3 fill-[color:var(--gold)] text-[color:var(--gold)]" /> {d.rating}
          </span>
        </div>
        <p className="mt-2 text-sm text-white/80 line-clamp-2">{d.blurb}</p>
      </div>
    </article>
  );
}


/* ────────────────────────────────────────────────────────── EXPERIENCE CATEGORIES */
const experiences = [
  { icon: Mountain,   label: "Adventure",   img: "https://media.istockphoto.com/id/1195550182/photo/lions-rock-at-sigiriya-seen-from-pidurangala-rock-sri-lanka.jpg?s=170667a&w=0&k=20&c=1PlfQIo_uck8nQqVwSM86pni8Qe11M-0rG-PmTG9aFU=" },
  { icon: Sparkles,   label: "Luxury",      img: "https://theportuguesetraveler.com/wp-content/uploads/2024/09/ahu-bay-hotel-best-hotels-sri-lanka-13.jpg.webp" },
  { icon: Waves,      label: "Beach",       img: "https://s29745.pcdn.co/wp-content/uploads/2019/04/Hikkaduwa-Beach-Sri-Lanka-.jpeg" },
  { icon: TreePine,   label: "Nature",      img: "https://lp-cms-production.imgix.net/2019-06/GettyImages-497592261_high.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4" },
  { icon: Bird,       label: "Wildlife",    img: "https://www.srilankalocaltours.com/wp-content/uploads/safari-trip-to-Yala-National-Park-1.jpg" },
  { icon: Tent,       label: "Camping",     img: "https://overatours.com/wp-content/uploads/2020/02/Camping-2-scaled.jpg" },
  { icon: Car,        label: "Road Trips",  img: "https://static.cozycozy.com/images/catalog/bg2/horizontal-sri-lanka.jpg" },
  { icon: Landmark,   label: "Culture",     img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/471000/471485-Kandy-Sri-Lanka.jpg" },
  { icon: TreePalm,   label: "Island Tours",img: "https://images.locationscout.net/2018/06/polonnaruwa-ruins-sri-lanka-ws3e.jpg?h=1100&q=83" },
  { icon: Footprints, label: "Hiking",      img: "https://media.istockphoto.com/id/2183695496/photo/man-and-woman-bonding-while-hiking-in-sri-lanka.jpg?s=612x612&w=0&k=20&c=6TkET72w3FkbbQiY9uYXwy5en_2X6egabQDLysmR428=" },
];

export function ExperienceCategories() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="eyebrow">Ways to travel</p>
            <h2 className="fluid-h2 mt-4 font-display text-balance max-w-xl">Ten worlds, one thoughtful atlas</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Choose the shape of your journey — a slow retreat, a wildlife encounter,
            or a route across the continents.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {experiences.map(({ icon: Icon, label, img }) => (
            <button
              key={label}
              className="group relative overflow-hidden rounded-3xl aspect-[3/4] text-left hover-lift"
            >
              <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
              <div className="absolute inset-x-4 bottom-4 text-white">
                <span className="grid h-10 w-10 place-items-center rounded-full glass-dark mb-3 transition-transform group-hover:scale-110">
                  <Icon className="h-4 w-4" />
                </span>
                <p className="font-display text-lg">{label}</p>
                <p className="text-[11px] uppercase tracking-widest text-white/60 mt-1">Explore →</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}


export function PremiumPackages() {
  return (
    <section className="relative py-24 sm:py-32 bg-[oklch(0.97_0.008_240)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="eyebrow">Signature packages</p>
            <h2 className="fluid-h2 mt-4 font-display text-balance max-w-2xl">Journeys already composed for you</h2>
          </div>
          <Link to="/packages" className="group inline-flex items-center gap-2 text-sm font-medium">
            View all packages <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>

        {/* Asymmetrical grid */}
        <div className="grid gap-6 lg:grid-cols-12">
          <PackageCard p={packages[0]} className="lg:col-span-7" featured />
          <PackageCard p={packages[1]} className="lg:col-span-5" />
          <PackageCard p={packages[2]} className="lg:col-span-4" />
          <PackageCard p={packages[3]} className="lg:col-span-4" />
          <PackageCard p={packages[4]} className="lg:col-span-4" />
          <PackageCard p={packages[5]} className="lg:col-span-12" horizontal />
        </div>

        {/* Category chips */}
        <div className="mt-14 flex flex-wrap justify-center gap-2">
          {["Luxury Escapes","Adventure Tours","Beach Holidays","Family Vacations","Honeymoon","Wildlife Safaris","Hill Country","Island Adventures","Weekend Getaways"].map((c) => (
            <span key={c} className="rounded-full border border-border bg-white/60 backdrop-blur px-4 py-2 text-xs font-medium text-foreground/70 hover:bg-white transition cursor-pointer">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function PackageCard({
  p, className = "", featured = false, horizontal = false,
}: {
  p: (typeof packages)[number]; className?: string; featured?: boolean; horizontal?: boolean;
}) {
  return (
    <article className={`group relative overflow-hidden rounded-[32px] bg-white shadow-float hover-lift ${className} ${horizontal ? "md:grid md:grid-cols-[1.2fr_1fr]" : ""}`}>
      <div className={`relative overflow-hidden ${horizontal ? "aspect-[16/10] md:aspect-auto md:min-h-[360px]" : featured ? "aspect-[16/11]" : "aspect-[4/3]"}`}>
        <img src={p.img} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" loading="lazy" />
        <div className="absolute top-4 left-4 rounded-full glass-dark px-3 py-1 text-[10px] uppercase tracking-widest text-white">
          {p.cat}
        </div>
        <button aria-label="Save" className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full glass-dark text-white transition hover:bg-[color:var(--gold)] hover:text-[color:var(--ink)]">
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <div className="p-6 sm:p-8 flex flex-col">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>{p.duration}</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
          <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-[color:var(--gold)] text-[color:var(--gold)]" /> {p.rating}</span>
        </div>
        <h3 className={`font-display mt-3 ${featured || horizontal ? "text-3xl sm:text-4xl" : "text-2xl"} text-balance`}>
          {p.title}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.blurb}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {p.highlights.map((h) => (
            <li key={h} className="rounded-full bg-muted px-3 py-1 text-xs text-foreground/70">{h}</li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between pt-6 border-t border-border">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground">From</p>
            <p className="font-display text-2xl">{p.price}</p>
          </div>
          <Link to="/packages/$packageId" params={{ packageId: p.id }} className="group/btn inline-flex h-12 items-center gap-2 rounded-full bg-foreground pl-5 pr-2 text-sm text-background transition hover:bg-primary">
            View details
            <span className="grid h-8 w-8 place-items-center rounded-full bg-background text-foreground transition-transform group-hover/btn:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ────────────────────────────────────────────────────────── WHY US */
const reasons = [
  { icon: Sparkles,      title: "Luxury experiences",    body: "Handpicked stays, private guides, and quiet corners far from the crowd." },
  { icon: Users,         title: "Expert local guides",   body: "A network of resident storytellers who open doors we couldn't alone." },
  { icon: HeartHandshake, title: "Personalised trips",   body: "Every itinerary is composed to your pace, your taste, your rhythm." },
  { icon: Award,         title: "Best destinations",     body: "150+ places, each vetted twice a year by our travel designers." },
  { icon: ShieldCheck,   title: "Trusted service",       body: "24/7 concierge, transparent pricing, and quietly obsessive care." },
  { icon: Globe,         title: "Island-wide coverage",    body: "From southern surfing bays to misty mountain peaks — we go where you dream." },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full blur-3xl opacity-20"
        style={{ background: "var(--gradient-sunset)" }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <p className="eyebrow">Why Ceylon Escapes</p>
            <h2 className="fluid-h2 mt-4 font-display text-balance">Small in scale.<br />Devoted in craft.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
              We travel first, then we plan. Everything we offer, we've walked ourselves —
              which is why our itineraries feel more like a friend's recommendation than a brochure.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[["100K+", "Travelers"],["150+","Destinations"],["5,000+","Signature tours"],["98%","Happy travelers"]].map(([n, l]) => (
                <div key={l} className="rounded-2xl border border-border bg-white/60 backdrop-blur p-5">
                  <p className="font-display text-3xl">{n}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid gap-4 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, body }, i) => (
              <div key={title}
                className="group relative rounded-3xl border border-border bg-white p-8 hover-lift"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--ocean)]/8 text-[color:var(--ocean)] transition group-hover:bg-[color:var(--ocean)] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-2xl mt-6">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── GALLERY (masonry) */
const galleryImgs = [
  { src: "https://img.freepik.com/premium-photo/nuwara-eliya-tea-plantation-sri-lanka-nuwara-eliya-is-most-important-place-tea-plantation-production-sri-lanka_78361-9432.jpg?w=2000", alt: "Nuwara Eliya tea plantations, Sri Lanka", h: "h-[500px]" },
  { src: "https://cdn.audleytravel.com/-/-/79/1025644-galle-sri-lanka.jpg", alt: "Galle Fort colonial streets, Sri Lanka", h: "h-[420px]" },
  { src: "https://lp-cms-production.imgix.net/2019-06/GettyImages-497592261_high.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4", alt: "Ella Rock valley view, Sri Lanka", h: "h-[560px]" },
  { src: "https://www.traveltalktours.com/wp-content/uploads/2022/07/ritigala-1024x683.jpg", alt: "Ancient Ritigala ruins, Sri Lanka", h: "h-[380px]" },
  { src: "https://www.thenomadicvegan.com/wp-content/uploads/2018/12/Staircase-in-Yapahuwa-Sri-Lanka-615x922.jpg", alt: "Yapahuwa rock fortress staircase, Sri Lanka", h: "h-[540px]" },
  { src: "https://www.srilankalocaltours.com/wp-content/uploads/safari-trip-to-Yala-National-Park-1.jpg", alt: "Safari wildlife at Yala National Park, Sri Lanka", h: "h-[400px]" },
  { src: "https://tse1.mm.bing.net/th/id/OIP.lQ61EgbBiwGX7bkhX4hkOQHaJQ?r=0&w=800&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3", alt: "Sigiriya Rock Fortress, Sri Lanka", h: "h-[480px]" },
  { src: "https://media.istockphoto.com/id/2183695496/photo/man-and-woman-bonding-while-hiking-in-sri-lanka.jpg?s=612x612&w=0&k=20&c=6TkET72w3FkbbQiY9uYXwy5en_2X6egabQDLysmR428=", alt: "Couple hiking through Sri Lanka highlands", h: "h-[440px]" },
  { src: "https://static.cozycozy.com/images/catalog/bg2/horizontal-sri-lanka.jpg", alt: "Scenic Sri Lanka coastal panorama", h: "h-[360px]" },
  { src: "https://s29745.pcdn.co/wp-content/uploads/2019/04/Hikkaduwa-Beach-Sri-Lanka-.jpeg", alt: "Hikkaduwa Beach, Sri Lanka", h: "h-[460px]" },
  { src: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/471000/471485-Kandy-Sri-Lanka.jpg", alt: "Kandy city and lake view, Sri Lanka", h: "h-[520px]" },
  { src: "https://media.istockphoto.com/id/1195550182/photo/lions-rock-at-sigiriya-seen-from-pidurangala-rock-sri-lanka.jpg?s=170667a&w=0&k=20&c=1PlfQIo_uck8nQqVwSM86pni8Qe11M-0rG-PmTG9aFU=", alt: "Sigiriya Lion Rock from Pidurangala, Sri Lanka", h: "h-[500px]" },
  { src: "https://images.locationscout.net/2018/06/polonnaruwa-ruins-sri-lanka-ws3e.jpg?h=1100&q=83", alt: "Ancient Polonnaruwa ruins, Sri Lanka", h: "h-[420px]" },
];

/* Lightbox Modal */
function GalleryLightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: typeof galleryImgs;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const img = images[index];

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(10px)" }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute top-5 right-5 z-10 grid h-11 w-11 place-items-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 grid h-12 w-12 place-items-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next image"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 grid h-12 w-12 place-items-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition"
      >
        <ChevronRight className="h-7 w-7" />
      </button>

      {/* Image */}
      <div
        className="relative max-h-[90vh] max-w-[90vw] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="max-h-[82vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
          style={{ animation: "fade-up 0.3s cubic-bezier(0.22,1,0.36,1) both" }}
        />
        <p className="mt-4 text-center text-xs uppercase tracking-widest text-white/60">
          {img.alt} &nbsp;·&nbsp; {index + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}

export function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openAt = useCallback((i: number) => setLightboxIdx(i), []);
  const close   = useCallback(() => setLightboxIdx(null), []);
  const prev    = useCallback(() =>
    setLightboxIdx((i) => (i === null ? null : (i - 1 + galleryImgs.length) % galleryImgs.length)),
  []);
  const next    = useCallback(() =>
    setLightboxIdx((i) => (i === null ? null : (i + 1) % galleryImgs.length)),
  []);

  return (
    <section className="relative py-24 sm:py-32">
      {lightboxIdx !== null && (
        <GalleryLightbox
          images={galleryImgs}
          index={lightboxIdx}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow">Field notes</p>
          <h2 className="fluid-h2 mt-4 font-display text-balance">Frames from the road</h2>
          <p className="mt-4 text-muted-foreground">
            A quiet archive of moments — captured by our travelers and photographers on assignment.
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {galleryImgs.map((g, i) => (
            <figure
              key={i}
              className={`group mb-4 break-inside-avoid overflow-hidden rounded-3xl relative cursor-pointer ${g.h}`}
              onClick={() => openAt(i)}
            >
              <img
                src={g.src}
                alt={g.alt}
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
              {/* View Full button */}
              <button
                aria-label={`View full: ${g.alt}`}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 rounded-full glass px-4 py-2 text-[11px] font-medium uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 shadow-lg"
                style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)" }}
                onClick={(e) => { e.stopPropagation(); openAt(i); }}
              >
                <Maximize2 className="h-3 w-3" />
                View full
              </button>
              {/* Caption */}
              <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl glass-dark px-4 py-2 text-[11px] uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition">
                {g.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── STORIES */
export function TravelStories() {
  return (
    <section className="relative py-24 sm:py-32 bg-[oklch(0.97_0.008_240)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="eyebrow">The journal</p>
            <h2 className="fluid-h2 mt-4 font-display text-balance max-w-xl">Slow reading, from the road</h2>
          </div>
          <Link to="/stories" className="group inline-flex items-center gap-2 text-sm font-medium">
            All stories <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Feature story */}
          <article className="lg:col-span-7 group">
            <div className="relative overflow-hidden rounded-[32px] aspect-[4/3]">
              <img src={story1} alt="" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" loading="lazy" />
            </div>
            <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
              <span>Essay</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
              <span>12 min read</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
              <span>Spring 2026</span>
            </div>
            <h3 className="font-display text-3xl sm:text-5xl mt-4 text-balance">A month of slow mornings along the Amalfi Coast.</h3>
            <p className="mt-4 text-muted-foreground text-pretty leading-relaxed max-w-2xl">
              Our editor traded planes for a Fiat 500 and traced the coast from Weligama to Tangalle,
              stopping only for espresso, lemon groves, and the occasional swim before lunch.
            </p>
            <a className="mt-6 inline-flex items-center gap-2 text-sm font-medium group/link" href="#">
              Read the essay <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:rotate-45" />
            </a>
          </article>

          <div className="lg:col-span-5 flex flex-col gap-6">
            {[
              { tag: "Field notes", title: "The last light on a Maldivian sandbank", read: "6 min", img: hero },
              { tag: "Interview",   title: "Inside Sri Lanka's most beautiful boutique retreat",  read: "9 min", img: "https://theportuguesetraveler.com/wp-content/uploads/2024/09/ahu-bay-hotel-best-hotels-sri-lanka-13.jpg.webp" },
              { tag: "Guide",       title: "The finest hotels to stay in Colombo right now",  read: "11 min", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/9d/51/dd/cinnamon-grand-main-entrance.jpg?w=1200&h=-1&s=1" },
            ].map((s) => (
              <a key={s.title} href="#" className="group flex items-start gap-5 rounded-3xl border border-border bg-white p-4 hover-lift">
                <img src={s.img} alt="" className="h-24 w-32 rounded-2xl object-cover shrink-0" loading="lazy" />
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.tag} · {s.read}</p>
                  <p className="font-display text-xl mt-2 text-balance leading-snug">{s.title}</p>
                  <p className="mt-2 text-xs text-muted-foreground group-hover:text-foreground transition">Read →</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── TESTIMONIALS */
const allTestimonials = [
  { name: "Sarah Jenkins", country: "Sydney, AU", quote: "Every detail felt considered. The private guide who met us at dawn made the trip feel entirely ours." },
  { name: "James Whitmore", country: "London, UK", quote: "They understood the trip we wanted before we did. Ten days in the Hill Country that read like a novel." },
  { name: "Amara Okafor",   country: "Dubai, UAE", quote: "Yala in a small tented camp with guides who felt like old friends. Utterly unforgettable." },
  { name: "Oliver Chen",    country: "Singapore", quote: "A seamless journey. The boutique hotels they selected were hidden gems we'd never have found alone." },
  { name: "Emma Dubois",    country: "Paris, FR", quote: "Waking up to the misty tea plantations was surreal. Their local knowledge made our itinerary truly bespoke." },
  { name: "David Kim",      country: "New York, USA", quote: "Professional, attentive, and deeply passionate about their country. The best travel designers I've worked with." },
];

const baseRow1 = allTestimonials.slice(0, 3);
const baseRow2 = allTestimonials.slice(3, 6);
const marqueeRow1 = [...baseRow1, ...baseRow1, ...baseRow1, ...baseRow1];
const marqueeRow2 = [...baseRow2, ...baseRow2, ...baseRow2, ...baseRow2];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[oklch(0.16_0.03_250)] text-white">
      <div
        aria-hidden
        className="absolute -bottom-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "var(--gradient-luxe)" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16 text-center mx-auto">
          <p className="eyebrow text-white/50">Kind words</p>
          <h2 className="fluid-h2 mt-4 font-display text-balance">Told by the travelers themselves</h2>
        </div>

        {/* Marquee Container with edge fade mask */}
        <div 
          className="relative flex flex-col gap-6 overflow-hidden" 
          style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}
        >
          {/* Top Row (Scrolls Left) */}
          <div className="flex w-max animate-marquee items-center gap-6 hover:[animation-play-state:paused]">
            {marqueeRow1.map((t, i) => (
              <TestimonialCard key={`r1-${i}`} {...t} />
            ))}
          </div>

          {/* Bottom Row (Scrolls Right) */}
          <div className="flex w-max animate-marquee items-center gap-6 [animation-direction:reverse] hover:[animation-play-state:paused]">
            {marqueeRow2.map((t, i) => (
              <TestimonialCard key={`r2-${i}`} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, country, quote }: { name: string, country: string, quote: string }) {
  return (
    <div className="w-[340px] shrink-0 rounded-3xl border border-white/10 glass-dark p-6 shadow-sm transition hover:bg-white/10">
      <div className="flex items-center gap-3 mb-4">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-white font-display text-sm">
          {name.split(" ").map(s => s[0]).join("")}
        </div>
        <div>
          <p className="font-display text-sm font-medium text-white">{name}</p>
          <p className="text-[11px] text-white/60 uppercase tracking-wider mt-0.5">{country}</p>
        </div>
        <div className="ml-auto flex gap-0.5">
          {Array.from({ length: 5 }).map((_, k) => (
            <Star key={k} className="h-3.5 w-3.5 fill-[color:var(--gold)] text-[color:var(--gold)]" />
          ))}
        </div>
      </div>
      <p className="text-sm text-white/80 leading-relaxed text-pretty">
        "{quote}"
      </p>
    </div>
  );
}

/* ────────────────────────────────────────────────────────── NEWSLETTER */
export function Newsletter() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[40px] p-10 sm:p-16 text-white" style={{ background: "var(--gradient-luxe)" }}>
          <div aria-hidden className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div aria-hidden className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-[color:var(--gold)]/40 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-2 items-center">
            <div>
              <p className="eyebrow text-white/60">The Field Letter</p>
              <h2 className="fluid-h2 mt-4 font-display text-balance">Postcards from the road, once a month.</h2>
              <p className="mt-4 text-white/70 text-pretty max-w-md">
                A quiet dispatch of new destinations, seasonal itineraries, and reading from our writers on assignment.
              </p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="w-full">
              <div className="glass rounded-3xl sm:rounded-full p-2 sm:pl-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                <div className="flex flex-1 items-center gap-3 px-4 py-3 sm:p-0">
                  <Mail className="h-4 w-4 text-white/70 shrink-0" />
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 min-w-0 bg-transparent text-sm outline-none placeholder:text-white/60 text-white"
                  />
                </div>
                <button className="inline-flex h-12 w-full sm:w-auto items-center justify-between sm:justify-start gap-2 rounded-full bg-white pl-5 pr-2 text-sm font-medium text-[color:var(--ink)] transition hover:bg-[color:var(--gold)] shrink-0">
                  Subscribe
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[color:var(--ink)] text-white">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>
              </div>
              <p className="mt-3 text-xs text-white/50 px-2 text-center sm:text-left">No noise. Unsubscribe with one tap.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── ABOUT */
export function AboutSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-[oklch(0.97_0.008_240)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-[36px] aspect-[4/5] max-w-md">
              <img src={story1} alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-8 -right-4 sm:right-10 glass rounded-3xl p-6 shadow-luxe max-w-[220px] animate-float">
              <p className="eyebrow">Since 2012</p>
              <p className="mt-2 font-display text-3xl">14 years</p>
              <p className="text-xs text-muted-foreground mt-1">of quiet, careful journey design.</p>
            </div>
          </div>

          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="fluid-h2 mt-4 font-display text-balance">Travel, told the way we'd want to hear it.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
              Ceylon Escapes began with a small notebook and a habit — writing down the places we returned to.
              Fourteen years later, that notebook is a travel atelier of designers, guides, and photographers
              scattered across four continents, still writing things down.
            </p>

            <ul className="mt-10 space-y-6">
              {[
                { t: "Mission",  b: "To design travel that leaves you quieter, not busier." },
                { t: "Vision",   b: "A world where the finest journeys are the most personal ones." },
                { t: "Philosophy", b: "Slow enough to notice. Small enough to feel. Considered enough to remember." },
              ].map((x, i) => (
                <li key={x.t} className="flex gap-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--ocean)] text-white text-xs font-medium">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="font-display text-xl">{x.t}</p>
                    <p className="text-sm text-muted-foreground mt-1">{x.b}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── CONTACT */
export function ContactSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow">Say hello</p>
          <h2 className="fluid-h2 mt-4 font-display text-balance">Begin your next journey</h2>
          <p className="mt-4 text-muted-foreground">
            Tell us where you'd like to go — or where you've dreamed of going.
            One of our designers will write back within a day.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Info cards + map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass rounded-[28px] p-8 shadow-float">
              <p className="eyebrow">Atelier</p>
              <p className="font-display text-2xl mt-3">Ceylon Escapes Travel Atelier</p>
              <p className="text-sm text-muted-foreground mt-2">
                12 Galle Face Court<br />13100 Colombo 03, Sri Lanka
              </p>

              <div className="mt-6 space-y-4">
                {[
                  { i: Phone, l: "Call", v: "+33 4 42 00 00 00" },
                  { i: Mail,  l: "Write", v: "hello@ceylonescapes.lk" },
                  { i: MapPinned, l: "Visit", v: "By appointment" },
                ].map(({ i: Icon, l, v }) => (
                  <div key={l} className="flex items-center gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--ocean)]/8 text-[color:var(--ocean)]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{l}</p>
                      <p className="text-sm font-medium">{v}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-2">
                {[Instagram, Twitter, Facebook].map((I, i) => (
                  <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white text-foreground/70 hover:bg-foreground hover:text-background transition">
                    <I className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative overflow-hidden rounded-[28px] aspect-[16/10] shadow-float bg-gradient-to-br from-[oklch(0.9_0.03_240)] to-[oklch(0.85_0.05_190)]">
              <svg viewBox="0 0 100 60" className="absolute inset-0 h-full w-full opacity-50" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
                    <path d="M 4 0 L 0 0 0 4" fill="none" stroke="oklch(0.38 0.09 240 / 0.2)" strokeWidth="0.15" />
                  </pattern>
                </defs>
                <rect width="100" height="60" fill="url(#grid)" />
                <path d="M0,35 Q20,25 40,30 T80,28 T100,32" stroke="oklch(0.38 0.09 240 / 0.4)" strokeWidth="0.4" fill="none" />
                <path d="M0,45 Q30,50 50,42 T100,48" stroke="oklch(0.38 0.09 240 / 0.4)" strokeWidth="0.4" fill="none" />
              </svg>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative grid h-8 w-8 place-items-center">
                  <span className="absolute inset-0 rounded-full bg-[color:var(--gold)] opacity-60 animate-ping" />
                  <span className="relative grid h-8 w-8 place-items-center rounded-full bg-[color:var(--gold)] ring-4 ring-white">
                    <MapPin className="h-4 w-4 text-[color:var(--ink)]" />
                  </span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 glass rounded-full px-4 py-2 text-xs font-medium">
                Colombo 03 · Sri Lanka
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()} className="lg:col-span-7 rounded-[28px] border border-border bg-white p-8 sm:p-10 shadow-float">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" placeholder="Sarah Jenkins" />
              <Field label="Email" placeholder="you@somewhere.com" type="email" />
              <Field label="Destination in mind" placeholder="Kyoto, Iceland, somewhere new…" />
              <Field label="Travel dates" placeholder="Sept 2026 · 10 nights" />
            </div>
            <div className="mt-5">
              <label className="text-[11px] uppercase tracking-widest text-muted-foreground">Tell us a little</label>
              <textarea
                rows={5}
                placeholder="A short paragraph — the shape of the trip, who's coming, what you'd love to feel…"
                className="mt-2 w-full rounded-2xl border border-border bg-muted/40 px-5 py-4 text-sm outline-none focus:bg-white focus:border-foreground/40 transition resize-none"
              />
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">We'll write back within one working day.</p>
              <button className="group inline-flex h-14 items-center gap-2 rounded-full bg-foreground pl-7 pr-2 text-sm font-medium text-background transition hover:bg-primary">
                Send message
                <span className="grid h-10 w-10 place-items-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-widest text-muted-foreground">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 h-12 w-full rounded-full border border-border bg-muted/40 px-5 text-sm outline-none focus:bg-white focus:border-foreground/40 transition"
      />
    </label>
  );
}

/* ────────────────────────────────────────────────────────── PAGE HERO (for subroutes) */
export function PageHero({
  eyebrow, title, subtitle, image,
}: {
  eyebrow: string; title: string; subtitle: string; image: string;
}) {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden text-white">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover animate-ken-burns" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-44 pb-24">
        <div className="max-w-3xl animate-fade-up">
          <p className="eyebrow text-white/70">{eyebrow}</p>
          <h1 className="fluid-display font-display mt-6 text-balance">{title}</h1>
          <p className="mt-6 max-w-xl text-lg text-white/80 text-pretty">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
