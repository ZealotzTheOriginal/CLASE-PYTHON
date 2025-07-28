// Ejercicio 1
let nombre = "Ernesto";
const EDAD = 20;
var ciudad = "Barcelona";
console.log(nombre, EDAD, ciudad)

// Ejercicio 2
let Cadena = "Cadena";
let Numero = 1;
let Booleano = true;
let Indefinido = undefined;
let Nulo = null;
let Simbolo = Symbol('mySymbol');
let GranEntero = 12345678901234567890n;
console.log(
    "Cadena:", typeof Cadena,
    "| Numero:", typeof Numero,
    "| Booleano:", typeof Booleano,
    "| Indefinido:", typeof Indefinido,
    "| Nulo:", typeof Nulo,
    "| Simbolo:", typeof Simbolo,
    "| GranEntero:", typeof GranEntero
);

// Ejercicio 3
let Num_Uno = 2;
let Num_Dos = 5;
console.log(
    "Mis numeros son", Num_Uno, "y", Num_Dos,
    "| Suma", Num_Uno + Num_Dos,
    "| Resta:", Num_Uno - Num_Dos,
    "| Multiplicación:", Num_Uno * Num_Dos,
    "| División:", Num_Uno / Num_Dos,
    "| Módulo:", Num_Uno % Num_Dos, 
    "| Potencia:", Num_Uno ** Num_Dos,
);

// Ejercicio 4
let var_1 = "5"
let var_2 = 5
console.log(
    ' == "5" es igual a 5 + Cambio de Tipo', "\n", "Respuesta:", var_1 == var_2, "\n",
    '=== "5" es estrictamente igual en valor y tipo a 5', "\n", "Respuesta:", var_1 === var_2, "\n",
    '!= Cambio de Tipo + 5 es igual a 5', "\n", "Respuesta:", var_1 != var_2, "\n",
    '!== "5" es estrictamente distinto en valor y tipo a 5', "\n", "Respuesta:", var_1 !== var_2, "\n",
)

// Ejercicio 5
let edad_usuario = prompt("Introduce tu edad:");
let entrada_usuario = prompt("Tienes entrada:");

if (edad_usuario >= 18 && entrada_usuario) {
    console.log("El Usuario tiene acceso.", "\n", "Datos:", "Edad",edad_usuario, "Entrada",entrada_usuario);
} else {
    console.log("El Usuario no tiene acceso.");
}
