
let arrayNumeros = [1,2,3,4,5,6,7];
let alumno = ['Pepe', 30, true, ['PHP', 'JS', 'HTML']];

let frutas = ['Manzana', 'Pera', 'Platano'];
let verduras = ['Lechuga', 'Tomate', 'Cebolla'];

console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])

/* Modificar un elemento del array */
frutas[1] = 'Naranja';

console.log(frutas)

/* Propiedades y métodos de los arrays */

console.log(frutas.length); // Propiedad que indica la cantidad de elementos del array

frutas.push('Sandia', 'Melon'); // Añade elementos al final del array
console.log(frutas);

frutas.unshift('Fresa'); // Añade elementos al inicio del array
console.log(frutas);

frutas.pop(); // Elimina el último elemento del array
console.log(frutas);

const ultimaFruta = frutas.pop(); // Elimina el último elemento del array y lo devuelve
console.log(ultimaFruta);

frutas.shift(); // Elimina el primer elemento del array
console.log(frutas);

const primeraFruta = frutas.shift(); // Elimina el primer elemento del array y lo devuelve
console.log(primeraFruta);

frutas.splice(1,2); // Elimina elementos en base a la posición (1) y la cantidad (2)
console.log(frutas);

frutas.splice(1,0,'Kiwi', 'Mandarina'); // Añade elementos en base a la posición (1) y la cantidad (0)
console.log(frutas);

let posicion = frutas.indexOf('Kiwi'); // Devuelve la posición del elemento indicado
console.log(posicion);

let nuevaPosicion = frutas.indexOf('Cereza'); // Si el elemento no existe devuelve -1
console.log(nuevaPosicion);

let algunasFrutas = frutas.slice(1,3); // Extrae elementos desde la posición inicial (1) hasta la posición final (3) sin incluirla
console.log(algunasFrutas);

let mezcla = frutas.concat(verduras); // Mezcla dos arrays y devuelve uno nuevo
console.log(mezcla);

let texto = frutas.join(', '); // Convierte el array en un string, separando los elementos por el valor indicado
console.log(texto);
console.log(typeof texto); // El resultado es un string

let numeros = [1,2,3,4,5,6,7,8,9,10];
let numerosPares = numeros.filter(function(num) {
    return num % 2 === 0;
}); // Filtra los elementos que cumplen la condición indicada
console.log(numerosPares);

let numerosPares2 = numeros.filter(num => num % 2 === 0); // Versión con arrow function
console.log(numerosPares2);

/* Diferencia entre arrow function y función tradicional en el contexto de los arrays => this
Es el contexto léxico, es decir, la función flecha no crea su propio contexto, sino que utiliza el de su padre.
En cambio, la función tradicional sí crea su propio contexto. */

const encontrado = numeros.find(function(num) {
    return num > 5;
}); // Busca el primer elemento que cumple la condición indicada
console.log(encontrado); // Devuelve el primer elemento que cumple la condición indicada


numeros.forEach(function(elementos, indice, array) {
    console.log(`El elemento ${elementos} está en la posición ${indice} del array ${array}`);
}); // Recorre el array y ejecuta la función indicada por cada elemento 

numeros.forEach((elementos, indice, array) => {
    console.log(`El elemento ${elementos} está en la posición ${indice} del array ${array}`);
}); // Versión con arrow function

let modificados = numeros.map(function(num) {
    return num * 2;
}); // Crea un nuevo array con los resultados de la función indicada aplicada a cada elemento
console.log(modificados);

let modificados2 = numeros.map(num => num * 2); // Versión con arrow function
console.log(modificados2);

/*Ejemplo de matriz (array de arrays)*/
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matriz[0][0]); // 1
console.log(matriz[1][1]); // 5

matriz[2][2] = 10; // Modificar un elemento
console.log(matriz);
matriz.push([11,12,13]); // Añadir una nueva fila
console.log(matriz);
matriz[0].push(4); // Añadir un elemento a una fila existente
console.log(matriz);
matriz.forEach(fila => {
    fila.forEach(elemento => {
        console.log(elemento);
    });
}); // Recorrer una matriz con forEach
