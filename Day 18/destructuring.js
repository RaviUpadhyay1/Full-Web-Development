
(async function main(){
    let [x,y] = [1,5]
    let [a,b] = [1,5,7]
    let [c,d,...rest] = [1,5,7,8,9,10]
    console.log(x,y)
    console.log(a,b)
    console.log(c,d,rest)
})()