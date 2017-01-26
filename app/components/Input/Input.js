// components/Input/Input.js

import React from 'react';
import './input-styles'


const Input = props =>
 (
   <label><input
   type={props.type}
   className={props.clas}
   placeholder={props.placeholder}
   checked={props.checked}
   onChange={props.handleChange}
   value={props.value} disabled={props.disabled}>
    </input>{props.value}</label>
  );


Input.propTypes = {
  onChange: React.PropTypes.func,
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string,
}

export default Input;
