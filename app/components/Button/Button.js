// components/Button/Button.js

import { Link } from 'react-router';
import React from 'react';
import './button-style'

const Button = props =>
   (
    <Link className="link" to={props.src}><button className={props.clas} onClick={props.handleClick }>{props.text}</button></Link>
  );


Button.propTypes = {
  onClick: React.PropTypes.func,
  text: React.PropTypes.string,
  clas: React.PropTypes.string,
  src: React.PropTypes.string,
}

export default Button;
