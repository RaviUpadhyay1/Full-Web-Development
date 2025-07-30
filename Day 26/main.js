const express = require('express');
const app = express();
const port = 3000;
const birds = require('./routes/birds')
const fs = require("fs")



app.use('/birds', birds)


// Serve static files from the "public" folder
app.use(express.static('public'));


// 👀 Custom Middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});

app.use((req, res, next) => {
  // fs.writeFileSync("logs.txt",`${Date.now()} is a ${req.method}`)
  console.log(req.headers)
  req.harry = 'I am ravi'
  fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
  console.log(`${Date.now()} is a ${req.method}`);
  next();
});

app.use((req, res, next) => {
  console.log('m1');
  next();
});

app.use((req, res, next) => {
  console.log('m2');
  next();
});





app.get('/', (req, res) => {
  res.send('Hello World! ' +  req.harry);
});
app.get('/contact', (req, res) => {
  res.send('Hello contact!');
});
app.get('/about', (req, res) => {
  res.send('Hello about');
});

// 404 handler (must come after all routes and middleware)
app.use((req, res) => {
  res.status(404).send('🚫 404 - Page Not Found');
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
