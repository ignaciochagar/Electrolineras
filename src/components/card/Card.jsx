import React from 'react';

const Card = ({ nombre, provincia, direccion, horario, puntosDeCarga, imagen, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={(`../images/${imagen}`).default} alt={nombre} className="card-image" /> {/* Usamos require para importar la imagen */}
      <div className="card-content">
        <h3>{nombre}</h3>
        <p><strong>Provincia:</strong> {provincia}</p>
        <p><strong>Dirección:</strong> {direccion}</p>
        <p><strong>Horario:</strong> {horario}</p>
        <p><strong>Número de puntos de carga:</strong> {puntosDeCarga}</p>
      </div>
    </div>
  );
};

export default Card;

