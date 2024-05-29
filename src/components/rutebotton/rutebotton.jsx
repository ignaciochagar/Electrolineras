import React from 'react';
import { buttonsData, handleClick } from './rutebottonConfig';

const Buttons = ({ onRouteChange }) => {
  return (
    <div>
      {buttonsData.map(button => (
        <button key={button.id} onClick={() => handleClick(button.label, onRouteChange)}>
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default Buttons;