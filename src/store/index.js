// @flow
import { createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({
  base: {}
})

export default function configureStore () {
  return createStore(rootReducer)
}
