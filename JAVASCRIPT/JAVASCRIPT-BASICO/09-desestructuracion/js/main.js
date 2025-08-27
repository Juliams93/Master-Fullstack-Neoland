const colores = ['rojo', 'verde', 'azul'];

/* Esto lo que hace es desestructurar el array en variables individuales */
const [color1, color2, color3] = colores;

console.log(color2); // verde

const persona = {
    nombre: 'Juan',
    edad: 30,
    pais: 'Argentina'
};

/* Esto lo que hace es desestructurar el objeto en variables individuales */
const { nombre, edad, pais } = persona;

console.log(pais); // Argentina

