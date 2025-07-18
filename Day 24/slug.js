const express = require ('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send("Welcome to Ravi")
})
app.get('/post',(req,res)=>{
    res.send("Welcome to my post")
})
app.get('/post/:slug',(req,res)=>{
    // logic to fetch {slug } from the db
    // for url: http://localhost:3000/post/intro?term=express&limit=5
    console.log(req.params) //will output  { slug: 'intro' }
    console.log(req.query) //wil output{ term: 'express', limit: '5' }
    res.send(`hello ravi ${req.params.slug}`)
})
// app.get('/post/:slug/:second',(req,res)=>{
//     res.send(`hello ${req.params.slug} and ${req.params.second}`)
// })
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})