import React from "react";
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";


import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

import InfiniteCalendar from 'react-infinite-calendar';
import  {withMultipleDates, defaultMultipleDateInterpolation, Calendar } from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
                <Button color="primary" fullWidth>ADD NEW EXERCISE</Button>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
                <Button color="primary" fullWidth>ADD NEW WORKOUT</Button>
            </GridItem>
            <GridItem xs={12} sm={6} md={12}>
                <Card>
                    <InfiniteCalendar
                        Component={withMultipleDates(Calendar)}
                        selected={[
                            new Date(2018, 9, 27),
                            new Date(),
                            new Date(2018, 9, 25)
                        ]}
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