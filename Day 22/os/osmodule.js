const os = require("os")
// 🧑‍💻 1. os.userInfo() — Get current user info
console.log("os userinfo:",os.userInfo())

//  2. os.platform() — OS platform (win32, linux, etc.)
console.log("Os platform:",os.platform())

// 🧠 3. os.arch() — CPU architecture
console.log("Os arch:",os.arch())


// 🔁 4. os.cpus() — CPU details
console.log("os cpus:",os.cpus())

// 💾 5. os.totalmem() & os.freemem() — Memory in bytes
console.log("Total memory:",os.totalmem(),"bytes")
console.log("Free memory:",os.freemem(),"bytes")

// 🕰️ 6. os.uptime() — System uptime (in seconds)
console.log("Uptime:",os.uptime(),"seconds")

// 🛣️ 7. os.homedir() & os.tmpdir() — Home and temp directories
console.log("Home Dir:",os.homedir())
console.log("Temp Dir:",os.tmpdir())

// 🌐 8. os.hostname() & os.type() — Host and system type
console.log("Hostname:",os.hostname())
console.log("os type:",os.type())