import * as actionTypes from '../actions/actionsTypes'
import { updateObject } from '../../shared/utility'

const initialState = {
  types: [],
  exercises: [],
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EDIT_EXERCISES_INIT:
      return updateObject(state, action)
    case actionTypes.EDIT_EXERCISES_UPDATE:
      return updateObject(state, action)
    case actionTypes.EDIT_EXERCISES_UP:
      return updateObject(state, action)
    case actionTypes.EDIT_EXERCISES_DOWN:
      return updateObject(state, action)
    case actionTypes.EDIT_EXERCISES_DELETE:
      return updateObject(state, action)
    case actionTypes.EDIT_EXERCISES_START:
      console.log('START', action)
      return updateObject(state, action)
    case actionTypes.EDIT_EXERCISES_SUCCESS:
      return
    case actionTypes.EDIT_EXERCISES_FAIL:
      return
    default:
      return state
  }
}

export default reducer
