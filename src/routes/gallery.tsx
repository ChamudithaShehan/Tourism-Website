import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, Gallery, Newsletter } from "@/components/site/Sections";
const hero = "https://img.freepik.com/premium-photo/nuwara-eliya-tea-plantation-sri-lanka-nuwara-eliya-is-most-important-place-tea-plantation-production-sri-lanka_78361-9432.jpg?w=2000";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery —  Castle Cab " },
      { name: "description", content: "A quiet archive of frames from the road — captured by our travelers and photographers on assignment." },
      { property: "og:title", content: "Gallery —  Castle Cab " },
      { property: "og:description", content: "Frames from the road, quietly archived." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero
        eyebrow="Field notes"
        title="Frames from the road."
        subtitle="A quiet archive of moments — captured by our travelers and photographers on assignment."
        image={hero}
      />
      <Gallery />
      <Newsletter />
    </SiteLayout>
  ),
});
