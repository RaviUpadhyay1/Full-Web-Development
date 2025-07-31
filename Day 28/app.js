const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  const user = { name: 'Ravi <script>alert("x")</script>' };
  const bio = '<p><strong>Web Developer</strong> from Nepal</p>';
  res.render('ravi', { user, bio });
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
