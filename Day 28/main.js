const express = require('express')
// const path = require('path');
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    //  res.sendFile('index.html', { root: path.join(__dirname, 'templates') });

    let siteName = "Adidas"
    let searchText = "Search Now"
    res.sendFile("templates/index.html",{root:__dirname})
})

app.get('/blog/:slug',(req,res)=>{
    let blogTitle = "Adidas why and when"
    let blogContent = "Its a very good brand"
    res.sendFile("templates/blogpost.html",{root:__dirname})
})
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})