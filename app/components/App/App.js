import React from 'react'
import { render } from 'react-dom'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Joke from '../Joke/Joke'
import fetcher from '../Helpers/fetcher'
import '../../reset'
import '../../styles'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      joke: '',
      url: "http://api.icndb.com/jokes/random"
    }
  this.oneJoke = this.oneJoke.bind(this)
  }

  componentDidMount() {
    fetcher(this.state.url, this.oneJoke)
  }

  oneJoke(datas) {
    this.setState({joke: datas})
  }


  render() {
  return (
    <div>
    <Header />
    <Joke joke={this.state.joke} />
    {React.cloneElement(this.props.children, {url: "http://api.icndb.com/jokes/random" })}
    </div>
  );
  }
}
