import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import GridItem from 'components/Grid/GridItem.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardFooter from 'components/Card/CardFooter.jsx'
import TextField from '@material-ui/core/TextField/TextField'
import MenuItem from '@material-ui/core/MenuItem/MenuItem'

import ArrowUp from '@material-ui/icons/ArrowUpward'
import ArrowDown from '@material-ui/icons/ArrowDownward'
import Close from '@material-ui/icons/Close'
import axios from '../../axios-orders';

const styles = {
  cardCategoryWhite: {
    '&,& a,& a:hover,& a:focus': {
      color: 'rgba(255,255,255,.62)',
      margin: '0',
      fontSize: '14px',
      marginTop: '0',
      marginBottom: '0'
    },
    '& a,& a:hover,& a:focus': {
      color: '#FFFFFF'
    }
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: '\'Roboto\', \'Helvetica\', \'Arial\', sans-serif',
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontSize: '65%',
      fontWeight: '400',
      lineHeight: '1'
    }
  },
  iconSmall: {
    fontSize: 20,
  },
  buttonArrow: {
    marginTop: '20px',
    backgroundColor: '#1cafc2'
  },
  buttonClose: {
    marginTop: '20px',
    backgroundColor: '#ff9a00'
  },
}

class EditExercises extends React.Component {
  state = {
    exercises: []
  }

  componentWillMount() {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    this.props.onInitExercises()
  }

  handleSubmit = event => {
    this.setState({
      exercises: this.props.exercises
    })
    event.preventDefault()
  }

  render() {
    const { classes } = this.props
    const exercises = [...this.props.exercises];

    let lists = null
    let form = null
    console.log('NEW PROPS', this.props.exercises)
    if (this.props.exercises) {
      lists = this.props.exercises.map((item, id) => {
        return (
          <CardBody key={id}>

            <GridContainer>
              <GridItem xs={12} sm={12} md={5}>
                <TextField
                  fullWidth
                  label="Name"
                  value={item.name}
                  onChange={(e) => this.props.onHandleChangeExercises('name', id, e, exercises)}
                  margin="normal"
                  required
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <TextField
                  select
                  label="Measurement type"
                  fullWidth
                  value={item.type}
                  onChange={(e) => this.props.onHandleChangeExercises('type', id, e, exercises)}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  margin="normal"
                  required
                >
                  {this.props.types.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </GridItem>
              <GridItem xs={12} sm={12} md={1}>
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  className={classes.buttonArrow}
                  onClick={() => this.props.onUpExercises(exercises, id)}
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
                  onClick={() => this.props.onDownExercises(exercises, id)}
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
                  onClick={() => this.props.onDeleteExercises(exercises, item._id)}
                >
                  <Close className={classes.iconSmall} />
                </Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <hr />
              </GridItem>
            </GridContainer>
          </CardBody>
        )
      })
      form = (
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Edit exercise</h4>
          </CardHeader>
          {lists}
          <CardFooter>
            <Button color="primary" type="submit" onClick={() => this.props.onEditExercise(exercises)}>Update
              EXERCISE</Button>
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
    exercises: state.editExercise.exercises,
    types: state.editExercise.types
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEditExercise: (exercises) => dispatch(actions.editExerciseStart(exercises)),
    onHandleChangeExercises: (name, id, e, exercises) => dispatch(actions.handleChangeExercises(name, id, e, exercises)),
    onInitExercises: () => dispatch(actions.initExercises()),
    onDeleteExercises: (exercises, id) => dispatch(actions.deleteExercises(exercises, id)),
    onUpExercises: (exercises, id) => dispatch(actions.moveUpExercises(exercises, id)),
    onDownExercises: (exercises, id) => dispatch(actions.moveDownExercises(exercises, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EditExercises))
