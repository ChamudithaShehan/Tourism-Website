import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { packages } from "@/data/packages";
import { ArrowRight, Star, Clock, Tags } from "lucide-react";

export const Route = createFileRoute("/packages/$packageId")({
  loader: ({ params }) => {
    return packages.find((p) => p.id === params.packageId) || null;
  },
  component: PackageDetails,
});

function PackageDetails() {
  const pkg = Route.useLoaderData();

  if (!pkg) {
    return (
      <SiteLayout>
        <div className="pt-40 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="font-display text-4xl mb-4">Package not found</h1>
          <p className="text-muted-foreground">The requested itinerary could not be found.</p>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="relative pt-32 pb-16 min-h-[60vh] flex items-center">
        <img
          src={pkg.img}
          alt={pkg.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-white mt-12">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-widest text-white flex items-center gap-2">
              <Tags className="h-3.5 w-3.5" /> {pkg.cat}
            </span>
            <span className="rounded-full glass-dark px-4 py-1.5 text-xs text-white flex items-center gap-2">
              <Star className="h-3.5 w-3.5 fill-[color:var(--gold)] text-[color:var(--gold)]" /> {pkg.rating}
            </span>
            <span className="rounded-full glass-dark px-4 py-1.5 text-xs text-white flex items-center gap-2">
              <Clock className="h-3.5 w-3.5" /> {pkg.duration}
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight max-w-4xl text-balance">
            {pkg.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl text-pretty leading-relaxed">
            {pkg.blurb}
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              <h2 className="font-display text-3xl mb-6">Experience Highlights</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Embark on an unforgettable journey with our {pkg.title} package. 
                  Every detail of this {pkg.duration} experience has been thoughtfully curated 
                  by our travel designers to ensure a seamless and enriching adventure.
                </p>
                <p className="mt-4">
                  From the moment you arrive, you will be immersed in the unparalleled beauty and culture 
                  of the region. Whether you're seeking relaxation, adventure, or cultural discovery, 
                  this itinerary is designed to move at your pace.
                </p>
              </div>

              <div className="mt-12">
                <h3 className="font-display text-2xl mb-6">Key Inclusions</h3>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {pkg.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-3 p-4 rounded-2xl bg-muted/50 border border-border">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                      <span className="font-medium">{highlight}</span>
                    </li>
                  ))}
                  <li className="flex items-center gap-3 p-4 rounded-2xl bg-muted/50 border border-border">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span className="font-medium">24/7 dedicated concierge</span>
                  </li>
                  <li className="flex items-center gap-3 p-4 rounded-2xl bg-muted/50 border border-border">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span className="font-medium">Private airport transfers</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar / Booking Card */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 rounded-[32px] border border-border bg-card p-8 shadow-float">
                <p className="eyebrow mb-2">Journey Investment</p>
                <div className="flex items-end gap-2 mb-6">
                  <span className="font-display text-4xl">{pkg.price}</span>
                  <span className="text-sm text-muted-foreground pb-1">/ person</span>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between py-3 border-b border-border text-sm">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{pkg.duration}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border text-sm">
                    <span className="text-muted-foreground">Category</span>
                    <span className="font-medium">{pkg.cat}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border text-sm">
                    <span className="text-muted-foreground">Group Size</span>
                    <span className="font-medium">Private (2+ guests)</span>
                  </div>
                </div>

                <button className="w-full inline-flex h-14 items-center justify-center gap-2 rounded-full bg-foreground text-background font-medium hover:bg-primary transition">
                  Request this itinerary
                </button>
                <p className="text-center text-xs text-muted-foreground mt-4">
                  Fully customizable. No commitment required.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
