const fs = require('fs')
fs.unlink('raviRenamed.txt', (err) => {
  if (err) throw err;
  console.log('Deleted!');
});
