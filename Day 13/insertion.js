let div = document.createElement("div");
div.innerHTML = "I have been inserted by <b>by Ravi </b>"
div.setAttribute("class","created");
document.querySelector(".container").replaceWith(document.querySelector(".box"))  
document.querySelector(".container").replaceWith(div)  
document.querySelector(".container").append(div);  
document.querySelector(".container").before(div);  
document.querySelector(".container").after(div);  
document.querySelector(".container").prepend(div);

let cont = document.querySelector(".container")
cont.insertAdjacentHTML('afterend',"<b>I am under the water please help me</b>")
cont.insertAdjacentHTML('afterbegin',"<b>I am under the water please help me</b>")
cont.insertAdjacentHTML('beforebegin',"<b>I am under the water please help me</b>")
cont.insertAdjacentHTML('beforeend',"<b>I am under the water please help me</b>")

document.querySelector(".box").remove()

console.log(document.querySelector(".container").classList)
console.log(document.querySelector(".container").className)
console.log(document.querySelector(".container").classList.add("Ravi"))
console.log(document.querySelector(".container").classList.remove("Ravi"))
console.log(document.querySelector(".container").classList.toggle("red"))
console.log(document.querySelector(".container").classList.toggle("red"))
console.log(document.querySelector(".container").classList.toggle("red"))
console.log(document.querySelector(".container").classList.contains("red"))