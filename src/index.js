import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import editExerciseReducer from './store/reducers/editExercises';
import newExerciseReducer from './store/reducers/newExercise';
import 'assets/css/material-dashboard-react.css?v=1.5.0';
import indexRoutes from 'routes/index.jsx';

const composeEnchancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  editExercise: editExerciseReducer,
  newExercise: newExerciseReducer
});

const store = createStore(
  rootReducer,
  composeEnchancers(applyMiddleware(thunk))
);

const hist = createBrowserHistory();

const app = (
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return (
            <Route path={prop.path} component={prop.component} key={key} />
          );
        })}
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
