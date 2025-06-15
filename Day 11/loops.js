console.log("About Loops")
// for loop
let a = 1;
for (let i = 0; i < 20; i++) {
    console.log(a+i);
    
}

// for in loop
let obj ={
    name: "Ravi",
    role: "Programmer",
    company: "Ravi IT solution"
}
for(let key in obj){
    console.log(key + ":"+ obj[key])
}

// for of loop
for (const c of "Harry"){
    console.log(c)
}


// While loop

let i = 0;
while(i<6){
    console.log(i);
    i++;
}

// Do while loop
let j = 0;
do {
    console.log(j)
    j++;
} while (j<6);