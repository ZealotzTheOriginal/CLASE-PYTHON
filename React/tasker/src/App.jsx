import React from 'react';
import Home from './components/Home';
import TaskList from './components/TaskList';
import Contador from './components/Contador';
import Caja from './components/Caja';

const mockTasks = [
{ id: '1', title: "Clase comunista", description: 'Practicar con AK-45', priority: 'high' },
{ id: '2', title: "Comprar café", description: 'Para programar mejor', priority: 'low' },
{ id: '3', title: 'Amparito', description: 'Amparito se metio aqui', priority: 'medium' },
{ id: '4', title: 'Robar datos', description: 'Pentágono, NASA, BBVA', priority: 'high' }
]

export default function App() {
  return (
    <Home>
      <TaskList tasks={mockTasks} />
      <Contador/>
      <Caja/>
    </Home>
  );
}