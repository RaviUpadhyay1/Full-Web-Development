const express = require('express')
// const path = require('path');
const app = express()
const port = 3000

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    //  res.sendFile('index.html', { root: path.join(__dirname, 'templates') });

    let siteName = "Adidas"
    let searchText = "Search Now"
    let arr = ['Hey',54,45]
    res.render("index",{siteName: siteName,searchText: searchText,arr})
})

app.get('/blog/:slug',(req,res)=>{
    let blogTitle = "Adidas why and when"
    let blogContent = "Its a very good brand"
    res.render("blogpost",{blogTitle:blogTitle,blogContent:blogContent})
})
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})