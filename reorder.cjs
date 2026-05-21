const fs = require('fs');

let content = fs.readFileSync('pages/Home.tsx', 'utf8');

// The layout part is at the very bottom of the file
const startBoundary = '        <section id="why" className="pb-20 sm:pb-24 md:pb-32 px-4 sm:px-6 md:px-8 bg-[#F8FAFC]">';
const endBoundary = '      </main>';

let beforeWhy = content.substring(0, content.indexOf(startBoundary));
let remaining = content.substring(content.indexOf(startBoundary));

let whyEnd = remaining.indexOf('        </section>\r\n\r\n        <section className="px-4 pt-4 sm:px-6 sm:pt-6 md:px-8 md:pt-10 bg-white">');
if(whyEnd === -1) {
  // try LF instead of CRLF
  whyEnd = remaining.indexOf('        </section>\n\n        <section className="px-4 pt-4 sm:px-6 sm:pt-6 md:px-8 md:pt-10 bg-white">');
}

let whySection = remaining.substring(0, whyEnd + 18); // includes `</section>`
remaining = remaining.substring(whyEnd + 18);

// Now remaining starts with `<section className="px-4 pt-4 sm:px-6 sm:pt-6 md:px-8 md:pt-10 bg-white">`
let partnersStart = remaining.indexOf('<section className="px-4 pt-4 sm:px-6 sm:pt-6 md:px-8 md:pt-10 bg-white">');
let testimonialsStart = remaining.indexOf('<section id="apply" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-white">');

let partnersSection = remaining.substring(partnersStart, testimonialsStart);

let projectsStart = remaining.indexOf('<ProjectsSection lang={lang} />');
let testimonialsSection = remaining.substring(testimonialsStart, projectsStart);

let tail = remaining.substring(projectsStart);
// tail is:
// <ProjectsSection lang={lang} />
// <FaqSection t={t} lang={lang} />
// <MediaSection t={t} />
// </main> ...

// We want:
// Why Us
// MediaSection
// ProjectsSection
// Testimonials
// Partners
// FaqSection

let newTail = `
        <MediaSection t={t} />
        
        <ProjectsSection lang={lang} />

${testimonialsSection}
${partnersSection}
        <FaqSection t={t} lang={lang} />
      </main>
`;
newTail = newTail.replace(/^\n/, '');

// Since tail contains `</main>` and beyond, we need to extract the stuff after `</main>`
let afterMain = tail.substring(tail.indexOf('      </main>') + 15);
newTail += afterMain;

fs.writeFileSync('pages/Home.tsx', beforeWhy + whySection + '\n' + newTail);
console.log("Reordered successfully");
