import re

with open('src/routes/index.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add imports for 21 images
import_statements = "\n".join([f'import voirPage{i} from "@/assets/brand-voir/page_{i:02d}.jpg";' for i in range(1, 22)])
voir_images_array = "const voirImages = [" + ", ".join([f"voirPage{i}" for i in range(1, 22)]) + "];"

imports_to_add = f"{import_statements}\n{voir_images_array}"

if 'voirPage1' not in content:
    content = content.replace('import cursorSvg from "@/assets/cursor.svg";', f'import cursorSvg from "@/assets/cursor.svg";\n{imports_to_add}')

# Update Project type
content = content.replace(
    '  image: string;',
    '  image: string | string[];'
)

# Update brand-systems
new_brand_systems = '''    projects: [
      {
        title: "VOIR - Inclusive Luxury",
        description: "A luxury watch brand honoring Louis Braille, elevating touch into elegance.",
        image: voirImages,
        year: "2026",
        role: "Brand Identity & Product Design",
        story: "VOIR redefines timekeeping by proving that true luxury is not broadcasted visually, but felt intimately. This comprehensive brand manual covers the 'Architecture of Touch' dials, packaging, and digital app experience designed for both sighted and visually impaired users."
      }
    ],'''

pattern = r'(id: "brand-systems"[\s\S]*?position: \{[^}]+\},\n)[\s\S]*?(\n  \},)'
match = re.search(pattern, content)
if match:
    replacement = match.group(1) + new_brand_systems + match.group(2)
    content = content[:match.start()] + replacement + content[match.end():]
else:
    print("Could not find brand-systems section!")

# Update Dialog rendering
# First, add the state
if 'const [currentImageIndex, setCurrentImageIndex] = useState(0);' not in content:
    content = content.replace(
        '  const [activeProject, setActiveProject] = useState<Project | null>(null);',
        '  const [activeProject, setActiveProject] = useState<Project | null>(null);\n  const [currentImageIndex, setCurrentImageIndex] = useState(0);\n  import { useEffect } from "react";'
    )
    # Fix the double import if we inject import inside component, better to put useEffect at top
    content = content.replace('import { useEffect } from "react";', '')
    content = content.replace('import { useState } from "react";', 'import { useState, useEffect } from "react";')
    
    # Add useEffect
    content = content.replace(
        '  const [currentImageIndex, setCurrentImageIndex] = useState(0);',
        '  const [currentImageIndex, setCurrentImageIndex] = useState(0);\n  useEffect(() => {\n    if (activeProject) setCurrentImageIndex(0);\n  }, [activeProject]);'
    )

# Replace the img tag inside DialogContent
old_img = '''<img
                src={activeProject.image}
                alt={`${activeProject.title} full artwork`}
                width={1024}
                height={768}
                loading="lazy"
                className="mt-2 w-full rounded-lg object-cover"
              />'''

new_img = '''<div className="relative mt-2">
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
                    className="w-full rounded-lg object-cover"
                  />
                )}
              </div>'''

if old_img in content:
    content = content.replace(old_img, new_img)
else:
    # Try a more relaxed match in case formatting is slightly different
    pattern_img = r'<img\s+src=\{activeProject\.image\}[\s\S]*?/>'
    content = re.sub(pattern_img, new_img, content)

with open('src/routes/index.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated index.tsx successfully!")
