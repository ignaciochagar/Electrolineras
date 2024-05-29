// src/components/Grid.jsx
import React from 'react';
import Card from '../card/Card';
import { caminosDeSantiago } from '../../data/caminos';

const Grid = () => {
  return (
    <div className="grid">
      {caminosDeSantiago.map((camino, index) => (
        <Card
          key={index}
          nombre={camino.nombre}
          descripcion={camino.descripcion}
          imagen={camino.imagen}
        />
      ))}
    </div>
  );
};

export default Grid;
