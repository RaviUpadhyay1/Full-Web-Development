// let a = prompt("Enter first number")
// let b = prompt("Enter second number")
// if(isNaN(a) || isNaN(b)){
//     throw SyntaxError("Sorry this is not allow")
// }
// let sum = parseInt(a) + parseInt(b)

// let x = 2
// try {10
//     console.log("The sum is",sum*x)

// } catch (error) {
//     console.log("😅 Error aagaya bhai:", error.message);
// }
// finally{
//     console.log("files are being closed and db connection is being close")
// }


// if we return something then we get some output outside then we use finanlly

let a = prompt("Enter first number")
let b = prompt("Enter second number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allow")
}
let sum = parseInt(a) + parseInt(b)
function main() {
    let x = 2
    try {
        10
        console.log("The sum is", sum * x)
        return true

    } catch (error) {
        console.log("😅 Error aagaya bhai:", error.message);
        return false
    }
    finally {
        console.log("files are being closed and db connection is being close")
    }
}
let c = main()