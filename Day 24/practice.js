const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send("Home Page")
})
app.get("/about",(req,res)=>{
    res.send("About Page")
})
app.get("/contact",(req,res)=>{
    res.send("Contact page")
})
app.get("/ravi",(req,res)=>{
    res.send("Namaste Ravi")
})
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})