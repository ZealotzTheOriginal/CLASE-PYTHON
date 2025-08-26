import { useState } from "react"

export default function TaskForm({ onAdd }) {
    const [title, setTitle]= useState('');
    const [description, setDescription]= useState('');
    const [priority, setPriority]= useState('low');
    const tooShort = title.length > 0 && title.length <3

    function handleSubmit (e) {
        e.preventDefault();
        console.log("Formulario Enviado");
        if (!title.trim() || tooShort) return
        const newTask = {
            id: crypto.randomUUID(),
            title,
            description,
            priority,
            done: false
        }
        onAdd(newTask)
        setTitle('')
        setPriority('low')
        setDescription('')
    }


    return(
        <form onSubmit={handleSubmit}>
            {tooShort && (
             <p style={{color: 'red'}}>
                El titulo debe tener al menos 3 caracteres
             </p>
            )}
            <input type="text" placeholder="Introduce titulo de la tarea" value={title} onChange={e => setTitle(e.target.value)}/>
            <input type="text" placeholder="Introduce la descripción de la tarea" value={description} onChange={e => setDescription(e.target.value)}/>
            <select value={priority} onChange={e => setPriority(e.target.value)}>
                <option value='low'>Baja</option>
                <option value='medium'>Media</option>
                <option value='high'>Alta</option>
            </select>
            <button type="submit">Añadir Tarea</button>
            {(title || priority) && (
            <div className="card" style={{marginTop:"12px", marginBottom:"12px"}}>
                <strong>Vista previa:</strong> {title || "Sin título"} [{priority}]
            </div>
            )}
        </form>
    );
}