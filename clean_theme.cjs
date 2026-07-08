const fs = require('fs');

const files = [
  'src/pages/Index.tsx',
  'src/pages/Product.tsx',
  'src/pages/Features.tsx',
  'src/pages/About.tsx',
  'src/pages/Contact.tsx',
  'src/pages/NotFound.tsx',
  'src/components/Footer.tsx',
  'src/components/Navbar.tsx',
  'src/components/HeroRetroGrid.tsx'
];

for (const f of files) {
  if (!fs.existsSync(f)) continue;
  let content = fs.readFileSync(f, 'utf8');
  const original = content;

  // Manual precise replacements for the messy injected strings:
  const replaces = [
    [/bg-slate-100 dark:bg-slate-800 dark:bg-white\/5 dark:bg-\[#0A192F\]/g, 'bg-[#0A192F]'],
    [/bg-slate-100 dark:bg-slate-800 dark:bg-white\/5 dark:bg-\[#060F1E\]/g, 'bg-[#060F1E]'],
    [/bg-slate-100 dark:bg-slate-800 dark:bg-white\/5 dark:bg-white\/5/g, 'bg-white/5'],
    [/bg-white dark:bg-\[#030712\]/g, 'bg-[#030712]'],
    [/bg-\[#F4F6F9\] dark:bg-\[#0A192F\]/g, 'bg-[#0A192F]'],
    [/bg-slate-50 dark:bg-\[#050B14\]/g, 'bg-[#050B14]'],
    [/bg-slate-50 dark:bg-[#050B14]\/80/g, 'bg-[#050B14]/80'],
    [/bg-slate-50 dark:bg-white\/\[0\.02\]/g, 'bg-white/[0.02]'],
    [/bg-slate-100 dark:bg-white\/5/g, 'bg-white/5'],
    [/bg-slate-100 dark:bg-\[#0A192F\]\/90/g, 'bg-[#0A192F]/90'],
    
    [/text-slate-900 dark:text-white\/45/g, 'text-white/45'],
    [/text-slate-900 dark:text-white\/80/g, 'text-white/80'],
    [/text-slate-900 dark:text-white/g, 'text-white'],
    [/text-slate-600 dark:text-slate-400/g, 'text-slate-400'],
    [/text-slate-500 group-hover:text-slate-700 dark:text-slate-300/g, 'text-slate-500 group-hover:text-slate-300'],
    
    [/border-slate-200 dark:border-white\/5/g, 'border-white/5'],
    [/border-slate-200 dark:border-white\/10/g, 'border-white/10'],
    
    [/hover:bg-slate-100 dark:bg-white\/\[0\.05\]/g, 'hover:bg-white/[0.05]'],
    [/hover:bg-white\/10 text-slate-900 dark:text-white/g, 'hover:bg-white/10 text-white']
  ];

  for (const [regex, repl] of replaces) {
    content = content.replace(regex, repl);
  }

  // Final cleanup of orphan dark: prefix that might be left by manual edits
  content = content.replace(/dark:bg-/g, 'bg-');
  content = content.replace(/dark:text-/g, 'text-');
  content = content.replace(/dark:border-/g, 'border-');

  if (original !== content) {
    fs.writeFileSync(f, content);
    console.log(`Cleaned ${f}`);
  }
}
console.log('Done.');
