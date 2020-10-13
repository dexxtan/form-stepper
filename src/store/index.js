// @flow
import { createStore, combineReducers } from 'redux'
import { reducer as partsReducer } from './parts'

import type { State as PartsState } from './parts'

const reducers = combineReducers({
  parts: partsReducer
})

export type State = {
  parts: PartsState
}

export const currentPartsStore = (state: State) => state.parts

export default function configureStore () {
  return createStore(reducers)
}
