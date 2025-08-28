// Definimos una clase Persona
class Persona {
    // El constructor recibe nombre y edad como parámetros
    constructor(nombre, edad) {
        this.nombre = nombre; // Guardamos el nombre en la instancia
        this.edad = edad;     // Guardamos la edad en la instancia
    }

    // Método para saludar, muestra un mensaje en consola
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Definimos una clase Empleado que hereda de Persona
class Empleado extends Persona {
    // El constructor recibe nombre, edad y puesto
    constructor(nombre, edad, puesto) {
        super(nombre, edad); // Llamamos al constructor de Persona
        this.puesto = puesto; // Guardamos el puesto en la instancia
    }

    // Método para trabajar, muestra un mensaje en consola
    trabajar() {
        console.log(`${this.nombre} está trabajando como ${this.puesto}.`);
    }
}

// Ejemplo de uso:
// Creamos una instancia de Empleado
const empleado1 = new Empleado('Ana', 30, 'Desarrolladora');

// Llamamos al método saludar (heredado de Persona)
empleado1.saludar(); // Muestra: Hola, mi nombre es Ana y tengo 30 años.

// Llamamos al método trabajar (definido en Empleado)
empleado1.trabajar(); // Muestra: Ana está trabajando como Desarrolladora.

// Creamos otra instancia de Empleado
const empleado2 = new Empleado('Luis', 25, 'Diseñador');

// Llamamos a los métodos de empleado2
empleado2.saludar(); // Muestra: Hola, mi nombre es Luis y tengo 25 años.
empleado2.trabajar(); // Muestra: Luis está trabajando como Diseñador.

