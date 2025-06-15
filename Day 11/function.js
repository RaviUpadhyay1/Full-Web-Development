// Basic function syntax
function nice(name) 
{
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " keep learning!")
    
}

nice("Ravi")

//  2. Return a Value
function sum(a,b){
    // console.log(a+b)
    return a+b
}
add = sum(3,5)

console.log("The sum of a and b is: ",add)


function sum(c,d,e=5){
    return c+d+e
}
add = sum(3,5)
console.log("The sum of c, d and e is : ",add)

// 3. Function Expression
const multiply=function(x,y){
    return x*y;
};
console.log(multiply(4,5))

// Arrow function
const divide = (f, g) => {
  return f / g;
};
division = divide(6,2)
console.log("The division of f and g is: ",division)


//Function Inside Function
function outer() {
  function inner() {
    console.log("Inner function");
  }
  inner();
}

outer(); // Output: Inner function
