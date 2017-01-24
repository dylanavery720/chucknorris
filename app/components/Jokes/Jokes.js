import React from 'react';
import './jokes-style';


const Jokes = (props) => {
  return (
    <div className="chuck-jokes">
    <ul>
    {props.data.map((joke, i) => <li className="a-joke" key={i}>{joke}</li>)}
    </ul>
    </div>
  );
}

export default Jokes;