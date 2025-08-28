# Principios SOLID explicados para principiantes

Los principios SOLID son cinco reglas básicas para escribir código en programación orientada a objetos. Ayudan a que el código sea más fácil de entender, mantener y mejorar. Aquí tienes una explicación sencilla de cada uno:

## S - Single Responsibility Principle (Responsabilidad Única)

Cada clase debe tener una sola razón para cambiar. Es decir, cada clase debe encargarse de una sola cosa. Si una clase hace muchas cosas, es más difícil de modificar y entender.

**Ejemplo:**  
Una clase que solo guarda datos de usuario, no debería también enviar emails.

---

## O - Open/Closed Principle (Abierto/Cerrado)

El código debe estar abierto para extenderse, pero cerrado para modificarse. Puedes añadir nuevas funcionalidades sin cambiar el código existente.

**Ejemplo:**  
Si quieres añadir un nuevo tipo de pago, creas una nueva clase, no modificas la clase de pagos existente.

---

## L - Liskov Substitution Principle (Sustitución de Liskov)

Las clases hijas deben poder usarse en lugar de las clases padres sin que el programa falle. Si una función espera una clase padre, debe funcionar igual con una clase hija.

**Ejemplo:**  
Si tienes una clase `Animal` y una clase `Perro` que hereda de `Animal`, cualquier función que use `Animal` debe funcionar también con `Perro`.

---

## I - Interface Segregation Principle (Segregación de Interfaces)

No obligues a una clase a implementar métodos que no necesita. Es mejor tener varias interfaces pequeñas que una grande.

**Ejemplo:**  
Si tienes una interfaz `Vehículo` con métodos para volar y nadar, un coche no debería tener que implementar esos métodos.

---

## D - Dependency Inversion Principle (Inversión de Dependencias)

Las clases deben depender de abstracciones (interfaces), no de implementaciones concretas. Así el código es más flexible y fácil de cambiar.

**Ejemplo:**  
En vez de crear un objeto directamente dentro de una clase, pásalo como parámetro o usa una interfaz.

---

**Resumen:**  
SOLID ayuda a que tu código sea menos caótico y más fácil de modificar. Si sigues estos principios, será más sencillo trabajar en equipo y evitar errores raros.
