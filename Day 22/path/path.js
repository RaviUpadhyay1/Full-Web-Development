import path from "path"
let myPath = "D:\\Web-development\\Day 22\\path\\ravi.txt"
console.log(path.extname(myPath))
console.log(path.dirname(myPath))
const filePath = path.join("D:/","Web-development\\ravi.txt")
console.log(filePath)

const parsedata = path.parse(filePath)
const resolvedPath = path.resolve(filePath)
const extname=path.extname(filePath)
const basename = path.basename(filePath)
const dirname = path.dirname(filePath)
console.log({parsedata,resolvedPath,extname,basename,dirname})