/* Ejercicio 1: Saludo Personalizado */
let saludoPersonalizado = (nombre) => {
    console.log(`Hola ${nombre}, ¡bienvenido!`);
}
saludoPersonalizado('Juan');

/* Ejercicio 2: Suma de dos Números */
const suma = (num1, num2) => {
    return num1 + num2;
}
console.log(suma(5, 10));

/* Ejercicio 3: Verificación de Número Par */
const esPar = (numero) => {
    return numero % 2 === 0;
}
console.log(esPar(4)); // true
console.log(esPar(7)); // false

/* Ejercicio 4: Mayor de tres  */
const mayorDeTres = (a, b, c) => {
    return Math.max(a, b, c);
}  
console.log(mayorDeTres(10, 5, 8)); // 10   

/* Ejercicio 5: Conversión de Celsius a Fahrenheit */
const ConversiónCelsiusAFahrenheit = (gradosCelsius) => {
    return (gradosCelsius * 9/5) + 32;
}   
console.log(ConversiónCelsiusAFahrenheit(0)); // 32 