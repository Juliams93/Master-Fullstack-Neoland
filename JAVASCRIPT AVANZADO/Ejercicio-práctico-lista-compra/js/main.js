// Vamos a implementar la funcionalidad para añadir artículos a la lista de compras

// Variables globales para compartir entre funciones
let listaArticulos;
let formulario;
let campoArticulo;
let botonArticulo;
let botonNuevaLista;
let listaCompra;

document.addEventListener("DOMContentLoaded", onDomContentLoaded);

function onDomContentLoaded() {
    listaArticulos = document.querySelector("#lista");
    formulario = document.querySelector("#formulario");
    campoArticulo = document.querySelector("#item");
    botonArticulo = document.querySelector("#nuevoArticulo");
    botonNuevaLista = document.querySelector("#nuevaLista");
    contador = document.querySelector("#contador");
    botonEliminarTodo = document.querySelector("#eliminarTodo");
    listaCompra = JSON.parse(localStorage.getItem("listaCompra")) || [];

    // Añade los event listeners para manejar los eventos del formulario y los botones
    formulario.addEventListener("submit", onformSubmit); // Cuando se envía el formulario
    campoArticulo.addEventListener("keyup", oninputKeyup); // Cuando se escribe en el input
    botonArticulo.addEventListener("click", onNewArticleClick); // Cuando se hace click en "Añadir artículo"
    botonNuevaLista.addEventListener("click", onNewListClick); // Cuando se hace click en "Nueva lista"
    botonEliminarTodo.addEventListener("click", onEliminarTodoClick); // Cuando se hace click en "Eliminar todos"

    contador.innerText = listaCompra.length; // Actualiza el contador de artículos

    // Si hay artículos guardados en localStorage, los mostramos al cargar la página
    if (listaCompra.length > 0) {
        for (let i = 0; i < listaCompra.length; i++) {
            const elemento = document.createElement("li");
            elemento.innerText = listaCompra[i];
            listaArticulos.appendChild(elemento);
        }
    }

    // Deshabilita el botón de añadir artículo si el campo está vacío al cargar la página
    botonArticulo.disabled = campoArticulo.value.trim() === "";
}

// Maneja el envío del formulario para añadir un nuevo artículo
function onformSubmit(e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    const nuevoArticulo = campoArticulo.value.trim();
    if (nuevoArticulo) {
        listaCompra.push(nuevoArticulo); // Añade el artículo al array
        localStorage.setItem("listaCompra", JSON.stringify(listaCompra)); // Guarda la lista en localStorage
        agregarArticuloALaLista(nuevoArticulo); // Añade el artículo a la lista en el DOM
        campoArticulo.value = ""; // Limpia el campo de texto
        botonArticulo.disabled = true; // Deshabilita el botón hasta que se escriba algo
    }
}

// Habilita o deshabilita el botón de añadir artículo según el contenido del input
function oninputKeyup() {
    botonArticulo.disabled = campoArticulo.value.trim() === "";
}

function onNewArticleClick(e) {
    e.stopPropagation(); // Evita que el evento se propague

    if (campoArticulo.value.trim() !== "") {
        const nuevoArticulo = campoArticulo.value.trim();
        listaCompra.push(nuevoArticulo); // Añade el artículo al array
        localStorage.setItem("listaCompra", JSON.stringify(listaCompra)); // Guarda la lista en localStorage
        campoArticulo.value = ""; // Limpia el campo de texto
        botonArticulo.disabled = true; // Deshabilita el botón hasta que se escriba algo
        actualizarListaEnDOM(); // Actualiza toda la lista en el DOM
    }
}

function onNewListClick() {
    const nombreLista = prompt("Introduce el nombre de la nueva lista:");
    if (nombreLista) {
        const listas = JSON.parse(localStorage.getItem("listasCompra")) || {};
        listas[nombreLista] = []; // Crea una nueva lista vacía
        localStorage.setItem("listasCompra", JSON.stringify(listas)); // Guarda las listas en localStorage
        alert(`Lista "${nombreLista}" creada.`);
        mostrarListasGuardadas(); // Muestra las listas guardadas en la consola
    }
}

function onEliminarTodoClick() {
    if (confirm("¿Estás seguro de que quieres eliminar todos los artículos?")) {
        eliminarTodosLosArticulos();
    }
}
// Listas guardadas
function mostrarListasGuardadas() {
    const listas = JSON.parse(localStorage.getItem("listasCompra")) || {};
    for (const nombreLista in listas) {
        if (listas.hasOwnProperty(nombreLista)) {
            console.log(`Lista: ${nombreLista}, Artículos: ${listas[nombreLista].join(", ")}`);
        }
    }
}

// Añade un artículo a la lista en el DOM
function agregarArticuloALaLista(articulo) {
    const elemento = document.createElement("li");
    elemento.className = "lista-item";
    
    const textoArticulo = document.createElement("span");
    textoArticulo.innerText = articulo;
    textoArticulo.className = "articulo-texto";
    
    const botonEliminar = document.createElement("button");
    botonEliminar.innerText = "×";
    botonEliminar.className = "boton-eliminar";
    
    // Evento para eliminar el artículo
    botonEliminar.addEventListener("click", () => {
        eliminarArticuloDeLaLista(articulo);
    });
    
    elemento.appendChild(textoArticulo);
    elemento.appendChild(botonEliminar);
    listaArticulos.appendChild(elemento);
    actualizarContador();
}

// Actualiza la lista completa en el DOM
function actualizarListaEnDOM() {
    listaArticulos.innerHTML = "";
    listaCompra.forEach(articulo => {
        agregarArticuloALaLista(articulo);
    });
}

// Eliminar un artículo de la lista
function eliminarArticuloDeLaLista(articulo) {
    const index = listaCompra.indexOf(articulo);
    if (index > -1) {
        listaCompra.splice(index, 1);
        localStorage.setItem("listaCompra", JSON.stringify(listaCompra));
        actualizarListaEnDOM();
        actualizarContador(); // Actualiza el contador
    }
}

// Eliminar todos los artículos de la lista
function eliminarTodosLosArticulos() {
    listaCompra.length = 0; // Vacía el array
    localStorage.removeItem("listaCompra"); // Elimina la lista guardada
    listaArticulos.innerHTML = ""; // Limpia la lista visual
    campoArticulo.value = ""; // Limpia el campo de texto
    botonArticulo.disabled = true; // Deshabilita el botón
    actualizarContador(); // Actualiza el contador
}
