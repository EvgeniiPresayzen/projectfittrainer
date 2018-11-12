import * as actionTypes from './actionsTypes'
import axios from '../../axios-orders';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
}

export const authSuccess = (token, email) => {
  localStorage.setItem('token', token);
  localStorage.setItem('email', email);
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

export const logout = () => {
  localStorage.removeItem('token');
 // localStorage.removeItem('expirationDate');
  localStorage.removeItem('email');
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
    }
    console.log(authData,'AUTH')
    // запросы
    let url = 'fitTrainer/register'

    if (!isSignup) {
      url = 'fitTrainer/login' // ссылка авторизации
    }
    // axios запрос на бек
    axios.post(url, authData)
      .then(response => {
        dispatch(authSuccess(response.data.token, response.data.email));
      })
      .catch(err => {
        dispatch(authFall());
      })
  }
}

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    }
  };
};
