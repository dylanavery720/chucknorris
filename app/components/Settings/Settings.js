import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './settings-style';


const Settings = props =>
    (
    <div className="settings">
    <div className="set-name">Set Name: <Input handleChange={props.handleNewName} value={props.newName} type="text"/> <Button text="set" handleClick={props.set} /> <Button text="reset" handleClick={props.reset} /></div>
    <div className="parental">Parental Controls: <Input type='radio' value='On' text="On" id="on-test" checked={props.radio === 'On'} handleChange={props.handleOption} disabled={props.radio === 'On'}/> <Input type='radio' value="Off" text="Off" checked={props.radio === 'Off'} handleChange={props.handleOption} disabled={props.radio === 'Off'} /></div>
    </div>
    )
Settings.propTypes = {
  radio: React.PropTypes.string,
  handleOption: React.PropTypes.func,
  set: React.PropTypes.func,
  handleNewName: React.PropTypes.func,
}

export default Settings;
