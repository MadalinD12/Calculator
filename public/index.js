const display = document.getElementById("display");

function appendToDisplay(input){
    display.value +=input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value);
}

function deleteOne(){
    display.value = Math.floor(display.value / 10);

}