const fs = require('fs');

let content = fs.readFileSync('pages/Home.tsx', 'utf8');

// The main wrapper class
content = content.replace(
  'className="min-h-screen bg-[#F8FAFC] text-slate-900',
  'className="min-h-screen bg-white text-slate-900'
);

// Loading screen
content = content.replace(
  'className="fixed inset-0 z-[9999] overflow-hidden bg-[#F8FAFC]"',
  'className="fixed inset-0 z-[9999] overflow-hidden bg-white"'
);

// Projects section
content = content.replace(
  'className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-[#F8FAFC] dark:bg-[radial-gradient',
  'className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-white dark:bg-[radial-gradient'
);

// Why Us section
content = content.replace(
  'id="why" className="pt-20 sm:pt-24 md:pt-32 pb-20 sm:pb-24 md:pb-32 px-4 sm:px-6 md:px-8 bg-[#F8FAFC]"',
  'id="why" className="pt-20 sm:pt-24 md:pt-32 pb-20 sm:pb-24 md:pb-32 px-4 sm:px-6 md:px-8 bg-white"'
);

// Partners section
content = content.replace(
  'className="px-4 py-20 sm:px-6 sm:py-24 md:px-8 md:py-32 bg-[#F8FAFC] dark:bg-[radial-gradient',
  'className="px-4 py-20 sm:px-6 sm:py-24 md:px-8 md:py-32 bg-white dark:bg-[radial-gradient'
);

fs.writeFileSync('pages/Home.tsx', content);
console.log('Background colors updated to white');
