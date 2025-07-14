const fs = require('fs')
fs.appendFile('ravi1.txt',"\nRavi is good","utf-8",(err)=>{
    if (err){
        console.log("Error:",err)
    }
    else console.log("file has been saved")
})
