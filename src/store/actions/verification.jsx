import * as actionTypes from './actionsTypes'

export const setVerification = (email, secretKey) => {
  return {
    type: actionTypes.VERIFICATION_NEW_USER_INIT,
    email: email,
    secretKey: secretKey
  }
}

export const verificationInit = () => {
  const email = "test@test.com"
  const secretKey = '123456'
  return dispatch => {
    dispatch(setVerification(email, secretKey))
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
      secretKey: secretKey
    }
    console.log(authData,'VERIFICATION')
    // запросы
    let url = '/Verification' // ссылка проверки ключа
    // axios запрос на бек
  }
}
