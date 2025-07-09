let display = document.getElementById("display")
function appendValue(val) {
    if (display.innerText === '0') {
        display.innerText = val
    }
    else {
        display.innerText += val
    }
}

function clearDisplay() {
    display.innerText = '0'
}

let calculate = () => {
    try {
        let expression = display.innerText.replace(/%/g,'/100')
        display.innerText = eval(expression)
    }
    catch {
        display.innerText = "Error"
    }
}

function addBracket() {
    let open = (display.innerText.match(/\(/g) || []).length;
    let close = (display.innerText.match(/\)/g) || []).length;

    if (open === close || display.innerText.slice(-1).match(/[\+\-\*\/\(]/)) {
        appendValue('(')
    }
    else {
        appendValue(')')
    }
}

let toogleSign = () => {
    let expr = display.innerText
    let match = expr.match(/(.*?)(\(?-?\d+\.?\d*\)?)(\s*)$/)

    if (match) {
        let before = match[1]
        let number = match[2]
        let space = match[3]
        if (number.startsWith("(-") && number.endsWith(")")) {
            number = number.slice(2, -1)
        }
        else if (!number.startsWith("(-")) {
            number = "(-" + number.replace(/[()]/g, "") + ")";
        }

        display.innerText = before + number + space;
    }


}

function backspace(){
    let current = display.innerText
    if(current.length>1){

        display.innerText = display.innerText.slice(0,-1)
    }
    else{
        display.innerText = "0"
    }
}