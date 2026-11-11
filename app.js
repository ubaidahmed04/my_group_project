var display = document.getElementById("display")
function displayValue(value){
    display.value  = display.value + value
}
function clearValue(){
    display.value = display.value.slice(0, -1)
}
function calculate(){
    display.value =  eval(display.value)
}
function clearDisplay(){
    display.value = ""
}

