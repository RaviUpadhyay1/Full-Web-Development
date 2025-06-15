console.log("Hello I am conditional tutorial")

let age = 18;
let grace = 2;

if(age>18){
    console.log("You can drive");
}
else if(age==18){
    console.log("You are just 18")
}
else if(age!=18){
    console.log("You are not 18")
}
else{
    console.log("You cannot drive")
}

// Arithmetic Operators
console.log(age+grace);
console.log(age-grace);
console.log(age*grace);
console.log(age/grace);
console.log(age**grace);
console.log(age%grace);
console.log(age++);
console.log(age);
console.log(age--);
console.log(age);

// Arithmetic Operators
age += grace
console.log("The age is",age)
age -= grace
console.log("The age is",age)
age *= grace
console.log("The age is",age)
age /= grace
console.log("The age is",age)
age %= grace
console.log("The age is",age)
age**= grace
console.log("The age is",age)


// Comparision Operators
let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is",comp1 == comp2);
console.log("comp1 != comp2 is",comp1 != comp2);
console.log("comp1 === comp2 is",comp1 === comp2);
console.log("comp1 !== comp2 is",comp1 !== comp2);
console.log("comp1 <= comp2 is",comp1 <= comp2);
console.log("comp1 >= comp2 is",comp1 >= comp2);
console.log("comp1 > comp2 is",comp1 > comp2);
console.log("comp1 < comp2 is",comp1 < comp2);

// Logical Operators

let log1 = 5;
let log2 = 6;
console.log(log1>log2 && log1==5)    //This is or gate when both result is true then it gives true result
console.log(log1>log2 || log1==5) // This is and gate when one of the input is true then it give true result
console.log(!false)
console.log(!true)


/*
This is use for multiline comment
*/
// This is use for single line comment



// Ternary operator
let years = 18;
let result = (years >= 18) ? "Adult" : "Minor";  
// ? means “then”
// : means “else”
console.log(result);