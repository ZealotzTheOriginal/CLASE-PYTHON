// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Importa los estilos globales

// Esta es la línea clave: encuentra el div con id="root" en tu index.html
// y le dice a React que renderice tu componente <App> dentro de él.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);