// @flow
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import createStore from './store'
import HomePage from './pages/HomePage'

const store = createStore()

const rootElement = document.getElementById('root') || (() => { throw new Error('Cannot find an element with #root') })()

render(
  <Provider store={store}>
    <Router>
      <Route path='/' component={HomePage} />
    </Router>
  </Provider>,
  rootElement
)
