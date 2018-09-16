import React from 'react';
import { Button } from 'react-bootstrap';

const SwitchButton = ({ direction, clicked, disabled }) => {
  return (
    <Button
      bsStyle="primary"
      className="switch"
      onClick={e => clicked(e)} 
      disabled={disabled}
    >
      {direction === "prev" ? '<' : '>'}
    </Button>
  );
};

export default SwitchButton;
