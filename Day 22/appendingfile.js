const fs = require("fs")
fs.writeFile("ravi.txt","Ravi is a ggod boy",()=>{
    console.log("done")
    fs.readFile("ravi.txt",(error,data)=>{
        console.log(error, data.toString())
    })
})
fs.appendFile("ravi.txt","\nRavi is also a smart boy",(e,d)=>{
    console.log(d)
})
console.log("ending")