import React from 'react';

const Card = ({ nombre, descripcion, imagen }) => (
  <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm">
    <img src={imagen} alt={nombre} className="w-full h-48 object-cover rounded-lg mb-4" />
    <h2 className="text-xl font-bold text-gray-800">{nombre}</h2>
    <p className="text-gray-600 mt-2">{descripcion}</p>
  </div>
);

export default Card;