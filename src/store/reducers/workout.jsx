import * as actionTypes from '../actions/actionsTypes'
import { updateObject } from '../../shared/utility'

const initialState = {
  exerciseNames: [],
  workouts: [],
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.WORKOUT_INIT:
      return updateObject(state, action)
    case actionTypes.WORKOUT_START:
      return updateObject(state, action)
    case actionTypes.WORKOUT_SUCCESS:
      return updateObject(state, action)
    case actionTypes.WORKOUT_FAIL:
      return updateObject(state, action)
    case actionTypes.EDIT_WORKOUT_ADD:
      return updateObject(state, action)
    case actionTypes.EDIT_WORKOUT_UPDATE:
      return updateObject(state, action)
    case actionTypes.EDIT_WORKOUT_UP:
      return updateObject(state, action)
    case actionTypes.EDIT_WORKOUT_DOWN:
      return updateObject(state, action)
    case actionTypes.EDIT_WORKOUT_DELETE:
      return updateObject(state, action)
    default:
      return state
  }
}

export default reducer
