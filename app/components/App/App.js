import React from 'react'
import Header from '../../components/Header/Header'
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
  this.set = this.set.bind(this)
  }

  componentDidMount() {
    fetcher(this.state.url, this.oneJoke)
  }

  // set() {
  //   this.setState({url:`http://api.icndb.com/jokes/random?firstName=${}`})
  // }

  oneJoke(datas) {
    this.setState({joke: datas})
  }


  render() {
  return (
    <div>
    <Header />
    <Joke joke={this.state.joke} />
    {React.cloneElement(this.props.children, {url: "http://api.icndb.com/jokes/random", set:{this.set}})}
    </div>
  );
  }
}
