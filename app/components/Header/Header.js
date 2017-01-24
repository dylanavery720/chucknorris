// components/Header/Header.js

import React from 'react';
import './header-style';
import Button from '../Button/Button'


const Header = () => {
  return (
    <div className="chuck-header">
      <h1 className="header-title">Chuck Norris Joke Machine</h1>
      <Button text="Settings" clas="settings-button" src="/settings" />
    </div>
  );
}

export default Header;
