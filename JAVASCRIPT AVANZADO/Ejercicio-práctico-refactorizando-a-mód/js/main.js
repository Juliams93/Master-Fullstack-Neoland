// Importaciones de módulos y clases
import { ARTICLE_TYPES, ArticleFactory } from "classes/Article"
import { ShoppingList, withTotalMixin } from "classes/ShoppingList"
import { localStore } from "classes/localStore"
import { logBasket } from "decorators/log"

// Instancia de la fábrica de artículos (Patrón Factory)
const fabricaArticulos = new ArticleFactory

// Patrón Singleton para la lista de compra
let listaCompra = (function () {
    let ShoppingListInstance

    return {
        get: () => {
            if (!ShoppingListInstance) {
                // Decorador aplicado a la instancia
                ShoppingListInstance = logBasket[create()]
            }
            return ShoppingListInstance
        }
    }

    function create() {
        // Inicialización del almacenamiento local y mixin
        const dataStore = new localStore('lista-compra')
        Object.assign(ShoppingList.prototype, withTotalMixin)
        return new ShoppingList(dataStore)
    }
})()

document.addEventListener('DOMContentLoaded', onDOMContentLoaded)

// Evento principal al cargar el DOM
function onDOMContentLoaded() {
    const formulario = document.getElementById('formulario')
    const campoArticulo = document.getElementById('articulo')
    const botonArticulo = document.getElementById('nuevoArticulo')
    const botonNuevaLista = document.getElementById('nuevaLista')

    formulario.addEventListener('submit', onFormularioSubmit)
    campoArticulo.addEventListener('keyup', onInputKeyUp)
    botonArticulo.addEventListener('click', onNewArticleClick)
    botonNuevaLista.addEventListener('click', onNewListClick)

    // Carga dinámica de la lista de la compra
    loadShoppingList()
}

// Suscripción al patrón Observer
listaCompra.get().subscribe("formulario", "add", addToElementsList)

// Maneja el envío del formulario
function onFormularioSubmit(event) {
    event.preventDefault()
    const articulo = campoArticulo.value
    const cantidad = campoCantidad.value
    const precio = campoPrecio.value
    const nuevoArticulo = fabricaArticulos.create(articulo, cantidad, precio)
    listaCompra.get().add(nuevoArticulo)
    campoArticulo.value = ''
    campoCantidad.value = 1
    campoPrecio.value = 0
}

// Limpia errores al escribir en el input
function onInputKeyUp(event) {
    const campo = event.target
    const error = document.getElementById(`${campo.id}Error`)
    if (error) {
        error.remove()
    }
}

// Añade un nuevo artículo desde el botón
function onNewArticleClick(event) {
    const articulo = campoArticulo.value
    const cantidad = campoCantidad.value
    const precio = campoPrecio.value
    const nuevoArticulo = fabricaArticulos.create(articulo, cantidad, precio)
    listaCompra.get().add(nuevoArticulo)
    campoArticulo.value = ''
    campoCantidad.value = 1
    campoPrecio.value = 0
}

// Limpia la lista de la compra
function onNewListClick(event) {
    listaCompra.get().clear()
}

// Carga los artículos existentes en la interfaz
function loadShoppingList() {
    const carrito = listaCompra.get()
    if (carrito.basket.length > 0) {
        for (let i = 0; i < carrito.basket.length; i++) {
            addToElementsList(carrito.basket[i])
        }
    }
    resetFormState()
}

// Ejemplo de setup con import dinámico (no se usa en el flujo principal)
function setUpShoppingList() {
    Promise.all([
        import('classes/ShoppingList'),
        import('classes/localStore'),
        import('decorators/log')
    ]).then((Modules) => {
        const { ShoppingList, withTotalMixin } = Modules[0]
        const localStore = Modules[1].localStore
        const logBasket = Modules[2].logBasket

        listaCompra = (function () {
            let ShoppingListInstance

            function create() {
                const dataStore = new localStore('lista-compra')
                Object.assign(ShoppingList.prototype, withTotalMixin)
                return new ShoppingList(dataStore)
            }

            return {
                get: () => {
                    if (!ShoppingListInstance) {
                        ShoppingListInstance = logBasket[create()]
                    }
                    return ShoppingListInstance
                }
            }
        })()
    })
}

// Métodos adicionales para ShoppingList (no se usan en el flujo principal)
function create () {
    ShoppingList.prototype.addItem = function(item) {
        this.items.push(item)
        this.updateTotal()
    }
    ShoppingList.prototype.removeItem = function(item) {
        this.items = this.items.filter(i => i.id !== item.id)
        this.updateTotal()
    }
    ShoppingList.prototype.updateTotal = function() {
        this.total = this.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    }
}

// Añade un artículo a la lista en la interfaz
function addToElementsList(article) {
    const lista = document.getElementById('listaArticulos')
    const item = document.createElement('article-item')
    item.setAttribute('data-id', article.id)
    item.setAttribute('data-name', article.name)
    item.setAttribute('data-quantity', article.quantity)
    item.setAttribute('data-price', article.price)
    item.setAttribute('data-type', article.type)
    lista.appendChild(item)
    updateTotal()
}

// Actualiza el total en la interfaz
function updateTotal() {
    const carrito = document.getElementById('shoppingCart')
    carrito.setAttribute('data-total', listaCompra.get().total)
}

// Resetea el estado del formulario
function resetFormState() {
    campoArticulo.value = ''
    campoCantidad.value = 1
    campoPrecio.value = 0
}
