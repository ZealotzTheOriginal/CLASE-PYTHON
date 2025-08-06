const form = document.querySelector('form');
const inputNombre = document.getElementById('nombre-completo');
const inputCorreo = document.getElementById('correo');
const inputContraseña = document.getElementById('contraseña');
const inputConfirmarContraseña = document.getElementById('confirmar-contraseña');
const inputFechaNacimiento = document.getElementById('nacimiento')
const inputTelefono = document.getElementById('telefono')
const inputDNINIE = document.getElementById('DNINIE')

function showError(input, message) {
  const errorSpan = input.nextElementSibling;
  errorSpan.textContent = message;
}

function clearError(input) {
  const errorSpan = input.nextElementSibling;
  errorSpan.textContent = '';
}

form.addEventListener('input', (e) => {
  const target = e.target;
  const inputValue = target.value.trim();

  switch (target.id) {
    case 'nombre-completo':
      validarNombre(target, inputValue);
      break;
    case 'correo':
      validarCorreo(target, inputValue);
      break;
    case 'contraseña':
      validarContraseña(target, inputValue);
      if (inputConfirmarContraseña.value.trim() !== '') {
        validarConfirmarContraseña(inputConfirmarContraseña, inputConfirmarContraseña.value.trim());
      }
      break;
    case 'confirmar-contraseña':
      validarConfirmarContraseña(target, inputValue);
      break;
    case 'nacimiento':
      validarFechaNacimiento(target, inputValue);
      break;
    case 'telefono':
      validarTelefono(target, inputValue);
      break;
    case 'DNINIE':
      validarDNINIE(target, inputValue);
  }
}); 

function validarNombre(input, value) {
  if (value === '') {
    showError(input, 'El nombre completo es obligatorio.');
  } else if (value.length < 3) {
    showError(input, 'El nombre completo debe tener al menos 3 caracteres.');
  } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(value)) {
    showError(input, 'El nombre solo puede contener letras y espacios.');
  } else if (value.split(' ').length < 2 || value.split(' ').some(part => part.length === 0)) {
    showError(input, 'Por favor, ingresa al menos un nombre y un apellido.');
  } else {
    clearError(input);
  }
}

function validarCorreo(input, value) {
  if (value === '') {
    showError(input, 'El correo electrónico es obligatorio.');
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
    showError(input, 'Por favor, ingresa un correo electrónico válido.');
  } else {
    clearError(input);
  }
}

function validarContraseña(input, value) {
  if (value === '') {
    showError(input, 'La contraseña es obligatoria.');
  } else if (value.length < 8) {
    showError(input, 'La contraseña debe tener al menos 8 caracteres.');
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)) {
    showError(input, 'Tu contraseña debe tener al menos una mayúscula, una minúscula, un número y un símbolo');
  } else {
    clearError(input);
  }
}

function validarConfirmarContraseña(input, value) {
  if (value === '') {
    showError(input, 'La confirmación de la contraseña es obligatoria.');
  } else if (value !== inputContraseña.value) {
    showError(input, 'La contraseña debe ser igual a la anterior.');
  } else {
    clearError(input);
  }
}

function validarFechaNacimiento(input, value) {
  if (value === '') {
    showError(input, 'La fecha de nacimiento es obligatoria.');
  } else if (!/^\d{1,2}[/-]\d{1,2}[/-]\d{2,4}$/.test(value)) {
    showError(input, 'Por favor, ingresa una fecha valida. (01/01/2025) o (01-01-25)');
  } else {
    const partesFecha = value.split(/[/-]/);
    const añoInput = parseInt(partesFecha[2]);
    const añoActual = new Date().getFullYear();
    let edad;
    if (añoInput < 100) {
      edad = añoActual - (añoInput > añoActual % 100 ? 1900 + añoInput : 2000 + añoInput);
    } else {
      edad = añoActual - añoInput;
    }

    if (edad < 18) {
      showError(input, 'Debes ser mayor de 18 años para registrarte.');
    } else {
      clearError(input);
    }
  }
}

function validarTelefono(input, value) {
  if (value.length !== 9) {
    showError(input, 'El número de teléfono debe tener 9 dígitos exactamente. (Formato de España)');
  } else {
    clearError(input);
  }
}

function validarDNINIE(input, value) {
  const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
  const dniNiePattern = /^([XYZ])?\d{7,8}[-]?([A-Z])$/;
  const valorLimpio = value.toUpperCase().replace(/[-]/g, '');
  if (value === '') {
    showError(input, 'El documento de identidad es obligatorio.');
  } else if (!dniNiePattern.test(value.toUpperCase())) {
    showError(input, 'Por favor, ingresa un identificador NIE o DNI valido.');
  } else {
    let numeroDNI = valorLimpio.slice(0, -1);
    const letraDNI = valorLimpio.slice(-1);
    if (valorLimpio.startsWith('X')) {
      numeroDNI = '0' + numeroDNI.slice(1);
    } else if (valorLimpio.startsWith('Y')) {
      numeroDNI = '1' + numeroDNI.slice(1);
    } else if (valorLimpio.startsWith('Z')) {
      numeroDNI = '2' + numeroDNI.slice(1);
    }
    const indice = parseInt(numeroDNI, 10) % 23;
    const letraCorrecta = letras.charAt(indice);
    if (letraDNI !== letraCorrecta) {
      showError(input, 'La letra del documento de identidad no es correcta.');
    } else {
      clearError(input);
    }
  }
}