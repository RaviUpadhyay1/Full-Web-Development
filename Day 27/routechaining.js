const express = require('express')
const app = express()
const port = 3000;
app.use(express.json())

app.route('/user')
    .get((req, res) => {
        res.send("Get User")
    })
    .post((req, res) => {
        res.send("Post User")
    })
    .put((req, res) => {
        res.send("Put User")
    })
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})