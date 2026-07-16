import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, PremiumPackages, WhyChooseUs, Testimonials } from "@/components/site/Sections";
const hero = "https://www.travel-gallery.co.uk/sites/default/files/img/jungle-beach-home-1_1.jpg";

export const Route = createFileRoute("/packages/")({
  head: () => ({
    meta: [
      { title: "Packages — Ceylon Escapes" },
      { name: "description", content: "Signature journeys composed by Ceylon Escapes — from southern beaches to Yala safaris and Kandy slow cities." },
      { property: "og:title", content: "Packages — Ceylon Escapes" },
      { property: "og:description", content: "Signature journeys composed by our travel designers." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero
        eyebrow="Signature packages"
        title="Journeys already composed."
        subtitle="A quiet library of itineraries — each one adjustable to your pace, your taste, your rhythm."
        image={hero}
      />
      <PremiumPackages />
      <WhyChooseUs />
      <Testimonials />
    </SiteLayout>
  ),
});
