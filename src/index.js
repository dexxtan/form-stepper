// @flow
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import createStore from './store'
import Application from './pages/Application'

const store = createStore()

const rootElement = document.getElementById('root') || (() => { throw new Error('Cannot find an element with #root') })()

render(
  <Provider store={store}>
    <Router>
      <Route path='/' component={Application} />
    </Router>
  </Provider>,
  rootElement
)
