let display = document.getElementById("display");
appendValue = (val)=>{
    if(display.innerText==="0"){
        display.innerText = val;
    }
    else{
        display.innerText += val;
    }
}

clearDisplay=()=>{
    display.innerText="0"
}
calculate=()=>{
    try{
        display.innerText=eval(display.innerText)
    } catch(e){
        display.innerText="Error"
    }
}

squareRoot=()=>{
    try{
        let val = eval(display.innerText)
        if (val<0){
            display.innerText="Error";
        }
        else{
            display.innerText=Math.sqrt(val);
        }
    } catch(e){
        display.innerText="Error"
    }
}