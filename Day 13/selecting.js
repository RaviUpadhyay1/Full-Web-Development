let boxes = document.getElementsByClassName("box")
console.log(boxes)
boxes[2].style.backgroundColor = "red"
document.getElementById("red").style.backgroundColor = "red"
document.querySelector(".box").style.backgroundColor = "green"
document.querySelectorAll(".box").forEach(boxed => {
    boxed.style.color="yellow";
    
});
// document.getElementsByTagName("p").style.color = "red"
document.getElementsByTagName("p")[0].style.color = "red"
document.getElementsByName("ravi")[0].style.color = 'blue'

console.log(document.getElementsByTagName("div")[5].matches("#red"))

let div = document.getElementsByTagName("div")[5];

if (div.matches("#red")) {
  div.style.backgroundColor = "black";
}

console.log(document.getElementsByTagName("div")[5].closest("html"))
console.log(document.querySelector(".container").contains(document.getElementById("red")))