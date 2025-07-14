// import fs from "fs/promises"
// fs.promises.readdir("ravi.txt").then((data) =>{
//     console.log(data)
// })

import fs from "fs/promises";

async function readFolder() {
  try {
    const files = await fs.readdir("async");
    console.log("📁 Files in current directory:", files);
  } catch (err) {
    console.error("❌ Error reading directory:", err);
  }
}

readFolder();
