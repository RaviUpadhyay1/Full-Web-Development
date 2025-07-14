import fs from "fs/promises";
const data = await fs.readFile("ravi3.txt", "utf-8");
console.log(data);
