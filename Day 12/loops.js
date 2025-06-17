let a = [1,2,3,4,5,6]

for(let i = 0; i<a.length;i++){
    console.log(i)
}


a.forEach((value, index , arr) => {
    console.log(`Index ${index}: ${value} Array: ${arr}`)
})

let obj = {
    name : "Ravi",
    age : 24,
    place : "Kathmandu"
}
for (let key in obj){
    console.log(key +" : "+ obj[key])
}

for (let value of a){
    console.log(value)
}


let str = "Ravi";

let letters = Array.from(str);
console.log(letters);