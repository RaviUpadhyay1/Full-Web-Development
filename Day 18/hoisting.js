// var is hoisted
console.log(a); // undefined
var a = 5;

// behind the scene
// var a;
// console.log(a); // undefined
// a = 5;



// Function Declarations are fully hoisted

greet(); // ✅ "Hello"

function greet() {
    console.log("Hello");
}

// let and const are hoisted but in Temporal Dead Zone (TDZ)

console.log(b); // ❌ ReferenceError
let b = 10;
