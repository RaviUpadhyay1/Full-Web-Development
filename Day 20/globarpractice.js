console.log("Directory:",__dirname)
console.log("File:",__filename)
console.log("Ravi")
global.myName = "Ravi"
console.log(myName)
console.log("Proceess Id:",process.pid)
console.log("Plastform:",process.platform)
console.log("Node Version:",process.version)
console.log("Environment:",process.env.NODE_ENV)
setTimeout(() => {
    console.log("run after a second")
}, 1000);
let count = 0;
let interval = setInterval(() => {
    console.log("Running Interval",++count);
    if(count === 5) {clearInterval(interval);}
}, 1000);