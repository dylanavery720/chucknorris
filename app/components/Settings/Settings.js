import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './settings-style';


export default class Settings extends React.Component {
  constructor(){
    super()
    // this.state = {
    //   radio: null,
    // }
    // this.handleOption = this.handleOption.bind(this)
  }

  // handleOption(e) {
  //   this.setState({radio: e.target.value})
  // }



  render() {
  return (
    <div className="settings">
    <div className="set-name">Set Name: <Input handleChange={this.props.handleNewName} type="text"/> <Button text="set" handleClick={this.props.set} /> <Button text="reset" /></div>
    <div className="parental">Parental Controls: <Input type='radio' value='On' checked={this.props.radio === 'On'} handleChange={this.props.handleOption} disabled={this.props.radio ==='On'}/> <Input type='radio' value="Off" checked={this.props.radio === 'Off'} handleChange={this.props.handleOption} disabled={this.props.radio ==='Off'} /></div>
    </div>
  );
}
}
