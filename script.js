function agregarElemento() {
    var productoSelect = document.querySelector('.form-container select');
    var unidadesInput = document.querySelector('.form-container input[type="number"]');
    var bonificacionInput = document.querySelectorAll('.form-container input[type="number"]')[1];

    var camposVacios = [];

    if (!productoSelect.value) {
        camposVacios.push(productoSelect);
    }

    if (!unidadesInput.value) {
        camposVacios.push(unidadesInput);
    }

    if (!bonificacionInput.value) {
        camposVacios.push(bonificacionInput);
    }

    if (camposVacios.length > 0) {
        resaltarCampos(camposVacios);
        return;
    }

    quitarResaltado();

    var productoTexto = productoSelect.options[productoSelect.selectedIndex].text;
    var unidades = unidadesInput.value;
    var bonificacion = bonificacionInput.value;

    var tabla = document.getElementById('lista-elementos');

    var newRow = tabla.insertRow(tabla.rows.length);

    var cellProducto = newRow.insertCell(0);
    var cellUnidades = newRow.insertCell(1);
    var cellBonificacion = newRow.insertCell(2);
    var cellEliminar = newRow.insertCell(3);

    cellProducto.innerHTML = `<strong>${productoTexto}</strong>`;
    cellUnidades.innerHTML = unidades;
    cellBonificacion.innerHTML = bonificacion;
    cellEliminar.innerHTML = '<button type="button" class="btn btn-danger btn-sm" onclick="eliminarFila(this)">Eliminar</button>';

    productoSelect.value = "";
    unidadesInput.value = "";
    bonificacionInput.value = "";
}

function eliminarFila(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function resaltarCampos(campos) {
    campos.forEach(function (elemento) {
        elemento.style.boxShadow = '0 0 6px 3px rgba(255, 0, 0, 0.75)';

        elemento.addEventListener('input', function () {
            if (elemento.value) {
                elemento.style.boxShadow = '';
            }
        });
    });
}

function quitarResaltado() {
    var elementos = document.querySelectorAll('.form-container input[type="number"], .form-container select');
    elementos.forEach(function (elemento) {
        elemento.style.boxShadow = '';
    });
}

document.querySelector('.form-container .btn-primary').addEventListener('click', agregarElemento);