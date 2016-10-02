import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'
import SearchPage from './components/SearchPage'
import SearchActions from './stores/SearchStore'
import GifPlayground from './components/GifPlayground'
import ScreenShots from './components/ScreenShots'

render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <Route path='/search' component={SearchPage}/>
      <Route path='/gifplayground/:id' component={GifPlayground}/>
      <Route path='/screenshots' component={ScreenShots}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
