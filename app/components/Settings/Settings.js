import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './settings-style';


export default class Settings extends React.Component {
  constructor(){
    super()
    // this.state = {
    //   newname: "",
    // }
    // this.handleChange = this.handleChange.bind(this)
  }

  // handleChange(e){
  //   this.setState({newname: e.target.value})
  // }

  render() {
  return (
    <div className="settings">
    <div className="set-name">Set Name: <Input handleChange={this.props.handleNewName} type="text"/> <Button text="set" handleClick={this.props.set} /> <Button text="reset" /></div>
    <div className="parental">Parental Controls: <Input type='radio' value='On' /> <Input type='radio' value="off" /></div>
    </div>
  );
}
}
