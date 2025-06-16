console.log("Strings")
// String are immutable
let a = "Ravi";
console.log(a)
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a.length)

let myname = "Ravi";
let friend = "Gopi";
console.log("His name is " + myname + " and jos friends name is " + friend)
console.log(`His name is ${myname} and his friend name is ${friend}`)

let message = "Name:\tRavi\nLocation:\tKathmandu";
console.log(message);
console.log("Hello World\rHi");


let b = "Pranish"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
console.log(b.slice(1,4))
console.log(b.slice(1))
console.log(b.replace("Pr","Rp"))
console.log(b.concat(a))
console.log(b.concat(a,"upadhyay"))

let c = "    Ravi   "
console.log(c)
console.log(c.trim())