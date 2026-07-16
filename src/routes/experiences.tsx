import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, ExperienceCategories, Gallery, Newsletter } from "@/components/site/Sections";
import hero from "@/assets/dest-kyoto.jpg";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences — Ceylon Escapes" },
      { name: "description", content: "Ten ways to travel with Ceylon Escapes — adventure, luxury, wildlife, culture, and everything in between." },
      { property: "og:title", content: "Experiences — Ceylon Escapes" },
      { property: "og:description", content: "Ten ways to travel with Ceylon Escapes." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero
        eyebrow="Ways to travel"
        title="Ten worlds. One thoughtful atlas."
        subtitle="Choose the shape of your journey — a slow retreat, a wildlife encounter, or a route across continents."
        image={hero}
      />
      <ExperienceCategories />
      <Gallery />
      <Newsletter />
    </SiteLayout>
  ),
});
