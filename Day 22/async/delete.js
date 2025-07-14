const fs = require('fs')
fs.unlink('ravi1.txt', (err) => {
  if (err) {
    console.error('❌ Error deleting file:', err);
  } else {
    console.log('🗑️ File deleted');
  }
});
