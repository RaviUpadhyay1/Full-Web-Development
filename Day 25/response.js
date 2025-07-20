const express = require('express')
const app = express()
const port = 3000
const path = require('path')
// app.get('/send',(req,res)=>{
//     res.send('Hello from res.send(')
// })

// 📝 1. res.send() – Plain response
app.get('/send', (req, res) => {
  res.send('👋 Hello from res.send()');
});

// 🧾 2. res.json() – JSON data
app.get('/json', (req, res) => {
  res.json({ user: 'Ravi', age: 25 });
});

// ⚠️ 3. res.status() – Custom status with message
app.get('/status', (req, res) => {
  res.status(404).send('❌ Page not found!');
});

// ✅ 4. res.sendStatus() – Shorthand status + message
app.get('/sendstatus', (req, res) => {
  res.sendStatus(403); // Forbidden
});

// 📄 5. res.sendFile() – Serve HTML file
app.get('/file', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

// 💾 6. res.download() – Download file
app.get('/download', (req, res) => {
  res.download(path.join(__dirname, 'sample.txt'));
});

// 🔁 7. res.redirect() – Redirect to another route
app.get('/redirect', (req, res) => {
  res.redirect('/send');
});

// 🖼️ 8. res.type() – Set Content-Type
app.get('/type', (req, res) => {
  res.type('html');
  res.send('<h1>📄 Content-Type set to HTML</h1>');
});

// 🎯 9. res.set() and res.get() – Set & Get headers
app.get('/headers', (req, res) => {
  res.set('X-Custom-Header', 'ExpressRocks');
  const value = res.get('X-Custom-Header');
  res.send(`Custom Header Set: ${value}`);
});

// 🔗 10. res.links() – Link header
app.get('/links', (req, res) => {
  res.links({
    next: '/page/2',
    last: '/page/10'
  });
  res.send('🔗 Links header sent!');
});

// 🧁 11. res.cookie() – Set cookie (no need for cookie-parser here)
app.get('/cookie', (req, res) => {
  res.cookie('username', 'Ravi', { httpOnly: true });
  res.send('🍪 Cookie set!');
});

// ❌ 12. res.clearCookie() – Clear cookie
app.get('/clearcookie', (req, res) => {
  res.clearCookie('username');
  res.send('🧹 Cookie cleared!');
});

// 🛑 13. res.end() – End response manually
app.get('/end', (req, res) => {
  res.write('🛑 Response started...');
  res.end(' and manually ended.');
});

// Optional: Home route
app.get('/', (req, res) => {
  res.send(`
    <h2>🚀 Express Response Methods</h2>
    <ul>
      <li><a href="/send">res.send()</a></li>
      <li><a href="/json">res.json()</a></li>
      <li><a href="/status">res.status()</a></li>
      <li><a href="/sendstatus">res.sendStatus()</a></li>
      <li><a href="/file">res.sendFile()</a></li>
      <li><a href="/download">res.download()</a></li>
      <li><a href="/redirect">res.redirect()</a></li>
      <li><a href="/type">res.type()</a></li>
      <li><a href="/headers">res.set()/get()</a></li>
      <li><a href="/links">res.links()</a></li>
      <li><a href="/cookie">res.cookie()</a></li>
      <li><a href="/clearcookie">res.clearCookie()</a></li>
      <li><a href="/end">res.end()</a></li>
    </ul>
  `);
});
app.listen(port,()=>{
    console.log(`Server run at : http://localhost:${port}`)
})