import React from 'react'
import { render } from 'react-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import './reset'
import './styles'

const App = () => {
  return (
    <div>
    <Header />
    <Main url="http://api.icndb.com/jokes/random"/>
    </div>
  );
}

render(<App />, document.querySelector('.application'));
