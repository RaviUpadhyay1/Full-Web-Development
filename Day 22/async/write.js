const fs = require('fs');

fs.writeFile('ravi1.txt', 'Ravi is learning async fs!', 'utf-8', (err) => {
  if (err) {
    console.error('❌ Error writing file:', err);
  } else {
    console.log('✅ File written successfully');
  }
});
