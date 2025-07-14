import fs from "fs/promises"
// async function writeFile() {
//   try {
//     await fs.writeFile('ravi.txt', 'Ravi is learning Node.js with promises.');
//     console.log('✅ File written successfully');
//   } catch (err) {
//     console.error('❌ Error:', err);
//   }
// }

// writeFile();

await fs.writeFile("ravi3.txt", "Hello from Ravi!", "utf-8");
