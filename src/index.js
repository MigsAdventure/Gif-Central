import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'
import SearchPage from './components/SearchPage'
import SearchActions from './stores/SearchStore'
import GifPlayground from './components/GifPlayground'

render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <Route path='/search' component={SearchPage}/>
      <Route path='/gifplayground/:id' component={GifPlayground}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
