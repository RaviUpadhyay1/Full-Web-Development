import fs from "fs/promises"
let a = await fs.readFile("ravi.txt")
console.log(a.toString())