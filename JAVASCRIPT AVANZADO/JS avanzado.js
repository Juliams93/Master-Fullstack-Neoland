// Definimos una clase personalizada para errores HTTP.
// Esto nos permite manejar los errores de las respuestas HTTP de forma más precisa,
// ya que los errores de fetch por defecto no incluyen el status HTTP.
export class HttpError extends Error {
    constructor(response) {
        super(`HTTP error ${response.status}`); // Mensaje descriptivo con el código de estado
        this.response = response; // Guardamos la respuesta para acceder a más detalles si es necesario
    }
}

// Función utilitaria para realizar peticiones fetch.
// Si la respuesta no es exitosa (result.ok es false), lanzamos un error HttpError.
// Así centralizamos el manejo de errores HTTP y simplificamos el código de consumo.
export async function simpleFetch(url, options) {
    const result = await fetch(url, options);
    if (!result.ok) {
        throw new HttpError(result); // Lanzamos error personalizado si la respuesta no es OK
    }
    return await result.json(); // Retornamos el cuerpo de la respuesta en formato JSON
}

/**
 * Ejemplo avanzado de uso de fetch con control de timeout usando AbortSignal.
 * 
 * - Utiliza AbortSignal.timeout para abortar la petición automáticamente si tarda más de 3 segundos.
 * - Maneja distintos tipos de errores:
 *   - AbortError: si la petición fue abortada por timeout.
 *   - HttpError: si la respuesta HTTP tiene un status de error (404, 500, etc).
 *   - Otros errores inesperados.
 */
async function fetchData() {
    try {
        // Realizamos la petición con un timeout de 3000 ms (3 segundos)
        const data = await simpleFetch('https://api.example.com/data', {
            signal: AbortSignal.timeout(3000), // Abortamos si tarda demasiado
        });
        console.log('Datos recibidos:', data); // Mostramos los datos recibidos en consola
    } catch (err) {
        // Si la petición fue abortada por timeout
        if (err.name === 'AbortError') {
            console.error('La petición fue abortada por timeout');
        }
        // Si ocurrió un error HTTP (por ejemplo, 404 o 500)
        else if (err instanceof HttpError) {
            if (err.response.status === 404) {
                console.error('No encontrado (404)');
            } else if (err.response.status === 500) {
                console.error('Error interno del servidor (500)');
            } else {
                console.error(`Error HTTP: ${err.response.status}`);
            }
        }
        // Para cualquier otro tipo de error inesperado
        else {
            console.error('Error desconocido:', err);
        }
    }
}

// Ejecutamos la función para demostrar el manejo avanzado de errores y timeout
fetchData();

/*
Resumen de conceptos avanzados aplicados:
- Scope: Las variables y funciones están correctamente encapsuladas en módulos y funciones.
- Closures: El manejo de errores y opciones de fetch aprovecha el scope de las funciones.
- Namespaces: El uso de módulos (export/import) permite organizar el código y evitar colisiones de nombres.
- Control de timeouts: AbortSignal.timeout permite abortar peticiones fetch automáticamente si exceden el tiempo límite.
- Manejo profesional de errores: Se distingue entre errores de timeout, errores HTTP y errores inesperados.
*/
