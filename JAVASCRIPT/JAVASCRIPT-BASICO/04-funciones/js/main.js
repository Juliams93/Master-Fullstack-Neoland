/* Funciones Declaradas: */

/* function miFuncion(arg1, arg2) {
    bloque de codigo
}
miFuncion(10, 20); // Llamando a la funcion
} */    

function sumar() {
    let a = 10;
    let b = 20;
    console.log(a + b);
}

sumar(); // Llamando a la funcion


function sumar(num1, num2) {
    let total = num1 + num2;
    return total;
}

console.log(sumar()); // Llamando a la funcion
console.log(sumar(10, 20)); // Llamando a la funcion
console.log(sumar(30, 40)); // Llamando a la funcion



/* Funciones Expresadas: */
/* const nombreVariable = function(arg1, arg2) {
    bloque de codigo
}
nombreVariable(10, 20); // Llamando a la funcion
} */

const sumar2 = function(num1, num2) {
    let total = num1 + num2;
    return total;
}; 

console.log(sumar2(10, 20)); // Llamando a la funcion
console.log(sumar2(30, 40)); // Llamando a la funcion

function calcular (num1, num2, operacion) {
    return operacion(num1, num2);
}

calcular(10, 20, sumar2); // Llamando a la funcion

/* Diferencia principal entre funciones declaradas y funciones expresadas:
Las funciones declaradas se cargan antes de que se ejecute cualquier codigo, es decir,
pueden ser llamadas antes de ser declaradas en el codigo. Las funciones expresadas
se cargan cuando el interprete llega a esa linea de codigo, por lo que no pueden
ser llamadas antes de ser declaradas. Más simple: las funciones declaradas son hoisting y 
las funciones expresadas no lo son. */

/* Ejemplo de Hoisting: */
console.log(sumar3(10, 20)); // Llamando a la funcion
function sumar3(num1, num2) {
    let total = num1 + num2;
    return total;
}
console.log(sumar3(10, 20)); // Llamando a la funcion
    console.log(sumar4(10, 20)); // Llamando a la funcion (Error)
const sumar4 = function(num1, num2) {
    let total = num1 + num2;
    return total;
}
console.log(sumar4(10, 20)); // Llamando a la funcion

/* Funciones de Flecha (Arrow Functions): */
/* const nombreVariable = (arg1, arg2) => {
    bloque de codigo
}
nombreVariable(10, 20); // Llamando a la funcion
} */    

const sumar5 = (num1, num2) => {
    let total = num1 + num2;
    return total;
}

console.log(sumar5(10, 20)); // Llamando a la funcion

/* Si la funcion tiene una sola linea de codigo, se pueden omitir las llaves y el return: */
const sumar6 = (num1, num2) => num1 + num2;
console.log(sumar6(10, 20)); // Llamando a la funcion

/* Si la funcion tiene un solo argumento, se pueden omitir los parentesis: */
const cuadrado = num => num * num;
console.log(cuadrado(5)); // Llamando a la funcion

/* Si la funcion no tiene argumentos, se deben poner los parentesis vacios: */
const saludar = () => 'Hola Mundo';
console.log(saludar()); // Llamando a la funcion

/* Ejemplo practico de funciones: */
const calcularEdad = (year) => new Date().getFullYear() - year;
const edad = calcularEdad(1990);
console.log(edad);
const mayorDeEdad = (year) => {
    const edad = calcularEdad(year);
    if(edad >= 18) {
        return true;
    } else {
        return false;
    }
}
console.log(mayorDeEdad(2005) ? 'Es mayor de edad' : 'Es menor de edad');
console.log(mayorDeEdad(1990) ? 'Es mayor de edad' : 'Es menor de edad');

/* Funciones dentro de objetos: */
const persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 30,
    nombreCompleto: function() {
        return `${this.nombre} ${this.apellido}`;
    },
    edadFutura: (years) => persona.edad + years // No usar this en arrow functions dentro de objetos
}
console.log(persona.nombreCompleto());
console.log(persona.edadFutura(5));
/* En las funciones dentro de objetos, el valor de this es el objeto mismo. En las funciones de flecha,
el valor de this no se vincula al objeto, sino que hereda el valor de this del contexto en el que se define. */

/* Funciones Callback: */
const suma = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;
const calculadora = (num1, num2, operacion) => operacion(num1, num2);
console.log(calculadora(10, 5, suma));
console.log(calculadora(10, 5, resta)); 
/* Las funciones callback son funciones que se pasan como argumentos a otras funciones
y se ejecutan dentro de esa funcion. */

/* Funciones Anidadas: */
const app = () => {
    const mensaje = 'Hola Mundo';
    const contador = 0;
    const mostrarMensaje = () => {
        console.log(mensaje);
    }
    const incrementar = () => {
        contador++;
        console.log(contador);
    }
    mostrarMensaje();
    incrementar();
}
app();

const app2 = () => {
    let contador = 0;
    const incrementar = () => {
        contador++;
        console.log(contador);
    }
    return incrementar;
}
app2();

/* Las funciones anidadas son funciones que se definen dentro de otras funciones. Las funciones anidadas
tienen acceso a las variables de la funcion padre. */   
/* IIFE (Immediately Invoked Function Expression): */
(function() {
    console.log('Esto es una IIFE');
})();
/* Las IIFE son funciones que se ejecutan inmediatamente despues de ser definidas. Se usan para crear un
ambito local y evitar la contaminacion del ambito global. */    
(() => {
    console.log('Esto es una IIFE con funcion de flecha');
})();

/* Las IIFE pueden recibir argumentos: */
((nombre) => {
    console.log(`Hola ${nombre}`);
})('Juan');
/* Las IIFE pueden retornar valores: */
const resultado = ((num1, num2) => num1 + num2)(10, 20);
console.log(resultado);

/* Las IIFE pueden ser usadas para crear modulos: */
const modulo = (() => {
    const privado = 'Soy un dato privado';
    const publico = 'Soy un dato publico';
    const mostrarPrivado = () => {
        console.log(privado);
    }
    const mostrarPublico = () => {
        console.log(publico);
    }
    return {
        mostrarPrivado,
        mostrarPublico
    }
}
)();
modulo.mostrarPrivado();
modulo.mostrarPublico();
/* Las IIFE pueden ser usadas para crear modulos, que son objetos que contienen datos y
funciones privadas y publicas. Los datos y funciones privadas no pueden ser accedidos desde
fuera del modulo, mientras que los datos y funciones publicas si pueden ser accedidos. */
/* Las IIFE son una forma de encapsular codigo y evitar la contaminacion del ambito global. */

/* Las IIFE son una forma de crear modulos en JavaScript. */
/* Los modulos son una forma de organizar el codigo y evitar la contaminacion del ambito global. */
/* Los modulos pueden contener datos y funciones privadas y publicas. */

