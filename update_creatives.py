import re

with open('src/routes/index.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add imports
imports_to_add = '''import creative1 from "@/assets/creative-1.jpg";
import creative2 from "@/assets/creative-2.jpg";
import creative3 from "@/assets/creative-3.jpg";
import creative4 from "@/assets/creative-4.jpg";
import creative5 from "@/assets/creative-5.png";'''

if 'creative1' not in content:
    content = content.replace('import illustrationAppetite from "@/assets/illustration-appetite.jpg";', f'import illustrationAppetite from "@/assets/illustration-appetite.jpg";\n{imports_to_add}')

new_creatives = '''    projects: [
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
    ],'''

pattern = r'(id: "creatives-posters"[\s\S]*?position: \{[^}]+\},\n)[\s\S]*?(\n  \},)'
match = re.search(pattern, content)
if match:
    replacement = match.group(1) + new_creatives + match.group(2)
    content = content[:match.start()] + replacement + content[match.end():]

with open('src/routes/index.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated successfully!")
