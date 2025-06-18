let a = 6
function factorial(number){
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a,b)=> {
        return a*b
    });
    console.log(c)
}
factorial(a)

function factorial(n) {
  let result = 1;          // Start with 1
  for (let i = 1; i <= n; i++) {  // Loop from 1 to n
    result = result * i;   // Multiply result by current number
  }
  return result;           // Return the final factorial value
}

console.log(factorial(6));  // Output: 720

