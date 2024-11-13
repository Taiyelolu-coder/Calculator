console.log(document);
let display = document.getElementById("working")


const addSevenToDisplay = () => {
    display.value = display.value + "7"
}
const addEightToDisplay = () => {
    display.value = display.value + "8"
}

const addNumToDisplay = (val) => {
    return display.value = display.value + val
}

const calculateTheDisplay = () => {
    return display.value = eval(display.value)
}
 
const allClear = () => {
    return display.value = " "
}


const deleteNum = () => {
    return display.value = display.value.slice(0,-1) 
}

const squareNum = () => {
    return display.value =eval(display.value * display.value)
}