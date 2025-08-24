alert("Hola, bienvenido a JavaScript desde main.js")


// Comentario de una sola línea

/* Comentario
de varias líneas
*/

// var -> no se recomienda su uso
var nombre;
nombre = "Juan"

// let -> se puede reasignar y no es obligatorio inicializar
let apellido = "Pérez" //solo se puede usar dentro del bloque donde se define

// const -> no se puede reasignar y debe inicializarse
const PI = 3.1416

console.log(nombre)
console.log(PI)


var num1 = 10;

function mostrarDato() {
    
    if (true==true) {
        let edad = 30
        console.log(edad)
    }
}


//tipos primitivos

let nombre2 = "Ana" //string
let edad2 = 25 //number
let esEstudiante = true //boolean
let apellido2 = null //null
let direccion //undefined

console.log(typeof nombre2) //typeof -> operador que devuelve el tipo de dato
console.log(typeof edad2)
console.log(typeof esEstudiante)
console.log(typeof apellido2)
console.log(typeof direccion)   

//tipo object
let persona = {
    nombre: "Luis",
    edad: 28,
    esEstudiante: false
}
console.log(persona)

// tipo object 

// objetos 
// arrays

// operadores aritméticos

let num1=2;
let num2=3;
let suma = num1 + num2;

console.log(suma);

// operadores de asignación

let saludo = "Hola ";
saludo += "Mundo"; // concatena y asign

let num3 = 5;
let num4 = 10;
let resultado = num3;

resultado += num4; // suma y asigna
console.log(resultado);

// operadores de comparación

let a = 5;
let b = '5';
console.log(a == b); // true (compara valores)
console.log(a === b); // false (compara valores y tipos)
console.log(a != b); // false (compara valores)
console.log(a !== b); // true (compara valores y tipos)
console.log(a > 3); // true
console.log(a < 10); // true

// operadores lógicos: AND (&&), OR (||), NOT (!)

console.log(a > 3 && a < 10); // true (y)
console.log(a > 3 || a < 4); // true (o)
console.log(!(a < 10)); // false (no)

// estructuras de control
let edad3 = 20;
if (edad3 >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}
// if ternario
let esMayor = (edad3 >= 18) ? "Sí" : "No";
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

// bucles
for (let i = 0; i < 5; i++) {
    console.log("Número: " + i);
}
let j = 0;
while (j < 5) {
    console.log("Número: " + j);
    j++;
}
let k = 0;
do {
    console.log("Número: " + k);
    k++;
}
while (k < 5);

// funciones
function saludar(nombre) {
    console.log("Hola " + nombre);
}
saludar("Juan");

const sumar = (a, b) => a + b;
console.log(sumar(3, 4));

// arrays
let frutas = ["Manzana", "Banana", "Cereza"];
console.log(frutas[0]); // Manzana
frutas.push("Naranja"); // agrega al final
console.log(frutas.length); // 4
frutas.pop(); // elimina el último
console.log(frutas);

// objetos
let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    mostrarInfo: function() {
        console.log(this.marca + " " + this.modelo + " " + this.año);
    }
};
console.log(coche.marca); // Toyota
console.log(coche.modelo); // Corolla
console.log(coche.año); // 2020
coche.mostrarInfo(); // Toyota Corolla 2020

