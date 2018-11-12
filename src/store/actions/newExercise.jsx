import * as actionTypes from './actionsTypes';
import axios from '../../axios-orders';



const typesExercise = [{
    value: 'kg',
    label: 'kilograms'
  },
  {
    value: 'km',
    label: 'kilometers'
  },
  {
    value: 'min',
    label: 'time'
  }];

export const newExerciseStart = (name, type) => {
  const newExercisesData = {
    name: name,
    type: type
  };
  axios.post('/exercises/create', newExercisesData)
    .then(response => {
      console.log('True')
    })
    .catch(err => {
      console.log('False')
    })
  console.log(newExercisesData, 'NEW EXERCISE DATA');
  return {
    type: actionTypes.NEW_EXERCISES_START
  };
};

export const handleChangeExercise = (name, e) => {
  const updateObject = e.target.value;
  return {
    type: actionTypes.NEW_EXERCISES_UPDATE,
    [name]: updateObject
  };
};

export const setTypes = (data) => ({
  type: actionTypes.NEW_EXERCISES_INIT,
  types: data
});

export const initTypes = () => {
  return dispatch => {
    dispatch(setTypes(typesExercise));
  };
};
