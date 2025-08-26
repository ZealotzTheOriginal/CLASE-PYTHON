import { useState } from 'react';
import Home from './components/Home';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm.jsx';
import Contador from './components/Contador';
import Caja from './components/Caja';
import Ejemplo from './components/Ejemplo.jsx'
import Usuarios from './components/Usuarios.jsx';
import RNMList from './components/RNMList.jsx';

export default function App() {

const [tasks, setTasks] = useState([
{ id: '1', title: "Clase comunista", description: 'Practicar con AK-45', priority: 'high' },
{ id: '2', title: "Comprar café", description: 'Para programar mejor', priority: 'low' },
{ id: '3', title: 'Amparito', description: 'Amparito se metio aqui', priority: 'medium' },
{ id: '4', title: 'Robar datos', description: 'Pentágono, NASA, BBVA', priority: 'high' }
]);

function addTask(task){
  setTasks([...tasks, task])
}

  return (
    <Home>
      <TaskForm onAdd={addTask}/>
      <TaskList tasks={tasks} />
      <Contador/>
      <Ejemplo/>
      <div className='grid'><Caja/><Caja/><Caja/><Caja/></div>
      <Usuarios/>
      <RNMList/>
    </Home>
  );
}