const express = require('express')
const app = express()
const port = 3000

//app.get or app.post or app.put or app.delete
app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/about', (req, res) => {
  res.send('About me')
})
app.get('/contact', (req, res) => {
  res.send('Contact me')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

