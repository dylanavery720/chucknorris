// components/Main/Main.js
import React from 'react';
import fetcher from '../Helpers/fetcher'
import Button from '../Button/Button';
import Input from '../Input/Input';
import './main-style';

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
    }
    this.moreJokes = this.moreJokes.bind(this)
  }

  moreJokes(datas) {
    this.setState({ data: datas })
  }


  render() {
    const data = this.state.data
    return (
    <div className="chuck-main">
      <div className="chuck-butt">
      <Button handleClick={() => fetcher(this.props.url, this.moreJokes, this.props.jokenumber)} text="New Jokes" src="/jokes" clas="joke-button" />
      <Input handleChange={this.props.handleJokenumber} placeholder="5" type="number" clas="number-input"/>
      </div>
      <Button text="Favorites" src="/favorites" clas="favorites-button"/>
      <p>Click New Jokes!</p>
      {React.cloneElement(this.props.children, { data: this.state.data })}
    </div>
    )
  }
}

Main.propTypes = {
  url: React.PropTypes.string,
  jokenumber: React.PropTypes.bool,
  children: React.PropTypes.node,
  handleJokeNumber: React.PropTypes.func,
}
