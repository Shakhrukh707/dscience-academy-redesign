const fs = require('fs');
let content = fs.readFileSync('data/mockNews.ts', 'utf8');
content = content.replace(/author: 'DScience Academy'/g, "author: 'O‘quv markaz.'");
fs.writeFileSync('data/mockNews.ts', content);
console.log('Author replaced successfully');
