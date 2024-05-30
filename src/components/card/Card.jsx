// src/components/Card.jsx
import React from 'react';

const Card = ({ nombre, camino, provincia, precio, imagen }) => {
  console.log("Llego aqui")
    return (
      <div className="card">
        <img src={(`../images/${imagen}`)} alt={nombre} className="card-image" />
        <div className="card-content">
          <h3>{nombre}</h3>
          <p><strong>Camino:</strong> {camino}</p>
          <p><strong>Provincia:</strong> {provincia}</p>
          <p><strong>Precio:</strong> {precio}</p>
        </div>
      </div>
    );
  };
  
  export default Card;