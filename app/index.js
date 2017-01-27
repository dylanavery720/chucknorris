import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import App from './components/App/App'
import Jokes from './components/Jokes/Jokes'
import Settings from './components/Settings/Settings'
import Favorites from './components/Favorites/Favorites'
import './reset'
import './styles'


render(
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRedirect to="/main" component={Main} />
      <Route path="/main" component={Main} >
        <IndexRoute component={Jokes} />
        <Route path='/jokes' component={Jokes} />
        <Route path='/favorites' component={Favorites} />
      </Route>
      <Route path='/settings' component={Settings} />
    </Route>
  </Router>
  , document.querySelector('.application'));
