// components/Button/Button.js

import React from 'react';
import './button-style'
import { Link } from 'react-router';

const Button = (props) => {
  return (
    <button className={props.clas} onClick={() => props.handleClick() }><Link to={props.src}>{props.text}</Link></button>
  );
}

Button.propTypes = {
  onClick: React.PropTypes.func,
  text: React.PropTypes.string
}

export default Button;
