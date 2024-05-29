// src/components/Card.jsx
import React from 'react';

const Card = ({ nombre, descripcion, imagen }) => {
  return (
    <div className="card">
      <img src={(`../images/${imagen}`)} alt={nombre} className="card-image" />
      <div className="card-content">
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
      </div>
    </div>
  );
};

export default Card;
