// src/components/Grid.jsx
import React from 'react';
import Card from '../card/Card';
import { albergues } from '../../data/albergues.js';

const Grid = () => {
  console.log("albergues", albergues)
  return (
    <div className="grid">
      {albergues.map((albergue, index) => (
        <Card
          key={index}
          nombre={albergue.nombre}
          camino={albergue.camino}
          provincia={albergue.provincia}
          precio={albergue.precio}
          imagen={albergue.imagen}
        />
      ))}
    </div>
  );
};

export default Grid;
