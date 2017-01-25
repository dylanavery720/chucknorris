// components/Input/Input.js

import React from 'react';



const Input = (props) => {
  return (
    <input type={props.type} placeholder={props.placeholder} onChange={props.handleChange}></input>
  );
}

Input.propTypes = {
  onChange: React.PropTypes.func,
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string,
}

export default Input;
