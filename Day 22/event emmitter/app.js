// Import EventEmiiter class
const EventEmmiter = require ('events')

// Create an instance of EventEmiiter
const emitter = new EventEmmiter()


// // Define an eent listener

// emitter.on("greet",()=>{
//     console.log(`hello ravi upadhyay`)
// })
// // Trigger (emit) the "greet" event
// emitter.emit("greet")



// // Event listener with arguments
// emitter.on("greet",(username)=>{
//     console.log(`hello ${username}`)
// })

// // Emitting event with data
// emitter.emit('greet','Ravi Upadhyay')


emitter.on("greet",(username,profession)=>{
    console.log(`hello ${username},You are a ${profession}`)
})

// Emitting event with data
emitter.emit('greet','Ravi Upadhyay','FullStack Developer')