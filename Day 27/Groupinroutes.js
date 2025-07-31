const express = require('express');
const app = express();
const port = 3000;

const userRoutes = require('./routes/user');
app.use('/user', userRoutes);

app.get('/', (req, res) => {
  res.send('🏠 Home');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
