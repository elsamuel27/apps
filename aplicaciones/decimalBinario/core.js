const decimal = document.getElementById("decimal");
const button_calc = document.getElementById("calc");
var binario = document.getElementById("binario");

button_calc.onclick = function() {
    let decimalO = decimal.value;
    let binarioO = parseInt(decimalO).toString(2);
    binario.value = binarioO;
}