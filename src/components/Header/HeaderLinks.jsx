import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import * as actions from '../../../src/store/actions/index';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Hidden from '@material-ui/core/Hidden';
import Poppers from '@material-ui/core/Popper';
// @material-ui/icons
import Person from '@material-ui/icons/Person';
// core components
import Button from 'components/CustomButtons/Button.jsx';

import headerLinksStyle from 'assets/jss/material-dashboard-react/components/headerLinksStyle.jsx';

class HeaderLinks extends React.Component {
  state = {
    open: false
  };
  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.props.onLogout();
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    let header = null;
    let emailName = null;
    if (this.props.isAuthenticated) {
      emailName = this.props.email;
      header = (
        <div>
          <div className={classes.manager}> {emailName}</div>
          <div className={classes.manager}>
            <Button
              buttonRef={node => {
                this.anchorEl = node;
              }}
              color={window.innerWidth > 959 ? 'transparent' : 'white'}
              justIcon={window.innerWidth > 959}
              simple={!(window.innerWidth > 959)}
              aria-owns={open ? 'menu-list-grow' : null}
              aria-haspopup="true"
              onClick={this.handleToggle}
              className={classes.buttonLink}
            >
              <Person className={classes.icons}/>
              <Hidden mdUp implementation="css">
                <p onClick={this.handleClick} className={classes.linkText}>
                  {emailName}
                </p>
              </Hidden>
            </Button>
            <Poppers
              open={open}
              anchorEl={this.anchorEl}
              transition
              disablePortal
              className={
                classNames({ [classes.popperClose]: !open }) +
                ' ' +
                classes.pooperNav
              }
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  id="menu-list-grow"
                  style={{
                    transformOrigin:
                      placement === 'bottom' ? 'center top' : 'center bottom'
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={this.handleClose}>
                      <MenuList role="menu">
                        <MenuItem
                          onClick={this.handleClose}
                          className={classes.dropdownItem}
                        >
                          Sign out
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Poppers>
          </div>
        </div>
      );
    }
    return (
      <div>
        {header}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.idToken !== null,
    email: state.auth.email
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(headerLinksStyle)(HeaderLinks));
