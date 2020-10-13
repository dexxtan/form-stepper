// @flow
import { stringifyNumber } from '../utils'

// Actions
type CreatePartCompositionsAction = {
  type: 'CREATE_PART_COMPOSITIONS',
  parts: number
}
type SavePartCompositionAction = {
  type: 'SAVE_PART_COMPOSITION',
  partId: string,
  percentage: number
}
type ResetPartCompositionsAction = {
  type: 'RESET_PART_COMPOSITIONS'
}
type Actions = CreatePartCompositionsAction | SavePartCompositionAction | ResetPartCompositionsAction

const CREATE_PART_COMPOSITIONS = 'CREATE_PART_COMPOSITIONS'
const SAVE_PART_COMPOSITION = 'SAVE_PART_COMPOSITION'
const RESET_PART_COMPOSITIONS = 'RESET_PART_COMPOSITIONS'

const DEFAULT_ACTIONS = {
  createPartCompositions: (parts: number) => ({
    type: CREATE_PART_COMPOSITIONS,
    parts
  }),
  savePartComposition: (partId: string, percentage: number): SavePartCompositionAction => ({
    type: SAVE_PART_COMPOSITION,
    partId,
    percentage
  }),
  resetPartCompositions: (): ResetPartCompositionsAction => ({
    type: RESET_PART_COMPOSITIONS
  })
}
export default DEFAULT_ACTIONS

// Reducer & Store
export type PartHash = { [key: string]: ?number }
export type State = {
  partCompositions: PartHash,
  totalCompositions: number,
  anyCompositionsUnfilled: boolean,
}

export const getPartCompositions = (state: State): PartHash => state.partCompositions
export const getTotalCompositions = (state: State): number => state.totalCompositions
export const getAnyCompositionsUnfilled = (state: State): boolean => state.anyCompositionsUnfilled

const initial = ():State => ({
  partCompositions: {},
  totalCompositions: 0,
  anyCompositionsUnfilled: true
})
export const reducer = (state: State = initial(), action: Actions): State => {
  switch (action.type) {
    case CREATE_PART_COMPOSITIONS: {
      const newHash = {}
      for (let i = 0; i < action.parts; i++) {
        const id = stringifyNumber(i)
        newHash[id] = null
      }
      return { ...state, partCompositions: newHash, totalCompositions: 0, anyCompositionsUnfilled: true }
    }
    case SAVE_PART_COMPOSITION: {
      const updatedHash = { ...state.partCompositions }
      updatedHash[action.partId] = action.percentage
      let newTotal = 0
      let isAnyCompositionUnfilled = false
      for (const key in updatedHash) {
        if (typeof updatedHash[key] === 'number') {
          newTotal += updatedHash[key]
        } else {
          isAnyCompositionUnfilled = true
        }
      }
      console.log(updatedHash, newTotal, isAnyCompositionUnfilled)
      return { ...state, partCompositions: updatedHash, totalCompositions: newTotal, anyCompositionsUnfilled: isAnyCompositionUnfilled }
    }
    case RESET_PART_COMPOSITIONS: {
      return { ...state, partCompositions: {}, totalCompositions: 0, anyCompositionsUnfilled: true }
    }
  }
  return state
}
