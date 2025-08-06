const form = document.querySelector('form');
const inputNombre = document.getElementById('nombre-completo');
const inputCorreo = document.getElementById('correo');
const inputContraseña = document.getElementById('contraseña');
const inputConfirmarContraseña = document.getElementById('confirmar-contraseña');
const inputFechaNacimiento = document.getElementById('nacimiento')
const inputTelefono = document.getElementById('telefono')

// Función para mostrar un mensaje de error
function showError(input, message) {
  const errorSpan = input.nextElementSibling;
  errorSpan.textContent = message;
}

// Función para limpiar el mensaje de error
function clearError(input) {
  const errorSpan = input.nextElementSibling;
  errorSpan.textContent = '';
}

// --- Lógica para validar el nombre ---
inputNombre.addEventListener('input', (e) => {
  let inputValue = e.target.value.trim();

    // Validar que el campo no esté vacío
    if (inputValue === '') {
    showError(inputNombre, 'El nombre completo es obligatorio.');
    return;
    }

    // Validar mínimo de caracteres
    if (inputValue.length < 3) {
    showError(inputNombre, 'El nombre completo debe tener al menos 3 caracteres.');
    return;
    }

    // Validar el patrón (solo letras y espacios)
    const pattern = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/;
    if (!pattern.test(inputValue)) {
    showError(inputNombre, 'El nombre solo puede contener letras y espacios.');
    return;
    }

    // Validar que haya al menos un nombre y un apellido (un espacio)
    if (inputValue.split(' ').length < 2 || inputValue.split(' ').some(part => part.length === 0)) {
    showError(inputNombre, 'Por favor, ingresa al menos un nombre y un apellido.');
    return;
    }

    // Si todas las validaciones pasan, limpiar el error
    clearError(inputNombre);
});



// --- Lógica para validar el correo ---
inputCorreo.addEventListener('input', (e) => {
  const inputValue = e.target.value.trim();

    // Validar que el campo no esté vacío
    if (inputValue === '') {
    showError(inputCorreo, 'El correo electrónico es obligatorio.');
    return;
    }

    // Validar el formato de correo electrónico
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(inputValue)) {
    showError(inputCorreo, 'Por favor, ingresa un correo electrónico válido.');
    return;
    }

    // Si la validación pasa, limpiar el error
    clearError(inputCorreo);
});



// --- Lógica para validar la contraseña ---
inputContraseña.addEventListener('input', (e) => {
  const inputValue = e.target.value.trim();

    // Validar que el campo no esté vacío
    if (inputValue === '') {
    showError(inputContraseña, 'La contraseña es obligatoria.');
    return;
    }

    // Validar mínimo de caracteres
    if (inputValue.length < 8) {
    showError(inputContraseña, 'La contraseña debe tener al menos 8 caracteres.');
    return;
    }

    // Validar el formato
    const contraseñaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!contraseñaPattern.test(inputValue)) {
    showError(inputContraseña, 'Tu contraseña debe tener al menos una mayúscula, una minúscula, un número y un símbolo');
    return;
    }

    // Si la validación pasa, limpiar el error
    clearError(inputContraseña);
});



// --- Lógica para validar la confirmacion de la contraseña ---
inputConfirmarContraseña.addEventListener('input', (e) => {
  const inputValue = e.target.value.trim();

    // Validar que el campo no esté vacío
    if (inputValue === '') {
    showError(inputConfirmarContraseña, 'La confirmación de la contraseña es obligatoria.');
    return;
    }

    // Validar que la contraseña sea la misma
    if (inputValue !== inputContraseña.value) {
    showError(inputConfirmarContraseña, 'La contraseña debe ser igual a la anterior.');
    return;
    }

    // Si la validación pasa, limpiar el error
    clearError(inputConfirmarContraseña);
});



// --- Lógica para validar la fecha de nacimiento ---
inputFechaNacimiento.addEventListener('input', (e) => {
  const inputValue = e.target.value.trim();

    // Validar que el campo no esté vacío
    if (inputValue === '') {
    showError(inputFechaNacimiento, 'La fecha de nacimiento es obligatoria.');
    return;
    }

    // Validar el formato
    const fechaPattern = /^\d{1,2}[/-]\d{1,2}[/-]\d{2,4}$/;
    if (!fechaPattern.test(inputValue)) {
    showError(inputFechaNacimiento, 'Por favor, ingresa una fecha valida. ( 01/01/2025 ) o ( 01-01-25 )');
    return;
    }

    // Validar que el usuario sea mayor de edad
    const partesFecha = inputValue.split(/[/-]/);
    const añoInput = parseInt(partesFecha[2]);
    const añoActual = new Date().getFullYear();
    let edad;
    if (añoInput < 100) {
        edad = añoActual - (añoInput > añoActual % 100 ? 1900 + añoInput : 2000 + añoInput);
    } else {
        edad = añoActual - añoInput;
    }
    if (edad < 18) {
        showError(inputFechaNacimiento, 'Debes ser mayor de 18 años para registrarte.');
        return;
    }

    // Si la validación pasa, limpiar el error
    clearError(inputFechaNacimiento);
});



// --- Lógica para validar la fecha de nacimiento ---
inputTelefono.addEventListener('input', (e) => {
  const inputValue = e.target.value.trim();

    // Validar nueve caracteres
    if (inputValue.length !== 9) {
    showError(inputTelefono, 'El número de teléfono debe tener 9 dígitos exactamente. (Formato de España)');
    return;
    }

    // Si la validación pasa, limpiar el error
    clearError(inputTelefono);
});