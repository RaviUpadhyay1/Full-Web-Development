// ✅ 1. Template Literal (Recommended Modern Way)

let name = "Ravi";
let age = 25;

console.log(`User ${name} is ${age} years old.`);



// ✅ 2. String Concatenation using +
let quantity = 2;
let item = "Burger";

console.log("Order placed: " + quantity + " " + item + "(s)");


// ✅ 3. String.concat()
let number = 2;
let thing = "Burger";

console.log("Order placed: ".concat(number, " ", thing, "(s)"));


// ✅ 4. util.format() (Node.js only)
import util from 'util';  // Only works in Node.js

let num = 2;
let food = "Burger";

console.log(util.format("Order placed: %d %s(s)", num, food));


// ✅ 5. Custom format() Function (Like Python)
function format(str, ...args) {
  return str.replace(/{(\d+)}/g, (match, index) => args[index]);
}

let quant = 2;
let ite = "Burger";

console.log(format("Order placed: {0} {1}(s)", quantity, ite));
