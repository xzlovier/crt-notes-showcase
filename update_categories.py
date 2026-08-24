import re

with open("src/routes/index.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Category type
content = re.sub(
    r"type Category = \{[\s\S]*?projects: Project\[\];\n\};",
    """type Category = {
  id: string;
  label: string;
  color: string;
  tabText: string;
  position: { left: string; top: string; rotate: string };
  small?: boolean;
  projects: Project[];
};""",
    content
)

# 2. Update categories array
categories_replacement = """const categories: Category[] = [
  {
    id: "illustrations",
    label: "Illustrations",
    color: "bg-sticky-yellow",
    tabText: "text-background",
    position: { left: "24.5%", top: "71%", rotate: "-3deg" },
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
    position: { left: "25.5%", top: "74.5%", rotate: "5deg" },
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
    position: { left: "66.5%", top: "72%", rotate: "1deg" },
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
    position: { left: "68%", top: "76%", rotate: "-6deg" },
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
    position: { left: "66%", top: "8%", rotate: "2deg" },
    projects: [
      {
        title: "Nova Studios Identity",
        description: "A modular wordmark and typographic system for a film studio.",
        image: workBrand,
        year: "2025",
        role: "Brand identity",
        story:
          "Nova\\'s wordmark is cut from a single geometric grid so it can be rebuilt at any scale, from a title card to a building sign. The system pairs it with a restrained cream-on-navy palette and one optical accent.",
      },
    ],
  },
];"""

content = re.sub(
    r"const categories: Category\[\] = \[\s*\{.*?\}\n\];",
    categories_replacement,
    content,
    flags=re.DOTALL
)

# 3. Update the sticky note rendering to handle small
old_button = """className={`sticky-note ${category.color} ${category.tabText}`}
              style={{
                left: category.position.left,
                top: category.position.top,
                rotate: category.position.rotate,
                zIndex: 10,
              }}"""
new_button = """className={`sticky-note ${category.color} ${category.tabText}`}
              style={{
                left: category.position.left,
                top: category.position.top,
                rotate: category.position.rotate,
                zIndex: 10,
                ...(category.small ? { padding: "0.75rem 0.6rem", fontSize: "0.65rem" } : {})
              }}"""
content = content.replace(old_button, new_button)

with open("src/routes/index.tsx", "w", encoding="utf-8") as f:
    f.write(content)
print("Done!")

