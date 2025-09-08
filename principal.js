
// --- Funciones de Cálculo Puras ---
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => (b !== 0 ? a / b : 'Error');

// --- Lógica y Estado ---

// Array para guardar el historial de resultados.
const resultsHistory = [];

// --- Interacción con el DOM ---
document.addEventListener("DOMContentLoaded", () => {
    // Elementos de la calculadora
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const resultElement = document.getElementById("result");

    // Elementos del historial
    const showHistoryButton = document.getElementById("show-history");
    const historyContainer = document.getElementById("history-container");
    const historyList = document.getElementById("history-list");

    // Manejador de eventos para los botones de cálculo
    document.querySelector('.buttons').addEventListener('click', (event) => {
        const button = event.target;
        if (button.tagName !== 'BUTTON') return;

        const num1 = parseFloat(num1Input.value) || 0;
        const num2 = parseFloat(num2Input.value) || 0;
        let result;

        switch (button.id) {
            case 'sum': result = sumar(num1, num2); break;
            case 'rest': result = restar(num1, num2); break;
            case 'mult': result = multiplicar(num1, num2); break;
            case 'div': result = dividir(num1, num2); break;
            default: return; // Salir si no es un botón de operación
        }

        resultElement.textContent = result;

        // Si el resultado es válido, lo añadimos al array
        if (result !== 'Error') {
            resultsHistory.push(result);
        }
    });

    // Manejador de eventos para el botón "Mostrar Historial"
    showHistoryButton.addEventListener('click', () => {
        // Alternamos la visibilidad del contenedor del historial
        historyContainer.classList.toggle('hidden');

        // Si el contenedor ahora es visible, lo poblamos
        if (!historyContainer.classList.contains('hidden')) {
            // Limpiamos la lista actual para no repetir datos
            historyList.innerHTML = ''; 

            // Creamos y añadimos cada elemento del historial
            resultsHistory.forEach(result => {
                const listItem = document.createElement('li');
                listItem.textContent = result;
                historyList.appendChild(listItem);
            });
            showHistoryButton.textContent = 'Ocultar Historial';
        } else {
            showHistoryButton.textContent = 'Mostrar Historial';
        }
    });
});
