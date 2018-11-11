import * as actionTypes from './actionsTypes'
import axios from '../../axios-orders';

export const verificationStart = () => {
  return {
    type: actionTypes.VERIFICATION_NEW_USER_START
  }
}

export const verificationSuccess = (token) => {
  return {
    type: actionTypes.VERIFICATION_NEW_USER_SUCCESS,
    idToken: token
  }
}

export const verificationFall = (error) => {
  return {
    type: actionTypes.VERIFICATION_NEW_USER_FAIL,
    error: error
  }
}

export const verification = (email, secretKey) => {
  return dispatch => {
    dispatch(verificationStart());
    const authData = {
      email: email,
      secretToken: secretKey
    }
    console.log(authData,'VERIFICATION')
    // axios запрос на бек
    axios.post('fitTrainer/verify', authData)
      .then(response => {
        dispatch(verificationSuccess(response.data.token));
      })
      .catch(err => {
        dispatch(verificationFall(err));
      })
  }
}
