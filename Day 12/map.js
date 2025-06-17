let arr = [1,13,5,7,11]
let newarr =[]
for (let i = 0; i<arr.length; i++){
    newarr.push(arr[i]**2)
}
console.log(newarr)

// Map
let a = [1,11,14,15,21]
let newa = a.map((e)=>{
    return e**2
})
console.log(newa)


let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]

// Filter 

let nums = [1, 2, 3, 4, 5, 6];
let greaterThanFive = (e) =>{
    if(e>=5){
        return true
    }
    return false
}
console.log(nums.filter(greaterThanFive))


let n = [5, 12, 8, 20, 3];
let filtered = n.filter(num => num > 10);

console.log(filtered); // [12, 20]


let num = [1, 2, 3, 4, 5, 6];
let evens = num.filter(n => n % 2 === 0);

console.log(evens); // [2, 4, 6]

// Reduce function
let num1 = [1,2,3,4,5]

let red = (a,b)=>{
    return a*b
}
console.log(num1.reduce(red))


let sum = (a,b) =>{
    return a+b
}
console.log(num1.reduce(sum))

let add = num1.reduce((a,b)=> a+b);
console.log(add)