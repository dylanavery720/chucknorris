// components/Input/Input.js

import React from 'react';



const Input = (props) => {
  return (
    <input type="number" placeholder={5} onChange={props.handleChange}></input>
  );
}



export default Input;
