import re

with open('src/routes/index.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add imports
imports_to_add = '''import illustrationSamurai from "@/assets/illustration-samurai.jpg";
import illustrationAppetite from "@/assets/illustration-appetite.jpg";'''

if 'illustrationSamurai' not in content:
    content = content.replace('import workDigital from "@/assets/work-digital.jpg";', f'import workDigital from "@/assets/work-digital.jpg";\n{imports_to_add}')

# Replace illustrations projects array
new_illustrations = '''    projects: [
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
    ],'''

# Regex to find the illustrations projects array
pattern = r'id: "illustrations"[\s\S]*?projects: \[\s*\{[\s\S]*?\}\s*,\s*\{[\s\S]*?\}\s*,\s*\],'
# A more robust regex: match from `id: "illustrations"` down to `],`
pattern2 = r'(id: "illustrations"[\s\S]*?position: \{[^}]+\},\n)[\s\S]*?(\n  \},)'

match = re.search(pattern2, content)
if match:
    replacement = match.group(1) + new_illustrations + match.group(2)
    content = content[:match.start()] + replacement + content[match.end():]

with open('src/routes/index.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated successfully!")
