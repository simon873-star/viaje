// Selecciona todos los checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Cargar estado guardado
checkboxes.forEach((checkbox, index) => {
    const estado = localStorage.getItem("checkbox_" + index);

    if (estado === "true") {
        checkbox.checked = true;
    }

    // Guardar cuando cambia
    checkbox.addEventListener("change", () => {
        localStorage.setItem("checkbox_" + index, checkbox.checked);
    });
});