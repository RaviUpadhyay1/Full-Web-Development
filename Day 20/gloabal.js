
//  1. __dirname and __filename
console.log("Directory:", __dirname);
console.log("File:", __filename);
//  2. console – Same as in browser
console.log("This is a log");
console.error("This is an error");
console.warn("This is a warning");

// 🔍 3. setTimeout() and setInterval()
setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);

let count = 0;
let interval = setInterval(() => {
  console.log("Running interval", ++count);
  if(count === 5) clearInterval(interval); // stop after 5 times
}, 1000);
// 4. process – Info about your Node.js environment
console.log("Process ID:", process.pid);
console.log("Platform:", process.platform);
console.log("Node version:", process.version);
console.log("Environment:", process.env.NODE_ENV);
// 5. global – Like window in browser
global.myName = "Ravi";
console.log(myName); // Ravi
