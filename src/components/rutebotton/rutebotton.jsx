// Buttons.jsx
import React from 'react';
import { buttonsData } from './rutebottonConfig';

const Buttons = ({ onRouteChange }) => {
  return (
    <div>
      {buttonsData.map(button => (
        <button key={button.id} onClick={() => onRouteChange(button.label)}>
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
