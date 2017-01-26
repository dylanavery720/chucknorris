import React from 'react';

const Joke = props =>
  (
    <h1 className="initial-joke">{props.joke}</h1>
  );


Joke.propTypes = {
  joke: React.PropTypes.string,
}

export default Joke;
