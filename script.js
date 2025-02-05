// script.js
function convertCapacity() {
    // Obtiene el valor de la cantidad ingresada y la convierte a un número de punto flotante
    const inputAmount = parseFloat(document.getElementById('inputAmount').value);
    // Obtiene la unidad de medida seleccionada
    const inputUnit = document.getElementById('inputUnit').value;

    // Factores de conversión
    const litersPerGallon = 3.78541; // 1 galón = 3.78541 litros
    const bottlesPerLiter = 1.33333; // 1 litro = 1.33333 botellas (suponiendo que una botella es de 750 ml)

    // Variables para almacenar las cantidades convertidas
    let gallons, liters, bottles;

    // Convierte la cantidad según la unidad seleccionada
    if (inputUnit === 'GAL') {
        gallons = inputAmount;
        liters = inputAmount * litersPerGallon;
        bottles = liters * bottlesPerLiter;
    } else if (inputUnit === 'L') {
        liters = inputAmount;
        gallons = inputAmount / litersPerGallon;
        bottles = inputAmount * bottlesPerLiter;
    } else if (inputUnit === 'BOT') {
        bottles = inputAmount;
        liters = inputAmount / bottlesPerLiter;
        gallons = liters / litersPerGallon;
    }

    // Actualiza los elementos del DOM con las cantidades convertidas
    document.getElementById('galValue').innerText = `${gallons.toFixed(2)} GAL`;
    document.getElementById('litersValue').innerText = `${liters.toFixed(2)} L`;
    document.getElementById('bottlesValue').innerText = `${bottles.toFixed(2)} BOT`;
}