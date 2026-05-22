const fs = require('fs');

const text = fs.readFileSync('text-testimonials.txt', 'utf8');

const blocks = text.split(/\n\d+\.\s/).filter(Boolean);

const data = [];

// Handle the first block which still has "1. " at the start
if (blocks.length > 0 && blocks[0].startsWith('1. ')) {
  blocks[0] = blocks[0].replace(/^1\.\s/, '');
}

for (let block of blocks) {
  const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
  if (lines.length < 3) continue;
  
  const name = lines[0];
  const roleLine = lines.find(l => l.startsWith('Место учёбы:'));
  const role = roleLine ? roleLine.replace('Место учёбы:', '').trim() : '';
  
  const quoteLineIndex = lines.findIndex(l => l.startsWith('Комментарий:'));
  let quote = '';
  if (quoteLineIndex !== -1 && quoteLineIndex + 1 < lines.length) {
    quote = lines.slice(quoteLineIndex + 1).join(' ');
  }
  
  // Clean up quotes from the beginning and end
  quote = quote.replace(/^['"‘“«]+/, '').replace(/['"’”»]+$/, '').trim();

  // Handle image name
  let imageName = name.replace(/['’]/g, "'"); // Normalize apostrophes just in case
  
  data.push({
    quote,
    name,
    role,
    image: `/testimonials/optimized/${imageName}.webp`
  });
}

// Write to a TS file
const tsCode = `import { TestimonialCard } from '../types';

export const mockTestimonials: TestimonialCard[] = ${JSON.stringify(data, null, 2)};
`;

fs.writeFileSync('data/mockTestimonials.ts', tsCode);
console.log('Testimonials generated!');
