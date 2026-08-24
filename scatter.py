import re

with open('src/routes/index.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Illustrations
content = re.sub(
    r'id: "illustrations"[\s\S]*?position: \{ left: "[^"]+", top: "[^"]+", rotate: "[^"]+" \}',
    'id: "illustrations",\n    label: "Illustrations",\n    color: "bg-sticky-yellow",\n    tabText: "text-background",\n    position: { left: "23%", top: "12%", rotate: "-5deg" }',
    content
)

# Creatives-posters
content = re.sub(
    r'id: "creatives-posters"[\s\S]*?position: \{ left: "[^"]+", top: "[^"]+", rotate: "[^"]+" \}',
    'id: "creatives-posters",\n    label: "Creatives/Posters",\n    color: "bg-sticky-blue",\n    tabText: "text-white",\n    position: { left: "24%", top: "70%", rotate: "4deg" }',
    content
)

# Client-work
content = re.sub(
    r'id: "client-work"[\s\S]*?position: \{ left: "[^"]+", top: "[^"]+", rotate: "[^"]+" \}',
    'id: "client-work",\n    label: "Client Work",\n    color: "bg-sticky-pink",\n    tabText: "text-background",\n    position: { left: "66%", top: "72%", rotate: "1deg" }',
    content
)

# Editorial-design
content = re.sub(
    r'id: "editorial-design"[\s\S]*?position: \{ left: "[^"]+", top: "[^"]+", rotate: "[^"]+" \}',
    'id: "editorial-design",\n    label: "Editorial Design",\n    color: "bg-sticky-yellow",\n    tabText: "text-background",\n    position: { left: "70%", top: "58%", rotate: "-6deg" }',
    content
)

# Brand-systems
content = re.sub(
    r'id: "brand-systems"[\s\S]*?position: \{ left: "[^"]+", top: "[^"]+", rotate: "[^"]+" \}',
    'id: "brand-systems",\n    label: "Brand Systems",\n    color: "bg-sticky-blue",\n    tabText: "text-white",\n    position: { left: "65%", top: "9%", rotate: "3deg" }',
    content
)

with open('src/routes/index.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated sticky note positions.')

