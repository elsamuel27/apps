//Constantes
const pi = 3.1415

//Funciones
const sqrt = function(num) { return num ** 0.5 }
//Variables para los botones
const button_basic = document.getElementById("basic");
const button_circle = document.getElementById("circle");
const button_hipotenusa = document.getElementById("hipotenusa");
const button_ec2 = document.getElementById("ec2");
const button_MRU = document.getElementById("MRU");
const button_MRUA = document.getElementById("MRUA");

//Sus funciones
button_basic.onclick = function() {
  var num1 = prompt('Ingresa un número');
  var op = prompt("Ingresa un operador\nSe admite +, -, * y /");
  var num2 = prompt("Ingresa otro número");
  
  if (op == "+"){
    var resultado = parseInt(num1) + parseInt(num2); 
  }
  else if (op == "-"){
    var resultado = parseInt(num1) - parseInt(num2);
  }
  else if (op == "*"){
    var resultado = parseInt(num1) * parseInt(num2);
  }
  else if (op == "/"){
    var resultado = parseInt(num1) / parseInt(num2);
  }
  
  
alert("El resultado es " + resultado);
}

button_circle.onclick = function() {
  var radio = prompt("Introduce el radio de un círculo");
  var area = Math.round((pi * radio ** 2), 2)
  var diametro = Math.round((radio * 2), 2)

alert("Tiene un diámetro de "+ diametro +" y un área de "+ area)
}
button_hipotenusa.onclick = function() {
  var a = prompt("Introduce el cateto a")
  var b = prompt("Introduce el cateto b")
  var c = Math.round(sqrt((a ** 2) + (b ** 2)), 2)
alert("La hipotenusa vale " + c)
}
button_ec2.onclick = function() {
  var A = prompt("Ingresa A")
  var B = prompt("Ingresa B")
  var C = prompt("Ingresa C")
  if ((((B**2)-4*A*C) < 0)) {
    alert("No es posible sacar raíz cuadrada de un número negativo, operación cancelada")
  } else {
    var x1 = (-B+sqrt(B**2-(4*A*C)))/(2*A)
    var x2 = (-B-sqrt(B**2-(4*A*C)))/(2*A)

    alert("x1 = " + x1 + "\nx2 = " + x2)
  }
}
button_MRU.onclick = function() {
  var x0 = prompt("Posición inicial")
  var v = prompt("Velocidad")
  var t = prompt("Tiempo")
  var MRU = x0 + (v * t)

alert("MRU = " + MRU)
}
button_MRUA.onclick = function() {
  var x0 = prompt("Posición inicial")
  var v = prompt("Velocidad")
  var t = prompt("Tiempo")
  var a = prompt("Aceleración")
  MRUA = x0 + (v * t) + (0.5 * a * t**2)
  DC = MRUA - x0

alert("MRUA = " + MRUA + "\nDistancia recorrida = " + DC)
}