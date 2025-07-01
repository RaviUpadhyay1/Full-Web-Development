function sum(a,b,c){
    return a+b+c
}

let arr = [1,4,6]
console.log(arr[0]+arr[1]+arr[2])
console.log(sum(arr[0],arr[1],arr[2]))
console.log(sum(...arr))