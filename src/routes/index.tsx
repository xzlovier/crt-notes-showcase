import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import deskCrtSetup from "@/assets/desk-crt-setup.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Design Portfolio — Retro CRT Workspace" },
      {
        name: "description",
        content:
          "A curated design portfolio organized like a retro CRT workspace: brand systems, digital products, and client work.",
      },
      { property: "og:title", content: "Design Portfolio — Retro CRT Workspace" },
      {
        property: "og:description",
        content:
          "A curated design portfolio organized like a retro CRT workspace.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const categories = [
  {
    id: "brand-systems",
    label: "Brand Systems",
    color: "bg-sticky-blue",
    position: { left: "62%", top: "9%", rotate: "3deg" },
    projects: [
      {
        title: "Nova Studios Identity",
        description:
          "A modular wordmark and typographic system for a film production studio.",
      },
      {
        title: "Kora Skincare",
        description:
          "Minimalist packaging, color palette, and editorial brand guidelines.",
      },
      {
        title: "Museum of Tomorrow",
        description:
          "Exhibition identity spanning print, digital, and environmental graphics.",
      },
    ],
  },
  {
    id: "digital-products",
    label: "Digital Products",
    color: "bg-sticky-yellow",
    position: { left: "21%", top: "67%", rotate: "-4deg" },
    projects: [
      {
        title: "Lumen Dashboard",
        description:
          "A data-light analytics interface for creative teams.",
      },
      {
        title: "Fieldtrip App",
        description:
          "Mobile travel companion focused on serendipitous discovery.",
      },
      {
        title: "Atelier Design System",
        description:
          "A reusable component library and documentation site.",
      },
    ],
  },
  {
    id: "client-work",
    label: "Client Work",
    color: "bg-sticky-pink",
    position: { left: "62%", top: "67%", rotate: "2deg" },
    projects: [
      {
        title: "Bloom Editorial",
        description:
          "Art direction and layout for a quarterly culture magazine.",
      },
      {
        title: "Forma Architects",
        description:
          "Website and portfolio system for a boutique architecture firm.",
      },
      {
        title: "Resonance Festival",
        description:
          "Campaign identity, posters, and digital experiences.",
      },
    ],
  },
];

function Index() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const active = categories.find((c) => c.id === activeCategory);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero: CRT workspace */}
      <section className="relative min-h-screen w-full overflow-hidden px-4 py-6 md:px-8 lg:px-12">
        <div className="relative mx-auto aspect-video w-full max-w-[1400px]">
          {/* Desk + monitor photograph */}
          <img
            src={deskCrtSetup}
            alt="Retro beige CRT monitor on a clean wooden desk with colorful sticky notes"
            className="absolute inset-0 h-full w-full object-cover"
            width={1920}
            height={1088}
            loading="eager"
            decoding="async"
          />

          {/* CRT screen content overlay */}
          <div
            className="crt-scanlines crt-glow animate-soft-flicker absolute flex flex-col items-center justify-center bg-crt-dark"
            style={{
              left: "28%",
              top: "13%",
              width: "44%",
              height: "62%",
            }}
          >
            <div className="z-20 flex flex-col items-center gap-3 px-4 text-center md:gap-4">
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/60 md:text-xs lg:text-sm">
                Design Portfolio
              </span>
              <h1 className="font-serif text-3xl font-semibold italic leading-[0.95] text-neon-green neon-glow md:text-5xl lg:text-6xl">
                how i ORGANIZE
              </h1>
              <p className="max-w-[18ch] text-sm font-light leading-snug text-white/90 md:text-base lg:text-lg">
                projects, content, client work
              </p>
            </div>
          </div>

          {/* Sticky note navigation */}
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`sticky-note ${category.color}`}
              style={{
                left: category.position.left,
                top: category.position.top,
                rotate: category.position.rotate,
              }}
              aria-label={`Open ${category.label} projects`}
            >
              <span className="font-sans text-sm font-semibold leading-tight md:text-base">
                {category.label}
              </span>
            </button>
          ))}

          {/* Scroll to explore button */}
          <button
            onClick={scrollToProjects}
            className="absolute bottom-[5%] left-1/2 z-20 -translate-x-1/2 rounded-full bg-neon-green px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-crt-dark shadow-[0_0_24px_rgba(74,255,128,0.45)] transition-all hover:scale-105 hover:shadow-[0_0_36px_rgba(74,255,128,0.6)] md:px-7 md:py-3 md:text-sm"
          >
            Scroll to Explore
          </button>
        </div>
      </section>

      {/* Project details section */}
      <section
        ref={projectsRef}
        className="mx-auto max-w-6xl px-6 py-24 md:py-32"
        aria-label="Project categories"
      >
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-semibold italic text-foreground md:text-4xl">
            Selected Work
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Click a sticky note above, or browse each category below.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className="group cursor-pointer rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-2 hover:shadow-xl"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActiveCategory(category.id);
                }
              }}
            >
              <div className={`mb-4 h-3 w-12 rounded-full ${category.color}`} />
              <h3 className="font-serif text-xl font-semibold text-card-foreground">
                {category.label}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {category.projects.length} projects
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Project modal */}
      <Dialog open={!!active} onOpenChange={() => setActiveCategory(null)}>
        {active && (
          <DialogContent className="max-w-2xl border-border bg-card text-card-foreground">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl font-semibold">
                {active.label}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Selected projects from this category.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 space-y-6">
              {active.projects.map((project, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-border bg-background p-5"
                >
                  <h4 className="font-sans text-base font-semibold text-foreground">
                    {project.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </main>
  );
}
