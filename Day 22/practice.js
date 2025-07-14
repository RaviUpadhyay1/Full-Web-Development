const fs = require("fs");

console.log("starting");

// ✅ Async Write
fs.writeFile("ravi.txt", "Ravi is a good boy", (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }

  console.log("✅ Async write done");

  // ✅ Async Read after write is complete
  fs.readFile("ravi.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    console.log("📖 Async read content:", data);
  });
});

console.log("ending");

// ❌ This sync read may run before the async write completes
// ✅ Better to use only if you're not mixing sync + async
try {
  const data = fs.readFileSync("ravi.txt", "utf8");
  console.log("📖 Sync read content:", data);
} catch (err) {
  console.error("Error reading synchronously:", err.message);
}
