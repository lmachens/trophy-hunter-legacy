import { Avatar, Chip, Menu, MenuItem } from '@material-ui/core';
import React, { Component } from 'react';
import { array, object } from 'prop-types';

import { PeopleIcon } from '../icons';
import TrophyHunterName from '../TrophyHunterName';
import { withRouter } from 'react-router-dom';

const styles = {
  menu: {
    maxHeight: 510,
    width: 320
  }
};

export class FollowersChip extends Component {
  state = {
    open: false
  };

  handleClick = event => {
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  handleItemTouchTap = follower => () => {
    const { history } = this.props;
    this.setState({
      open: false
    });
    history.push(`/profile/${follower}/trees`);
  };

  render() {
    const { followers, style } = this.props;
    let numberOfFollowers;
    if (followers && followers.length) {
      numberOfFollowers = followers.length > 99 ? '99+' : followers.length;
    } else {
      numberOfFollowers = 0;
    }
    return (
      <>
        <Chip
          avatar={
            <Avatar>
              <PeopleIcon />
            </Avatar>
          }
          label={`${numberOfFollowers} Followers`}
          onClick={this.handleClick}
          style={style}
        />

        <Menu
          anchorEl={this.state.anchorEl}
          onClose={this.handleRequestClose}
          open={this.state.open}
          style={styles.menu}
        >
          {followers &&
            followers.slice(-20).map(follower => (
              <MenuItem key={follower} onClick={this.handleItemTouchTap(follower)}>
                <TrophyHunterName userId={follower} />
              </MenuItem>
            ))}
          {(!followers || !followers.length) && (
            <MenuItem key="noFollower" onClick={this.handleRequestClose}>
              No followers
            </MenuItem>
          )}
        </Menu>
      </>
    );
  }
}

FollowersChip.propTypes = {
  followers: array,
  style: object,
  history: object.isRequired
};

export default withRouter(FollowersChip);
