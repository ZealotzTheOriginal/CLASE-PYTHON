// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  const cardData = [
    {
      id: 1,
      nombre: 'Primera',
      descripcion: 'Descripción 1',
      imagen: 'https://i.imgur.com/1SurFfV.jpeg'
    },
    {
      id: 2,
      nombre: 'Segunda',
      descripcion: 'Descripción 2',
      imagen: 'https://i.imgur.com/ObndMrp.jpeg'
    },
    {
      id: 3,
      nombre: 'Tercera',
      descripcion: 'Descripción 3',
      imagen: 'https://i.imgur.com/v4ylPUO.jpeg'
    }
  ];

  return (
    <div className="app">
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
      <Footer />
    </div>
  );
}

export default App;