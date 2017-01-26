// components/Header/Header.js

import React from 'react';
import './header-style';
import Button from '../Button/Button'


const Header = (props) => {
  return (
    <div className="chuck-header">
      <h1 className="header-title">Chuck Norris Joke Machine</h1>
      {!props.settings && <Button text="Settings" clas="settings-button" src="/settings" handleClick={props.enableSet} />}
      {props.settings && <Button text="Jokes" clas="settings-button" src="/jokes" handleClick={props.enableSet} />}
    </div>
  );
}

export default Header;
