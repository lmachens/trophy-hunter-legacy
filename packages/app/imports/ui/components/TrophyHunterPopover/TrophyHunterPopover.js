import { Menu, MenuItem, Popover, Snackbar } from '../generic';
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getName } from '../../../api/trophy-hunters/helpers';
import pick from 'lodash.pick';
import universeTheme from '../../layouts/universeTheme';

class TrophyHunterPopover extends Component {
  state = {
    openSnackbar: false,
    snackbarMessage: ''
  };

  UNSAFE_componentWillMount() {
    window.addEventListener('message', this.handleMessage);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.handleMessage);
  }

  handleMessage = event => {
    const data = event.data;
    if (data.overwolf) {
      const { type, message } = data;

      switch (type) {
        case 'specatateCallback':
          console.log('specatateCallback', message);
          if (!message) {
            this.setState({
              openSnackbar: true,
              snackbarMessage: 'Spectator error'
            });
          }
          break;
      }
    }
  };

  handleProfileClick = () => {
    const { onRequestClose } = this.props;
    onRequestClose();
  };

  handleSpectateClick = event => {
    event.preventDefault();
    const { onRequestClose, targetTrophyHunter } = this.props;
    onRequestClose();
    this.setState({
      openSnackbar: true,
      snackbarMessage: 'Looking for active match'
    });
    Meteor.call('spectateCurrentMatch', targetTrophyHunter.userId, (error, result) => {
      if (error) {
        this.setState({
          openSnackbar: true,
          snackbarMessage: 'Match is not spectateable'
        });
      } else {
        const { domain, port, encryptionKey, matchId, platformId } = result;
        parent.window.postMessage(
          {
            overwolf: true,
            type: 'specatate',
            message: {
              domain,
              port,
              encryptionKey,
              matchId,
              platformId
            }
          },
          '*'
        );
        this.setState({
          openSnackbar: true,
          snackbarMessage: 'Starting LoL client'
        });
      }
    });
  };

  handleSnackbarClose = () => {
    this.setState({
      openSnackbar: false,
      snackbarMessage: ''
    });
  };

  handleFriendClick = event => {
    const { onRequestClose, targetTrophyHunter, trophyHunter } = this.props;
    event.preventDefault();

    const isFriend =
      trophyHunter &&
      targetTrophyHunter &&
      trophyHunter.friends.includes(targetTrophyHunter.userId);
    const message = !isFriend
      ? `Added ${getName(targetTrophyHunter)} to following list`
      : `Removed ${getName(targetTrophyHunter)} from following list`;

    Meteor.call('toggleFriend', targetTrophyHunter.userId, error => {
      if (error) {
        this.setState({
          openSnackbar: true,
          snackbarMessage: 'Error while adding or removing a follow'
        });
      }
    });

    this.setState({
      openSnackbar: true,
      snackbarMessage: message
    });
    onRequestClose();
  };

  render() {
    const { open, anchorEl, onRequestClose, targetTrophyHunter, trophyHunter } = this.props;
    const { openSnackbar, snackbarMessage } = this.state;

    const isSelf =
      trophyHunter && targetTrophyHunter && trophyHunter.userId === targetTrophyHunter.userId;
    const disableSpectate =
      !targetTrophyHunter || targetTrophyHunter.status !== 'ingame' || openSnackbar || isSelf;
    const isFriend =
      targetTrophyHunter &&
      trophyHunter &&
      trophyHunter.friends.includes(targetTrophyHunter.userId);

    return (
      <div>
        <Popover
          anchorEl={anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          onRequestClose={onRequestClose}
          open={open}
          style={universeTheme.popover}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
        >
          <Menu
            autoWidth={false}
            style={{ textAlign: 'center' }}
            width={anchorEl && anchorEl.offsetWidth}
          >
            <Link to={`/profile/${targetTrophyHunter && targetTrophyHunter.userId}/trees`}>
              <MenuItem onClick={this.handleProfileClick} primaryText="Profile" />
            </Link>
            <MenuItem
              disabled={disableSpectate}
              onClick={disableSpectate ? undefined : this.handleSpectateClick}
              primaryText="Spectate"
            />
            {!isSelf && (
              <MenuItem
                disabled={!trophyHunter}
                onClick={trophyHunter ? this.handleFriendClick : undefined}
                primaryText={!isFriend ? 'Follow Trophy Hunter' : 'Stop following'}
              />
            )}
          </Menu>
        </Popover>
        <Snackbar
          autoHideDuration={10000}
          message={snackbarMessage}
          onRequestClose={this.handleSnackbarClose}
          open={openSnackbar}
          style={{ textAlign: 'center' }}
        />
      </div>
    );
  }
}

TrophyHunterPopover.propTypes = {
  open: PropTypes.bool,
  anchorEl: PropTypes.object,
  trophyHunter: PropTypes.object,
  targetTrophyHunter: PropTypes.object,
  onRequestClose: PropTypes.func
};

const mapStateToProps = ({ account: { trophyHunter } }) => {
  return { trophyHunter: trophyHunter && pick(trophyHunter, 'userId', 'friends') };
};

export default connect(mapStateToProps)(TrophyHunterPopover);
