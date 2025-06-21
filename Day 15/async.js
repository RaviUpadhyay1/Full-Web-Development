async function getData() {
    return new Promise((resolve, result) => {
        setTimeout(() => {
            resolve(455)
        }, 3000);
    })

}
async function main(){
    console.log("Loading modules")

    console.log("Do something else")


    console.log("Load Data")
    let data = await getData()




    // without async

    // data.then((v)=>{
    //     console.log(data)
    //     console.log("Process data")
    //     console.log("task 2")
    // })


    // with async 

    console.log(data)

    console.log("Process data")

    console.log("task 2")
}
main()