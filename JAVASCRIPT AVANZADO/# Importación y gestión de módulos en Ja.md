# Importación y gestión de módulos en JavaScript (Explicado)

## Inyección de dependencias

La inyección de dependencias permite que los módulos reciban sus dependencias externas de manera flexible, facilitando el mantenimiento y las pruebas. En JavaScript, esto se puede lograr pasando objetos o funciones como argumentos a otros módulos o clases, evitando acoplamientos directos y facilitando el reemplazo de dependencias en entornos de prueba.

## Gestión de paquetes y librerías

La gestión de paquetes y librerías se realiza mediante gestores como npm (Node Package Manager) o yarn. Estos permiten instalar, actualizar y eliminar paquetes de terceros fácilmente. Por ejemplo, para instalar una librería puedes usar `npm install nombre-paquete`. Los gestores también ayudan a mantener un archivo de dependencias (`package.json`) que describe todas las librerías utilizadas en el proyecto.

## Módulos

Los módulos en JavaScript permiten dividir el código en archivos reutilizables y organizados. Usando la sintaxis `import` y `export`, puedes compartir funciones, objetos o clases entre diferentes archivos. Esto mejora la legibilidad y el mantenimiento del código, ya que cada módulo puede tener una responsabilidad específica.

## Importación de archivos estáticos

Puedes importar archivos estáticos como JSON o CSS directamente en tu código JavaScript. Por ejemplo, usando `import datos from './archivo.json'` puedes cargar datos estructurados. Para estilos, puedes importar archivos CSS en proyectos que utilicen herramientas como Webpack o Vite, permitiendo que los estilos se apliquen automáticamente a tu aplicación.

### Ejemplos avanzados de importación de archivos estáticos

```js
import data from 'https://example.com/data.json' with { type: 'json' };
import styles from 'https://example.com/styles.css' with { type: 'css' };
```

## Importación dinámica de módulos

Importar un módulo sólo para obtener sus efectos secundarios:

```js
(async () => {
    if (somethingIsTrue) {
        await import('/modules/my-module.js');
    }
})();
```

Importar un módulo dinámicamente y comparar referencias:

```js
import * as mod from '/my-module.js';

import('/my-module.js').then((mod2) => {
    console.log(mod === mod2); // true
});
```

Cargar módulos en respuesta a eventos:

```js
const main = document.querySelector('main');
for (const link of document.querySelectorAll('nav > a')) {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        import('/modules/my-module.js')
            .then((module) => {
                module.loadPageInto(main);
            })
            .catch((err) => {
                main.textContent = err.message;
            });
    });
}
```

Importar módulos según el entorno de ejecución:

```js
let myModule;

if (typeof window === 'undefined') {
    myModule = await import('module-used-on-server');
} else {
    myModule = await import('module-used-in-browser');
}
```

Importar varios módulos en bloque:

```js
Promise.all(
    Array.from({ length: 10 }).map(
        (_, index) => import(`/modules/module-${index}.js`),
    ),
).then((modules) => modules.forEach((module) => module.load()));
```

## Exportación asíncrona

```js
const colors = fetch('../data/colors.json').then((response) => response.json());

export default await colors;
```

## Import maps

```html
<script type="importmap">
    {
        "imports": {
            "shapes": "./shapes/square.js",
            "shapes/square": "./modules/shapes/square.js",
            "https://example.com/shapes/square.js": "./shapes/square.js",
            "https://example.com/shapes/": "/shapes/square/",
            "../shapes/square": "./shapes/square.js"
        }
    }
</script>
```

```js
import { name as squareNameOne } from 'shapes';
import { name as squareNameTwo } from 'shapes/square';
import { name as squareNameThree } from 'https://example.com/shapes/square.js';
```
