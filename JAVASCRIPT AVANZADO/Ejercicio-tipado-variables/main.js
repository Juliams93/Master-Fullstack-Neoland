function tipoDe(valor) {
    if (Array.isArray(valor)) return "array";
    if (valor === null) return "null";
    return typeof valor;
}

document.getElementById('mostrarTipo').addEventListener('click', function() {
    const valorInput = document.getElementById('palabra').value;
    let valor;
    try {
        valor = JSON.parse(valorInput);
    } catch {
        valor = valorInput;
    }
    const tipo = tipoDe(valor);
    document.getElementById('respuesta').textContent = `Tipo: ${tipo}`;
});
