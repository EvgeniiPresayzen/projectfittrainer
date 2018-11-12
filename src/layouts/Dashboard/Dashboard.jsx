/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
// creates a beautiful scrollbar
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import Sidebar from 'components/Sidebar/Sidebar.jsx'

import dashboardRoutes from 'routes/dashboard.jsx'
import authRoutes from 'routes/signIn.jsx'

import dashboardStyle from 'assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx'

import image from 'assets/img/sidebar-2.jpg'
import logo from 'assets/img/reactlogo.png'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileOpen: false
    }
    this.resizeFunction = this.resizeFunction.bind(this)
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }

  getRoute() {
    return this.props.location.pathname !== '/maps'
  }

  resizeFunction() {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false })
    }
  }

  componentDidMount() {
    this.props.onTryAutoSignup();
    if (navigator.platform.indexOf('Win') > -1) {
      const ps = new PerfectScrollbar(this.refs.mainPanel)
    }
    window.addEventListener('resize', this.resizeFunction)
  }

  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false })
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeFunction)
  }

  render() {
    const { classes, ...rest } = this.props
    let sidebarRouters = authRoutes
    let routers = (
      <Switch>
        {authRoutes.map((prop, key) => {
          if (prop.redirect)
            return <Redirect from={prop.path} to={prop.to} key={key} />
          return <Route path={prop.path} component={prop.component} key={key} />
        })}
      </Switch>
    )
    if (this.props.isAuthenticated) {
      sidebarRouters = dashboardRoutes
      routers = (
        <Switch>
          {dashboardRoutes.map((prop, key) => {
            if (prop.redirect)
              return <Redirect from={prop.path} to={prop.to} key={key} />
            return <Route path={prop.path} component={prop.component} key={key} />
          })}
        </Switch>
      )
    }

    return (
      <div>
        <div className={classes.wrapper}>
          <Sidebar
            routes={sidebarRouters}
            logoText={'FIT TRAINER'}
            logo={logo}
            image={image}
            handleDrawerToggle={this.handleDrawerToggle}
            open={this.state.mobileOpen}
            color="blue"
            {...rest}
          />
          <div className={classes.mainPanel} ref="mainPanel">
            <Header
              routes={sidebarRouters}
              handleDrawerToggle={this.handleDrawerToggle}
              {...rest}
            />
            {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
            {this.getRoute() ? (
              <div className={classes.content}>
                <div className={classes.container}>
                  {routers}
                  </div>
              </div>
            ) : (
              <div className={classes.map}>{routers}</div>
            )}
            {this.getRoute() ? <Footer /> : null}
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.idToken !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(dashboardStyle)(App))
