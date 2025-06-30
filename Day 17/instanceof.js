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


// instanceof checks
console.log(a instanceof Animal); // ✅ true
console.log(a instanceof Lion);   // ❌ false

console.log(l instanceof Animal); // ✅ true (because Lion extends Animal)
console.log(l instanceof Lion);   // ✅ true

console.log(a instanceof Object); // ✅ true
console.log(l instanceof Object); // ✅ true









// class Animal {}
// class Dog extends Animal {}

// let d = new Dog();

// console.log(d instanceof Dog);    // true
// console.log(d instanceof Animal); // true
// console.log(d instanceof Object); // true
