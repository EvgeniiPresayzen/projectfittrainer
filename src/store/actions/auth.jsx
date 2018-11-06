import * as actionTypes from './actionsTypes'

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
      returnSecureToken: true
    }
    console.log(authData,'AUTH')
    // запросы
  //  let url = '/inSignUp' // ссылка регистрации
   // if (!isSignup) {
   //   url = '/inSignIn' // ссылка авторизации
   // }
    // axios запрос на бек
  }
}
