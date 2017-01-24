import React from 'react';
// import './header-style';


const Jokes = (props) => {
  return (
    <div className="chuck-jokes">
    <ul>
    {props.data.map((joke, i) => <li key={i}>{joke}</li>)}
    </ul>
    </div>
  );
}

export default Jokes;
