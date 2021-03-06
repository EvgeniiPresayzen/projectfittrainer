import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Card from 'components/Card/Card.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import CardFooter from 'components/Card/CardFooter.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import TextField from '@material-ui/core/TextField/TextField'
import MenuItem from '@material-ui/core/MenuItem/MenuItem'

import ArrowUp from '@material-ui/icons/ArrowUpward'
import ArrowDown from '@material-ui/icons/ArrowDownward'
import Close from '@material-ui/icons/Close'

const style = {
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0'
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: '\'Roboto\', \'Helvetica\', \'Arial\', sans-serif',
    marginBottom: '3px',
    textDecoration: 'none'
  },
  iconSmall: {
    fontSize: 20,
  },
  buttonArrow: {
    backgroundColor: '#1cafc2',
    marginTop: '20px',
  },
  buttonClose: {
    backgroundColor: '#ff9a00',
    marginTop: '20px',
  },
  typo: {
    marginTop: '40px',
    position: 'relative'
  }
}

class NewWorkout extends React.Component {
  state = {
    data: '10-10-2018'
  }

  componentDidMount() {
    const setWorkouts = true
    this.props.onInitWorkouts(setWorkouts)
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onNewWorkout(this.props.workouts, this.state.data)
  }

  render() {
    const { classes } = this.props
    const workouts = [...this.props.workouts]

    console.log('EditWorkout', workouts)

    let form = null
    let lists = null
    if (this.props.workouts && this.props.exercises) {
      lists = this.props.workouts.map((item, id) => {
        return (
          <GridContainer key={id}>
            <GridItem xs={12} sm={12} md={2}>
              <TextField
                select
                label="Name Exercise"
                fullWidth
                value={item.exercise}
                onChange={(e) => this.props.onHandleChangeWorkout('exercise', id, e, workouts)}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                margin="normal"
                required
              >
                {this.props.exercises.map(option => (
                  <MenuItem key={option.exerciseName} value={option.exerciseName}>
                    {option.exerciseName}
                  </MenuItem>
                ))}
              </TextField>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <TextField
                fullWidth
                label="Repeat"
                value={item.repeat}
                onChange={(e) => this.props.onHandleChangeWorkout('repeat', id, e, workouts)}
                margin="normal"
                type="number"
                required
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <TextField
                fullWidth
                label="Measurement"
                value={item.measurement}
                onChange={(e) => this.props.onHandleChangeWorkout('measurement', id, e, workouts)}
                margin="normal"
                type="number"
                required
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={1}>
              <div className={classes.typo}>
                kg
              </div>
            </GridItem>

            <GridItem xs={12} sm={12} md={1}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                className={classes.buttonArrow}
                onClick={() => this.props.onUpWorkout(workouts, id)}
              >
                <ArrowUp className={classes.iconSmall} />
              </Button>
            </GridItem>
            <GridItem xs={12} sm={12} md={1}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                className={classes.buttonArrow}
                onClick={() => this.props.onDownWorkout(workouts, id)}
              >
                <ArrowDown className={classes.iconSmall} />
              </Button>
            </GridItem>
            <GridItem xs={12} sm={12} md={1}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                className={classes.buttonClose}
                onClick={() => this.props.onDeleteWorkout(workouts, id)}
              >
                <Close className={classes.iconSmall} />
              </Button>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <hr />
            </GridItem>
          </GridContainer>
        )
      })
      form = (
        <CardBody>
          <Button color="primary" onClick={() => this.props.onAddWorkout(workouts)}>ADD EXERCISE</Button>
          {lists}
        </CardBody>
      )
    }



    return (
      <form onSubmit={this.handleSubmit}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Edit workout</h4>
              </CardHeader>
              {form}
              <CardFooter>
                <Button color="primary" type="submit">UPDATE WORKOUT</Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    exercises: state.workout.exerciseNames,
    workouts: state.workout.workouts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNewWorkout: (workout, data) => dispatch(actions.newWorkoutStart(workout, data)),
    onInitWorkouts: (setWorkouts) => dispatch(actions.initWorkoutExercises(setWorkouts)),
    onHandleChangeWorkout: (name, id, e, workout) => dispatch(actions.handleChangeWorkout(name, id, e, workout)),
    onAddWorkout: (workouts) => dispatch(actions.addWorkout(workouts)),
    onDeleteWorkout: (workout, id) => dispatch(actions.deleteWorkout(workout, id)),
    onUpWorkout: (workout, id) => dispatch(actions.moveUpWorkout(workout, id)),
    onDownWorkout: (workout, id) => dispatch(actions.moveDownWorkout(workout, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(NewWorkout))
