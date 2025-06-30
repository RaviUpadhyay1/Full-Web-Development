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
// extends Allows a class to inherit from another.
class Lion extends Animal{

    constructor(name){
        // super() Calls the constructor of the parent class.
        super(name) // calls the parent (Animal) constructor
        console.log("Object is created and he is a lion..")
    }
    // Method Overriding -A child class defines its own version of a parent class method.
    eats(){
        // super.methods() Calls a method from the parent class.
        super.eats() // calls the parent's eats()
        console.log("kha raha hoon mein")
    }


}
let a = new Animal("Bunny");
console.log(a)


let l = new Lion("Shera")
console.log(l)