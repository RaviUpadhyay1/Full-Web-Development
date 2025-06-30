async function sleep() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(45)

        },1000);
    })
}
(async function main() {
    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b)
    
})()


// | Term    | What it is                                                   | Role                                                  |
// | ------- | ------------------------------------------------------------ | ----------------------------------------------------- |
// | Promise | Object representing future completion of async task          | Holds eventual result or error                        |
// | resolve | Function to mark a Promise as successfully finished          | Provides the value when async task completes          |
// | async   | Keyword to define a function that returns a Promise          | Allows use of `await` inside and makes function async |
// | await   | Operator that pauses async function until a Promise resolves | Waits for Promise result and returns resolved value   |
