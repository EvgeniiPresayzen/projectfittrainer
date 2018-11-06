import * as actionTypes from '../actions/actionsTypes'
import { updateObject } from '../../shared/utility'

const initialState = {
  idToken: null,
  loading: false,
  error: null,
  authRedirectPatch: '/'
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
      return updateObject(state, action)
    case actionTypes.AUTH_REDIRECT_PATCH:
      return updateObject(state, action)
    default:
      return state
  }
}

export default reducer
