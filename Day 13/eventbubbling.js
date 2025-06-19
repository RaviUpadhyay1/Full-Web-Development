// document.querySelector(".child").addEventListener("contextmenu",()=>{
//     alert("child was clicked")
// })
// document.querySelector(".childContainer").addEventListener("contextmenu",()=>{
//     alert("childcontainer was clicked")
// })
// document.querySelector(".container").addEventListener("contextmenu",()=>{
//     alert("container was clicked")
// })
document.querySelector(".child").addEventListener("contextmenu",(e)=>{
    e.stopPropagation()
    alert("child was clicked")
})
document.querySelector(".childContainer").addEventListener("contextmenu",(e)=>{
    e.stopPropagation()
    alert("childcontainer was clicked")
})
document.querySelector(".container").addEventListener("contextmenu",(e)=>{
    e.stopPropagation()
    alert("container was clicked")
})

