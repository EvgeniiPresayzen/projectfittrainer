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
import 'react-infinite-calendar/styles.css';

let today = new Date();
let lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Button color="primary">ADD NEW EXERCISE</Button>
                <Button color="primary">ADD NEW WORKOUT</Button>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
                <Card>
                    <InfiniteCalendar
                        width={400}
                        height={600}
                        selected={today}
                        disabledDays={[0,6]}
                        minDate={lastWeek}
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