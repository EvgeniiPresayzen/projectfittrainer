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

const workouts = [
  {
    exercise: 'test#1',
    typeExercise: 'kilograms',
    repeat: '2',
    measurement: '5'
  },
  {
    exercise: 'test#2',
    typeExercise: 'kilograms',
    repeat: '3',
    measurement: '3'
  },
  {
    exercise: 'test#3',
    typeExercise: 'kilograms',
    repeat: '4',
    measurement: '2'
  },
  {
    exercise: 'test#4',
    typeExercise: 'kilograms',
    repeat: '1',
    measurement: '3'
  }
]

export const newWorkoutStart = (workout, data) => {
  const newWorkoutData = {
    workout: workout,
    data: data
  }
  console.log(newWorkoutData, 'WORK DATA')
  return {
    type: actionTypes.WORKOUT_START
  }
}

export const deleteWorkout = (workout, idx) => {
  const updateObject = workout.filter((ex, id) => id !== idx);
  return ({
    type: actionTypes.EDIT_WORKOUT_DELETE,
    workouts: updateObject
  })
}
/*
* export const moveUpWorkout = (workout, id) => {
  if (id !== 0) {
    let from = id
    let to = id - 1
    const updateObject = [...workout]
    updateObject.splice(to, 0, updateObject.splice(from, 1)[0])
    return {
      type: actionTypes.EDIT_EXERCISES_UP,
      workouts: updateObject
    }
  }
}

export const moveDownWorkout = (workout, id) => {
  if (id !== exercises.length - 1) {
    const from = id
    const to = id + 1
    const updateObject = [...workout]
    updateObject.splice(to, 0, updateObject.splice(from, 1)[0])
    return {
      type: actionTypes.EDIT_EXERCISES_DOWN,
      exercises: updateObject
    }
  }
}

export const handleChangeWorkout = (name, id, e, workout) => {
  const updateObject = [...workout];
  const item = updateObject[id];
  item[name] = e.target.value;
  return {
    type: actionTypes.EDIT_EXERCISES_UPDATE,
    exercises: updateObject
  }
}
* */


export const setExercises = (data) => ({
  type: actionTypes.WORKOUT_INIT,
  exerciseNames: data
})
export const setWorkouts = (data) => ({
  type: actionTypes.WORKOUT_INIT,
  workouts: data
})

export const initWorkoutExercises = (initial) => {
  if (initial) {
    return dispatch => {
      dispatch(setWorkouts(workouts))
      dispatch(setExercises(exercises))
    }
  }
  return dispatch => {
    dispatch(setExercises(exercises))
  }
}
