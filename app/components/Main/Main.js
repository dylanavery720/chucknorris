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
      favorites: [],
    }
    this.moreJokes = this.moreJokes.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
  }

  moreJokes(datas) {
    this.setState({ data: datas })
  }

  handleCheck(joke, i) {
    const faveArray = this.state.favorites
    const jokeClass = document.querySelector('.fave-button')
    jokeClass.classList.toggle('fave-button-active')
    faveArray.push(joke)
    // this.setState({ favorites: faveArray })
    this.setState({ favorites: faveArray })
  }

  render() {
    const data = this.state.data
    return (
    <div className="chuck-main">
      <div className="chuck-butt">
      <Button handleClick={() => fetcher(this.props.url, this.moreJokes, this.props.jokenumber)} text="New Jokes" src="/jokes" clas="joke-button" disabled={!this.props.jokenumber} />
      <Input handleChange={this.props.handleJokenumber} placeholder="5" type="number" clas="number-input"/>
      </div>
      <div className="fave"><Button text="Favorites" src="/favorites" clas="favorites-button"/></div>
      {data.length < 1 && <p className='instructions'>Click New Jokes!</p>}
      {React.cloneElement(this.props.children, { data: this.state.data,
        handleCheck: this.handleCheck,
        favorites: this.state.favorites })}
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
