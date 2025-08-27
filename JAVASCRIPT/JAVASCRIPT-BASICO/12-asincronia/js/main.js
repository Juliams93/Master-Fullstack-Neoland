/* Asincronía: Promesas */

const miPromesa = new Promise((resolve, reject) => {
    const exito = true;
    if (exito) {
        resolve("¡Operación exitosa!");
    } else {
        reject("¡Operación fallida!");
    }
});

miPromesa
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("La promesa ha finalizado.");
    });

 
//  Prueba promesas

const pruebaPromesas = () => {
    let promesas = new Promise((resolve, reject) => {
        const exito = true;
        if (exito) {
            resolve("¡Prueba de promesas exitosa!");
        } else {
            reject("¡Prueba de promesas fallida!");
        }
    });
    return promesas;
}

console.log(pruebaPromesas());

// Esto es una prueba de promesas:
pruebaPromesas()
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.error(error);
    });


// Quiero una promesa rechazada:
const promesaRechazada = new Promise((resolve, reject) => {
    const exito = false;
    if (exito === true) {
        resolve("¡Operación exitosa!");
    } else {
        reject("¡Operación fallida!");
    }
});

// then y catch: Son métodos para manejar el resultado de una promesa
promesaRechazada
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.error(error);
    });


const pruebaPromise = () => {
    return new Promise((resolve, reject) => {
        const exito = true;
        if (exito) {
            resolve("¡Prueba de promesas exitosa!");
        } else {
            reject("¡Prueba de promesas fallida!");
        }
    });
}

pruebaPromise()
    .then((respuesta) => {
        console.log(respuesta);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("La promesa ha finalizado.");
    });


