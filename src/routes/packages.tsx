import { createFileRoute, Outlet } from "@tanstack/react-router";

// This file is the LAYOUT for all /packages/* routes.
// The actual listing content lives in packages.index.tsx
// The detail content lives in packages.$packageId.tsx
export const Route = createFileRoute("/packages")({
  component: () => <Outlet />,
});
