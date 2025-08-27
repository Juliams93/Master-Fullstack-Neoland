/* REST */

// El operador rest nos permite representar un número indefinido de argumentos como un array.   


const mostrarColores = (color1,...colores) => {
    console.log(colores);
};

mostrarColores('rojo', 'verde', 'azul');

const arrayColores = ['rojo', 'verde', 'azul', 'amarillo'];

const [color1,color2,...resto] = arrayColores;

console.log(color1); // rojo
console.log(color2); // verde
console.log(resto); // ['azul', 'amarillo']

/* Spread */

// El operador spread permite expandir elementos de un array en lugares donde se esperan múltiples elementos.

const colores = ['rojo', 'verde', 'azul'];

const nuevoArray = [...colores, 'amarillo'];

console.log(nuevoArray); // ['rojo', 'verde', 'azul', 'amarillo']   