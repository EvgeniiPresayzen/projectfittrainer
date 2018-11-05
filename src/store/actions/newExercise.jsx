import * as actionTypes from './actionsTypes'

const typesExercise = [{
  value: 'kilograms',
  label: 'kilograms'
},
  {
    value: 'kilometers',
    label: 'kilometers'
  },
  {
    value: 'time',
    label: 'time'
  }]

export const exerciseStart = (name, type) => {
  return {
    type: actionTypes.NEW_EXERCISES_START,
    exerciseName: name,
    exerciseType: type
  }
}

export const setTypes = (data) => ({
  type: actionTypes.NEW_EXERCISES_INIT,
  types: data
})

export const initTypes = () => {
  return dispatch => {
    dispatch(setTypes(typesExercise))
  }
}
