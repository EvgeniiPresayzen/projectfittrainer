import * as actionTypes from './actionsTypes'

const typesExercise = [
  {
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

const exercisesDate = [
  {
    exerciseName: 'test#1',
    typeExercise: 'kilograms'
  },
  {
    exerciseName: 'test#2',
    typeExercise: 'kilograms'
  },
  {
    exerciseName: 'test#3',
    typeExercise: 'kilograms'
  },
  {
    exerciseName: 'test#4',
    typeExercise: 'kilograms'
  },
  {
    exerciseName: 'test#7',
    typeExercise: 'kilograms'
  },
]

export const editExerciseStart = (data) => {
  return {
    type: actionTypes.EDIT_EXERCISES_START,
    exercises: data
  }
}

export const deleteExercises = (exercises, idx) => {
  const newEx = exercises.filter((ex, id) => id !== idx);
  return ({
    type: actionTypes.EDIT_EXERCISES_DELETE,
    exercises: newEx
  })

}

export const setExercises = (types, exercises) => ({
  type: actionTypes.EDIT_EXERCISES_INIT,
  types: types,
  exercises: exercises
})

export const initExercises = () => {
  return dispatch => {
    dispatch(setExercises(typesExercise, exercisesDate))
  }
}
