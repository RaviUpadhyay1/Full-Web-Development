class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created..")
    }

    eats(){
        console.log("Kha raha hoon")
    }
    jumps(){
        console.log("kood raha hu")
    }
}
let a = new Animal("Bunny");
console.log(a)