// components/Main/Main.js
import React from 'react';
import fetcher from '../Helpers/fetcher'
import Button from '../Button/Button';
import Input from '../Input/Input'
import './main-style';

export default class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      joke: '',
      data: [],
      jokenumber: 1
    }
  this.moreJokes = this.moreJokes.bind(this)
  this.oneJoke = this.oneJoke.bind(this)
  this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetcher(this.props.url, this.oneJoke, this.state.jokenumber)
  }

  oneJoke(datas) {
    this.setState({joke: datas})
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
      <h1 className="initial-joke">{this.state.joke}</h1>
      <Button handleClick={() => fetcher(this.props.url, this.moreJokes, this.state.jokenumber)} text="New Jokes" />
      <Input handleChange={this.handleChange} />
      {React.cloneElement(this.props.children, {data:this.state.data})}
    </div>
  );
}
}
