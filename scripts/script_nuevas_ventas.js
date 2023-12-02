function obtenerDatos(){
    var resultados;
    var cliente, producto, unidades, bonificacion;

    cliente = document.getElementById("cliente").value;
    producto = document.getElementById("producto").value;
    unidades = document.getElementById("unidades").value;
    bonificacion = document.getElementById("bonificacion").value;

    if (cliente === "" || producto === "" || unidades === "" || bonificacion === "") {
        alert("Por favor, complete todos los campos.");
        return null;
    }

    var resultados = [cliente, producto, unidades, bonificacion];
    return resultados;
}

function agregarEvento() {
    var resultados = obtenerDatos();
    
    if (resultados !== null) {
        insertarFila(resultados);
    }
}

function insertarFila(datos) {
    var tabla = document.getElementById("lista-elementos");
    var fila = tabla.insertRow(-1);

    for (var i = 1; i < datos.length; i++) {
        var celda = fila.insertCell(i - 1);
        celda.innerHTML = datos[i];
    }
}

var btnAgregar = document.getElementById("btnAgregar");
btnAgregar.removeEventListener("click", agregarEvento);
btnAgregar.addEventListener("click", agregarEvento);