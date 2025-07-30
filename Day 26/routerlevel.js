const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();

app.get('/', (req, res) => {
  res.send('🏠 Home Page');
});

router.use((req, res, next) => {
  console.log('⛳ Router middleware called');
  next();
});

router.get('/profile', (req, res) => {
  res.send('👤 Profile Page');
});

app.use('/user', router);
app.listen(port, () => {
  console.log(`🚀 http://localhost:${port}`);
});
