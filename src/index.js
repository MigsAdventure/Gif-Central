import React from 'react'
import { render } from 'react-dom'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'

import Layout from './components/Layout'
import SearchPage from './components/SearchPage'
import SearchActions from './stores/SearchStore'
import GifPlayground from './components/GifPlayground'
import ScreenShots from './components/ScreenShots'
import Home from './components/Home'

render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home}/>
      <Route path='/search' component={SearchPage}/>
      <Route path='/gifplayground/:id' component={GifPlayground}/>
      <Route path='/screenshots' component={ScreenShots}/>
    </Route>

  </Router>,
  document.getElementById('root')
);
