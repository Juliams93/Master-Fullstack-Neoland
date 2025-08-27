// Esto es Ajax: 
// Realizando una petición GET, que es una solicitud para obtener datos de un servidor.

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
    
        if(response.ok) return response.json();
            else Promise.reject('Error en la petición');
    })

    .then(response => {
        console.log(response);
    })

    .catch(error => {
        console.error('Error:', error);
        // Aquí puedes manejar el error de la manera que desees
    });


// Esta función consulta datos de una API
const consulta = async () => {
    try {
        // Hace la petición a la URL
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        console.log(response); // Muestra la respuesta en consola
        if(response.ok) {
            // Si la respuesta es exitosa, convierte los datos a JSON
            const datos = await response.json();
            pintar(datos); // Llama a la función para mostrar los datos
        }       
    } catch (error) {
        // Si hay error, lo muestra en consola
        console.error('Error en la consulta:', error);
    }
}

// Esta función muestra los datos en la página
const pintar = async (response) => {
    const resp = await consulta() // Vuelve a consultar los datos (esto puede causar un bucle)

    // Recorre cada elemento y lo agrega al HTML
    response.forEach(({ title, body }) => {
        posts.innerHTML += `
            <li>
                <p>${title}</p>
                <p>${body}</p>
            </li>
        `;
    });
}