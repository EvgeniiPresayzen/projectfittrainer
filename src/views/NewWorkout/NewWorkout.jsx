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
    workout: [],
    data: '10-09-2018'
  }

  componentDidMount() {
    this.props.onInitExercises()
  }

  handleChange = (name, id) => event => {
    const items = this.state.workout[id]
    items[name] = event.target.value
    this.setState({
      workout: this.state.workout
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onNewWorkout(this.state.workout, this.state.data)
  }

  addExercise = () => {
    const newExercise = {
      exercise: '',
      repeat: 0,
      measurement: 0
    }
    this.state.workout.unshift(newExercise)
    this.setState({
      workout: this.state.workout,
    })
  }

  moveUp = id => event => {
    if (id !== 0) {
      let from = id
      let to = id - 1
      console.log(from, to)
      this.state.workout.splice(to, 0, this.state.workout.splice(from, 1)[0])
      this.setState({
        workout: this.state.workout,
      })
    }
  }

  moveDown = id => event => {
    if (id !== this.state.workout.length - 1) {
      let from = id
      let to = id + 1
      this.state.workout.splice(to, 0, this.state.workout.splice(from, 1)[0])
      this.setState({
        workout: this.state.workout,
      })
    }
  }

  deleteExercise = id => event => {
    this.state.workout.splice(id, 1)
    this.setState({
      workout: this.state.workout,
    })
  }

  render() {
    const { classes } = this.props
    let lists = null
    if (this.props.exercises && this.state.workout) {
      lists = this.state.workout.map((item, id) => {
        return (
          <GridContainer key={id}>
            <GridItem xs={12} sm={12} md={2}>
              <TextField
                select
                label="Name Exercise"
                fullWidth
                value={item.exercise}
                onChange={this.handleChange('exercise', id)}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                inputProps={{
                  required: true
                }}
                margin="normal"
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
                onChange={this.handleChange('repeat', id)}
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
                onChange={this.handleChange('measurement', id)}
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
                onClick={this.moveUp(id)}
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
                onClick={this.moveDown(id)}
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
                onClick={this.deleteExercise(id)}
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
    }
    let form = null
    if (this.props.exercises) {
      form = (
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>New workout</h4>
          </CardHeader>
          <CardBody>
            <Button color="primary" onClick={this.addExercise}>ADD EXERCISE</Button>
            {lists}
          </CardBody>
          <CardFooter>
            <Button color="primary" type="submit">CREATE WORKOUT</Button>
          </CardFooter>
        </Card>
      )
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            {form}
          </GridItem>
        </GridContainer>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    exercises: state.workout.exerciseNames
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNewWorkout: (workout) => dispatch(actions.newWorkoutStart(workout)),
    onInitExercises: () => dispatch(actions.initWorkoutExercises())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(NewWorkout))
