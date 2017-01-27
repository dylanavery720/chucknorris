import React from 'react';
import '../Jokes/jokes-style';
import Button from '../Button/Button';

export default class Favorites extends React.Component {

  render() {
    return (
    <div className="chuck-jokes">
    {this.props.favorites.length < 1 && <h1 className="instructions">YOU HAVE NO FAVORITES</h1>}
    <ul>
    {this.props.favorites.map((joke, i) => <li className="a-joke" key={i} id={i}>{joke}<Button clas="fave-button" text="&#9733;" handleClick={() => this.props.handleCheck(joke, i)} /></li>)}
    </ul>
    </div>
    )
  }
}

Favorites.propTypes = {
  favorites: React.PropTypes.array,
}
