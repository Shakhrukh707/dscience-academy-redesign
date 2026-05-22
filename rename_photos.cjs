const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'public/news/hakaton');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg'));
files.forEach((f, i) => {
  fs.renameSync(path.join(dir, f), path.join(dir, (i+1) + '.jpg'));
});
console.log('Renamed ' + files.length + ' files.');
