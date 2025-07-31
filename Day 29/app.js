const express = require('express');
const app = express();
const port = 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Route to display the form
app.get('/', (req, res) => {
  let changeName = "Fullname"
  res.render('index',{changeName}); // Renders views/form.ejs
});

// Route to handle form submission
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`✅ Received: ${name}, ${email}`);
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
