// @flow
import { createStore, combineReducers } from 'redux'
import { reducer as partsReducer } from './parts'
import { reducer as partCompositionsReducer } from './part-compositions'

import type { State as PartsState } from './parts'
import type { State as PartCompositionsState } from './part-compositions'

const reducers = combineReducers({
  parts: partsReducer,
  partCompositions: partCompositionsReducer
})

export type State = {
  parts: PartsState,
  partCompositions: PartCompositionsState
}

export const currentPartsStore = (state: State) => state.parts
export const currentPartCompositionsStore = (state: State) => state.partCompositions

export default function configureStore () {
  return createStore(reducers)
}
