import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, TravelStories, Testimonials, Newsletter } from "@/components/site/Sections";
const hero = "https://s29745.pcdn.co/wp-content/uploads/2019/04/Hikkaduwa-Beach-Sri-Lanka-.jpeg";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Stories — Ceylon Escapes" },
      { name: "description", content: "Slow reading from the road — essays, field notes, and interviews from our writers on assignment." },
      { property: "og:title", content: "Stories — Ceylon Escapes" },
      { property: "og:description", content: "Slow reading from the road." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero
        eyebrow="The journal"
        title="Slow reading, from the road."
        subtitle="Essays, field notes, and interviews — written by the people we travel with."
        image={hero}
      />
      <TravelStories />
      <Testimonials />
      <Newsletter />
    </SiteLayout>
  ),
});
