import * as actionTypes from '../actions/actionsTypes'
import { updateObject } from '../../shared/utility'

const initialState = {
  email: null,
  secretKey: null,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.VERIFICATION_NEW_USER_INIT:
      return updateObject(state, action)
    case actionTypes.VERIFICATION_NEW_USER_START:
      return updateObject(state, action)
    case actionTypes.VERIFICATION_NEW_USER_SUCCESS:
      return updateObject(state, action)
    case actionTypes.VERIFICATION_NEW_USER_FAIL:
      return
    default:
      return state
  }
}

export default reducer
