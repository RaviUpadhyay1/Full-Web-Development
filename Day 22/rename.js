
const fs = require('fs');
fs.rename('ravi.txt', 'raviRenamed.txt', (err) => {
  if (err) throw err;
  console.log('Renamed!');
});
