document.title = "Document Object Model"
console.log(document.title)
console.log(document.body)
document.body.style.backgroundColor = "red"
console.log(document.body.childNodes)
console.log(document.body.childNodes[1].childNodes)
let cont = document.body.childNodes[1];
console.log(cont)
console.log(cont.firstChild)
console.log(cont.lastChild)
console.log(cont.firstElementChild)
cont.lastElementChild.style.color = "green"
cont.lastElementChild.style.backgroundColor = "white"
console.log(cont.lastElementChild.parentElement)
console.log(document.body.firstElementChild.childNodes)
console.log(document.body.firstElementChild.children)
console.log(document.body.firstElementChild.children[0])
console.log(document.body.firstElementChild.children[1])
console.log(document.body.firstElementChild.children[3])
console.log(document.body.firstElementChild.children[3].nextElementSibling)
console.log(document.body.firstElementChild.children[4].nextElementSibling)
console.log(document.body.firstElementChild.children[3].previousElementSibling)
console.log(document.body.children)
console.log(document.body.children[1])
console.log(document.body.children[1].rows)
console.log(document.body.children[1].columns)
console.log(document.body.children[1].tHead)
console.log(document.body.children[1].tBodies[0])
console.log(document.body.children[1].tBodies[0].rows)