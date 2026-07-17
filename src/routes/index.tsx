import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  Hero, FeaturedDestinations,
  PremiumPackages, WhyChooseUs, Gallery,
  Testimonials, Newsletter, AboutSection, ContactSection,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <FeaturedDestinations />
      <PremiumPackages />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Newsletter />
      <AboutSection />
      <ContactSection />
    </SiteLayout>
  );
}
