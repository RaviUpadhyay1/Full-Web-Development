let eyeicon = document.getElementById("eyeicon")
let password = document.getElementById("password")

function eye(){
    if(password.type == "password"){
        password.type = "text"
        eyeicon.src = "images/eye-open.png"
    }
    else{
        password.type = "password"
        eyeicon.src = "images/eye-close.png"
    }
}