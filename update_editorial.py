import re

with open('src/routes/index.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add imports
imports_to_add = '''import editorial1 from "@/assets/editorial-1.jpg";
import editorial2 from "@/assets/editorial-2.jpg";
import editorial3 from "@/assets/editorial-3.jpg";
import editorial4 from "@/assets/editorial-4.jpg";'''

if 'editorial1' not in content:
    content = content.replace('import creative5 from "@/assets/creative-5.png";', f'import creative5 from "@/assets/creative-5.png";\n{imports_to_add}')

new_editorial = '''    projects: [
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
    ],'''

pattern = r'(id: "editorial-design"[\s\S]*?position: \{[^}]+\},\n    small: true,\n)[\s\S]*?(\n  \},)'
match = re.search(pattern, content)
if match:
    replacement = match.group(1) + new_editorial + match.group(2)
    content = content[:match.start()] + replacement + content[match.end():]
else:
    print("Could not find editorial-design section!")

with open('src/routes/index.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated successfully!")
