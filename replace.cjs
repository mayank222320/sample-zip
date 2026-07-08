const fs = require('fs');
const file = 'f:/COPMAP/Copmap Website/Copmap2.0/elegant-canvas/src/pages/Index.tsx';
let data = fs.readFileSync(file, 'utf8');

// Add import
data = data.replace(
  'import MarqueeTicker from "@/components/MarqueeTicker";',
  'import MarqueeTicker from "@/components/MarqueeTicker";\nimport { DashboardMockup } from "@/components/DashboardMockup";'
);

// Replace the block
const startStr = '               {/* Huge Dashboard Window */}';
const endStr = '           </motion.div>\n        </section>\n\n        {/* ─── PROTOCOL SEQ';

const startIndex = data.indexOf(startStr);
const endIndex = data.indexOf(endStr);

if (startIndex !== -1 && endIndex !== -1) {
  const replacement = '               <DashboardMockup />\n';
  fs.writeFileSync(file, data.substring(0, startIndex + startStr.length + 1) + replacement + data.substring(endIndex));
  console.log('Successfully replaced content.');
} else {
  console.log('Could not find bounds.');
}
