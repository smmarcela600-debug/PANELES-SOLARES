const datosSolar = [
    { entidad: "Colombia", codigo: "COL", anio: 2000, generacion: "1.835.014" },
    { entidad: "Colombia", codigo: "COL", anio: 2001, generacion: "266.875" },
    { entidad: "Colombia", codigo: "COL", anio: 2002, generacion: "465.125" },
    { entidad: "Colombia", codigo: "COL", anio: 2003, generacion: "6.405" },
    { entidad: "Colombia", codigo: "COL", anio: 2004, generacion: "7.951.726" },
    { entidad: "Colombia", codigo: "COL", anio: 2005, generacion: "953.125" },
    { entidad: "Colombia", codigo: "COL", anio: 2017, generacion: "5" },
    { entidad: "Colombia", codigo: "COL", anio: 2018, generacion: "12" },
    { entidad: "Colombia", codigo: "COL", anio: 2019, generacion: "13.206" },
    { entidad: "Colombia", codigo: "COL", anio: 2020, generacion: "1.908" },
    { entidad: "Colombia", codigo: "COL", anio: 2021, generacion: "31.732.163" }
];

const tabla = document.getElementById("tabla-cuerpo");

// 1. Función para limpiar y llenar la tabla
function mostrarTabla(datos) {
    tabla.innerHTML = ""; // Borra lo que haya
    datos.forEach(item => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${item.entidad}</td>
            <td>${item.codigo}</td>
            <td>${item.anio}</td>
            <td>${item.generacion}</td>
        `;
        tabla.appendChild(fila);
    });
}

// 2. Función para ordenar
function ordenarPorGeneracion() {
    datosSolar.sort((a, b) => {
        // Quitamos los puntos y convertimos a número para comparar bien
        const numA = parseFloat(a.generacion.replace(/\./g, ''));
        const numB = parseFloat(b.generacion.replace(/\./g, ''));
        return numA - numB;
    });

    mostrarTabla(datosSolar); // Volvemos a mostrar los datos ya ordenados
}

// Carga inicial
mostrarTabla(datosSolar);