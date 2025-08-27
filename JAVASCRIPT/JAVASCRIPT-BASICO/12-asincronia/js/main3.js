/* Asincronía en JavaScript */

// async/await

//¿Qué es?
// Es una forma de trabajar con promesas en JavaScript, haciendo que el código asíncrono se vea y 
// se comporte como si fuera síncrono.

// Ejemplo de uso de async/await

// Declaramos una función asíncrona que devuelve el número 42.
// Al ser async, automáticamente devuelve una promesa que se resuelve con 42.
const nombreFuncion = async () => {
    return 42;
}

// Llamamos a la función y usamos .then para obtener el resultado cuando la promesa se resuelve.
nombreFuncion()
    .then(resp => {console.log(resp)}); // Imprime 42

// Otra función asíncrona que espera el resultado de nombreFuncion usando await.
// await pausa la ejecución hasta que la promesa se resuelva.
const getValor = async () => {
    const valor = await nombreFuncion(); // Espera a que nombreFuncion devuelva 42
    return valor; // Devuelve 42
}

// Llamamos a getValor y mostramos el resultado.
getValor()
    .then(resp => {console.log(resp)}); // Imprime 42

// Ejemplo práctico

// Creamos una función que devuelve una promesa que se resuelve después de cierto tiempo.
// Usamos setTimeout para simular una espera asíncrona.
const esperar = (tiempo) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(); // Resuelve la promesa después de 'tiempo' milisegundos
        }, tiempo);
    });
}

// Función asíncrona que usa await para esperar a que se resuelvan las promesas de esperar.
const funcionAsincrona = async () => {
    console.log('Inicio de la función asincrónica');
    await esperar(2000); // Espera 2 segundos
    console.log('2 segundos después');
    await esperar(1000); // Espera 1 segundo
    console.log('1 segundo después');
    return '¡Hecho!'; // Devuelve un mensaje cuando termina
}

// Llamamos a la función y mostramos el resultado final cuando la promesa se resuelve.
funcionAsincrona()
    .then(resp => {console.log(resp)}); // Imprime '¡Hecho!' después de 3 segundos