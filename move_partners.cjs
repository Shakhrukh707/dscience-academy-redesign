const fs = require('fs');

let content = fs.readFileSync('pages/Home.tsx', 'utf8');

let partnersStart = content.indexOf('<section className="px-4 pt-4 sm:px-6 sm:pt-6 md:px-8 md:pt-10 bg-white">');
// Since FaqSection comes immediately after Partners, we can find the start of FaqSection
let faqStart = content.indexOf('<FaqSection t={t} lang={lang} />');

let partnersSection = content.substring(partnersStart, faqStart);

content = content.replace(partnersSection, '');

// Now insert partnersSection after FaqSection
let afterFaq = content.indexOf('<FaqSection t={t} lang={lang} />') + '<FaqSection t={t} lang={lang} />'.length;

let newContent = content.substring(0, afterFaq) + '\n' + partnersSection + content.substring(afterFaq);

fs.writeFileSync('pages/Home.tsx', newContent);
console.log("Moved Partners after FAQ");
