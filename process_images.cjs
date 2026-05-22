const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = path.join(__dirname, 'public/testimonials');
const outputDir = path.join(__dirname, 'public/testimonials/optimized');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function processImages() {
  const files = fs.readdirSync(inputDir).filter(f => f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.png'));
  
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    // Remove the number prefix like "1. ", "10. "
    const nameWithoutNumber = file.replace(/^\d+\.\s*/, '').replace(/\.[^/.]+$/, "");
    const outputPath = path.join(outputDir, `${nameWithoutNumber}.webp`);
    
    console.log(`Processing: ${file} -> ${nameWithoutNumber}.webp`);
    
    await sharp(inputPath)
      .resize(400, 400, { fit: 'cover', position: 'top' })
      .webp({ quality: 80 })
      .toFile(outputPath);
  }
  console.log("Image optimization complete!");
}

processImages().catch(console.error);
