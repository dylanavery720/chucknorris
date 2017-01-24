// components/Button/Button.js

import React from 'react';

const Button = (props) => {
  return (
    <button onClick={() => props.handleClick() }>{props.text}</button>
  );
}

Button.propTypes = {
  onClick: React.PropTypes.func,
  text: React.PropTypes.string
}

export default Button;
