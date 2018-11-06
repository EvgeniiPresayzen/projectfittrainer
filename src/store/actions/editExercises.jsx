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
  console.log('edit',data)
  return {
    type: actionTypes.EDIT_EXERCISES_START,
    exercises: data
  }
}


export const deleteExercises = (exercises, idx) => {
  const updateObject = exercises.filter((ex, id) => id !== idx);
  return ({
    type: actionTypes.EDIT_EXERCISES_DELETE,
    exercises: updateObject
  })
}

export const moveUpExercises = (exercises, id) => {
  if (id !== 0) {
    let from = id
    let to = id - 1
    const updateObject = [...exercises]
    updateObject.splice(to, 0, updateObject.splice(from, 1)[0])
    return {
      type: actionTypes.EDIT_EXERCISES_UP,
      exercises: updateObject
    }
  }
}

export const moveDownExercises = (exercises, id) => {
  if (id !== exercises.length - 1) {
    const from = id
    const to = id + 1
    const updateObject = [...exercises]
    updateObject.splice(to, 0, updateObject.splice(from, 1)[0])
    return {
      type: actionTypes.EDIT_EXERCISES_DOWN,
      exercises: updateObject
    }
  }
}

export const handleChangeExercises = (name, id, e, exercises) => {
  const updateObject = [...exercises];
  const item = updateObject[id];
  item[name] = e.target.value;
  return {
    type: actionTypes.EDIT_EXERCISES_UPDATE,
    exercises: updateObject
  }
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
