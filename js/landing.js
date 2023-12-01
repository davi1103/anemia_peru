document.addEventListener('DOMContentLoaded', function() {
    fetch('/js/Datos_Anemia_2021.json')
        .then(response => response.json())
        .then(data => {
            const tabla = document.getElementById('datos-Anemia');
            // Remove 'Fecha' from the header
            tabla.innerHTML = '<tr><th>Departamento</th><th>Distrito</th><th>Total de niños</th><th>Niños con Anemia</th><th>Porcentaje de Niños con Anemia</th><th>Porcentaje de atención médica</th></tr>';
            data.forEach(registro => {
                // Remove 'Fecha' from the data rows
                tabla.innerHTML += `<tr>
                    <td>${registro.Departamento}</td>
                    <td>${registro.Distrito}</td>
                    <td>${registro['Total de niños']}</td>
                    <td>${registro['Niños con Anemia']}</td>
                    <td>${registro['Porcentaje de Niños con Anemia']}</td>
                    <td>${registro['Porcentaje de atención médica']}</td>
                </tr>`;
            });
        });
});
