// components/Input/Input.js

import React from 'react';



const Input = (props) => {
  return (
    <label><input type={props.type} placeholder={props.placeholder} onChange={props.handleChange} value={props.value}></input>{props.value}</label>
  );
}

Input.propTypes = {
  onChange: React.PropTypes.func,
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string,
}

export default Input;
