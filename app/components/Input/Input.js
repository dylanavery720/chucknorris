// components/Input/Input.js

import React from 'react';



const Input = (props) => {
  return (
    <input type={props.type} placeholder={props.placeholder} onChange={props.handleChange}></input>
  );
}



export default Input;
