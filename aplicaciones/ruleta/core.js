const input = document.getElementById("elemento");
const button1 = document.getElementById("prueba");
const button2 = document.getElementById("prueba2");
var ruleta = [];

button1.onclick = function() {
    ruleta.push(input.value);
    alert("Añadido correctamente");
    input.value = "";
}

button2.onclick = function() {
    var resultado = ruleta[Math.floor(Math.random() * ruleta.length)];
    alert(resultado)
}