const http = require("http")
//web server
const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.write("I am ravi upadhyay")
        res.end()
    }
    if(req.url === "/source-code"){
        res.write("I am ravi upadhyay and i am very handsome")
        res.end()
    }
    if(req.url === "/contact"){
        res.setHeader("Content-Type","text/plain")
        res.write("I am ravi upadhyay and contact me")
        res.end()
    }
    if(req.url === "/services"){
        res.setHeader("Content-Type","text/html")
        res.write("<h1>I am ravi upadhyay and i am front  sna ravi developer</h1>")
        res.end()
    }
})

const hostname = '127.0.0.1';

const PORT = 3000;
server.listen(PORT,hostname,()=>{
    console.log(`Server running at http://${hostname}:${PORT}`)
})

// node --watch .\server.js    //without nodemon

//  nodemon .\server .js  //with nodeman


//To run code 
// first method
// cd..
// cd .\http_module\ 