import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'

import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
// core components
import GridItem from 'components/Grid/GridItem.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import CustomInput from 'components/CustomInput/CustomInput.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardFooter from 'components/Card/CardFooter.jsx'
// @material-ui/core components

const styles = ({
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
  }
})

class NewExercise extends React.Component {
  state = {
    exerciseName: '',
    typeExercise: '',
  }

  componentDidMount() {
    this.props.onInitTypes()
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    const { classes } = this.props

    let form = null

    if (this.props.types) {
      console.log(this.props.name, this.props.type, 'NEW EXERCISES')
      form = (
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Create new exercise</h4>
            <p className={classes.cardCategoryWhite}>Please, add a new exercise name and measurement type</p>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Exercise Name"
                  id="exerciseName"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: (e) => this.props.onHandleChangeExercise('exerciseName', e),
                    value: this.props.name,
                    required: true
                  }}
                />
                <TextField
                  select
                  label="Measuremen type"
                  fullWidth
                  value={this.props.type}
                  onChange={(e) => this.props.onHandleChangeExercise('exerciseType', e)}
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
            </GridContainer>
          </CardBody>
          <CardFooter>
            <Button color="primary" type="submit"
                    onClick={() => this.props.onNewExercise(this.props.name, this.props.type)}>CREATE
              EXERCISE!</Button>
          </CardFooter>
        </Card>
      )
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              {form}
            </GridItem>
          </GridContainer>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.newExercise.exerciseName,
    type: state.newExercise.exerciseType,
    types: state.newExercise.types
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNewExercise: (name, type) => dispatch(actions.newExerciseStart(name, type)),
    onHandleChangeExercise: (name, e) => dispatch(actions.handleChangeExercise(name, e)),
    onInitTypes: () => dispatch(actions.initTypes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(NewExercise))
