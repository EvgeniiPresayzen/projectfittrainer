import * as actionTypes from '../actions/actionsTypes'
import { updateObject } from '../../shared/utility'

const initialState = {
  types: [],
  exerciseName: '',
  exerciseType: '',
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NEW_EXERCISES_INIT:
      return updateObject(state, action)
    case actionTypes.NEW_EXERCISES_UPDATE:
      return updateObject(state, action)
    case actionTypes.NEW_EXERCISES_START:
      return updateObject(state, action)
    case actionTypes.NEW_EXERCISES_SUCCESS:
      return
    case actionTypes.NEW_EXERCISES_FAIL:
      return

    default:
      return state
  }
}

export default reducer
