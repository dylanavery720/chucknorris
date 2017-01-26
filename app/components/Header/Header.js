// components/Header/Header.js

import React from 'react';
import './header-style';
import Button from '../Button/Button'


const Header = props =>
   (
    <div className="chuck-header">
      <h1 className="header-title">Chuck Norris Joke Machine</h1>
      {!props.settings && <Button text="Settings" clas="settings-button" src="/settings" handleClick={props.enableSet} />}
      {props.settings && <Button text="Jokes" clas="settings-button" src="/jokes" handleClick={props.enableSet} />}
    </div>
  );

Header.propTypes = {
  settings: React.PropTypes.bool,
  enableSet: React.PropTypes.func,
}


export default Header;
