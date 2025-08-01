const Usuario = {
    nombre: 'Ana',
    edad: 28,
    esAdmin: false,
    tareasPendientes: 3,
    nivelAcceso: 'basico'
};

// Función 1: Verificar acceso
function verificarAcceso(usuario, permisoEspecial) {
    if ((usuario.esAdmin && usuario.nivelAcceso === 'avanzado') || permisoEspecial) {
        return 'Acceso total concedido.';
    }
    if (usuario.nivelAcceso === 'basico' && !usuario.esAdmin) {
        return 'Acceso limitado concedido.';
    }
    return 'Acceso denegado.';
}

// Función 2: Asignar tarea
function asignarTarea(usuario, nuevaTarea) {
    if (usuario.tareasPendientes > 0 && usuario.edad >= 18) {
        return `Tarea "${nuevaTarea}" asignada a ${usuario.nombre}.`;
    }
    if (usuario.tareasPendientes === 0 || !(usuario.edad >= 18)) {
        return `No se puede asignar la tarea "${nuevaTarea}".`;
    }
}

// Función anónima con expresión =>
const aumentarTareas = (usuario) => {
    return usuario.tareasPendientes = usuario.tareasPendientes + 1;
};

// Parámetros constantes para las funciones
const permisoEspecial = false;
const nuevaTarea = 'Revisar reporte trimestral';

// Aumentar tareas pendientes antes de las verificaciones
aumentarTareas(Usuario);

// Llamadas a las funciones (no muestres el resultado, solo analiza el código)
// verificarAcceso(Usuario, permisoEspecial);
// asignarTarea(Usuario, nuevaTarea);