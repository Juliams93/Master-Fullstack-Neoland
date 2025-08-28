import { createSignal, createEffect, For } from "solid-js";

function ListaCompra() {
    const [listaCompra, setListaCompra] = createSignal(
        JSON.parse(localStorage.getItem("listaCompra")) || []
    );
    const [item, setItem] = createSignal("");
    const [listasCompra, setListasCompra] = createSignal(
        JSON.parse(localStorage.getItem("listasCompra")) || {}
    );

    // Sincroniza con localStorage
    createEffect(() => {
        localStorage.setItem("listaCompra", JSON.stringify(listaCompra()));
    });

    // Actualiza listas guardadas
    createEffect(() => {
        localStorage.setItem("listasCompra", JSON.stringify(listasCompra()));
    });

    const agregarArticulo = () => {
        if (item().trim()) {
            setListaCompra([...listaCompra(), item().trim()]);
            setItem("");
        }
    };

    const eliminarArticulo = (articulo) => {
        setListaCompra(listaCompra().filter(a => a !== articulo));
    };

    const eliminarTodos = () => {
        if (confirm("¿Estás seguro de que quieres eliminar todos los artículos?")) {
            setListaCompra([]);
            setItem("");
        }
    };

    const nuevaLista = () => {
        const nombreLista = prompt("Introduce el nombre de la nueva lista:");
        if (nombreLista) {
            setListasCompra({ ...listasCompra(), [nombreLista]: [] });
            alert(`Lista "${nombreLista}" creada.`);
            // Puedes mostrar las listas guardadas en consola si lo deseas
            Object.entries(listasCompra()).forEach(([nombre, articulos]) => {
                console.log(`Lista: ${nombre}, Artículos: ${articulos.join(", ")}`);
            });
        }
    };

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    agregarArticulo();
                }}
                id="formulario"
            >
                <input
                    id="item"
                    value={item()}
                    onInput={e => setItem(e.target.value)}
                />
                <button
                    id="nuevoArticulo"
                    type="button"
                    disabled={item().trim() === ""}
                    onClick={agregarArticulo}
                >
                    Añadir artículo
                </button>
            </form>
            <button id="nuevaLista" onClick={nuevaLista}>
                Nueva lista
            </button>
            <button id="eliminarTodo" onClick={eliminarTodos}>
                Eliminar todos
            </button>
            <div>
                <span id="contador">{listaCompra().length}</span> artículos
            </div>
            <ul id="lista">
                <For each={listaCompra()}>
                    {articulo => (
                        <li class="lista-item">
                            <span class="articulo-texto">{articulo}</span>
                            <button
                                class="boton-eliminar"
                                onClick={() => eliminarArticulo(articulo)}
                            >
                                ×
                            </button>
                        </li>
                    )}
                </For>
            </ul>
        </div>
    );
}

export default ListaCompra;
