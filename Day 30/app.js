const express = require('express');
const app = express();
const port = 3000;

// Set EJS as view engine
app.set('view engine', 'ejs');

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// GET: show form
app.get('/', (req, res) => {
  res.render('index');
});

// POST: Handle form submission and redirect
app.post('/submit', (req, res) => {
  submittedName = req.body.username;
  res.redirect('/thankyou'); // redirect after POST
});

// GET: Thank you page
app.get('/thankyou', (req, res) => {
  res.render('thankyou', { name: submittedName });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
