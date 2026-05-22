const fs = require('fs');

let content = fs.readFileSync('data/mockNews.ts', 'utf8');

// Add random views to each mock item if not present
let replaced = content.replace(/readTime: \{ UZ: (.*)/g, (match) => {
  if (match.includes('views:')) return match; // Already has views
  const randomViews = Math.floor(Math.random() * (4500 - 800 + 1) + 800);
  return `${match},\n    views: ${randomViews}`;
});

fs.writeFileSync('data/mockNews.ts', replaced);
console.log('Added random view counts to existing mock news items');
