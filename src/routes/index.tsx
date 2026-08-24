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
import profileMonitorImage from "@/assets/profile-monitor.png";
import retroBaseImage from "@/assets/retro-base-transparent.png";
import workBrand from "@/assets/work-brand.jpg";
import workDigital from "@/assets/work-digital.jpg";
import workClient from "@/assets/work-client.jpg";
import seekhoMerch from "@/assets/seekho-merch.png";
import cursorSvg from "@/assets/cursor.svg";
import pixelFolderImage from "@/assets/pixel-folder.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sameer Baranwal's Design Portfolio" },
      {
        name: "description",
        content:
          "A curated design portfolio organized like a retro CRT workspace: brand systems, digital products, and client work.",
      },
      { property: "og:title", content: "Sameer Baranwal's Design Portfolio" },
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
  small?: boolean;
  projects: Project[];
};

const categories: Category[] = [
  {
    id: "illustrations",
    label: "Illustrations",
    color: "bg-sticky-yellow",
    tabText: "text-background",
    position: { left: "16%", top: "9%", rotate: "-5deg" },
    projects: [
      {
        title: "Vector Cityscape",
        description: "Detailed vector illustration for a tech conference.",
        image: workDigital,
        year: "2025",
        role: "Lead Illustrator",
        story: "A sweeping isometric cityscape drawn entirely in vectors. The illustration was used across large format banners and digital touchpoints."
      },
      {
        title: "Character Concept Art",
        description: "Concept art for an indie game studio.",
        image: workDigital,
        year: "2024",
        role: "Concept Artist",
        story: "Character explorations featuring retro-futuristic themes. The focus was on expressive silhouettes and vibrant color palettes."
      },
    ],
  },
  {
    id: "creatives-posters",
    label: "Creatives/Posters",
    color: "bg-sticky-blue",
    tabText: "text-white",
    position: { left: "18%", top: "70%", rotate: "4deg" },
    projects: [
      {
        title: "Underground Sound",
        description: "Gig poster series for local bands.",
        image: workBrand,
        year: "2025",
        role: "Graphic Designer",
        story: "A series of gig posters relying heavily on halftone patterns, distressed textures, and bold typography to capture the raw energy of live music."
      }
    ],
  },
  {
    id: "client-work",
    label: "Client Work",
    color: "bg-sticky-pink",
    tabText: "text-background",
    position: { left: "61%", top: "72%", rotate: "1deg" },
    projects: [
      {
        title: "Seekho Event Merchandise",
        description: "Custom freelance merchandise design for a corporate event.",
        image: seekhoMerch,
        year: "2024",
        role: "Freelance Designer",
        story:
          "A bold, collage-style typographic design created for a corporate event by Seekho. The merchandise highlights key company milestones, catchphrases, and values in a vibrant and dynamic arrangement, creating a wearable piece of company culture for the attendees.",
      },
    ],
  },
  {
    id: "editorial-design",
    label: "Editorial Design",
    color: "bg-sticky-yellow",
    tabText: "text-background",
    position: { left: "66%", top: "58%", rotate: "-6deg" },
    small: true,
    projects: [
      {
        title: "Type Specimen Book",
        description: "A printed book showcasing a custom typeface.",
        image: workClient,
        year: "2023",
        role: "Typesetter",
        story: "A comprehensive printed specimen exploring the history, anatomy, and practical usage of a bespoke serif typeface."
      }
    ],
  },
  {
    id: "brand-systems",
    label: "Brand Systems",
    color: "bg-sticky-blue",
    tabText: "text-white",
    position: { left: "65%", top: "9%", rotate: "3deg" },
    projects: [
      {
        title: "Nova Studios Identity",
        description: "A modular wordmark and typographic system for a film studio.",
        image: workBrand,
        year: "2025",
        role: "Brand identity",
        story:
          "Nova\'s wordmark is cut from a single geometric grid so it can be rebuilt at any scale, from a title card to a building sign. The system pairs it with a restrained cream-on-navy palette and one optical accent.",
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
      <section className="code-texture relative flex flex-col justify-center w-full px-4 pt-12 pb-16 md:min-h-screen md:px-8 lg:px-12 lg:pb-48">
        
        {/* Pixel Folders scattered in background */}
        {pixelFolders.map((pf, i) => (
          <div
            key={`pf-${i}`}
            className="absolute z-0 animate-float-drift"
            style={{
              left: pf.left,
              top: pf.top,
              animationDelay: `${i * -3.7}s`,
              animationDuration: `${12 + (i % 3) * 4}s`
            }}
          >
            <img
              src={pixelFolderImage}
              alt=""
              className={`opacity-85 hover:scale-110 transition-transform cursor-default ${pf.width}`}
              style={{
                rotate: pf.rotate,
                imageRendering: "pixelated",
                filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.5))"
              }}
            />
          </div>
        ))}
        <div className="relative z-10 mx-auto aspect-video w-full max-w-[1400px] @container" style={{ aspectRatio: "1024/571" }}>
          <img
            src={realisticPcImage}
            alt="Retro beige CRT monitor on a clean wooden desk with colorful sticky notes"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />

          <div
            className="crt-scanlines crt-glow animate-soft-flicker absolute flex flex-col items-center justify-center bg-crt-dark"
            style={{ left: "27.5%", top: "17.5%", width: "44.5%", height: "52.5%" }}
          >
            <div className="z-20 flex flex-col items-center gap-1 md:gap-3 px-2 md:px-4 text-center">
              <span className="font-serif text-[1.5cqw] md:text-[10px] lg:text-xs font-medium uppercase tracking-[0.35em] text-white/70">
                Selected Works
              </span>
              <h1 
                className="text-[6cqw] md:text-5xl lg:text-7xl uppercase leading-[0.9] tracking-tighter text-white/95 mix-blend-screen"
                style={{ 
                  fontFamily: "'Silkscreen', monospace",
                  textShadow: "0 0 4px rgba(255,255,255,0.4)" 
                }}
              >
                Portfolio
              </h1>
              <p className="max-w-[22ch] font-sans text-[2cqw] md:text-sm lg:text-base font-light leading-snug tracking-wide text-white/60">
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
              key={category.id}
              onClick={() => openCategory(category.id)}
              className={`sticky-note ${category.color} ${category.tabText}`}
              style={{
                left: category.position.left,
                top: category.position.top,
                rotate: category.position.rotate,
                zIndex: 10,
                ...(category.small ? { padding: "0.75rem 0.6rem", fontSize: "0.65rem" } : {})
              }}
              aria-label={`Open ${category.label} projects`}
            >
              <span className="font-sans font-semibold leading-tight">
                {category.label}
              </span>
            </button>
          ))}

          <button
            onClick={scrollToProjects}
            className="absolute bottom-[5%] left-1/2 z-20 -translate-x-1/2 rounded-full border border-neon-green/50 bg-sticky-pink px-2 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 font-serif text-[6px] md:text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] text-background transition-transform duration-300 hover:scale-110"
          >
            Scroll to Explore
          </button>
        </div>
      </section>

      {/* Big Background Folder (About Me) */}
      <section className="mx-auto max-w-5xl px-4 py-8 md:py-24">
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
                     <img src={profileMonitorImage} className="w-full h-auto object-contain rounded" alt="Portrait" />
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
