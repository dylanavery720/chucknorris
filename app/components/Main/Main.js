// components/Main/Main.js
import React from 'react';
import fetcher from '../Helpers/fetcher'

import Button from '../Button/Button';
import Input from '../Input/Input'

export default class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      data: [],
      jokenumber: null
    }
  this.displayer = this.displayer.bind(this)
  this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {

  }

  displayer(datas) {
    this.setState({data: datas})
  }

  handleChange(e){
    this.setState({jokenumber: e.target.value})
  }

  render() {
  return (
    <div className="chuck-main">
      <h1>Main</h1>
      <ul>{this.state.data.map((joke, i) => <li key={i}>{joke}</li> )}</ul>
      <Button handleClick={() => fetcher(this.props.url, this.displayer, this.state.jokenumber)} text="New Jokes" />
      <Input handleChange={this.handleChange} />
    </div>
  );
}
}
