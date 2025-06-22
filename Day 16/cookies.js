console.log(document.cookie)
document.cookie = "name=Ravi1223334444"
document.cookie = "name2=Ravi1223334444"
document.cookie = "name=Ravi"
console.log(document.cookie)
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${key}=${value}`
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)


document.cookie = "username=Ravi; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
