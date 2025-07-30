function writeToConsole(message) {
  const consoleDiv = document.getElementById('output-console');
  const p = document.createElement('p');
  p.textContent = message;
  consoleDiv.appendChild(p);
  consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

function EjercicioUno() {
  let colores = ["rojo", "azul", "amarillo"];
  writeToConsole(`Arreglo inicial: [${colores.join(', ')}]`);

  colores.splice(1, 0, "verde");

  writeToConsole(`Arreglo final: [${colores.join(', ')}]`);
}