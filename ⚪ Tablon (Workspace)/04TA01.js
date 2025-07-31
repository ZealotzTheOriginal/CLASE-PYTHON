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
function EjercicioUno(){
let nombre = prompt("1️⃣ Introduce tu Nombre:").toUpperCase();
const EDAD = prompt("2️⃣ Introduce tu Edad:");
var ciudad = prompt("3️⃣ Introduce tu Ciudad:").toUpperCase();
writeToConsole(`✅ · Ejercicio 1

1️⃣ "Let" Nombre: ${nombre}
2️⃣ "Const" Edad: ${EDAD}
3️⃣ "Var" Ciudad: ${ciudad}
`, true);
}

// Ejercicio 2
function EjercicioDos(){
let Cadena = "Cadena";
let Numero = 1;
let Booleano = true;
let Indefinido = undefined;
let Nulo = null;
let Simbolo = Symbol('mySymbol');
let GranEntero = 3140000000n;
writeToConsole(`✅ · Ejercicio 2

1️⃣ ${Cadena} es ${typeof Cadena} 
2️⃣ ${Numero} es ${typeof Numero} 
3️⃣ ${Booleano} es ${typeof Booleano}
4️⃣ ${Indefinido} es ${typeof Indefinido} 
5️⃣ ${Nulo} es ${typeof Nulo} 
6️⃣ Simbolo es ${typeof Simbolo}
7️⃣ ${GranEntero} es ${typeof GranEntero}
`, true);
}

// Ejercicio 3
function EjercicioTres(){
let Num_Uno = parseInt(prompt("1️⃣ Elige un primer numero para calcular:"));
let Num_Dos = parseInt(prompt("2️⃣ Elige un segundo numero para calcular:"));
if (isNaN(Num_Uno) || isNaN(Num_Dos)) {
    writeToConsole("❌ Entrada inválida. Introduce dos números.", true);
    return;
}
writeToConsole(
    `✅ · Ejercicio 3 

Tus numeros son ${Num_Uno} y ${Num_Dos}
1️⃣ Suma: ${Num_Uno + Num_Dos} 
2️⃣ Resta: ${Num_Uno - Num_Dos} 
3️⃣ Multiplicación: ${Num_Uno * Num_Dos} 
4️⃣ División: ${Num_Uno / Num_Dos} 
5️⃣ Módulo: ${Num_Uno % Num_Dos} 
6️⃣ Potencia: ${Num_Uno ** Num_Dos}
`, true);
}

// Ejercicio 4
function EjercicioCuatro(){
let var_1 = prompt("1️⃣ Introduce un número que sera tipo Cadena:");
let var_2 = parseInt(prompt("2️⃣ Introduce otro numero que sera tipo Digito:"));

if (var_1 === null || var_2 === null || isNaN(var_2)){
    writeToConsole("❌ Entrada inválida.", true);
    return;
}

writeToConsole(`✅ · Ejercicio 4

Tus numeros son "${var_1}" y ${var_2}

1️⃣ ( == ) Posible Coersión y "${var_1}" es IGUAL a ${var_2}❗${var_1 == var_2}

2️⃣ ( === ) "${var_1}" es IGUAL en VALOR y TIPO a ${var_2} ❗${var_1 === var_2}

3️⃣ ( != ) Posible Coersión y ${var_1} es DESIGUAL a ${var_2} ❗${var_1 != var_2}

4️⃣ ( !== ) "${var_1}" es DESIGUAL en VALOR o TIPO a ${var_2} ❗${var_1 !== var_2}
`, true);
}

// Ejercicio 5
function EjercicioCinco() {
    let edad_usuario = prompt("1️⃣ Introduce tu edad:");
    let entrada_usuario = prompt("2️⃣ Tienes entrada: (SI / NO)");

    if (edad_usuario === null || entrada_usuario === null) {
        writeToConsole("⚠️ Operación cancelada.", true);
        return;
    }
    
    edad_usuario = parseInt(edad_usuario);
    entrada_usuario = entrada_usuario.toUpperCase();

    if (isNaN(edad_usuario) || edad_usuario < 0) {
        writeToConsole("❌ Entrada inválida.", true);
        return;
    }

    if (edad_usuario >= 18 && edad_usuario < 100 && (entrada_usuario === "SI" || entrada_usuario === "S")) {
        writeToConsole(`✅ · Ejercicio 5

❗ El Usuario SI tiene acceso a la discoteca.

Datos: 
1️⃣ Edad ${edad_usuario}
2️⃣ Entrada SI
`, true);
    } else {
        writeToConsole("❌ El Usuario no tiene acceso.", true);
    }
}

// Ejercicio 6
function EjercicioSeis() {
    let numeroStr = prompt("1️⃣ Introduce un numero (PAR/IMPAR):");
    let numero = parseInt(numeroStr);

    if (numeroStr === null || isNaN(numero)) {
        writeToConsole("❌ Entrada inválida.", true);
        return;
    }

    writeToConsole(`✅ · Ejercicio 6

❗ El número ${numero} es: ${numero % 2 === 0 ? "Par" : "Impar"}`, true);
}

// Ejercicio 7
function EjercicioSiete(){
    let Nombre = prompt("1️⃣ Introduce tu Nombre:");
    let Producto = prompt("2️⃣ Introduce el nombre del Producto:");
    let Precio = prompt("3️⃣ Introduce un Precio:");

    if (Nombre === null || Producto === null || Precio === null) {
        writeToConsole("⚠️ Operación cancelada.", true);
        return;
    }

    const precioNum = parseInt(Precio);

    if (isNaN(precioNum) || precioNum < 0) {
        writeToConsole("❌ Entrada inválida para el precio.", true);
        return;
    }

    writeToConsole(`✅ · Ejercicio 7

❗Hola ${Nombre.toUpperCase()}, el precio del ${Producto.toUpperCase()} es $${precioNum}`, true);
}

// Ejercicio 8
function EjercicioOcho(){
    const edadStr = prompt("1️⃣ Ingresa la edad del estudiante:");
    const matriculaPagada = prompt("2️⃣ ¿La matrícula del estudiante está pagada? (SI / NO)");

    if (edadStr === null || matriculaPagada === null) {
        writeToConsole("⚠️ Operación cancelada.", true);
        return;
    }

    const edad = parseInt(edadStr);
    const matriculaLower = matriculaPagada.toLowerCase();

    if (isNaN(edad) || edad <= 0) {
        writeToConsole("❌ Entrada inválida para la edad.", true);
        return;
    }

    if (edad >= 18) {
        if (matriculaLower === "si" || matriculaLower === "s" || matriculaLower === "yes" || matriculaLower === "y") {
            writeToConsole(`✅ Ejercicio 8

Tu estudiante tiene:

✅ Acceso al campus.
`, true);
        } else {
            writeToConsole("❌ Acceso denegado... (Matrícula no pagada)", true);
        }
    } else {
        writeToConsole("❌ Acceso denegado... (Menor de 18 años)", true);
    }
}

// Ejercicio 9
function EjercicioNueve() {
    let nombreMes = prompt("1️⃣ Introduce el nombre de un mes:");

    if (!nombreMes) {
        writeToConsole("⚠️ No se introdujo ningún mes.", true);
        return;
    }

    const mesMinusculas = nombreMes.toLowerCase();
    let estacion;

    switch (mesMinusculas) {
        case "diciembre":
        case "enero":
        case "febrero":
            estacion = "Invierno ❄️";
            break;
        case "marzo":
        case "abril":
        case "mayo":
            estacion = "Primavera 🌸";
            break;
        case "junio":
        case "julio":
        case "agosto":
            estacion = "Verano ☀️";
            break;
        case "septiembre":
        case "octubre":
        case "noviembre":
            estacion = "Otoño 🍂";
            break;
        default:
            estacion = "no es válido";
    }
    
    writeToConsole(`✅ Ejercicio 9

El mes de ${nombreMes} es ${estacion}.`, true);
}

// Ejercicio 10
function EjercicioDiez() {
    const edadStr = prompt("1️⃣ Introduce tu edad:");
    const saldoStr = prompt("2️⃣ Introduce tu saldo:");
    const rol = prompt("3️⃣ Introduce tu rol (ADMIN/USUARIO):");

    if (edadStr === null || saldoStr === null || rol === null) {
        writeToConsole("⚠️ Operación cancelada.", true);
        return;
    }

    const edad = parseInt(edadStr);
    const saldo = parseFloat(saldoStr);
    const rolLower = rol.toLowerCase();

    if (isNaN(edad) || isNaN(saldo) || edad < 0 || saldo < 0 || !rol) {
        writeToConsole("❌ Entrada inválida. Introduce valores numéricos válidos para edad/saldo y un rol.", true);
        return;
    }

    const resultadoAcceso = (rolLower === "admin" || saldo > 1000) ? "Acceso total" : (edad > 18 && saldo > 100) ? "Acceso limitado" : "Acceso denegado";

    writeToConsole(`✅ · Ejercicio 10

1️⃣ Edad: ${edad}, 2️⃣ Saldo: $${saldo}, 3️⃣ Rol: ${rol}

❗ Resultado de Acceso: ${resultadoAcceso}`, true);
}