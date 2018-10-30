import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import TextField from "@material-ui/core/TextField/TextField";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

import ArrowUp from '@material-ui/icons/ArrowUpward';
import ArrowDown from '@material-ui/icons/ArrowDownward';
import Close from '@material-ui/icons/Close';

const style = {
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
  },
    iconSmall: {
        fontSize: 20,
    },
    buttonArrow: {
        backgroundColor: "#1cafc2",
        marginTop: '20px',
    },
    buttonClose: {
        backgroundColor: "#ff9a00",
        marginTop: '20px',
    },
    typo: {
        marginTop: "40px",
        position: "relative"
    }
};

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
];
class NewWorkout extends React.Component {
    state = {
        workout: [
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
            },
        ]
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const {classes} = this.props;

        let lists = this.state.workout.map(item => {
            return (
                <div>
                    <GridContainer key={item.id}>
                        <GridItem xs={12} sm={12} md={2}>
                            <TextField
                                select
                                label="Name Exercise"
                                fullWidth
                                value={item.exercise}
                                onChange={this.handleChange('typeExercise')}
                                SelectProps={{
                                    MenuProps: {
                                        className: classes.menu,
                                    },
                                }}
                                margin="normal"
                            >
                                {exercises.map(option => (
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
                                onChange={this.handleChange('repeat')}
                                margin="normal"
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                            <TextField
                                fullWidth
                                label="Measurement"
                                value={item.measurement}
                                onChange={this.handleChange('repeat')}
                                margin="normal"
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={1}>
                            <div className={classes.typo}>
                                kg
                            </div>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={1}>
                            <Button variant="contained" fullWidth color="primary" className={classes.buttonArrow}>
                                <ArrowUp className={classes.iconSmall} />
                            </Button>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={1}>
                            <Button variant="contained" fullWidth color="primary" className={classes.buttonArrow}>
                                <ArrowDown className={classes.iconSmall} />
                            </Button>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={1}>
                            <Button variant="contained" fullWidth color="primary" className={classes.buttonClose}>
                                <Close className={classes.iconSmall} />
                            </Button>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                            <hr/>
                        </GridItem>
                    </GridContainer>
                </div>
            )
        });
        return (
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>New workout</h4>
                        </CardHeader>
                        <CardBody>
                            <Button color="primary">ADD EXERCISE</Button>
                            {lists}
                        </CardBody>
                        <CardFooter>
                            <Button color="primary">CREATE WORKOUT</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        );
    }
}

export default withStyles(style)(NewWorkout);
