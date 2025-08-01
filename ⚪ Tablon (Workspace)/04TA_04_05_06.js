// Consola Output + Clear
function writeToConsole(message, clear = false) {
  const consoleDiv = document.getElementById('output-console');
  
  if (clear) {
    consoleDiv.innerHTML = '';
  }

  const p = document.createElement('p');
  p.textContent = message;
  consoleDiv.appendChild(p);
  consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

// Ejercicio 1
function EjercicioUno() {
  let colores = ["rojo", "azul", "amarillo"];
  const coloresIniciales = Array.from(colores);

  const respuesta = prompt("1️⃣ Quieres añadir el color verde a la lista? (SI/NO)").toLowerCase();

  if (respuesta === 'si' || respuesta === 's') {
    colores.splice(1, 0, "verde"); 
    writeToConsole(`✅Ejercicio 1

1️⃣ Arreglo inicial: [${coloresIniciales.join(', ')}]
2️⃣ Arreglo final: [${colores.join(', ')}]
`, true);
  } else if (respuesta === 'no' || respuesta === 'n') {
    writeToConsole(`✅Ejercicio 1

1️⃣ Arreglo inicial: [${coloresIniciales.join(', ')}]
2️⃣ Arreglo final: [${colores.join(', ')}]
`, true);
    return; 
  } else {
    writeToConsole("⚠️ Respuesta no válida. Por favor, responde 'SI' o 'NO'.", true);
    return; 
  }
}

// Ejercicio 2
function EjercicioDos() {
  const nombreParaSaludo = prompt("1️⃣ Escribe tu nombre:").toUpperCase() || "Desconocido"; 
  writeToConsole(`✅Ejercicio 2

Hola, ${nombreParaSaludo}!`, true);
}

// Ejercicio 3
function EjercicioTres() {
const edadStr = prompt("1️⃣ Por favor, introduce tu edad:");
const edad = parseInt(edadStr);

if (isNaN(edad) || edadStr === null || edadStr.trim() === '') {
    writeToConsole("⚠️ Por favor, introduce una edad válida (solo números).", true);
} else if (edad < 0) {
      writeToConsole("⚠️ La edad no puede ser negativa.", true);
} else {
    if (edad >= 18) {
        writeToConsole(`✅Ejercicio 3

❗Tienes ${edad} años. ¡Eres mayor de edad!`, true);
    } else {
        writeToConsole(`✅Ejercicio 3

❗Tienes ${edad} años. Eres menor de edad.`, true);
    }
}
}

// Ejercicio 4
function EjercicioCuatro() {

  const lista = [];
  let suma = 0;

  let num1;
  do {
    num1 = parseInt(prompt("1️⃣ Introduce el primer número:"));
  } while (isNaN(num1));
  lista.push(num1);

  let num2;
  do {
    num2 = parseInt(prompt("2️⃣ Introduce el segundo número:"));
  } while (isNaN(num2));
  lista.push(num2);

  let num3;
  do {
    num3 = parseInt(prompt("3️⃣ Introduce el tercer número:"));
  } while (isNaN(num3));
  lista.push(num3);

  let num4;
  do {
    num4 = parseInt(prompt("4️⃣ Introduce el cuarto número:"));
  } while (isNaN(num4));
  lista.push(num4);

  let num5;
  do {
    num5 = parseInt(prompt("5️⃣ Introduce el quinto número:"));
  } while (isNaN(num5));
  lista.push(num5);

  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }

  writeToConsole(`✅Ejercicio 4

1️⃣ Números en la lista: [${lista.join(', ')}]
2️⃣ Suma de los elementos: ${suma}
`, true);
  writeToConsole();
}

// Ejercicio 5
function EjercicioCinco() {
    let numeroStr = prompt("1️⃣ Introduce un numero (PAR/IMPAR):");
    let numero = parseInt(numeroStr);

    if (numeroStr === null || isNaN(numero)) {
        writeToConsole("❌ Entrada inválida.", true);
        return;
    }

    writeToConsole(`✅ · Ejercicio 5

❗ El número ${numero} es: ${numero % 2 === 0 ? true : false}

1️⃣ True es (Par)
2️⃣ False es (Impar)
`, true);
}

// Ejercicio 6
function EjercicioSeis() {
  let mensaje;
  let diaDeLaSemana = prompt('1️⃣ Escribe un dia de la semana:');

  switch (diaDeLaSemana.toLowerCase()) {
    case 'lunes':
      mensaje = "Uy lunes, ¡Ánimo con la semana! Que sea productiva.";
      break;
    case 'martes':
      mensaje = "Martes de seguir avanzando. ¡Ya estamos en ello!";
      break;
    case 'miercoles':
    case 'miércoles':
      mensaje = "Miercoles! ¡Mitad de semana! Ya queda menos para el finde.";
      break;
    case 'jueves':
      mensaje = "Jueves, ¡casi viernes! Un último empujón.";
      break;
    case 'viernes':
      mensaje = "¡Viernes! El fin de semana ya está aquí. ¡A disfrutar!";
      break;
    case 'sabado':
    case 'sábado':
      mensaje = "Sábado, día de descanso y diversión. ¡A recargar energías!";
      break;
    case 'domingo':
      mensaje = "Domingo, perfecto para relajarse y prepararse para la nueva semana.";
      break;
    default:
      mensaje = "Ese no parece ser un día de la semana válido. Por favor, ingresa un día como 'lunes', 'martes', etc.";
  }
  writeToConsole(`✅ · Ejercicio 6

❗ ${mensaje}
`, true)
}

// Ejercicio 7
function EjercicioSiete() {
let contador = 1;
writeToConsole(`✅ · Ejercicio 7`, true)
while (contador <= 10){
  writeToConsole(contador);
  contador++;
}
}

// Ejercicio 8
function EjercicioOcho() {
  const lista = [];
  lista.push(prompt("1️⃣ Introduce el primer valor:").toUpperCase());
  lista.push(prompt("2️⃣ Introduce el segundo valor:").toUpperCase());
  lista.push(prompt("3️⃣ Introduce el tercer valor:").toUpperCase());

  writeToConsole(`✅ Ejercicio 8

1️⃣ Arreglo original: [${lista.join(', ')}]`, true);

  const setUnico = new Set(lista);
  const arrSinDuplicados = [...setUnico];

  writeToConsole(`2️⃣ Arreglo sin duplicados: [${arrSinDuplicados.join(', ')}]`);
}

// Ejercicio 9
function EjercicioNueve() {
  let impuesto = 0;
  let sueldo = prompt('1️⃣ Introduce tu sueldo actual:');

  sueldo = parseFloat(sueldo);

  if (isNaN(sueldo)) {
    sueldo = 0;
  }

  if (sueldo < 10000) {
    impuesto = 0;
  } else if (sueldo >= 10000 && sueldo <= 20000) {
    impuesto = sueldo * 0.10;
  } else if (sueldo > 20000) {
    impuesto = sueldo * 0.20;
  }

  writeToConsole(`✅ Ejercicio 9

  1️⃣ Tu Sueldo: ${sueldo}€
  2️⃣ Porcentaje de impuesto a pagar al trimestre: ${impuesto}€
`, true)
}


// Ejercicio 10
function EjercicioDiez() {
const nombresInput = prompt('1️⃣ Introduce los nombres separados por comas, o deja en blanco:');
  const nombres = (nombresInput || "Ana, Luis, Marta, Carlos, Laura")
  .split(',')
  .map(nombre => nombre.trim());


  const conteoLetras = {};

  for (let i = 0; i < nombres.length; i++) {
    const nombre = nombres[i].toLowerCase();

    for (let j = 0; j < nombre.length; j++) {
      const letra = nombre[j];

      if (letra >= 'a' && letra <= 'z') {
        if (!conteoLetras[letra]) {
          conteoLetras[letra] = 0;
        }
        conteoLetras[letra]++;
      }
    }
  }

  writeToConsole(`✅ Ejercicio 10`, true)
  writeToConsole(JSON.stringify(conteoLetras, null, 2));
}