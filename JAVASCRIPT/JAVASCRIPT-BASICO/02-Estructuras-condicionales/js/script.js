// Ejercicios prácticos--->

// Ejercicio 1: Verificar si un número es positivo o negativo o cero:

let numero = 3; // Cambia este valor para probar diferentes casos

if (numero > 0) {
    console.log("El número es positivo");
}
else if (numero < 0) {
    console.log("El número es negativo");
}
else {
    console.log("El número es cero");
}

// Ejercicio 2: Edad legal para votar:

let edad = 20; // Cambia este valor para probar diferentes casos
if (edad >= 18) {
    console.log("Eres mayor de edad y puedes votar");
}
else {
    console.log("Eres menor de edad y no puedes votar");
}   

// Ejercicio 3: Mayor de dos números:
let num1 = 10; // Cambia este valor para probar diferentes casos
let num2 = 15; // Cambia este valor para probar diferentes casos

if (num1 > num2) {
    console.log(num1 + " es mayor que " + num2);
}
else if (num1 < num2) {
    console.log(num2 + " es mayor que " + num1);
}
else {
    console.log("Ambos números son iguales");
}   

// Ejercicio 4: Determinar si un número es divisible por cinco:
let num = 12; // Cambia este valor para probar diferentes casos
if (num % 5 === 0) {
    console.log(num + " es divisible por 5");
}
else {
    console.log(num + " no es divisible por 5");
}

// === es igualdad estricta (valor y tipo)
// == es igualdad (solo valor)
// !== es diferente estricta (valor y tipo)
// != es diferente (solo valor)

// Ejercicio 5: Clasificar nota de examen:

// Crear un código que dada una calificación numérica (0-10), devuelva una clasificación de la siguiente manera:
// nota >= 9 "Sobresaliente"
// nota >= 7 < 9 "Notable"
// nota >= 5 < 7 "Aprobado"
// nota < 5 "Suspenso"

let nota = 8; // Cambia este valor para probar diferentes casos

if (nota >= 9 && nota <= 10) {
    console.log("Sobresaliente");
}
else if (nota >= 7 && nota < 9) {
    console.log("Notable");
}
else if (nota >= 5 && nota < 7) {
    console.log("Aprobado");
}
else if (nota >= 0 && nota < 5) {
    console.log("Suspenso");
}
else {
    console.log("Nota inválida");
}   

