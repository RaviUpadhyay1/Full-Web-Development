const fs = require('fs');
fs.readFile('ravi1.txt','utf-8',(err,data)=>{
    if(err){
        console.log("Error:",err)
    }
    else{
        console.log("file content",data)
    }
})