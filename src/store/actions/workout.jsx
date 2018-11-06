import * as actionTypes from './actionsTypes'

const exercises = [
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
    exerciseName: 'test#5',
    typeExercise: 'kilograms'
  },
]

export const newWorkoutStart = (workout, data) => {
  const newWorkoutData = {
    workout: workout,
    data: data
  }
  console.log(newWorkoutData,'WORK DATA')
  return {
    type: actionTypes.WORKOUT_START
  }
}

export const setExercises = (data) => ({
  type: actionTypes.WORKOUT_INIT,
  exerciseNames: data
})

export const initWorkoutExercises = () => {
  return dispatch => {
    dispatch(setExercises(exercises))
  }
}
