// 1. ✅ Write a File (writeFileSync)
const fs = require("fs")
// console.log(fs)

console.log("starting")
// Sync
// fs.writeFileSync("harry.text","Harry is a good boy")

// Async
fs.writeFile("ravi.txt","Ravi is a ggod boy",()=>{
    console.log("done")
    fs.readFile("harry.text",(error,data)=>{
        console.log(error, data.toString())
    })
})
console.log("ending")
const data = fs.readFileSync('ravi.txt', 'utf8');
console.log(data); // Hello from Node.js!


// ❌ This sync read may run before the async write completes
// ✅ Better to use only if you're not mixing sync + async
try {
  const data = fs.readFileSync("ravi.txt", "utf8");
  console.log("📖 Sync read content:", data);
} catch (err) {
  console.error("Error reading synchronously:", err.message);
}