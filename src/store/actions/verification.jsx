import * as actionTypes from './actionsTypes'
import axios from '../../axios-orders';

export const setVerification = (email, secretKey) => {
  return {
    type: actionTypes.VERIFICATION_NEW_USER_INIT,
    email: email,
    secretKey: secretKey
  }
}

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
        console.log('TRUE');
     //   localStorage.setItem('token', response.data.idToken);
     //   dispatch(verificationSuccess(response.data.idToken));
      })
      .catch(err => {
        console.log('error')
     //   dispatch(verificationFall(err.response.data.error));
      })
  }
}
