import React from 'react';
import { buttonsData, handleClick } from './rutebottonConfig';

const Buttons = () => {
  return (
    <div>
      {buttonsData.map(button => (
        <button key={button.id} onClick={() => handleClick(button.label)}>
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default Buttons;

