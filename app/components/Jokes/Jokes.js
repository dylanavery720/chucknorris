import React from 'react';
import './jokes-style';
import Input from '../Input/Input';

export default class Jokes extends React.Component {
  constructor() {
    super()
    this.state = {
      favorites: []
    }
    this.handleCheck = this.handleCheck.bind(this)
  }

handleCheck(e,faveArray) {
  let favoriteJoke = e.target.parentNode.parentNode
  this.setState({favorites: this.props.data[0]})
  // this.checkSet(faveArray)
}

checkSet(t){
  this.setState({favorites: t})
}

  render() {return (
    <div className="chuck-jokes">
    <ul>
    {this.props.data.map((joke, i) => <li className="a-joke" key={i} id={i}>{joke}<Input type="checkbox" defaultChecked={true} handleChange={this.handleCheck} key={i} /></li>)}
    </ul>
    </div>
  )
  }
}

Jokes.propTypes = {
  data: React.PropTypes.array,
}
