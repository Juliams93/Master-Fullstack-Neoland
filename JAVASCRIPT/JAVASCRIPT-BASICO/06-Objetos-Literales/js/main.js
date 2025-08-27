
/* const nombreObjeto = {
    propiedad1: 'Valor de la propiedad 1',
    propiedad2: 'Valor de la propiedad 2',
    propiedad3: 'Valor de la propiedad 3'}
*/

const objTelefono = {
    marca: 'Samsung',
    modelo: 'Galaxy S21',
    almacenamiento: '128GB',
    camara: true,
    colores: ['Negro', 'Blanco', 'Azul'],
    ram: '8GB',
    información: {
        peso: '169 g',
        dimensiones: '151.7 x 71.2 x 7.9 mm'
    },
    llamar: () => console.log("El teléfono está llamando..."),
    sonarAlarma: () => console.log("La alarma está sonando...")
};


console.log(objTelefono.marca); /* Accediendo a la propiedad 'marca' */
console.log(objTelefono.modelo);
console.log(objTelefono.información.peso);
objTelefono.llamar();
objTelefono.sonarAlarma();

console.log(objTelefono['marca']); /* Accediendo a la propiedad 'marca' usando la notación de corchetes */
objTelefono.modelo = 'Galaxy S21 Ultra'; /* Cambiando el modelo del teléfono */


objTelefono.anio = "2021" /* Añadiendo el año de lanzamiento del teléfono */

delete objTelefono.anio; /* Eliminando la propiedad 'anio' */   

for (let key in objTelefono) {
    console.log(key);
    console.log(objTelefono[key]);
} /* Iterando sobre las propiedades del objeto */

console.log(Object.keys(objTelefono)); /* Obteniendo un array con las claves del objeto */
console.log(Object.values(objTelefono)); /* Obteniendo un array con los valores del objeto */
console.log(Object.entries(objTelefono)); /* Obteniendo un array con los pares clave-valor del objeto */

let nombre= "Juan";
let nombre2= nombre;


let obj1= {nombre: nombre};
let obj2= obj1;
obj2.nombre= "Pedro";   
console.log(obj1.nombre);
console.log(obj2.nombre); /* Ambos objetos reflejan el cambio porque apuntan a la misma referencia en memoria */



const persona = {
    nombre: 'Ana',
    edad: 28,
    profesion: 'Ingeniera'
};
const persona2 = persona; /* persona2 apunta a la misma referencia que persona */
persona2.nombre = 'Luis'; /* Cambiando el nombre a través de persona2 */
console.log(persona.nombre); /* Muestra 'Luis' porque ambos objetos apuntan a la misma referencia */
console.log(persona2.nombre); /* Muestra 'Luis' */
const persona3 = { ...persona }; /* Creando una copia superficial de persona */
persona3.nombre = 'Marta'; /* Cambiando el nombre a través de persona3 */
console.log(persona.nombre); /* Muestra 'Luis' porque persona3 es una copia independiente */
console.log(persona3.nombre); /* Muestra 'Marta' */
const persona4 = Object.assign({}, persona); /* Otra forma de crear una copia superficial */
persona4.nombre = 'Carlos'; /* Cambiando el nombre a través de persona4 */
console.log(persona.nombre); /* Muestra 'Luis' */
console.log(persona4.nombre); /* Muestra 'Carlos' */

const persona5 = JSON.parse(JSON.stringify(persona)); /* Creando una copia profunda de persona */
persona5.nombre = 'Sofía'; /* Cambiando el nombre a través de persona5 */
console.log(persona.nombre); /* Muestra 'Luis' */
console.log(persona5.nombre); /* Muestra 'Sofía' */