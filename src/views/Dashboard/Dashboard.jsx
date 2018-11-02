import React from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'
// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Button from 'components/CustomButtons/Button.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import Card from 'components/Card/Card.jsx'

import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle.jsx'

import InfiniteCalendar, {
  Calendar,
  defaultMultipleDateInterpolation,
  withMultipleDates
} from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'

class Dashboard extends React.Component {
  state = {
    selectEditWorkout: {
      data: null,
      selectDisplay: false
    },
    selectsNewWorkout: {
      data: null,
      selectDisplay: false
    },
    selectStoreDate: [
      {
        data: '2018-10-27'
      },
      {
        data: '2018-10-25'
      },
      {
        data: '2018-10-23'
      }
    ]
  }

  format = date => {
    const todayYear = date.getFullYear()
    const todayMonth = +date.getMonth() + 1
    let todayDate = date.getDate()
    if (todayDate < 10) {
      todayDate = '0' + todayDate
    }
    return todayYear + '-' + todayMonth + '-' + todayDate
  }

  selectorDate = date => {
    const editWorkout = this.state.selectStoreDate.filter(item => {
      return item.data === date
    })
    console.log(this.state)
    if (editWorkout.length > 0) {
      this.setState({
        selectEditWorkout: {
          data: editWorkout[0].data,
          selectDisplay: true
        }
      })
    }
    return this.setState({
      selectsNewWorkout: {
        data: date
      }
    })
  }

  selectors = this.state.selectStoreDate.map(item => {
    return item.data
  })

  searchSelectorState = date => {
    const searchDate = this.state.selectStoreDate.filter(item => {
      return item.data === date
    })
    return searchDate[0]
  }

  render() {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Link to="/new_exerci">
              <Button color="primary" fullWidth>
                ADD NEW EXERCISE
              </Button>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Link to="/new_workout">
              <Button color="primary" fullWidth>
                ADD NEW WORKOUT
              </Button>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={6} md={12}>
            <Card>
              <InfiniteCalendar
                onSelect={date => {
                  return this.selectorDate(this.format(date))
                }}
                Component={withMultipleDates(Calendar)}
                selected={this.selectors}
                theme={{
                  todayColor: '#EC6150',
                  selectionColor: date => {
                    return this.searchSelectorState(date)
                      ? '#26f026'
                      : '#dce3e4'
                  }
                }}
                width="100%"
                interpolateSelection={defaultMultipleDateInterpolation}
              />
            </Card>
            {console.log(this.state)}
            {this.state.select === 'edit_workout' ? (
              <Redirect to="/edit_workout" />
            ) : null}
            {/*this.state.select === 'new_workout' ? <Redirect to='/new_workout'/> : null*/}
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(Dashboard)
