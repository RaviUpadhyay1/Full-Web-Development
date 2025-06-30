
class User{
    constructor(name){
        // invokes the setter
        // this set the name using the setter
        this.name = name;
    }
    // getter for 'name'
    get name(){
        return this._name;
    }
    // setter for name
    set name(value){
        if(value.length<4){
            console.log("Name is too short.")
            return;
        }
        this._name=value
    }
}
let user = new User("John");
console.log(user.name) //John



// user = new User("")//Name is too short.
// "" has length 0
// Setter logs the error and does not set _name



user.name = "Pranish" //Updating the name
console.log(user.name)
// "Pranish".length >= 4, so it’s valid.
// Sets this._name = "Pranish"