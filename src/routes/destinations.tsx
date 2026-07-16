import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, FeaturedDestinations, Newsletter } from "@/components/site/Sections";

const hero = "https://loremflickr.com/1920/1280/srilanka,beach/all";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — Ceylon Escapes" },
      { name: "description", content: "150+ carefully vetted destinations across Sri Lanka, from pristine southern beaches to misty tea trails." },
      { property: "og:title", content: "Destinations — Ceylon Escapes" },
      { property: "og:description", content: "150+ vetted destinations across the teardrop island." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero
        eyebrow="The atlas"
        title="Every place, personally known."
        subtitle="A living collection of 150+ destinations — each one walked, tasted, and quietly beloved by our travel designers."
        image={hero}
      />
      <FeaturedDestinations />
      <Newsletter />
    </SiteLayout>
  ),
});
