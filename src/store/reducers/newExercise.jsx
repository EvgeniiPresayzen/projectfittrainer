import * as actionTypes from '../actions/actionsTypes'
import { updateObject } from '../../shared/utility'

const initialState = {
  types: [],
  exerciseName: null,
  exerciseType: null,
  error: null
}

const exersiseStart = (state, action) => {
  const updatedState = {
    exerciseName: action.exerciseName,
    exerciseType: action.exerciseType
  }
  return
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NEW_EXERCISES_INIT:
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
