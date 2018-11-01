import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import TextField from "@material-ui/core/TextField/TextField";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

import ArrowUp from '@material-ui/icons/ArrowUpward';
import ArrowDown from '@material-ui/icons/ArrowDownward';
import Close from '@material-ui/icons/Close';

const styles =  {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
    iconSmall: {
        fontSize: 20,
    },
    buttonArrow: {
        marginTop: '20px',
        backgroundColor: "#1cafc2"
    },
    buttonClose: {
        marginTop: '20px',
        backgroundColor: "#ff9a00"
    },
};

const typeExercise = [
    {
        value: 'kilograms',
        label: 'kilograms',
    },
    {
        value: 'kilometers',
        label: 'kilometers',
    },
    {
        value: 'time',
        label: 'time',
    }
];

class EditExercise extends React.Component {
    state = {
        exercises: [
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
        ]
    };

    handleChange = (name, id) => event => {
        const items = this.state.exercises[id];
        items[name] = event.target.value;
        this.setState({
            exercises: this.state.exercises,
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.exercises);
    };

    deleteExercise = id => event => {
        this.state.exercises.splice(id, 1);
        this.setState({
            exercises: this.state.exercises,
        });
    };

    moveUp = id => event => {
        if (id === 0) {
            return
        };
        let from = id;
        let to = id - 1;
        console.log(from, to);
        this.state.exercises.splice(to,0, this.state.exercises.splice(from,1)[0]);
        this.setState({
            exercises: this.state.exercises,
        });
    };

    moveDown = id => event => {
        if (id === this.state.exercises.length-1) {
            return
        }
        let from = id;
        let to = id + 1;
        console.log(from, to);
        this.state.exercises.splice(to,0, this.state.exercises.splice(from,1)[0]);
        this.setState({
            exercises: this.state.exercises,
        });
    };

    render() {
        const {classes} = this.props;

        let list = this.state.exercises.map((item, id) => {
            return (
                <GridContainer key={id}>
                  <GridItem xs={12} sm={12} md={5}>
                      <TextField
                          fullWidth
                          label="Name"
                          value={item.exerciseName}
                          onChange={this.handleChange('exerciseName', id)}
                          margin="normal"
                          required
                      />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                      <TextField
                          select
                          label="Measurement type"
                          fullWidth
                          value={item.typeExercise}
                          onChange={this.handleChange('typeExercise', id)}
                          SelectProps={{
                              MenuProps: {
                                  className: classes.menu,
                              },
                          }}
                          margin="normal"
                          required
                      >
                          {typeExercise.map(option => (
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
                        <hr/>
                    </GridItem>
            </GridContainer>
            )
        });
        return (
            <form onSubmit={this.handleSubmit}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>Edit exercise</h4>
                            </CardHeader>
                            <CardBody>
                                    {list}
                            </CardBody>
                            <CardFooter>
                                <Button color="primary" type="submit">Update EXERCISE</Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>
            </form>
        );
    }
}

export default withStyles(styles)(EditExercise);
