// let a = {
//     name:"Ravi",
//     language:"Javascript",
//     run: ()=>{
//         alert("self run")
//     }
// }
// console.log(a)
// let p  = {
//     run: ()=>{
//         alert("ravi")
//     }
// }
// a.__proto__=p 
// a.run()\


let animal = {
    eats:true
};
let rabbit = {
    jumps:true
};
rabbit.__proto__ = animal; 