# Modelo Vista Controlador (MVC)

El Modelo Vista Controlador (MVC) es un patrón de arquitectura de software que separa una aplicación en tres componentes principales:

## 1. Modelo

Representa la lógica de datos de la aplicación. Gestiona la información, las reglas de negocio y la comunicación con la base de datos.

## 2. Vista

Es la interfaz de usuario. Muestra los datos del modelo y envía las acciones del usuario al controlador.

## 3. Controlador

Actúa como intermediario entre el modelo y la vista. Recibe las entradas del usuario desde la vista, procesa la lógica y actualiza el modelo y la vista según sea necesario.

---

### Ventajas del MVC

- **Separación de responsabilidades:** Facilita el mantenimiento y escalabilidad.
- **Reutilización de código:** Permite reutilizar componentes en diferentes partes de la aplicación.
- **Facilita las pruebas:** Cada componente puede probarse de forma independiente.

---

### Ejemplo de flujo MVC

1. El usuario interactúa con la vista.
2. La vista envía la acción al controlador.
3. El controlador procesa la acción y actualiza el modelo.
4. El modelo notifica a la vista sobre los cambios.
5. La vista actualiza la interfaz para el usuario.
