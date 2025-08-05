const fullNameInput = document.getElementById('nombre');
const fullNameErrorDiv = document.getElementById('fullNameError');

function nombre() {
    const nameValue = fullNameInput.value.trim();
    const namePattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]{3,}\s[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]{3,}$/;
    
    // Validar si el campo está vacío
    if (nameValue === '') {
        fullNameErrorDiv.textContent = 'Este campo es obligatorio.';
        fullNameErrorDiv.style.display = 'block';
        return false;
    }
    
    // Validar la longitud total
    if (nameValue.length < 7) {
        fullNameErrorDiv.textContent = 'El nombre completo debe tener al menos 7 caracteres.';
        fullNameErrorDiv.style.display = 'block';
        return false;
    }
    
    // Validar el formato con la expresión regular
    if (!namePattern.test(nameValue)) {
        fullNameErrorDiv.textContent = 'Introduce al menos un nombre y un apellido (mínimo 3 letras cada uno).';
        fullNameErrorDiv.style.display = 'block';
        return false;
    }

    // Si todo es correcto, ocultar el error
    fullNameErrorDiv.textContent = '';
    fullNameErrorDiv.style.display = 'none';
    return true;
}

// Añadir un "escuchador de eventos" para validar cuando el usuario deja el campo
fullNameInput.addEventListener('blur', nombre);

// Opcional: Validar también en el evento de envío del formulario
const registroForm = document.getElementById('registroForm');
registroForm.addEventListener('submit', function(event) {
    // Si la validación falla, prevenimos el envío del formulario
    if (!nombre()) {
        event.preventDefault();
        // Puedes añadir un estilo para resaltar el campo si falla
        fullNameInput.style.borderColor = 'red'; 
    }
});