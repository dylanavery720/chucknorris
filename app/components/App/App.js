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
      url: "http://api.icndb.com/jokes/random?escape=javascript",
      newName: '',
      radio: null
    }
    this.handleOption = this.handleOption.bind(this)
  this.oneJoke = this.oneJoke.bind(this)
  this.set = this.set.bind(this)
  this.handleNewName = this.handleNewName.bind(this)
  this.parentControl = this.parentControl.bind(this)
  }

  componentDidMount() {
    fetcher(this.state.url, this.oneJoke)
  }

  handleOption(e) {
    this.setState({radio: e.target.value}, this.parentControl)
  }

  parentControl() {
    this.state.radio === "On" ? this.setState({url: this.state.url + `&exclude=[explicit]`}) : this.setState({url: "http://api.icndb.com/jokes/random?escape=javascript"})

  }

  set() {
    let nameArray = this.state.newName.split(' ')
    let first = nameArray[0]
    let last = nameArray[1]
    this.setState({url:`http://api.icndb.com/jokes/random?escape=javascript&firstName=${first}&lastName=${last}`}, fetcher(this.state.url, this.oneJoke))

  }

  handleNewName(e) {
    this.setState({newName: e.target.value })
  }

  oneJoke(datas) {
    this.setState({joke: datas})
  }


  render() {

  return (
    <div>
    <Header />
    <Joke joke={this.state.joke} />
    {React.cloneElement(this.props.children, {url: "http://api.icndb.com/jokes/random", handleNewName: this.handleNewName, set: this.set, handleOption: this.handleOption, radio: this.state.radio})}
    </div>
  );
  }
}

    App.propTypes = {
      children: React.PropTypes.object,
    }
