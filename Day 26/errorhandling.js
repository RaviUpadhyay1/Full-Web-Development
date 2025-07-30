const express = require('express');
const app = express();
const port = 3000;

// ✅ Normal route
app.get('/', (req, res) => {
  res.send('✅ Hello World!');
});

// ❌ Route that triggers an error
app.get('/error', (req, res, next) => {
  // You can throw an error or use next(new Error)
  next(new Error('💥 Something went wrong!'));
});

// ❓ 404 Not Found handler (should be after all routes)
app.use((req, res, next) => {
  res.status(404).send('🚫 404 - Page Not Found');
});

// 🔥 Error-handling middleware (must have 4 parameters)
app.use((err, req, res, next) => {
  console.error('⚠️ Error caught:', err.stack);

  res.status(500).send(`
    <h1>🔥 500 - Internal Server Error</h1>
    <p>${err.message}</p>
  `);
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
