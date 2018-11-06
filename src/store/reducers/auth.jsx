import * as actionTypes from '../actions/actionsTypes'
import { updateObject } from '../../shared/utility'

const initialState = {
  email: null,
  password: null,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return updateObject(state, action)
    case actionTypes.AUTH_SUCCESS:
      return updateObject(state, action)
    case actionTypes.AUTH_FAIL:
      return updateObject(state, action)
    case actionTypes.AUTH_LOGOUT:
      return
    default:
      return state
  }
}

export default reducer
