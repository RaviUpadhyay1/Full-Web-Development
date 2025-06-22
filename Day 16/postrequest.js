// With postrequest


// let options = {
//     method: "POST",
//     headers: {
//         "Content-type": "application/json"
//     },
//     body: JSON.stringify({
//         title: 'Ravi',
//         body: 'Dai',
//         userId: 4,
//     }),
// };
// fetch('https://jsonplaceholder.typicode.com/posts', options)
//     .then((response) => response.json())
//     .then((json) => console.log(json))









// With async function






// const createTodo = async (todo) => {
//     let options = {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify(todo)
//     };
//     let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//     let response = await p.json()
//     return response
// }
// const getTodo = async(id) =>{
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts'+id)
//     let r = await response.json()
//     return r
// }
// const mainFunc = async()=>{
//     let todo = {
//         title:'Ravi',
//         body:'Dai',
//         userId:4,
//     }
//     let todor = await createTodo(todo)
//     console.log(todor)
//     console.log(getTodo(2))
// }

// mainFunc()

const createTodo = async (todo) => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(todo)
    };
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options);
    let response = await p.json();
    return response;
}

const getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    let r = await response.json();
    return r;
}

const mainFunc = async () => {
    let todo = {
        title: 'Ravi',
        body: 'Dai',
        userId: 4,
    };
    let todor = await createTodo(todo);
    console.log("Created Todo:", todor);

    let fetchedTodo = await getTodo(2);
    console.log("Fetched Todo:", fetchedTodo);
}

mainFunc();













