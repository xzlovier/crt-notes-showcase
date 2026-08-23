import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import realisticPcImage from "@/assets/realistic-pc.png";
import retroBaseImage from "@/assets/retro-base-transparent.png";
import workBrand from "@/assets/work-brand.jpg";
import workDigital from "@/assets/work-digital.jpg";
import workClient from "@/assets/work-client.jpg";
import cursorSvg from "@/assets/cursor.svg";
import pixelFolderImage from "@/assets/pixel-folder.png";

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
    color: "bg-sticky-yellow",
    tabText: "text-background",
    position: { left: "24.5%", top: "71%", rotate: "-3deg" },
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
    tabText: "text-background",
    position: { left: "66.5%", top: "72%", rotate: "1deg" },
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
    color: "bg-sticky-blue",
    tabText: "text-white",
    position: { left: "66%", top: "8%", rotate: "2deg" },
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
  const [aboutOpen, setAboutOpen] = useState(true);
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

  const pixelFolders = [
    { left: "10%", top: "12%", rotate: "-8deg", width: "w-12 md:w-20 lg:w-28", delay: "0s" },
    { left: "85%", top: "18%", rotate: "12deg", width: "w-10 md:w-16 lg:w-24", delay: "0.2s" },
    { left: "6%", top: "60%", rotate: "6deg", width: "w-16 md:w-24 lg:w-32", delay: "0.4s" },
    { left: "88%", top: "68%", rotate: "-15deg", width: "w-12 md:w-20 lg:w-28", delay: "0.1s" },
    { left: "68%", top: "8%", rotate: "5deg", width: "w-8 md:w-14 lg:w-20", delay: "0.3s" },
  ];

  return (
    <main className="riso-grain min-h-screen bg-background overflow-hidden">
      {/* Hero: CRT workspace */}
      <section className="code-texture relative flex flex-col justify-center w-full px-2 pt-8 pb-4 md:min-h-screen md:px-8 lg:px-12 lg:pb-48">
        
        {/* Pixel Folders scattered in background */}
        {pixelFolders.map((pf, i) => (
          <img
            key={i}
            src={pixelFolderImage}
            alt=""
            className={`absolute z-0 opacity-85 hover:scale-110 transition-transform cursor-default ${pf.width}`}
            style={{
              left: pf.left,
              top: pf.top,
              rotate: pf.rotate,
              imageRendering: "pixelated",
              filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.5))"
            }}
          />
        ))}

        {/* Mobile Hero (Hidden on Desktop) */}
        <div className="md:hidden flex flex-col gap-6 items-center w-full relative z-10">
          {/* Terminal Box */}
          <div className="w-full bg-crt-dark rounded-xl border-2 border-neon-green/30 p-6 shadow-2xl relative overflow-hidden">
            <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-50"></div>
            <div className="relative z-10 flex flex-col gap-3">
              <span className="font-serif text-[10px] font-medium uppercase tracking-[0.3em] text-neon-green/80">
                Design Portfolio
              </span>
              <h1 className="font-serif text-3xl font-bold uppercase leading-[1.1] tracking-tight text-neon-green neon-glow">
                how i<br/>ORGANIZE
              </h1>
              <p className="font-sans text-sm font-light leading-relaxed text-foreground/85 mt-1">
                projects, content, client work
              </p>
            </div>
          </div>
          
          {/* Sticky Notes Grid */}
          <div className="grid grid-cols-2 gap-4 w-full">
            {categories.map((category, index) => (
              <button
                key={category.id + '-mobile'}
                onClick={() => openCategory(category.id)}
                className={`flex aspect-square w-full flex-col items-center justify-center p-4 text-center font-sans font-semibold leading-tight shadow-md transition-transform hover:-translate-y-1 ${category.color} ${category.tabText}`}
                style={{
                  rotate: index % 2 === 0 ? "-2deg" : "3deg",
                }}
              >
                <span className="text-[clamp(0.85rem,4vw,1rem)]">{category.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={scrollToProjects}
            className="mt-2 rounded-full border border-neon-green/50 bg-sticky-pink px-6 py-3 font-serif text-[10px] font-bold uppercase tracking-[0.2em] text-background transition-transform active:scale-95"
          >
            Scroll to Explore
          </button>
        </div>

        {/* Desktop Hero (Hidden on Mobile) */}
        <div className="hidden md:block relative z-10 mx-auto aspect-[16/10] w-full max-w-[1400px] @container">
          <img
            src={realisticPcImage}
            alt="Retro beige CRT monitor on a clean wooden desk with colorful sticky notes"
            className="absolute inset-0 h-full w-full object-contain"
            loading="eager"
            decoding="async"
          />

          <div
            className="crt-scanlines crt-glow animate-soft-flicker absolute flex flex-col items-center justify-center bg-crt-dark"
            style={{ left: "27.5%", top: "17.5%", width: "44.5%", height: "52.5%" }}
          >
            <div className="z-20 flex flex-col items-center gap-1 md:gap-3 px-2 md:px-4 text-center">
              <span className="font-serif text-[1.5cqw] md:text-[10px] lg:text-xs font-medium uppercase tracking-[0.35em] text-neon-green/80">
                Design Portfolio
              </span>
              <h1 className="font-serif text-[4cqw] md:text-3xl lg:text-5xl font-bold uppercase leading-[0.95] tracking-tight text-neon-green neon-glow">
                how i ORGANIZE
              </h1>
              <p className="max-w-[22ch] font-sans text-[2cqw] md:text-sm lg:text-base font-light leading-snug tracking-wide text-foreground/85">
                projects, content, client work
              </p>
            </div>
          </div>

          {/* Retro Base Setup placed below the monitor screen */}
          <div 
            className="absolute z-0 pointer-events-none opacity-95 flex justify-center items-start"
            style={{ 
              left: "26.5%", 
              top: "69%", 
              width: "46.5%",
            }}
          >
            <img 
              src={retroBaseImage} 
              alt="Retro computer base and keyboard" 
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>

          {categories.map((category) => (
            <button
              key={category.id + '-desktop'}
              onClick={() => openCategory(category.id)}
              className={`sticky-note ${category.color} ${category.tabText}`}
              style={{
                left: category.position.left,
                top: category.position.top,
                rotate: category.position.rotate,
                zIndex: 10,
              }}
              aria-label={`Open ${category.label} projects`}
            >
              <span className="font-sans font-semibold leading-tight text-[clamp(0.6rem,1.2vw,0.85rem)]">
                {category.label}
              </span>
            </button>
          ))}

          <button
            onClick={scrollToProjects}
            className="absolute bottom-[5%] left-1/2 z-20 -translate-x-1/2 rounded-full border border-neon-green/50 bg-sticky-pink md:px-3 md:py-1.5 lg:px-4 lg:py-2 font-serif md:text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] text-background transition-transform duration-300 hover:scale-110"
          >
            Scroll to Explore
          </button>
        </div>
      </section>

      {/* Big Background Folder (About Me) */}
      <section className="mx-auto max-w-5xl px-2 pt-0 pb-12 -mt-4 md:mt-0 md:px-4 md:py-24">
        <div className="relative group transition-transform duration-500 ease-out hover:-translate-y-2">
          
          {/* Big Folder Tab */}
          <button 
            onClick={() => setAboutOpen(!aboutOpen)}
            className="relative z-0 ml-4 flex h-14 items-center gap-2 rounded-t-2xl bg-crt-dark px-8 text-left shadow-[0_-6px_20px_rgba(0,0,0,0.4)] md:ml-12"
            aria-expanded={aboutOpen}
          >
            <span className="font-serif text-sm font-bold uppercase tracking-[0.25em] text-neon-green">
              Profile / About
            </span>
            <img 
              src={cursorSvg} 
              alt="" 
              className="relative z-10 h-16 w-auto -translate-y-5 translate-x-3 opacity-90 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]" 
              aria-hidden="true" 
            />
          </button>

          {/* Big Folder Body */}
          <div className="relative z-10 -mt-px rounded-3xl rounded-tl-none bg-crt-dark p-6 shadow-[0_25px_50px_rgba(0,0,0,0.5)] md:p-12">
            
            {/* Click overlay for the folder background to open the about section */}
            {!aboutOpen && (
              <div 
                className="absolute inset-0 z-0 cursor-pointer"
                onClick={() => setAboutOpen(true)}
                aria-label="Open About Me"
              />
            )}

            {/* Expandable About Section (Files) */}
            <div className={`relative z-20 grid transition-[grid-template-rows] duration-700 ease-out ${aboutOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="min-h-0 overflow-hidden">
                <div className="mb-12 mt-4 flex flex-col gap-6 md:flex-row relative">
                  {/* Photo "File" */}
                  <div className="relative rotate-[-2deg] rounded bg-[#e8e4db] p-3 shadow-xl md:w-1/3 transition-transform hover:rotate-0">
                     <img src={realisticPcImage} className="aspect-square w-full object-cover grayscale opacity-80 mix-blend-multiply" alt="Portrait" />
                     <div className="mt-3 text-center font-serif text-xs text-black/60 font-bold uppercase tracking-widest">Sameer Baranwal</div>
                  </div>

                  {/* Intro "File" */}
                  <div className="relative rotate-[1deg] rounded bg-[#fdfbf7] p-6 shadow-xl md:w-2/3 text-black transition-transform hover:rotate-0 flex flex-col">
                     <div className="flex justify-between items-start border-b border-black/10 pb-4 mb-4">
                        <h3 className="font-serif text-xl font-bold uppercase tracking-widest text-black/80">Introduction</h3>
                        <span className="font-serif text-xs text-black/40 font-mono">DOC-001</span>
                     </div>
                     <div className="space-y-4 font-sans text-sm leading-relaxed text-black/70 flex-grow">
                        <p>
                          I am a designer and developer focused on crafting highly polished digital products, 
                          brand systems, and client work. My approach combines retro aesthetics with modern 
                          engineering to create memorable web experiences.
                        </p>
                        <p>
                          I believe in building interfaces that are not just functional, but have character 
                          and tell a story.
                        </p>
                     </div>
                     <button 
                       onClick={(e) => { e.stopPropagation(); setAboutOpen(false); }}
                       className="mt-6 self-start font-serif text-xs font-bold uppercase tracking-widest text-black/40 hover:text-black/80 transition-colors"
                     >
                       [ Close File ]
                     </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Folder stack (Selected Work) */}
            <div
              ref={projectsRef}
              className="relative z-20 mx-auto max-w-4xl"
              aria-label="Project categories"
            >
              <div className="mb-14 text-center">
                <h2 className="font-serif text-3xl font-bold uppercase tracking-tight text-neon-green md:text-4xl">
                  Selected Work
                </h2>
                <p className="mt-3 text-sm text-neon-green/70 md:text-base">
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
                        <span className="font-serif text-xs font-bold uppercase tracking-[0.18em] md:text-sm">
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
                                  onClick={(e) => { e.stopPropagation(); setActiveProject(project); }}
                                  className="flex w-full items-center gap-4 rounded-lg border border-border bg-background p-3 text-left transition-all hover:-translate-y-0.5 hover:border-neon-green/60 hover:shadow-lg"
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
            </div>
          </div>
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
              <DialogTitle className="font-serif text-xl font-bold uppercase tracking-tight">
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
