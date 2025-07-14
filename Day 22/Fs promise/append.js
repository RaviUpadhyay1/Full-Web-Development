import fs from 'fs/promises'
async function appendFile() {
  try {
    await fs.appendFile('ravi.txt', '\nAnd he is doing great!');
    console.log('✅ Content appended');
  } catch (err) {
    console.error('❌ Error:', err);
  }
}

appendFile();
