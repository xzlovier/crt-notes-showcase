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
import workBrand from "@/assets/work-brand.jpg";
import workDigital from "@/assets/work-digital.jpg";
import workClient from "@/assets/work-client.jpg";


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

type Project = {
  title: string;
  description: string;
  image: string;
  year: string;
  role: string;
  story: string;
};

type Category = {
  id: string;
  label: string;
  color: string;
  tabText: string;
  position: { left: string; top: string; rotate: string };
  projects: Project[];
};

const categories: Category[] = [
  {
    id: "digital-products",
    label: "Digital Products",
    color: "bg-sticky-blue",
    tabText: "text-crt-dark",
    position: { left: "21%", top: "67%", rotate: "-4deg" },
    projects: [
      {
        title: "Lumen Dashboard",
        description: "A data-light analytics interface for creative teams.",
        image: workDigital,
        year: "2025",
        role: "Product design, design system",
        story:
          "Lumen strips analytics back to the few numbers a studio actually acts on. The interface leans on a dark, low-glare surface, a single accent colour for signal, and generous type sizing so the dashboard reads well on a wall screen as easily as on a laptop.",
      },
      {
        title: "Fieldtrip App",
        description: "Mobile travel companion focused on serendipitous discovery.",
        image: workDigital,
        year: "2024",
        role: "UX, interaction design",
        story:
          "Fieldtrip replaces itineraries with prompts. Each screen offers one nearby idea at a time, with a soft map layer underneath, encouraging people to wander instead of optimise their day.",
      },
      {
        title: "Atelier Design System",
        description: "A reusable component library and documentation site.",
        image: workDigital,
        year: "2024",
        role: "Design systems lead",
        story:
          "Atelier packages tokens, components and editorial guidance into one living reference. Every component ships with usage rules written in plain language, so engineers and designers argue about product, not padding.",
      },
    ],
  },
  {
    id: "client-work",
    label: "Client Work",
    color: "bg-sticky-pink",
    tabText: "text-crt-dark",
    position: { left: "62%", top: "67%", rotate: "2deg" },
    projects: [
      {
        title: "Bloom Editorial",
        description: "Art direction and layout for a quarterly culture magazine.",
        image: workClient,
        year: "2025",
        role: "Art direction",
        story:
          "Bloom mixes a high-contrast serif with hand-set pull quotes and full-bleed photography. Each issue changes accent colour while the grid stays fixed, giving the magazine variety without losing its shelf identity.",
      },
      {
        title: "Forma Architects",
        description: "Website and portfolio system for a boutique architecture firm.",
        image: workClient,
        year: "2024",
        role: "Web design, build",
        story:
          "Forma needed a site that behaved like a portfolio book: quiet chrome, huge imagery, and captions that carry the technical detail. Projects are entered through a single scrolling index rather than a menu.",
      },
      {
        title: "Resonance Festival",
        description: "Campaign identity, posters, and digital experiences.",
        image: workClient,
        year: "2023",
        role: "Identity, campaign",
        story:
          "The Resonance system is built from one waveform motif that stretches and compresses across posters, tickets and stage screens, so the identity feels composed rather than copy-pasted across formats.",
      },
    ],
  },
  {
    id: "brand-systems",
    label: "Brand Systems",
    color: "bg-sticky-yellow",
    tabText: "text-crt-dark",
    position: { left: "62%", top: "9%", rotate: "3deg" },
    projects: [
      {
        title: "Nova Studios Identity",
        description: "A modular wordmark and typographic system for a film studio.",
        image: workBrand,
        year: "2025",
        role: "Brand identity",
        story:
          "Nova's wordmark is cut from a single geometric grid so it can be rebuilt at any scale, from a title card to a building sign. The system pairs it with a restrained cream-on-navy palette and one optical accent.",
      },
      {
        title: "Kora Skincare",
        description: "Minimalist packaging, palette, and editorial brand guidelines.",
        image: workBrand,
        year: "2024",
        role: "Packaging, guidelines",
        story:
          "Kora's packaging uses uncoated stock, a tight type hierarchy and no illustration at all. The guidelines read like an editorial style guide, with rules about tone of voice sitting beside colour specs.",
      },
      {
        title: "Museum of Tomorrow",
        description: "Exhibition identity across print, digital, and environmental graphics.",
        image: workBrand,
        year: "2023",
        role: "Exhibition identity",
        story:
          "The identity had to survive at 3cm on a ticket and 3m on a wall. A flexible arc motif carries wayfinding, signage and the exhibition catalogue, adapting weight to the surface it lives on.",
      },
    ],
  },
];

function Index() {
  const [openFolder, setOpenFolder] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const openCategory = (id: string) => {
    setOpenFolder(id);
    requestAnimationFrame(() =>
      projectsRef.current?.scrollIntoView({ behavior: "smooth" }),
    );
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero: CRT workspace */}
      <section className="relative min-h-screen w-full overflow-hidden px-4 py-6 md:px-8 lg:px-12">
        <div className="relative mx-auto aspect-video w-full max-w-[1400px]">
          <img
            src={deskCrtSetup}
            alt="Retro beige CRT monitor on a clean wooden desk with colorful sticky notes"
            className="absolute inset-0 h-full w-full object-cover"
            width={1920}
            height={1088}
            loading="eager"
            decoding="async"
          />

          <div
            className="crt-scanlines crt-glow animate-soft-flicker absolute flex flex-col items-center justify-center bg-crt-dark"
            style={{ left: "28%", top: "13%", width: "44%", height: "62%" }}
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

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => openCategory(category.id)}
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

          <button
            onClick={scrollToProjects}
            className="absolute bottom-[5%] left-1/2 z-20 -translate-x-1/2 rounded-full bg-neon-green px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-crt-dark shadow-[0_0_24px_rgba(74,255,128,0.45)] transition-all hover:scale-105 hover:shadow-[0_0_36px_rgba(74,255,128,0.6)] md:px-7 md:py-3 md:text-sm"
          >
            Scroll to Explore
          </button>
        </div>
      </section>

      {/* Folder stack */}
      <section
        ref={projectsRef}
        className="mx-auto max-w-4xl px-5 py-24 md:py-32"
        aria-label="Project categories"
      >
        <div className="mb-14 text-center">
          <h2 className="font-serif text-3xl font-semibold italic text-foreground md:text-4xl">
            Selected Work
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Open a folder to browse the projects inside.
          </p>
        </div>

        <div className="flex flex-col">
          {categories.map((category, index) => {
            const isOpen = openFolder === category.id;
            return (
              <div
                key={category.id}
                className={`folder group relative ${isOpen ? "z-30" : ""}`}
                style={{
                  marginTop: index === 0 ? 0 : isOpen ? "1.5rem" : "-1.25rem",
                  zIndex: isOpen ? 30 : index + 1,
                }}
              >
                {/* Folder tab */}
                <button
                  onClick={() => setOpenFolder(isOpen ? null : category.id)}
                  aria-expanded={isOpen}
                  className={`relative ml-6 flex h-11 items-center rounded-t-xl px-7 text-left ${category.color} ${category.tabText} shadow-[0_-4px_18px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out group-hover:-translate-y-1.5 md:ml-10`}
                  style={{ marginLeft: `${1.5 + index * 3.5}rem` }}
                >
                  <span className="font-sans text-xs font-bold uppercase tracking-[0.18em] md:text-sm">
                    {category.label}
                  </span>
                </button>

                {/* Folder body */}
                <div
                  onClick={() => !isOpen && setOpenFolder(category.id)}
                  className={`-mt-px rounded-2xl rounded-tl-none ${category.color} p-1.5 shadow-[0_18px_40px_rgba(0,0,0,0.45)] transition-transform duration-300 ease-out group-hover:-translate-y-1.5 ${isOpen ? "" : "cursor-pointer"}`}
                >
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="space-y-3 rounded-xl bg-card/95 p-3 md:p-4">
                        {category.projects.map((project) => (
                          <button
                            key={project.title}
                            onClick={() => setActiveProject(project)}
                            className="flex w-full items-center gap-4 rounded-lg border border-border bg-background p-3 text-left transition-all hover:-translate-y-0.5 hover:border-neon-green/50 hover:shadow-lg"
                          >
                            <img
                              src={project.image}
                              alt={`${project.title} artwork`}
                              width={1024}
                              height={768}
                              loading="lazy"
                              className="h-16 w-24 flex-none rounded-md object-cover md:h-20 md:w-32"
                            />
                            <span className="min-w-0">
                              <span className="block font-sans text-sm font-semibold text-foreground md:text-base">
                                {project.title}
                              </span>
                              <span className="mt-1 block text-xs leading-relaxed text-muted-foreground md:text-sm">
                                {project.description}
                              </span>
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Project detail modal */}
      <Dialog
        open={!!activeProject}
        onOpenChange={() => setActiveProject(null)}
      >
        {activeProject && (
          <DialogContent className="max-w-2xl border-border bg-card text-card-foreground">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl font-semibold italic">
                {activeProject.title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {activeProject.role} — {activeProject.year}
              </DialogDescription>
            </DialogHeader>
            <img
              src={activeProject.image}
              alt={`${activeProject.title} full artwork`}
              width={1024}
              height={768}
              loading="lazy"
              className="mt-2 w-full rounded-lg object-cover"
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {activeProject.story}
            </p>
          </DialogContent>
        )}
      </Dialog>
    </main>
  );
}
