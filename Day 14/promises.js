// alert('Ravi');
// console.log('ravi');



// let promp1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("I am done")
//         resolve("Ravi")
//     },3000);
// })
// promp1.then((a)=>{
//     console.log(a)
// })



let promp1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was supporting you")
    }
    else {
        setTimeout(() => {
            console.log("I am done")
            resolve("Ravi")
        }, 1000);
    }
})
promp1.then((a) => {
    console.log("Result:",a)
}).catch((err)=>{
    console.log('Error:',err);
})
