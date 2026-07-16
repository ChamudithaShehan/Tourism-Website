import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, ContactSection, Newsletter } from "@/components/site/Sections";
import hero from "@/assets/dest-bali.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ceylon Escapes" },
      { name: "description", content: "Tell us where you'd like to go — one of our travel designers will write back within a day." },
      { property: "og:title", content: "Contact — Ceylon Escapes" },
      { property: "og:description", content: "Begin your next journey with Ceylon Escapes." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero
        eyebrow="Say hello"
        title="Begin your next journey."
        subtitle="Tell us where you'd like to go — or where you've dreamed of going. We'll write back within a day."
        image={hero}
      />
      <ContactSection />
      <Newsletter />
    </SiteLayout>
  ),
});
