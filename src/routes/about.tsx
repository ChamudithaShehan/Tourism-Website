import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, AboutSection, WhyChooseUs, Testimonials } from "@/components/site/Sections";
import hero from "@/assets/dest-swiss.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ceylon Escapes" },
      { name: "description", content: "Ceylon Escapes is a small atelier of travel designers, guides, and photographers scattered across the island of Sri Lanka." },
      { property: "og:title", content: "About — Ceylon Escapes" },
      { property: "og:description", content: "A small atelier of travel designers, since 2012." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero
        eyebrow="Our story"
        title="Small in scale. Devoted in craft."
        subtitle="Ceylon Escapes began with a notebook — and a habit of writing down the places we returned to."
        image={hero}
      />
      <AboutSection />
      <WhyChooseUs />
      <Testimonials />
    </SiteLayout>
  ),
});
