document.addEventListener('DOMContentLoaded', function() {
    const fullNameInput = document.getElementById('nombre');
    const fullNameErrorDiv = document.getElementById('fullNameError');
    const registroForm = document.getElementById('registroForm');

    function nombre() {
        const nameValue = fullNameInput.value.trim();
        const namePattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]{3,}\s[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]{3,}$/;
        
        // Si el campo está vacío, no mostramos un error en tiempo real
        if (nameValue === '') {
            fullNameErrorDiv.textContent = '';
            fullNameErrorDiv.style.display = 'none';
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

    // Evento para validación en tiempo real (mientras se escribe)
    fullNameInput.addEventListener('input', nombre);

    // Evento para mostrar error de campo vacío al salir del campo
    fullNameInput.addEventListener('blur', function() {
        if (fullNameInput.value.trim() === '') {
            fullNameErrorDiv.textContent = 'Este campo es obligatorio.';
            fullNameErrorDiv.style.display = 'block';
        }
    });

    // Evento para validación final antes de enviar el formulario
    registroForm.addEventListener('submit', function(event) {
        if (!nombre()) {
            event.preventDefault();
            fullNameInput.style.borderColor = 'red'; 
        }
    });
});