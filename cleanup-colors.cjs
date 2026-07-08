const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replacements = [
  { regex: /bg-\[#00a2c7\]\/50\/20/g, replacement: 'bg-[#00a2c7]/20' },
  { regex: /bg-\[#00a2c7\]\/50\/18/g, replacement: 'bg-[#00a2c7]/10' },
  { regex: /bg-\[#00a2c7\]\/50\/0/g, replacement: 'bg-[#00a2c7]/0' },
  { regex: /bg-\[#00a2c7\]\/50\/8/g, replacement: 'bg-[#00a2c7]/10' },
  { regex: /bg-\[#00a2c7\]\/50\/15/g, replacement: 'bg-[#00a2c7]/15' },
  { regex: /border-\[#00a2c7\]\/30\/45/g, replacement: 'border-[#00a2c7]/30' },
  { regex: /border-\[#00a2c7\]\/30\/55/g, replacement: 'border-[#00a2c7]/30' },
  { regex: /bg-\[#00a2c7\]\/5\/40/g, replacement: 'bg-[#00a2c7]/5' },
  { regex: /bg-\[#00a2c7\]\/5\/30/g, replacement: 'bg-[#00a2c7]/5' },
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
console.log('Cleanup complete.');
