const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse incoming JSON
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('🏠 Welcome to the Home Page');
});

// Dynamic Product route
app.get('/product/:id', (req, res) => {
  const productId = req.params.id; // Get the ID from the URL
  res.send(`🛒 Product ID: ${productId}`);
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
