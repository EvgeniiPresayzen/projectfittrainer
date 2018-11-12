import * as actionTypes from './actionsTypes'
import axios from '../../axios-orders';

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


export const editExerciseStart = (data) => {
  return dispatch => {
    axios.put('/exercises/update', data)
      .then(response => {
        dispatch(initExercises())
      })
      .catch(err => {
        console.log('False')
      })
  }
}

export const updateExercises = exercises => {

}

export const deleteExercises = id => {
  return dispatch => {
    axios.delete('/exercises/delete', {data: {id : id}})
      .then(response => {
        dispatch(initExercises())
      })
      .catch(err => {
        console.log('False')
      })
  }
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
    axios.get('/exercises/all')
      .then(response => {
        let exercisesDate = response.data.exercises
        console.log('test', exercisesDate)
        dispatch(setExercises(typesExercise, exercisesDate))
      })
      .catch(err => {
        console.log('False')
      })

  }
}
