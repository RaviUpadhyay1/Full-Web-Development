//Sync
const fs = require('fs')
fs.writeFileSync("harry2.text","Harry is a good boy","utf-8")
const readData = fs.readFileSync("harry2.text","utf-8")
console.log(readData.toString())
const appendFile = fs.appendFileSync("harry2.text","\nRavi is also a smart boy","utf-8")
console.log(appendFile)
const fileDelete = fs.unlinkSync("harry2.text")
console.log(fileDelete)




// const fs = require('fs'); // use only one style (CommonJS)

// fs.writeFileSync("harry2.txt", "Harry is a good boy", "utf-8");

// const readData = fs.readFileSync("harry2.txt", "utf-8"); // directly decode
// console.log(readData); // no need for toString()
