import React from "react";
import { Link } from 'react-router-dom'
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

const styles = ({
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
});


class NewExercise extends React.Component {
    state = {
        email: '',
        password: '',
        passwordRepeat: '',
        showPassword: false,
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        let formControl = this.state.password === this.state.passwordRepeat ? this.state : null;
        if (formControl) {
            let form = {
                email: this.state.email,
                password: this.state.password
            };
            console.log(form);
        }
    };


    render() {
        const { classes }= this.props;

        let typePassword = this.state.showPassword ? 'text' : 'password';

        return (
            <form onSubmit={this.handleSubmit}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>Register with Fit Trainer App</h4>
                                <p className={classes.cardCategoryWhite}>Please, enter your email and password</p>
                            </CardHeader>
                                <CardBody>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={12}>
                                            <CustomInput
                                                labelText="email address"
                                                id="email"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    onChange:this.handleChange('email'),
                                                    type: "email"
                                                }}
                                            />
                                            <CustomInput
                                                labelText="Password"
                                                id="password"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    onChange:this.handleChange('password'),
                                                    type:typePassword,
                                                    endAdornment: (
                                                        <InputAdornment variant="filled" position="end">
                                                            <IconButton
                                                                aria-label="Toggle password visibility"
                                                                onClick={this.handleClickShowPassword}
                                                            >
                                                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                            <CustomInput
                                                labelText="Repeat Password"
                                                id="passwordRepeat"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    onChange:this.handleChange('passwordRepeat'),
                                                    type:typePassword,
                                                    endAdornment: (
                                                        <InputAdornment variant="filled" position="end">
                                                            <IconButton
                                                                aria-label="Toggle password visibility"
                                                                onClick={this.handleClickShowPassword}
                                                            >
                                                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </GridItem>
                                    </GridContainer>
                                </CardBody>
                                <CardFooter>
                                    <Button color="primary" type="submit">SIGN UP</Button>
                                </CardFooter>
                                <CardFooter>
                                    <Link to='/signin'>already have an account? sign-in</Link>
                                </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>
            </form>
        );
    }
}

export default withStyles(styles, { withTheme: true })(NewExercise);
