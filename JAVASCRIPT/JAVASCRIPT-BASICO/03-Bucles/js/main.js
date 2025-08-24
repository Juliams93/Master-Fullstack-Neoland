/*
for(inicializacion; condicion; actualizacion){
    //bloque de codigo
}
*/

/*for (let i= 1; i <=5; i++){
    console.log(i);
}

console.log('Fin del bucle for');   


for (let i= 5; i >=1; i--){
    console.log(i);
}

console.log('Fin del bucle for');   */

/* while(condicion){
    //bloque de codigo
} */


let palabra ='patata';
let palabraUsuario = prompt('Adivina la palabra secreta');

while(palabraUsuario !== palabra){
    alert('Incorrecto, intenta de nuevo');
    palabraUsuario = prompt('Adivina la palabra secreta');
}

alert('¡Correcto! La palabra era: ' + palabra);

console.log('Fin del bucle while');

/* do{
    //bloque de codigo
} while(condicion); */  

let palabra2 ='javascript';

do{
    palabraUsuario = prompt('Adivina la palabra secreta');
} while(palabraUsuario !== palabra2);

alert('¡Correcto! La palabra era: ' + palabra2);

console.log('Fin del bucle do while');


/* diferencia entre while y do while
while: primero evalua la condicion y luego ejecuta el bloque de codigo.
En palabras más simples: "mientras se cumpla esta condición, haz esto".
do while: primero ejecuta el bloque de codigo y luego evalua la condicion.
de forma que el bloque de codigo se ejecuta al menos una vez. En palabras más simples:
"haz esto al menos una vez, y luego repítelo mientras se cumpla la condición".
*/

