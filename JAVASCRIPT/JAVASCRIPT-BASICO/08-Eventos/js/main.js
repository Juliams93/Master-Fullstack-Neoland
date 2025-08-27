// Selecciona el elemento con id "formulario" y lo guarda en la variable cajas
const cajas = document.querySelector("#formulario");

// Selecciona todos los hijos directos del elemento con id "caja"
const hijos = document.querySelectorAll("#caja> *");
console.log(hijos); // Muestra en consola los hijos encontrados

// Array con nombres de hijos para crear dinámicamente
const arrayHijos = ["hijo5", "hijo6", "hijo7", "hijo8", "hijo9"]

// Añade un event listener de "click" a cada hijo, mostrando una alerta con su id
hijos.forEach(hijo => {
    hijo.addEventListener("click", () => {
        alert(`Has hecho clic en ${hijo.id}`);
    });
});

/*
// Ejemplo de cómo añadir un event listener al elemento "caja"
// caja.addEventListener("click",function(){
//     alert("Has hecho clic en la caja");
// });
*/

// Añade un event listener de "click" al formulario, mostrando el evento y un mensaje en consola
cajas.addEventListener("click", (ev) => {
    console.log(ev); // Muestra el evento en consola
    console.log("Has hecho clic en la caja");
});

/*
addeventlistener: es un método que permite escuchar eventos en un elemento del DOM. 
Se le puede pasar un tipo de evento (como 'click') y una función que se ejecutará cuando ocurra ese evento.

Ejemplo:
caja.addEventListener("click", (ev) => {
    console.log("Caja clickeada");
});
*/

// Función que muestra un mensaje en consola (no se usa en el código actual)
function mostrarMensaje() {
    console.log("Llamada a la función mostrarMensaje");
};

// Añade un event listener de "keyup" al documento, mostrando el código de la tecla y llamando a mostrarTecla
document.addEventListener("keyup", (ev) => {
    console.log(ev.keyCode); // Muestra el código de la tecla presionada
    mostrarTecla(); // Llama a la función mostrarTecla
});

// Función que cambia el color de fondo según la tecla presionada
const mostrarTecla = () => {
    // Cambia el color de fondo del body según el código de la tecla
    if (ev.keyCode == 88) {
        body.style.backgroundColor = "blue";
    } else if (ev.keyCode == 87) {
        body.style.backgroundColor = "red";
    } else if (ev.keyCode == 68) {
        body.style.backgroundColor = "green";
    } else if (ev.keyCode == 65) {
        body.style.backgroundColor = "yellow";
    } else {
        body.style.backgroundColor = "white";
    }
};
/*
Esta función: muestra un mensaje en la consola dependiendo de la tecla que se presione. 
Si presionas el código 88 el fondo se volverá azul.
Si presionas el código 87 el fondo se volverá rojo.
Si presionas el código 68 el fondo se volverá verde.
Si presionas el código 65 el fondo se volverá amarillo.
Si presionas cualquier otra tecla el fondo se volverá blanco.
*/ 

// Añade un event listener de "submit" al formulario, evitando el envío y mostrando el nombre en consola
formulario.addEventListener("submit", (ev) => {
    ev.preventDefault(); // Evita el comportamiento por defecto del formulario
    const nombre = formulario.nombre.value; // Obtiene el valor del input "nombre"
    console.log("Nombre enviado:", nombre); // Muestra el nombre en consola
});

/* 
Esto detiene el comportamiento por defecto del formulario (que sería enviarlo y recargar la página) y en su lugar, 
muestra el nombre en la consola. 
*/

// Función que muestra el valor recibido en consola
const mostrarTexto = (valor) =>
    console.log(`El valor del input es ${valor}`);

// Función que pinta los hijos definidos en arrayHijos dentro del elemento "caja"
const pintarHijos = () => {
    arrayHijos.forEach(hijo => {
        caja.innerHTML += `<div id="${hijo}">${hijo}</div>`;
    });
}

