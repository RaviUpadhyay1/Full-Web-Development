console.log("Ravi is a hacker")
console.log("Pranish is a hecker")
setTimeout(() => {
    console.log("I am inside settimeout")
},2000);
setTimeout(() => {
    console.log("I am a inside settimeout")
},0);
console.log("The End")


const fn = ()=>{
    console.log("nothing")
}
const callback = (arg,fn) => {
    console.log(arg)
    fn();
  
}


const loadScript = (src, callback)=>{
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = () => callback("Ravi",fn)
    document.head.append(sc)
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)