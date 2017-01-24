// components/Button/Button.js

import React from 'react';
import { Link } from 'react-router';

const Button = (props) => {
  return (
    <button onClick={() => props.handleClick() }><Link to="/jokes">{props.text}</Link></button>
  );
}

Button.propTypes = {
  onClick: React.PropTypes.func,
  text: React.PropTypes.string
}

export default Button;
