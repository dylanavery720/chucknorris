import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
// import './jokes-style';


export default class Settings extends React.Component {
  constructor(){
    super()
    this.state = {
      newname: "",
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({newname: e.target.value})
  }

  render() {
  return (
    <div className="settings">
    Set Name: <Input handleChange={this.handleChange} type="text"/> <Button text="set" onClick={this.props.set} /> <Button text="reset" />
    </div>
  );
}
}
