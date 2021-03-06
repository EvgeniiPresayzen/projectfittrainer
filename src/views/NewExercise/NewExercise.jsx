import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
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
import axios from '../../axios-orders';
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
    exerciseType: '',
    redirect: false
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    this.props.onInitTypes()
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onNewExercise(this.state.exerciseName, this.state.exerciseType)
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  render() {
    const { classes } = this.props

    let form = null

    if (this.props.types) {
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
                    onChange: this.handleChange('exerciseName'),
                    value: this.state.exerciseName,
                    required: true
                  }}
                />
                <TextField
                  select
                  label="Measuremen type"
                  fullWidth
                  value={this.state.exerciseType}
                  onChange={this.handleChange('exerciseType')}
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
            <Button color="primary" type="submit">CREATE
              EXERCISE!</Button>
          </CardFooter>
        </Card>
      )
    }

    return (
      <div>
        {this.renderRedirect()}
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
    types: state.newExercise.types
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNewExercise: (name, type) => dispatch(actions.newExerciseStart(name, type)),
    onInitTypes: () => dispatch(actions.initTypes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(NewExercise))
