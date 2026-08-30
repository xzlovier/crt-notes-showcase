import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import realisticPcImage from "@/assets/realistic-pc.png";
import portfolioMural from "@/assets/portfolio-mural.png";
import profileMonitorImage from "@/assets/profile-monitor.png";
import retroBaseImage from "@/assets/retro-base-transparent.png";
import workBrand from "@/assets/work-brand.jpg";
import workDigital from "@/assets/work-digital.jpg";
import illustrationSamurai from "@/assets/illustration-samurai.jpg";
import illustrationAppetite from "@/assets/illustration-appetite.jpg";
import creative1 from "@/assets/creative-1.jpg";
import creative2 from "@/assets/creative-2.jpg";
import creative3 from "@/assets/creative-3.jpg";
import creative4 from "@/assets/creative-4.jpg";
import creative5 from "@/assets/creative-5.png";
import editorial1 from "@/assets/editorial-1.jpg";
import editorial2 from "@/assets/editorial-2.jpg";
import editorial3 from "@/assets/editorial-3.jpg";
import editorial4 from "@/assets/editorial-4.jpg";
import workClient from "@/assets/work-client.jpg";
import seekhoMerch from "@/assets/seekho-merch.png";
import cursorSvg from "@/assets/cursor.svg";
import voirPage1 from "@/assets/brand-voir/page_01.jpg";
import voirPage2 from "@/assets/brand-voir/page_02.jpg";
import voirPage3 from "@/assets/brand-voir/page_03.jpg";
import voirPage4 from "@/assets/brand-voir/page_04.jpg";
import voirPage5 from "@/assets/brand-voir/page_05.jpg";
import voirPage6 from "@/assets/brand-voir/page_06.jpg";
import voirPage7 from "@/assets/brand-voir/page_07.jpg";
import voirPage8 from "@/assets/brand-voir/page_08.jpg";
import voirPage9 from "@/assets/brand-voir/page_09.jpg";
import voirPage10 from "@/assets/brand-voir/page_10.jpg";
import voirPage11 from "@/assets/brand-voir/page_11.jpg";
import voirPage12 from "@/assets/brand-voir/page_12.jpg";
import voirPage13 from "@/assets/brand-voir/page_13.jpg";
import voirPage14 from "@/assets/brand-voir/page_14.jpg";
import voirPage15 from "@/assets/brand-voir/page_15.jpg";
import voirPage16 from "@/assets/brand-voir/page_16.jpg";
import voirPage17 from "@/assets/brand-voir/page_17.jpg";
import voirPage18 from "@/assets/brand-voir/page_18.jpg";
import voirPage19 from "@/assets/brand-voir/page_19.jpg";
import voirPage20 from "@/assets/brand-voir/page_20.jpg";
import voirPage21 from "@/assets/brand-voir/page_21.jpg";
const voirImages = [voirPage1, voirPage2, voirPage3, voirPage4, voirPage5, voirPage6, voirPage7, voirPage8, voirPage9, voirPage10, voirPage11, voirPage12, voirPage13, voirPage14, voirPage15, voirPage16, voirPage17, voirPage18, voirPage19, voirPage20, voirPage21];
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
  image: string | string[];
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
    position: { left: "14%", top: "9%", rotate: "-5deg" },
    projects: [
      {
        title: "Appetite for the Dead",
        description: "A surreal, dreamlike landscape featuring a giant eye and scattered stone hands.",
        image: illustrationAppetite,
        year: "2026",
        role: "Digital Artist",
        story: "This pink-hued illustration explores themes of cosmic dread and monumental ruin, blending surrealist imagery with a somber, apocalyptic atmosphere."
      },
      {
        title: "The Last Stand",
        description: "A lone samurai facing off against a horde of masked Oni.",
        image: illustrationSamurai,
        year: "2026",
        role: "Digital Artist",
        story: "A vibrant fantasy illustration depicting an epic confrontation before a floating temple and a traditional torii gate. The focus is on the tension right before the battle begins."
      }
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
        title: "Pixelated Kisses Album Cover Reimagined",
        description: "A stark, high-contrast reimagining of an album cover.",
        image: creative2,
        year: "2026",
        role: "Graphic Designer",
        story: "Using harsh red and black tones against a pure white background, this album cover concept leans into industrial and punk aesthetics, featuring power lines and distressed typography for a raw, pixelated vibe."
      },
      {
        title: "After Hour by Tame Impala Album Cover Imagined",
        description: "A conceptual red-and-black alternate cover for Tame Impala.",
        image: creative5,
        year: "2026",
        role: "Graphic Designer",
        story: "This design explores a moody, late-night atmosphere with deep crimson hues, embossed typography, and a circular composition that evokes nostalgia and sleepless city nights."
      },
      {
        title: "Angel Face",
        description: "A surreal, textured collage blending human anatomy and a skull.",
        image: creative4,
        year: "2026",
        role: "Digital Artist",
        story: "A quiet collision of beauty and decay. The portrait is split between living flesh and exposed bone, surrounded by velvet red roses and a heavy grain texture, exploring themes of longing and absence."
      },
      {
        title: "Toxic Rose",
        description: "A striking red and black composition of a skeletal figure crowned in roses.",
        image: creative3,
        year: "2026",
        role: "Graphic Designer",
        story: "Driven by poetic typography and high-contrast red-on-black graphics, this poster uses a floral skull motif to delve into themes of dangerous love, heartache, and thorny romances."
      },
      {
        title: "Alive and Thriving",
        description: "A dreamlike, vintage landscape juxtaposing life and death.",
        image: creative1,
        year: "2026",
        role: "Digital Artist",
        story: "This piece contrasts giant, weathered skulls resting in a peaceful, rushing stream with delicate daisies and a vibrant pink sky. It creates a serene yet haunting atmosphere about finding life among ruins."
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
        title: "Farewell Magazine",
        description: "A comprehensive print magazine for the Y22 Editorial Board.",
        image: editorial1,
        year: "2024",
        role: "Editorial Designer",
        story: "Designed the cover and interior spreads for the Vox Populi Farewell Magazine. The layout features dynamic photo collages and bold, handwritten typography to capture the spirit and memories of the editorial board."
      },
      {
        title: "Design Workshop Poster",
        description: "Promotional material for a visual journalism workshop.",
        image: editorial2,
        year: "2024",
        role: "Graphic Designer",
        story: "An illustrative poster designed to promote an online workshop on infographics, comics, and editorial design. It utilizes a striking puzzle-piece motif and vibrant colors to draw attention and communicate creativity."
      },
      {
        title: "Samiti Feature Article",
        description: "Editorial layout for a conversation-based article.",
        image: editorial3,
        year: "2023",
        role: "Editorial Designer",
        story: "Created a mixed-media cover graphic for an in-depth article about the Shramik Vikas Sahkari Shram Samvida Samiti Limited. The design blends architectural photography with halftone crowd portraits and geometric color blocking."
      },
      {
        title: "UGARC'21 Report",
        description: "A formal report document on academic changes.",
        image: editorial4,
        year: "2022",
        role: "Layout Designer",
        story: "A clean, typographic cover design for a detailed report by UGARC'21. The design relies on heavily textured, oversized pixelated typography to give the document a serious yet modern academic aesthetic."
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
        title: "VOIR - Inclusive Luxury",
        description: "A luxury watch brand honoring Louis Braille, elevating touch into elegance.",
        image: voirImages,
        year: "2026",
        role: "Brand Identity & Product Design",
        story: "VOIR redefines timekeeping by proving that true luxury is not broadcasted visually, but felt intimately. This comprehensive brand manual covers the 'Architecture of Touch' dials, packaging, and digital app experience designed for both sighted and visually impaired users."
      }
    ],
  },
];

function Index() {
  const [openFolder, setOpenFolder] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    if (activeProject) setCurrentImageIndex(0);
  }, [activeProject]);
  
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
      <section className="code-texture relative flex flex-col justify-center w-full -translate-y-[10%] px-4 pt-12 pb-16 md:min-h-screen md:px-8 lg:px-12 lg:pb-48">
        
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
                {/* Background Typography Mural */}
        <div className="absolute inset-0 z-0 flex items-start justify-center pt-4 pointer-events-none mt-8 md:mt-12">
          <img 
            src={portfolioMural} 
            alt="Portfolio Typography" 
            className="w-[90%] max-w-[1000px] opacity-90 drop-shadow-2xl mix-blend-screen" 
          />
        </div>

        <div className="relative z-10 mx-auto aspect-video w-full max-w-[1400px] mt-[25%] md:mt-[18%] @container" style={{ aspectRatio: "1024/571" }}>
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
            <div className="z-20 flex flex-col items-center justify-center h-full w-full pointer-events-none">
              
              <div className="relative flex flex-row gap-2 md:gap-3 w-full h-full items-stretch overflow-hidden bg-black/20 p-2 md:p-3">
                
                {/* Aberration / Glow effects */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-20 mix-blend-overlay"></div>
                
                {/* Left Panel: Photo & Name */}
                <div className="relative flex flex-col justify-center items-center w-[35%] md:w-[30%] bg-black/40 border border-white/10 rounded p-1 md:p-2 shadow-[0_0_15px_rgba(255,255,255,0.03)]">
                  <img 
                    src={profileMonitorImage} 
                    alt="Sameer Baranwal" 
                    className="w-full aspect-square object-cover rounded shadow-[0_0_10px_rgba(255,255,255,0.2)] filter contrast-125 saturate-50"
                  />
                  <div className="mt-2 text-center font-serif text-[6px] md:text-[9px] font-bold uppercase tracking-widest text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                    Sameer Baranwal
                  </div>
                </div>

                {/* Right Panel: Intro */}
                <div className="relative flex flex-col justify-center w-[65%] md:w-[70%] bg-black/40 border border-white/10 rounded p-2 md:p-3 shadow-[0_0_15px_rgba(255,255,255,0.03)] text-left">
                  <h3 className="text-neon-green/90 font-mono text-[9px] md:text-[11px] uppercase tracking-wider mb-1 md:mb-2 drop-shadow-[0_0_5px_rgba(0,255,0,0.4)] border-b border-white/10 pb-1">
                    Visual Storyteller
                  </h3>
                  <p className="text-white/70 font-sans text-[8px] md:text-[10px] lg:text-[12px] leading-tight md:leading-snug font-light">
                    Undergraduate Student from IIT Kanpur, passionate about designing real world systems which are not just functional but tell a story in themselves.<br/><br/>
                    I believe in the marriage of utility and art, drawing from brutalism, retro-tech, and modern minimalism to craft digital experiences that linger in the mind long after the screen goes dark. Every pixel is intentional, every interaction is a narrative.
                  </p>
                </div>

                {/* CRT Scanline overlay specific to the card for extra native feel */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-50 mix-blend-screen opacity-50"></div>
              </div>
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
                  <div className="mb-12 mt-4 flex flex-col relative w-full">
  
                    {/* Intro "File" */}
                    <div className="relative rotate-[0.5deg] rounded bg-[#fdfbf7] p-6 md:p-8 shadow-xl w-full text-black transition-transform hover:rotate-0 flex flex-col">
                       <div className="flex justify-between items-start border-b border-black/10 pb-4 mb-4">
                          <h3 className="font-serif text-xl md:text-2xl font-bold uppercase tracking-widest text-black/80">Contact & Information</h3>
                          <span className="font-serif text-xs text-black/40 font-mono">DOC-001</span>
                       </div>
                       <div className="space-y-4 font-sans text-sm md:text-base leading-relaxed text-black/70 flex-grow">
                          <p>
                            I am a designer and developer focused on crafting highly polished digital products, 
                            brand systems, and client work. My approach combines retro aesthetics with modern 
                            engineering to create memorable web experiences. I believe in building interfaces that are not just functional, but have character and tell a story.
                          </p>
                       </div>
                       
                       <div className="mt-8 border-t border-black/10 pt-6 flex flex-col sm:flex-row gap-4 sm:gap-8 font-mono text-xs md:text-sm text-black/60">
                         <a href="mailto:sameerbaranwal.zk@gmail.com" className="flex items-center gap-2 hover:text-black hover:underline transition-all">
                           <span className="font-bold">EMAIL:</span> sameerbaranwal.zk@gmail.com
                         </a>
                         <a href="https://www.behance.net/sameerbaranwal1" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-black hover:underline transition-all">
                           <span className="font-bold">BEHANCE:</span> sameerbaranwal1
                         </a>
                         <a href="tel:8005486796" className="flex items-center gap-2 hover:text-black hover:underline transition-all">
                           <span className="font-bold">PHONE:</span> +91 8005486796
                         </a>
                       </div>

                       <button 
                         onClick={(e) => { e.stopPropagation(); setAboutOpen(false); }}
                         className="mt-8 self-start font-serif text-xs font-bold uppercase tracking-widest text-black/40 hover:text-black/80 transition-colors"
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
                                    src={Array.isArray(project.image) ? project.image[0] : project.image}
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
          <DialogContent className="max-w-2xl border-border bg-card text-card-foreground max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-serif text-xl font-bold uppercase tracking-tight">
                {activeProject.title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {activeProject.role} - {activeProject.year}
              </DialogDescription>
            </DialogHeader>
            <div className="relative mt-2">
                {Array.isArray(activeProject.image) ? (
                  <>
                    <img
                      src={activeProject.image[currentImageIndex]}
                      alt={`${activeProject.title} slide ${currentImageIndex + 1}`}
                      className="w-full rounded-lg object-contain aspect-video bg-black/5"
                    />
                    <div className="absolute bottom-2 right-2 flex gap-2">
                      <button 
                        className="flex items-center justify-center w-10 h-10 bg-black/80 hover:bg-black text-white rounded-full shadow-lg transition-colors disabled:opacity-50"
                        onClick={() => setCurrentImageIndex(i => Math.max(0, i - 1))}
                        disabled={currentImageIndex === 0}
                      >
                        ←
                      </button>
                      <button 
                        className="flex items-center justify-center w-10 h-10 bg-black/80 hover:bg-black text-white rounded-full shadow-lg transition-colors disabled:opacity-50"
                        onClick={() => setCurrentImageIndex(i => Math.min(activeProject.image.length - 1, i + 1))}
                        disabled={currentImageIndex === activeProject.image.length - 1}
                      >
                        →
                      </button>
                    </div>
                  </>
                ) : (
                  <img
                    src={activeProject.image as string}
                    alt={`${activeProject.title} full artwork`}
                    loading="lazy"
                    className="w-full h-auto max-h-[60vh] rounded-lg object-contain bg-black/5"
                  />
                )}
              </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {activeProject.story}
            </p>
          </DialogContent>
        )}
      </Dialog>
    </main>
  );
}
