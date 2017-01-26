import React from 'react';
import './jokes-style';
import Input from '../Input/Input';

export default class Jokes extends React.Component {
  constructor() {
    super()
    this.state = {
      favorites: [],
    }
  }

  checkSet(t) {
    this.setState({ favorites: t })
  }

  render() {
    return (
    <div className="chuck-jokes">
    <ul>
    {this.props.data.map((joke, i) => <li className="a-joke" key={i} id={i}>{joke}<Input type="checkbox" clas="checkbox" title="#&9733" defaultChecked={true} handleChange={this.props.handleCheck(joke, i)} key={i} /></li>)}
    </ul>
    </div>
    )
  }
}

Jokes.propTypes = {
  data: React.PropTypes.array,
}
