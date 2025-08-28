// Módulo ListaCompra con patrón Singleton y Observer
const ListaCompra = (() => {
    let instancia;
    let observers = [];

    class Lista {
        constructor() {
            this.articulos = JSON.parse(localStorage.getItem("listaCompra")) || [];
        }
        agregar(articulo) {
            this.articulos.push(articulo);
            this._guardar();
            this._notificar();
        }
        eliminar(articulo) {
            const idx = this.articulos.indexOf(articulo);
            if (idx > -1) {
                this.articulos.splice(idx, 1);
                this._guardar();
                this._notificar();
            }
        }
        eliminarTodos() {
            this.articulos = [];
            localStorage.removeItem("listaCompra");
            this._notificar();
        }
        contar() {
            return this.articulos.length;
        }
        obtener() {
            return [...this.articulos];
        }
        _guardar() {
            localStorage.setItem("listaCompra", JSON.stringify(this.articulos));
        }
        suscribir(observer) {
            observers.push(observer);
        }
        _notificar() {
            observers.forEach(fn => fn(this));
        }
    }

    return {
        getInstancia: () => {
            if (!instancia) instancia = new Lista();
            return instancia;
        }
    };
})();

// Módulo UI
const UI = (() => {
    let listaArticulos, campoArticulo, botonArticulo, contador;

    function init() {
        listaArticulos = document.querySelector("#lista");
        campoArticulo = document.querySelector("#item");
        botonArticulo = document.querySelector("#nuevoArticulo");
        contador = document.querySelector("#contador");

        botonArticulo.addEventListener("click", onAddClick);
        campoArticulo.addEventListener("keyup", onInputKeyup);

        ListaCompra.getInstancia().suscribir(render);
        render(ListaCompra.getInstancia());
    }

    function render(lista) {
        listaArticulos.innerHTML = "";
        lista.obtener().forEach(articulo => {
            const li = document.createElement("li");
            li.innerHTML = `<span>${articulo}</span>
                <button class="boton-eliminar">×</button>`;
            li.querySelector(".boton-eliminar").onclick = () => lista.eliminar(articulo);
            listaArticulos.appendChild(li);
        });
        contador.innerText = lista.contar();
        botonArticulo.disabled = campoArticulo.value.trim() === "";
    }

    function onAddClick() {
        const val = campoArticulo.value.trim();
        if (val) {
            ListaCompra.getInstancia().agregar(val);
            campoArticulo.value = "";
        }
    }

    function onInputKeyup() {
        botonArticulo.disabled = campoArticulo.value.trim() === "";
    }

    return { init };
})();

// Inicialización
document.addEventListener("DOMContentLoaded", UI.init);
