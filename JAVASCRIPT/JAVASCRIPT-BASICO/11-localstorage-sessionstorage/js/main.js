/* LocalStorage */

//¿QUE ES LOCALSTORAGE?
// LocalStorage es una API que permite almacenar datos en el navegador de forma persistente.

// Guardar en LocalStorage
const guardarLocalStorage = () => {
    localStorage.setItem('clave', 'valor');
};

// Recuperar de LocalStorage
const recuperarLocalStorage = () => {
    const valor = localStorage.getItem('clave');
    console.log(valor);
};

// Eliminar de LocalStorage
const eliminarLocalStorage = () => {
    localStorage.removeItem('clave');
};

console.log(localStorage);

localStorage.setItem('clave', 'valor'); // Guardar en LocalStorage

/* sessionStorage */

//¿QUE ES SESSIONSTORAGE?
// SessionStorage es similar a LocalStorage, pero los datos se almacenan solo durante la sesión del navegador.

// Guardar en SessionStorage
const guardarSessionStorage = () => {
    sessionStorage.setItem('clave', 'valor');
};

// Recuperar de SessionStorage
const recuperarSessionStorage = () => {
    const valor = sessionStorage.getItem('clave');
    console.log(valor);
};

// Eliminar de SessionStorage
const eliminarSessionStorage = () => {
    sessionStorage.removeItem('clave');
};
