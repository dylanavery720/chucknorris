import React from 'react';
import '../Jokes/jokes-style';
import Input from '../Input/Input';

export default class Favorites extends React.Component {
  constructor() {
    super()
    this.state = {
      favorites: [],
    }
  }

  render() {
    return (
    <div className="chuck-jokes">
    <ul>
    {this.props.data.map((joke, i) => <li className="a-joke" key={i} id={i}>{joke}<Input type="checkbox" defaultChecked={true} key={i} /></li>)}
    </ul>
    </div>
    )
  }
}

Favorites.propTypes = {
  data: React.PropTypes.array,
}
