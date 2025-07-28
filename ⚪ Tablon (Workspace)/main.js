// Usamos prompt para pedir el nombre al usuario
let nombreUsuario = prompt("¡Hola! ¿Cuál es tu nombre?");

// Verificamos si el usuario introdujo un nombre o canceló
if (nombreUsuario === null) {
    console.log("El usuario canceló la entrada.");
    alert("¡Qué pena que no quieras decir tu nombre!"); // alert es otra función de navegador para mostrar un mensaje
} else if (nombreUsuario === "") {
    console.log("El usuario no introdujo ningún nombre.");
    alert("Parece que no introdujiste tu nombre. ¡No hay problema!");
} else {
    // Si hay un nombre, lo saludamos
    console.log("El nombre introducido es: " + nombreUsuario);
    alert("¡Mucho gusto, " + nombreUsuario + "!");
}

// Otro ejemplo: pedir un número (¡pero recuerda que devuelve un string!)
let edadTexto = prompt("¿Cuántos años tienes?");

// Si quieres usarlo como número, debes convertirlo explícitamente:
// Esto es similar a int() en Python
let edadNumero = parseInt(edadTexto);

if (isNaN(edadNumero)) { // isNaN = Is Not a Number (¿No es un número?)
    console.log("La edad introducida no es un número válido.");
    alert("Eso no parece una edad válida.");
} else {
    console.log("Tu edad es: " + edadNumero);
    alert("Entonces, tienes " + edadNumero + " años.");
}