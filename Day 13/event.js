document.getElementById("btn1").onclick = () =>{
    alert('welcome');
}

document.getElementById("btn2").onclick = function (){
    alert("to be best")
}
let button = document.getElementById("btn")
button.addEventListener("click",()=>{
    alert("I was clicked")
    document.querySelector(".box").innerHTML = 
    "<b>Yayy you were clicked</b>"
}) 
document.getElementById("btn3").addEventListener("keydown",()=>{
    document.querySelector(".box").innerHTML = 
    "<b>Yayy you were clicked</b>"
}) 

document.getElementById("btn4").addEventListener("contextmenu",()=>{
    alert("Don't hack me")
})

document.addEventListener("keydown",(e)=>{
    console.log(e.key, e.keyCode)
})