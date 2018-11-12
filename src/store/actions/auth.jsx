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
    idToken: token,
    email: email
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
    if (!isSignup) {
      axios.post('fitTrainer/login', authData)
        .then(response => {
          dispatch(authSuccess(response.data.token, response.data.email));
        })
        .catch(err => {
          dispatch(authFall());
        })
    }
    axios.post('fitTrainer/register', authData)
      .then(response => {
        console.log('True')
      })
      .catch(err => {
        console.log('False')
      })
    // axios запрос на бек

  }
}

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    if (!token) {
      dispatch(logout());
    } else if (!email){
      dispatch(logout());
    } else {
      dispatch(authSuccess(token, email));
    }

  };
};
