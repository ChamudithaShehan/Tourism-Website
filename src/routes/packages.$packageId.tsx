import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { packages } from "@/data/packages";
import {
  ArrowUpRight, Star, Clock, MapPin,
  CheckCircle, XCircle, ChevronLeft, CalendarDays,
  Users, ShieldCheck, Plane, Coffee, Wifi, Car,
} from "lucide-react";

export const Route = createFileRoute("/packages/$packageId")({
  loader: ({ params }) => {
    return packages.find((p) => p.id === params.packageId) || null;
  },
  head: ({ loaderData: pkg }) => ({
    meta: pkg
      ? [
          { title: `${pkg.title} —  Castle Cab ` },
          { name: "description", content: pkg.blurb },
        ]
      : [{ title: "Package —  Castle Cab " }],
  }),
  component: PackageDetails,
});

const vehicles = [
  { value: "sedan",      label: "Standard Sedan",       seats: 3,  ac: true,  note: "Toyota Corolla or similar" },
  { value: "suv",        label: "Luxury SUV",            seats: 4,  ac: true,  note: "Toyota Prado or similar" },
  { value: "minivan",    label: "Minivan",               seats: 7,  ac: true,  note: "Toyota KDH or similar" },
  { value: "luxury-van", label: "Luxury Van",            seats: 10, ac: true,  note: "Mercedes Sprinter or similar" },
  { value: "helicopter", label: "Helicopter Transfer",   seats: 4,  ac: false, note: "Scenic aerial transfer" },
];

function VehicleSelect() {
  const [selected, setSelected] = useState("suv");
  const vehicle = vehicles.find((v) => v.value === selected)!;

  return (
    <div className="mb-2">
      <label
        htmlFor="vehicle-select"
        className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-3"
      >
        <Car className="h-3.5 w-3.5" />
        Choose your vehicle
      </label>

      {/* Select */}
      <div className="relative">
        <select
          id="vehicle-select"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="w-full appearance-none rounded-2xl border border-border bg-muted/40 px-4 py-3 pr-10 text-sm font-medium text-foreground cursor-pointer transition focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)] focus:border-[color:var(--gold)] hover:border-[color:var(--gold)]"
        >
          {vehicles.map((v) => (
            <option key={v.value} value={v.value}>
              {v.label}
            </option>
          ))}
        </select>
        {/* Chevron */}
        <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>

      {/* Vehicle detail pill */}
      <div className="mt-3 flex items-center justify-between rounded-xl bg-muted/50 border border-border px-4 py-2.5 text-xs text-muted-foreground">
        <span>{vehicle.note}</span>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <Users className="h-3 w-3" /> {vehicle.seats} seats
          </span>
          {vehicle.ac && (
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-emerald-700 font-medium">AC</span>
          )}
        </div>
      </div>
    </div>
  );
}

function PackageDetails() {

  const pkg = Route.useLoaderData();

  if (!pkg) {
    return (
      <SiteLayout>
        <div className="pt-40 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center gap-4">
          <h1 className="font-display text-4xl">Package not found</h1>
          <p className="text-muted-foreground">The requested itinerary could not be found.</p>
          <Link to="/packages" className="mt-4 inline-flex h-12 items-center gap-2 rounded-full bg-foreground text-background px-6 text-sm font-medium hover:bg-[#f5b83d] hover:text-[#0B0B0B] transition">
            Browse all packages
          </Link>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>

      {/* ════════════════════════════════════════ HERO */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        {/* Background image with subtle zoom */}
        <img
          src={pkg.img}
          alt={pkg.title}
          className="absolute inset-0 h-full w-full object-cover scale-105"
          style={{ animation: "ken-burns 20s ease-out both" }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* Decorative glow */}


        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-40">
          {/* Breadcrumb */}
          <Link
            to="/packages"
            className="mb-10 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs uppercase tracking-widest text-white/70 hover:text-white transition"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            All packages
          </Link>

          {/* Badges row */}
          <div className="flex flex-wrap gap-3 mb-7">
            <span className="rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-widest text-white">
              {pkg.cat}
            </span>
            <span className="rounded-full glass-dark px-4 py-1.5 text-xs text-white flex items-center gap-1.5">
              <Star className="h-3 w-3 fill-[color:var(--gold)] text-[color:var(--gold)]" />
              {pkg.rating} · Exceptional
            </span>
            <span className="rounded-full glass-dark px-4 py-1.5 text-xs text-white flex items-center gap-1.5">
              <Clock className="h-3 w-3" /> {pkg.duration}
            </span>
            {pkg.location && (
              <span className="rounded-full glass-dark px-4 py-1.5 text-xs text-white flex items-center gap-1.5">
                <MapPin className="h-3 w-3" /> {pkg.location}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-medium tracking-tight text-white text-balance max-w-4xl leading-[0.92]">
            {pkg.title}
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl text-pretty leading-relaxed">
            {pkg.blurb}
          </p>

          {/* Quick stats bar */}
          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { icon: Plane, label: "Private transfers", value: "Included" },
              { icon: Users, label: "Group size", value: "Private (2+)" },
              { icon: Coffee, label: "Meals", value: "Selected" },
              { icon: Wifi,  label: "Concierge", value: "24 / 7" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full glass-dark text-white">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/50">{label}</p>
                  <p className="text-sm font-medium text-white">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ MAIN CONTENT */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* ── Left / Main ── */}
            <div className="lg:col-span-8 space-y-20">

              {/* Highlights */}
              <div>
                <p className="eyebrow mb-3">Curated for you</p>
                <h2 className="font-display text-4xl mb-10">Experience Highlights</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[...pkg.highlights, "24/7 dedicated concierge", "Private airport transfers"].map((h) => (
                    <div
                      key={h}
                      className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-[color:var(--gold)] hover:shadow-float transition-all duration-300"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/8 text-primary group-hover:bg-[color:var(--gold)] group-hover:text-[color:var(--ink)] transition-colors">
                        <CheckCircle className="h-4 w-4" />
                      </span>
                      <span className="font-medium text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Itinerary ── */}
              {pkg.itinerary && pkg.itinerary.length > 0 && (
                <div>
                  <p className="eyebrow mb-3">Day by day</p>
                  <h2 className="font-display text-4xl mb-12">Your Itinerary</h2>

                  <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-[19px] top-3 bottom-3 w-px"
                      style={{ background: "linear-gradient(to bottom, var(--gold), transparent)" }}
                    />

                    <div className="space-y-0">
                      {pkg.itinerary.map((day, i) => (
                        <div key={i} className="group relative flex gap-8 pb-12">
                          {/* Number circle */}
                          <div className="relative shrink-0">
                            <span
                              className="grid h-10 w-10 place-items-center rounded-full border-2 text-xs font-bold transition-all duration-300 group-hover:scale-110"
                              style={{
                                borderColor: "var(--gold)",
                                background: i % 2 === 0 ? "var(--gold)" : "var(--background)",
                                color: i % 2 === 0 ? "var(--ink)" : "var(--gold)",
                              }}
                            >
                              {i + 1}
                            </span>
                          </div>

                          {/* Content */}
                          <div className="flex-1 pt-1.5 pb-2 border-b border-border/50 group-last:border-0">
                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{day.day}</p>
                            <h3 className="font-display text-2xl mb-3 group-hover:text-[color:var(--gold)] transition-colors">{day.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-pretty">{day.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ── Includes / Excludes ── */}
              {(pkg.includes || pkg.excludes) && (
                <div>
                  <p className="eyebrow mb-3">What's covered</p>
                  <h2 className="font-display text-4xl mb-10">Inclusions & Exclusions</h2>
                  <div className="grid sm:grid-cols-2 gap-8">
                    {pkg.includes && (
                      <div className="rounded-3xl border border-emerald-100 bg-emerald-50/50 p-6">
                        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700 mb-5">Included</p>
                        <ul className="space-y-3">
                          {pkg.includes.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm">
                              <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-emerald-500" />
                              <span className="text-foreground/80">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {pkg.excludes && (
                      <div className="rounded-3xl border border-rose-100 bg-rose-50/50 p-6">
                        <p className="text-xs font-semibold uppercase tracking-widest text-rose-600 mb-5">Not included</p>
                        <ul className="space-y-3">
                          {pkg.excludes.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm">
                              <XCircle className="h-4 w-4 mt-0.5 shrink-0 text-rose-400" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>{/* /main */}

            {/* ── Sidebar / Booking Card ── */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 overflow-hidden rounded-[36px] shadow-luxe">

                {/* Card top — image strip */}
                <div className="relative h-44 overflow-hidden">
                  <img src={pkg.img} alt="" className="h-full w-full object-cover scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5">
                    <p className="text-[10px] uppercase tracking-widest text-white/60 mb-0.5">From</p>
                    <p className="font-display text-3xl text-white">{pkg.price}</p>
                    <p className="text-xs text-white/50">per person · all inclusive</p>
                  </div>
                </div>

                {/* Card body */}
                <div className="bg-card border border-border border-t-0 rounded-b-[36px] p-7">

                  {/* Details grid */}
                  <div className="space-y-0 mb-7">
                    {[
                      { icon: Clock, label: "Duration", value: pkg.duration },
                      { icon: MapPin, label: "Location", value: pkg.location || "Sri Lanka" },
                      { icon: Users, label: "Group", value: "Private (2+ guests)" },
                      { icon: CalendarDays, label: "Available", value: "Year-round" },
                      { icon: Star, label: "Rating", value: `${pkg.rating} / 5.0`, gold: true },
                    ].map(({ icon: Icon, label, value, gold }) => (
                      <div key={label} className="flex items-center justify-between py-3.5 border-b border-border last:border-0 text-sm">
                        <span className="text-muted-foreground flex items-center gap-2">
                          <Icon className={`h-3.5 w-3.5 ${gold ? "fill-[color:var(--gold)] text-[color:var(--gold)]" : ""}`} />
                          {label}
                        </span>
                        <span className="font-medium text-right text-xs sm:text-sm max-w-[140px]">{value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Vehicle Select */}
                  <VehicleSelect />

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="group flex w-full h-14 items-center justify-between rounded-full bg-foreground pl-6 pr-2 text-sm font-medium text-background hover:bg-[#f5b83d] hover:text-[#0B0B0B] transition mt-5"
                  >
                    Request this itinerary
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>

                  <p className="mt-4 text-center text-[11px] text-muted-foreground flex items-center justify-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Fully customizable · No commitment required
                  </p>
                </div>
              </div>

              {/* Other packages */}
              <div className="mt-8">
                <p className="eyebrow mb-4 px-1">You may also like</p>
                <div className="space-y-3">
                  {packages
                    .filter((p) => p.id !== pkg.id)
                    .slice(0, 3)
                    .map((p) => (
                      <Link
                        key={p.id}
                        to="/packages/$packageId"
                        params={{ packageId: p.id }}
                        className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-3 hover:border-[color:var(--gold)] hover:shadow-float transition-all"
                      >
                        <img
                          src={p.img}
                          alt={p.title}
                          className="h-16 w-20 rounded-xl object-cover shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{p.cat}</p>
                          <p className="font-display text-base leading-tight mt-0.5 group-hover:text-[color:var(--gold)] transition-colors">{p.title}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{p.duration} · {p.price}</p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>

            </div>{/* /sidebar */}

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ BOTTOM CTA */}
      <section
        className="relative py-24 text-white overflow-hidden bg-foreground"
      >

        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <p className="eyebrow text-white/60 mb-4">Ready to begin?</p>
          <h2 className="font-display text-4xl sm:text-6xl text-balance mb-6">
            Let's plan your perfect journey.
          </h2>
          <p className="text-white/70 text-pretty leading-relaxed mb-10 max-w-xl mx-auto">
            Every itinerary is a starting point. Our travel designers will shape it
            around your dates, interests, and pace — at no extra charge.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex h-14 items-center gap-2 rounded-full bg-white pl-7 pr-3 text-sm font-medium text-[color:var(--ink)] hover:bg-[color:var(--gold)] transition"
            >
              Start planning
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--ink)] text-white">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              to="/packages"
              className="inline-flex h-14 items-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 text-sm font-medium text-white backdrop-blur hover:bg-white/20 transition"
            >
              Browse all packages
            </Link>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}
