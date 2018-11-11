import * as actionTypes from './actionsTypes'
import axios from '../../axios-orders';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
}

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token
  }
}

export const authFall = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
    }
    console.log(authData,'AUTH')
    // запросы
    axios.post('fitTrainer/register', authData)
      .then(response => {
        dispatch(authSuccess());
      })
      .catch(err => {
        dispatch(authFall());
      })
    if (!isSignup) {
      console.log('SignIn') // ссылка авторизации
    }
    // axios запрос на бек
  }
}
