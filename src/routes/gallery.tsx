import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, Gallery, Newsletter } from "@/components/site/Sections";
import hero from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Ceylon Escapes" },
      { name: "description", content: "A quiet archive of frames from the road — captured by our travelers and photographers on assignment." },
      { property: "og:title", content: "Gallery — Ceylon Escapes" },
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
