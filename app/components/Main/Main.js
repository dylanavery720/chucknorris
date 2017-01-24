// components/Main/Main.js
import React from 'react';
import fetcher from '../Helpers/fetcher'

export default class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      data: ""
    }
  this.displayer = this.displayer.bind(this)
  }

  componentDidMount() {
    fetcher(this.props.url, this.displayer)
  }

  displayer(datas) {
    this.setState({data: datas})
  }

  render() {
  return (
    <div className="Main">
      <h1>Main</h1>
      <h1>{this.state.data}</h1>
    </div>
  );
}
}
