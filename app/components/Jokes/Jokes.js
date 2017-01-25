import React from 'react';
import './jokes-style';
import Input from '../Input/Input';

const Jokes = (props) => {
  return (
    <div className="chuck-jokes">
    <ul>
    {props.data.map((joke, i) => <li className="a-joke" key={i}>{joke}<Input type="checkbox" /></li>)}
    </ul>
    </div>
  );
}

Jokes.propTypes = {
  data: React.PropTypes.array,
}

export default Jokes;
