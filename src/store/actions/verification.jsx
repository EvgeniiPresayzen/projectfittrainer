import * as actionTypes from './actionsTypes'
import axios from '../../axios-orders';

export const verificationStart = () => {
  return {
    type: actionTypes.VERIFICATION_NEW_USER_START
  }
}

export const verificationSuccess = (token, email) => {
  localStorage.setItem('token', token);
  localStorage.setItem('email', email);
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    email: email
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
        dispatch(verificationSuccess(response.data.token, response.data.email));
      })
      .catch(err => {
        dispatch(verificationFall(err));
      })
  }
}
