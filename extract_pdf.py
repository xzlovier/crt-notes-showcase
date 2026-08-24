import fitz
import os

pdf_path = r"C:\Users\samee\.gemini\antigravity\brain\596afcbd-d5cb-4c07-8c40-6d225356d47e\.user_uploaded\media_1787607334214.pdf"
output_dir = r"src\assets\brand-voir"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

doc = fitz.open(pdf_path)
for i in range(len(doc)):
    page = doc.load_page(i)
    pix = page.get_pixmap(dpi=150)
    output_path = os.path.join(output_dir, f"page_{i+1:02d}.jpg")
    pix.save(output_path)
    print(f"Saved {output_path}")

print("Extraction complete!")
