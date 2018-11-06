import * as actionTypes from '../actions/actionsTypes'
import { updateObject } from '../../shared/utility'

const initialState = {
  data: null,
  exerciseNames: [],
  workout: [],
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
      return
    default:
      return state
  }
}

export default reducer
