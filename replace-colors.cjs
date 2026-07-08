const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replacements = [
  // Text colors
  { regex: /text-blue-600/g, replacement: 'text-[#00a2c7]' },
  { regex: /text-blue-500/g, replacement: 'text-[#00a2c7]' },
  { regex: /text-blue-400/g, replacement: 'text-[#00a2c7]' },
  { regex: /text-sky-400/g, replacement: 'text-[#00a2c7]' },
  { regex: /text-cyan-400/g, replacement: 'text-[#00a2c7]' },
  
  // Backgrounds
  { regex: /bg-blue-100\/50/g, replacement: 'bg-[#00a2c7]/10' },
  { regex: /bg-blue-100\/60/g, replacement: 'bg-[#00a2c7]/10' },
  { regex: /bg-blue-500\/10/g, replacement: 'bg-[#00a2c7]/10' },
  { regex: /bg-blue-50/g, replacement: 'bg-[#00a2c7]/5' },
  { regex: /bg-blue-600\/10/g, replacement: 'bg-[#00a2c7]/10' },
  { regex: /bg-blue-600\/80/g, replacement: 'bg-[#00a2c7]/80' },
  
  // Borders
  { regex: /border-blue-100/g, replacement: 'border-[#00a2c7]/20' },
  { regex: /border-blue-200/g, replacement: 'border-[#00a2c7]/30' },
  { regex: /border-blue-500\/20/g, replacement: 'border-[#00a2c7]/20' },
  { regex: /border-blue-500\/25/g, replacement: 'border-[#00a2c7]/25' },
  
  // Rings
  { regex: /ring-blue-500\/30/g, replacement: 'ring-[#00a2c7]/30' },
  
  // Gradients
  { regex: /from-blue-400 via-sky-300 to-cyan-200/g, replacement: 'from-[#00a2c7] via-[#008ba8] to-cyan-200' },
  { regex: /from-blue-500\/25/g, replacement: 'from-[#00a2c7]/25' },
  { regex: /from-blue-500\/30/g, replacement: 'from-[#00a2c7]/30' },
  { regex: /via-blue-500\/15/g, replacement: 'via-[#00a2c7]/15' },
  { regex: /via-blue-500\/30/g, replacement: 'via-[#00a2c7]/30' },
  
  // Glows/Shadows (rgba)
  { regex: /rgba\(59, 130, 246,/g, replacement: 'rgba(0, 162, 199,' },
  { regex: /rgba\(59,130,246,/g, replacement: 'rgba(0,162,199,' },

  // Hex colors
  { regex: /#3B82F6/gi, replacement: '#00a2c7' }, // blue-500
  { regex: /#60A5FA/gi, replacement: '#008ba8' }, // blue-400
  { regex: /#93C5FD/gi, replacement: '#00c3eb' }, // blue-300
  { regex: /#7DD3FC/gi, replacement: '#00c3eb' }, // sky-300
  { regex: /#0284C7/gi, replacement: '#008ba8' }  // sky-600
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let newContent = content;
      for (const { regex, replacement } of replacements) {
        newContent = newContent.replace(regex, replacement);
      }
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

processDirectory(directoryPath);
console.log('Color replacement complete.');
