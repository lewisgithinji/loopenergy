import pypdfium2 as pdfium
from PIL import Image
import os

pdf_path = r'f:\Projects\loopenergy\loopenergy\public\LOOP ENERGY LOGO.pdf'
output_dir = r'f:\Projects\loopenergy\loopenergy\public'

def process_logo():
    # Load PDF
    pdf = pdfium.PdfDocument(pdf_path)
    page = pdf[0]
    
    # Render at high resolution (e.g. 600 DPI -> scale 8 approx)
    bitmap = page.render(scale=8, rotation=0)
    image = bitmap.to_pil()
    
    # Convert to RGBA
    image = image.convert("RGBA")
    
    # Refined background removal: if pixel is close to white, make it transparent
    # We use a threshold to handle anti-aliased edges better
    data = image.getdata()
    new_data = []
    for item in data:
        # If R, G, B are all > 245, make it transparent
        if item[0] > 245 and item[1] > 245 and item[2] > 245:
            # We also fade out pixels that are very close to white to smooth the edges
            # Calculate a simple average to see how close it is to 255
            avg = sum(item[:3]) / 3
            if avg > 250:
                new_data.append((255, 255, 255, 0))
            else:
                # Semi-transparent for anti-aliasing (rough approximation)
                alpha = int((255 - avg) * 5) # Sharper falloff
                # Keep it opaque enough if it's not super close to white
                new_data.append((item[0], item[1], item[2], min(255, alpha)))
        else:
            new_data.append(item)
    
    image.putdata(new_data)
    
    # Trim empty space
    bbox = image.getbbox()
    if bbox:
        image = image.crop(bbox)
        
    # Save different versions
    # 1. logo-clear-highres.png
    image.save(os.path.join(output_dir, 'logo-clear-highres.png'))
    
    # 2. Main logo (logo-clear.png) - resizing to a standard height
    logo_main = image.copy()
    w, h = logo_main.size
    aspect = w / h
    new_h = 200
    new_w = int(new_h * aspect)
    logo_main = logo_main.resize((new_w, new_h), Image.Resampling.LANCZOS)
    logo_main.save(os.path.join(output_dir, 'logo-clear.png'))
    
    # 3. White version for dark backgrounds
    logo_white = image.copy()
    w_data = logo_white.getdata()
    final_white_data = []
    for item in w_data:
        if item[3] > 0: # If not transparent
            # Turn color to white but keep original alpha
            final_white_data.append((255, 255, 255, item[3]))
        else:
            final_white_data.append(item)
    logo_white.putdata(final_white_data)
    logo_white = logo_white.resize((new_w, new_h), Image.Resampling.LANCZOS)
    logo_white.save(os.path.join(output_dir, 'logo-white.png'))
    
    print("Logo assets generated successfully.")

if __name__ == "__main__":
    process_logo()
