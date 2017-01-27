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
   title={props.title}
   id={props.id}
   onChange={props.handleChange}
   value={props.value} disabled={props.disabled}>
    </input>{props.text}</label>
  );


Input.propTypes = {
  onChange: React.PropTypes.func,
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string,
  clas: React.PropTypes.string,
  checked: React.PropTypes.bool,
  value: React.PropTypes.string,
  disabled: React.PropTypes.bool,
}

export default Input;
