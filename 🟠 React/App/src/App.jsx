import React, { useState, useEffect } from 'react';

// Se crea un componente de estilo que inyectará el CSS que proporcionaste.
// Esto lo hace un código autónomo.
const ProvidedStyles = () => (
  <style>
    {`
      /* src/index.css */
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Inter', sans-serif;
        background-color: #f0f2f5;
        color: #333;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
      }

      .app {
        max-width: 1200px;
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
      }

      /* -------------------- Navbar styles -------------------- */
      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        background-color: #34495e;
        color: #ecf0f1;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        margin-bottom: 20px;
      }
      
      .navbar-brand {
        font-size: 1.5rem;
        font-weight: bold;
        color: #ecf0f1;
        text-decoration: none;
        display: flex; /* Añadido para alinear logo y título */
        align-items: center; /* Añadido para alinear logo y título */
      }
      
      .navbar-logo {
        height: 32px; /* Tamaño del logo */
        margin-right: 10px; /* Espacio entre el logo y el título */
      }

      .navbar-links {
        display: flex;
        gap: 20px;
      }

      .navbar-links a {
        color: #ecf0f1;
        text-decoration: none;
        transition: color 0.3s ease;
      }

      .navbar-links a:hover {
        color: #adb5bd;
      }

      /* -------------------- Existing styles (improved) -------------------- */
      .header {
        background-color: #ffffff;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        margin-bottom: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .header h1 { margin: 0; color: #2c3e50; }
      .header h2 { margin: 5px 0 0; font-weight: 400; color: #7f8c8d; }

      .card-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
        margin-bottom: 20px;
      }

      .card {
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        transition: transform 0.2s;
      }

      .card:hover { transform: translateY(-5px); }
      .card-img { 
        width: 100%; 
        height: 150px; 
        object-fit: contain; 
        padding: 10px; 
        background-color: #ecf0f1; 
      }
      .card-content { padding: 15px; }
      .card-content h3 { margin: 0 0 10px 0; color: #3498db; }

      .footer {
        text-align: center;
        padding: 20px;
        background-color: #34495e;
        color: #ecf0f1;
        border-radius: 8px;
        box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
      }
    `}
  </style>
);

// Componente Navbar - Now uses the 'navbar' and 'navbar-brand' classes, and accepts the 'logo' prop.
const Navbar = ({ title, logo, children }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="navbar-brand" href="#">
          {logo && <img src={logo} alt="Logo" className="navbar-logo" />}
          {title}
        </a>
        <div className="navbar-links">
          {children}
        </div>
      </div>
    </nav>
  );
};

// Componente Header - Now uses the 'header' class
const Header = () => (
  <header className="header">
    <h1>Encabezado</h1>
    <h2>Un subtítulo</h2>
  </header>
);

// Componente Card - Now uses 'card', 'card-img', and 'card-content' classes
const Card = ({ nombre, descripcion, imagen }) => (
  <div className="card">
    <img src={imagen} className="card-img" alt={nombre} />
    <div className="card-content">
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
    </div>
  </div>
);

// Componente Footer - Now uses the 'footer' class
const Footer = ({ currentTime }) => (
  <footer className="footer">
    <p>Hora actual: {currentTime}</p>
  </footer>
);

// Main application component
export default function App() {
  const cardData = [
    {
      id: 1,
      nombre: 'Primera',
      descripcion: 'Una tarjeta de ejemplo, lista para ser reutilizada.',
      imagen: 'https://i.imgur.com/1SurFfV.jpeg'
    },
    {
      id: 2,
      nombre: 'Segunda',
      descripcion: 'Esta es la segunda tarjeta en la galería de imágenes.',
      imagen: 'https://i.imgur.com/ObndMrp.jpeg'
    },
    {
      id: 3,
      nombre: 'Tercera',
      descripcion: 'La última tarjeta, mostrando la flexibilidad del layout.',
      imagen: 'https://i.imgur.com/v4ylPUO.jpeg'
    }
  ];

  // State para la hora actual
  const [currentTime, setCurrentTime] = useState(new Date());

  // Efecto para actualizar la hora cada segundo
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => {
      clearInterval(timerId);
    };
  }, []);

  // Formato de la hora para mostrarla
  const formattedTime = currentTime.toLocaleTimeString('es-ES');

  // Agregamos la URL del logo aquí para pasarlo como prop.
  const logoUrl = "https://placehold.co/100x100/3498db/ffffff?text=LOGO";

  return (
    <div className="app">
      <ProvidedStyles />
      <Navbar title="Mi Galería de Tarjetas" logo={logoUrl}>
        <a href="#">Inicio</a>
        <a href="#">Galería</a>
        <a href="#">Acerca de</a>
      </Navbar>
      <Header />
      <main className="card-container">
        {cardData.map(card => (
          <Card
            key={card.id}
            nombre={card.nombre}
            descripcion={card.descripcion}
            imagen={card.imagen}
          />
        ))}
      </main>
      <Footer currentTime={formattedTime} />
    </div>
  );
}
