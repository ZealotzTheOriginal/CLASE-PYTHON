const formulario = document.getElementById("form-tarea");pepe
const input = document.getElementById("input-tarea");
const lista = document.getElementById("lista-tareas");
let tareas = [];
// Cargar tareas del localStorage al iniciar
document.addEventListener("DOMContentLoaded", () => {
const guardadas = localStorage.getItem("tareas");
if (guardadas) {
tareas = JSON.parse(guardadas);
tareas.forEach(crearTareaEnDOM);
}
});

formulario.addEventListener("submit", (e) => {
e.preventDefault();
const texto = input.value.trim();
if (texto === "") return;
const nuevaTarea = {
id: Date.now(),
texto,
completada: false
};
tareas.push(nuevaTarea);
guardarTareas();
crearTareaEnDOM(nuevaTarea);
input.value = "";
});

function crearTareaEnDOM(tarea) {
const li = document.createElement("li");
li.textContent = tarea.texto;
li.dataset.id = tarea.id;
if (tarea.completada) li.classList.add("completada");
// Botón eliminar
const btnEliminar = document.createElement("button");
btnEliminar.textContent = "❌";
btnEliminar.className = "borrar";
li.appendChild(btnEliminar);
lista.appendChild(li);
}

lista.addEventListener("click", (e) => {
const li = e.target.closest("li");
const id = li.dataset.id;
if (e.target.matches("button.borrar")) {
tareas = tareas.filter(t => t.id !== Number(id));
guardarTareas();
li.remove();
}
});

lista.addEventListener("click", (e) => {
const li = e.target.closest("li");
const id = Number(li.dataset.id);
if (!e.target.matches("button.borrar")) {
tareas = tareas.map(t => {
if (t.id === id) t.completada = !t.completada;
return t;
});
guardarTareas();
li.classList.toggle("completada");
}
});

function guardarTareas() {
localStorage.setItem("tareas", JSON.stringify(tareas));
}