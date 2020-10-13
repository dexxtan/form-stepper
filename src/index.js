// @flow
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Application from './pages/Application'

const rootElement = document.getElementById('root') || (() => { throw new Error('Cannot find an element with #root') })()

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  rootElement
)
