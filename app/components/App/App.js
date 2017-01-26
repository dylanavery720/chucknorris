import React from 'react'
import Header from '../../components/Header/Header'
import Joke from '../Joke/Joke'
import fetcher from '../Helpers/fetcher'
import '../../reset'
import '../../styles'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      joke: '',
      url: 'http://api.icndb.com/jokes/random/?escape=javascript',
      newName: '',
      radio: null,
      settings: false,
      jokenumber: false,
    }
    this.handleOption = this.handleOption.bind(this)
    this.oneJoke = this.oneJoke.bind(this)
    this.set = this.set.bind(this)
    this.handleNewName = this.handleNewName.bind(this)
    this.parentControl = this.parentControl.bind(this)
    this.enableSet = this.enableSet.bind(this)
    this.handleJokenumber = this.handleJokenumber.bind(this)
  }

  componentDidMount() {
    fetcher(this.state.url, this.oneJoke)
  }

  handleOption(e) {
    this.setState({ radio: e.target.value }, this.parentControl)
  }

  parentControl() {
    this.state.radio === 'On' ? this.setState({ url: `${this.state.url}&exclude=[explicit]`, newName: this.state.newName }) : this.setState({ url: 'http://api.icndb.com/jokes/random?escape=javascript', newName: this.state.newName })
  }

  handleJokenumber(e) {
    this.setState({ url: `http://api.icndb.com/jokes/random/${e.target.value}/?escape=javascript`, jokenumber: true })
  }

  set() {
    if (this.state.newName) {
      const nameArray = this.state.newName.split(' ')
      const first = nameArray[0]
      const last = nameArray[1]
      this.setState({ url: `http://api.icndb.com/jokes/random?escape=javascript&firstName=${first}&lastName=${last}` }, fetcher(`${this.state.url}&firstName=${first}&lastName=${last}`, this.oneJoke))
    }
  }

  handleNewName(e) {
    this.setState({ newName: e.target.value })
  }

  oneJoke(datas) {
    this.setState({ joke: datas })
  }

  enableSet() {
    !this.state.settings ? this.setState({ settings: true }) :
    this.setState({ settings: false })
  }

  render() {
    return (
    <div>
    <Header settings={this.state.settings} enableSet={this.enableSet} />
    <Joke joke={this.state.joke} />
    {React.cloneElement(this.props.children, { url: this.state.url,
      handleNewName: this.handleNewName,
      set: this.set,
      handleOption: this.handleOption,
      radio: this.state.radio,
      enableSet: this.enableSet,
      handleJokenumber: this.handleJokenumber,
      jokenumber: this.state.jokenumber })}
    </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.object,
}
