import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  Hero, FeaturedDestinations, ExperienceCategories,
  PremiumPackages, WhyChooseUs, Gallery, TravelStories,
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
      <ExperienceCategories />
      <PremiumPackages />
      <WhyChooseUs />
      <Gallery />
      <TravelStories />
      <Testimonials />
      <Newsletter />
      <AboutSection />
      <ContactSection />
    </SiteLayout>
  );
}
