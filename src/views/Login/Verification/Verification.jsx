import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../../../store/actions/index'
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles'
// core components
import GridItem from 'components/Grid/GridItem.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import CustomInput from 'components/CustomInput/CustomInput.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardFooter from 'components/Card/CardFooter.jsx'

const styles = theme => ({
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
    email: '',
    secretKey: ''
  }

  componentWillMount() {
    this.setState({
      email: this.props.match.params.email,
      secretKey: this.props.match.params.secretkey
    });
    console.log('Verification',this.props.match);
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onVerification(this.state.email, this.state.secretKey)
  }


  render() {
    const { classes } = this.props;

    let display = null
    if (this.props.match.params.email && this.props.match.params.secretkey) {
      display = (
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>
              Email verification to finish registration with Fit Trainer App
            </h4>
            <p className={classes.cardCategoryWhite}>Please, confirm email address</p>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: 'email',
                    value: this.state.email,
                    disabled: true
                  }}
                />
                <CustomInput
                  id="password"
                  disabled
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: 'password',
                    value: this.state.secretKey,
                    disabled: true
                  }}
                />
              </GridItem>
            </GridContainer>
          </CardBody>
          <CardFooter>
            <Button color="primary" type="submit">VERIFY EMAIL</Button>
          </CardFooter>
          <CardFooter>
            <Link to="/sign_up">already have an a account? sign up</Link>
          </CardFooter>
        </Card>
      )
    }

    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            {display}
          </GridItem>
        </GridContainer>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.verification.email,
    secretKey: state.verification.secretKey
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onVerification: (email, secretKey) => dispatch(actions.verification(email, secretKey)),
    onVerificationInit: () => dispatch(actions.verificationInit()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(NewExercise))
