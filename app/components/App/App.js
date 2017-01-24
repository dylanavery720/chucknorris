import React from 'react'
import { render } from 'react-dom'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import '../../reset'
import '../../styles'

const App = (props) => {
  return (
    <div>
    <Header />
    {React.cloneElement(props.children, {url: "http://api.icndb.com/jokes/random" })}
    </div>
  );
}

export default App;
