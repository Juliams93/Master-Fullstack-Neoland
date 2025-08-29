# Tipado de variables en JavaScript

JavaScript es un lenguaje de tipado dinámico, lo que significa que el tipo de una variable se determina automáticamente en tiempo de ejecución y puede cambiar.

## Ejemplos de tipos de variables

En JavaScript, puedes declarar variables usando `var`, `let` o `const`. El tipo de dato se asigna según el valor que almacenes.

### Tipos primitivos

- **Number**: Representa números, tanto enteros como decimales.

    ```javascript
    let edad = 25;
    let precio = 19.99;
    ```

- **String**: Representa cadenas de texto.

    ```javascript
    let nombre = "Juan";
    ```

- **Boolean**: Representa valores verdadero o falso.

    ```javascript
    let esMayor = true;
    ```

- **Undefined**: Una variable declarada pero sin valor asignado.

    ```javascript
    let valor;
    ```

- **Null**: Representa ausencia intencional de valor.

    ```javascript
    let resultado = null;
    ```

- **Symbol**: Tipo único e inmutable.

    ```javascript
    let id = Symbol("id");
    ```

### Tipos de referencia

- **Object**: Colección de pares clave-valor.

    ```javascript
    let persona = { nombre: "Ana", edad: 30 };
    ```

- **Array**: Lista ordenada de elementos.

    ```javascript
    let colores = ["rojo", "verde", "azul"];
    ```

- **Function**: Bloque de código reutilizable.

    ```javascript
    function saludar() {
        console.log("Hola");
    }
    ```

## Ejemplo de cambio de tipo

```javascript
let variable = 10;      // Number
variable = "texto";     // String
variable = true;        // Boolean
```

Como puedes ver, el tipo de la variable puede cambiar durante la ejecución del programa.
