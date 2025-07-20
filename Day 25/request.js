const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// GET
app.get('/', (req, res) => {
    res.send('GET request received');
});

// POST
app.post('/',(req,res)=>{
    console.log("hey its a post request")
    res.send("Hello world post")
})

// PUT
app.put('/',(req,res)=>{
    console.log("hey its a put request")
    res.send("Hello world put")
})

// DELETE
app.delete('/',(req,res)=>{
    console.log("hey its a delete request")
    res.send("Hello world delete")
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
