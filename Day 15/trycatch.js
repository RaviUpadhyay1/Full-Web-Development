let a = prompt("Enter first number")
let b = prompt("Enter second number")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allow")
}
let sum = parseInt(a) + parseInt(b)

try {10
    console.log("The sum is",sum*x)
    
} catch (error) {
    console.log("😅 Error aagaya bhai:", error.message);
}

//  If we use set time out


// let a = prompt("Enter first number")
// let b = prompt("Enter second number")
// if(isNaN(a) || isNaN(b)){
//     throw SyntaxError("Sorry this is not allow")
// }
// let sum = parseInt(a) + parseInt(b)

// try {
//     setTimeout(() => {
//         console.log("The sum is",sum*x)
        
//     }, 2000);
    
// } catch (error) {
//     console.log("😅 Error aagaya bhai:", error.message);
// }