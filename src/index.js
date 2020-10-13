// @flow
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import createStore from './store'
import HomePage from './pages/HomePage'
import PartQueryPage from './pages/PartQueryPage'

const store = createStore()

const rootElement = document.getElementById('root') || (() => { throw new Error('Cannot find an element with #root') })()

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/page1' component={PartQueryPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </Router>
  </Provider>,
  rootElement
)
