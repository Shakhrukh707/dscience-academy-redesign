const fs = require('fs');

let content = fs.readFileSync('pages/Home.tsx', 'utf8');

const replacements = {
  'вЂў': '•',
  'вЂ™': "'",
  'вЂ': "'",
  'рџ“љ': '📚',
  'рџ’»': '💻',
  'рџЊџ': '🌟',
  'рџЋ“': '🎓',
  'рџЏ†': '🏆',
  'рџ“€': '📈',
  'рџЊЌ': '🌍'
};

for (const [bad, good] of Object.entries(replacements)) {
  content = content.split(bad).join(good);
}

fs.writeFileSync('pages/Home.tsx', content);
console.log("Fixed emojis and punctuation.");
