import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";


import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

import InfiniteCalendar from 'react-infinite-calendar';
import  {withMultipleDates, defaultMultipleDateInterpolation, Calendar} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

const today = new Date();

class Dashboard extends React.Component {
    state = {
        selectDate: [
            {
                data: today
            },
            {
                data: '2018, 10, 27'
            },
            {
                data: '2018, 10, 25'
            },
            {
                data: '2018, 10, 23'
            },
        ]
    };
  render() {
    return (
      <div>
        <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
                <Link to='/new_exercise'><Button color="primary" fullWidth>ADD NEW EXERCISE</Button></Link>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
                <Link to='/new_workout'><Button color="primary" fullWidth>ADD NEW WORKOUT</Button></Link>
            </GridItem>
            <GridItem xs={12} sm={6} md={12}>
                <Card>
                    <InfiniteCalendar
                        Component={withMultipleDates(Calendar)}
                        selected={
                            this.state.selectDate.map(item => {
                                return item.data
                            })
                        }
                        theme={{
                            selectionColor: date => {
                                console.log(date);
                                console.log(today);
                                return today ? '#EC6150' : '#26f026';
                            },
                        }}
                        width="100%"
                        interpolateSelection={defaultMultipleDateInterpolation}
                    />
                </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);