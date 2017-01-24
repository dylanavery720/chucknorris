// components/Main/Main.js
import React from 'react';
import fetcher from '../Helpers/fetcher'
import Button from '../Button/Button';
import Input from '../Input/Input';
import './main-style';

export default class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      data: [],
      jokenumber: 1
    }
  this.moreJokes = this.moreJokes.bind(this)
  this.handleChange = this.handleChange.bind(this)
  }

  moreJokes(datas) {
    this.setState({data: datas})
  }

  handleChange(e){
    this.setState({jokenumber: e.target.value})
  }

  render() {
    let data = this.state.data
  return (
    <div className="chuck-main">
      <h1>some stuff to dissapear</h1>
      <Button handleClick={() => fetcher(this.props.url, this.moreJokes, this.state.jokenumber)} text="New Jokes" src="/jokes" />
      <Input handleChange={this.handleChange} placeholder="How many jokes?" type="number"/>
      {React.cloneElement(this.props.children, {data:this.state.data})}
    </div>
  );
}
}
