// @flow

// Actions
type SavePartsAction = {
  type: 'SAVE_PARTS',
  parts: number
}
type ResetPartsAction = {
  type: 'RESET_PARTS'
}
type Actions = SavePartsAction | ResetPartsAction

const SAVE_PARTS = 'SAVE_PARTS'
const RESET_PARTS = 'RESET_PARTS'

const DEFAULT_ACTIONS = {
  saveParts: (parts: number): SavePartsAction => ({
    type: SAVE_PARTS,
    parts
  }),
  resetParts: (): ResetPartsAction => ({
    type: RESET_PARTS
  })
}
export default DEFAULT_ACTIONS

// Reducer & Store
export type State = {
  parts: number
}

export const getParts = (state: State): number => state.parts

const initial = ():State => ({
  parts: 0
})
export const reducer = (state: State = initial(), action: Actions): State => {
  switch (action.type) {
    case SAVE_PARTS:
      return { ...state, parts: action.parts }
    case RESET_PARTS:
      return { ...state, parts: 0 }
  }
  return state
}
