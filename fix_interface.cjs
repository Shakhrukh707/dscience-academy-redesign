const fs = require('fs');

let content = fs.readFileSync('data/mockNews.ts', 'utf8');

// Fix the interface
content = content.replace(
`  author: string;
  readTime: LocalizedText;,
    views: 1243
  views?: number;
  gallery?: string[];`,
`  author: string;
  readTime: LocalizedText;
  views?: number;
  gallery?: string[];`
);

content = content.replace(
`  author: string;
  readTime: LocalizedText;,
    views: 2434
  views?: number;
  gallery?: string[];`,
`  author: string;
  readTime: LocalizedText;
  views?: number;
  gallery?: string[];`
);

// We need a more general fix for the interface part.
content = content.replace(/readTime: LocalizedText;,\n\s+views: \d+\n\s+views\?: number;/g, "readTime: LocalizedText;\n  views?: number;");


fs.writeFileSync('data/mockNews.ts', content);
