/* Estructuras condicionales en JavaScript
    - if(condición) {
        bloque de instrucciones
    }
*/

// if
let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
}

// if ternario
let esMayor = (edad >= 18) ? "Sí" : "No";
console.log(esMayor);

// switch
let dia = 3;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    default:
        console.log("Otro día");
        break;
}

let edad2 = 25;

if (edad2 < 12) {
    console.log("Niño");
}
else if (edad2 >= 12 && edad2 < 18) {
    console.log("Adolescente");
}
else if (edad2 >= 18 && edad2 < 65) {
    console.log("Adulto");
}
else {
    console.log("Adulto mayor");
}

// switch(expresión) {

//     case valor1:
//         // bloque de instrucciones
//         break;
//     case valor2:
//         // bloque de instrucciones
//         break;
//     default:
//         // bloque de instrucciones
//         break;
// }
// Expresión: puede ser una variable o cualquier expresión que retorne un valor
// Valor1, valor2, ...: pueden ser valores literales o variables
// break: se utiliza para salir del switch una vez que se ha ejecutado un caso
// default: es opcional y se ejecuta si ninguno de los casos anteriores coincide
// Ejemplo:
let fruta = "manzana";
switch (fruta) {
    case "manzana":
        console.log("Es una manzana");
        break;
    case "banana":
        console.log("Es una banana");
        break;
    case "naranja":
        console.log("Es una naranja");
        break;
    default:
        console.log("Fruta no reconocida");
        break;
}
// En este ejemplo, la variable fruta se compara con los casos definidos en el switch
// y se ejecuta el bloque de instrucciones correspondiente al caso que coincide.

// if anidado
let hora = 10;
if (hora < 12) {
    console.log("Buenos días");
    if (hora < 6) {
        console.log("Es muy temprano");
    } else {
        console.log("Aún es temprano");
    }
}
else if (hora >= 12 && hora < 18) {
    console.log("Buenas tardes");
}
else {
    console.log("Buenas noches");
}   

// Operador lógico AND (&&)
let usuario = "admin";
let password = "1234";
if (usuario === "admin" && password === "1234") {
    console.log("Acceso concedido");
}
else {
    console.log("Acceso denegado");
}   
// Operador lógico OR (||)
let diaSemana = "sábado";
if (diaSemana === "sábado" || diaSemana === "domingo") {
    console.log("Es fin de semana");
}
else {
    console.log("Es día laborable");
}   
// Operador lógico NOT (!)
let conectado = false;
if (!conectado) {
    console.log("No estás conectado");
}
else {
    console.log("Estás conectado");
}   
// Ejemplo práctico: Validar si un número es positivo, negativo o cero
let numero = -5;
if (numero > 0) {
    console.log("El número es positivo");
}
else if (numero < 0) {
    console.log("El número es negativo");
}
else {
    console.log("El número es cero");
}   
// Ejemplo práctico: Determinar si un año es bisiesto
let anio = 2020;
if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
    console.log(anio + " es un año bisiesto");
}
else {
    console.log(anio + " no es un año bisiesto");
}   
// Ejemplo práctico: Calcular el precio con descuento según la cantidad comprada
let cantidad = 15;
let precioUnitario = 10;
let precioTotal = cantidad * precioUnitario;
if (cantidad > 10) {
    precioTotal *= 0.8; // Aplicar 20% de descuento
}
console.log("El precio total es: " + precioTotal);