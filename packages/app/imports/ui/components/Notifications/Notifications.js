import { Button, Dialog, IconButton, Menu, MenuItem, Popover } from '../generic';
import {
  DeleteIcon,
  RedeemIcon,
  SocialNotificationsActiveIcon,
  SocialNotificationsIcon,
  SocialNotificationsNoneIcon,
  StarsIcon
} from '../icons';
import Notifications, { notificationTypes } from '../../../api/notifications/notifications';
import React, { Component } from 'react';
import trees, { expiredTrees } from '/imports/shared/trees/index.ts';

import LotteryWin from '../LotteryWin';
import { Meteor } from 'meteor/meteor';
import PlaystyleIcon from '../playstyle/PlaystyleIcon';
import PropTypes from 'prop-types';
import { Tooltip } from '../generic/Tooltip';
import TreeComplete from '../TreeComplete';
import TrophyHunterAvatar from '../TrophyHunterAvatar';
import TrophyHunterName from '../TrophyHunterName';
import { getChampionSquare } from '../../../api/riot-api/staticData';
import moment from 'moment';
import playstyles from '../../../api/playstyles/playstyles';
import universeTheme from '../../layouts/universeTheme';
import { withRouter } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

const styles = {
  container: {
    lineHeight: 'normal',
    paddingTop: 5
  },
  menu: {
    maxHeight: 510,
    width: 320,
    overflowX: 'hidden',
    overflowY: 'auto'
  },
  menuItem: {
    width: 334
  },
  imageContainer: {
    display: 'inline-block',
    marginRight: 10,
    position: 'relative'
  },
  image: {
    height: 38,
    width: 38,
    verticalAlign: 'bottom'
  },
  textContainer: {
    display: 'inline-block'
  },
  message: {
    display: 'flex',
    width: 220
  },
  date: {
    fontSize: 'small'
  }
};

class NotificationsComponent extends Component {
  state = {
    open: false,
    openDialog: false
  };

  componentDidUpdate(prevProps) {
    const { notifications, userId } = this.props;
    const oldNotifications = prevProps.notifications;

    notifications.forEach(({ _id, read, type, data }) => {
      if (!read && (!oldNotifications || !oldNotifications.find(old => old._id === _id))) {
        let message;

        switch (type) {
          case notificationTypes.MATCH_ANALYSED:
            message = 'Your match is analysed!';
            break;

          case notificationTypes.NEW_FOLLOWER:
            message = 'You have a new follower!';
            break;

          case notificationTypes.STREAM_ONLINE:
            message = 'A twitch streamer is live!';
            break;

          case notificationTypes.TREE_COMPLETE:
            message = 'You completed a tree!';
            if (userId === data.userId) {
              this.setState({
                openDialog: true,
                dialogTitle: 'Tree Complete!',
                dialogContent: <TreeComplete count={data.count} name={data.name} />
              });
            }
            break;

          case notificationTypes.MATCH_NOT_SUPPORTED:
            message = 'Recent match type is not supported!';
            break;

          case notificationTypes.MATCH_MINIMUM_DURATION_NOT_REACHED:
            message = "Minimum duration of match didn't reached!";
            break;

          case notificationTypes.NEW_PLAYSTYLE:
            message = 'Your playstyle has changed';
            break;

          case notificationTypes.LOTTERY_WIN:
          case notificationTypes.LOTTERY_LOSS:
            this.setState({
              openDialog: true,
              dialogTitle: 'Lottery Draw!',
              dialogContent: <LotteryWin lotteryId={data.lotteryId} />
            });
            break;
        }
        if (message) {
          /*parent.window.postMessage({
            overwolf: true,
            type: 'showNotification',
            message: message
          }, '*');*/
        }
      }
    });
  }

  UNSAFE_componentWillMount() {
    window.addEventListener('message', this.handleMessage);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.handleMessage);
  }

  handleMessage = event => {
    const data = event.data;
    if (data.overwolf) {
      const { type } = data;

      switch (type) {
        case 'openNotifications':
          this.setState({
            open: true,
            anchorEl: this.button
          });
          break;
      }
    }
  };

  handleTouchTap = event => {
    // This prevents ghost click.
    event.preventDefault();
    event.stopPropagation();

    const { notifications } = this.props;
    if (notifications.length === 0) {
      return;
    }

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });

    Meteor.call('readNotifications');
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  handleChange = (event, notification) => {
    const { history, userId } = this.props;

    event.preventDefault();

    this.setState({
      open: false
    });

    const data = notification.data;
    switch (notification.type) {
      case notificationTypes.MATCH_ANALYSED:
        if (data.summonerName) {
          history.push(`/game/${data.platformId}/${data.matchId}/${data.summonerName}`);
        } else {
          history.push(`/match/${data.platformId}/${data.matchId}/${data.summonerId}`);
        }
        break;

      case notificationTypes.STREAM_ONLINE:
        window.open(data.channelUrl);
        Meteor.call('channelClick', data.userId);
        break;

      case notificationTypes.NEW_FOLLOWER:
        history.push(`/profile/${data.userId}`);
        break;

      case notificationTypes.TREE_COMPLETE:
        if (userId === data.userId) {
          this.setState({
            openDialog: true,
            dialogTitle: 'Tree Complete!',
            dialogContent: <TreeComplete count={data.count} name={data.name} />
          });
        } else {
          history.push(`/profile/${data.userId}/trees`);
        }
        break;

      case notificationTypes.NEW_PLAYSTYLE:
        history.push(`/profile/${data.userId}/playstyle`);
        break;

      case notificationTypes.LOTTERY_WIN:
      case notificationTypes.LOTTERY_LOSS:
        this.setState({
          openDialog: true,
          dialogTitle: 'Lottery Draw!',
          dialogContent: <LotteryWin lotteryId={data.lotteryId} />
        });
        break;
    }
  };

  handleDeleteAll = event => {
    event.preventDefault();

    Meteor.call('removeAllNotifications');

    this.setState({
      open: false
    });
  };

  handleDelete = (event, notificationId) => {
    event.preventDefault();
    event.stopPropagation();

    Meteor.call('removeNotification', notificationId);
  };

  handleDialogClose = () => {
    this.setState({ openDialog: false });
    Meteor.call('readNotifications');
  };

  render() {
    const { notifications = [] } = this.props;
    const { open, openDialog, dialogTitle, dialogContent } = this.state;

    const newNotifications = notifications.filter(notification => notification.read === false);
    const tooltip = `${newNotifications.length} new notifications`;
    let notificationIcon;
    if (newNotifications.length > 0) {
      notificationIcon = (
        <SocialNotificationsActiveIcon color={universeTheme.palette.secondaryTextColor} />
      );
    } else if (notifications.length > 0) {
      notificationIcon = <SocialNotificationsIcon />;
    } else {
      notificationIcon = <SocialNotificationsNoneIcon />;
    }
    return (
      <div>
        <Tooltip title={tooltip}>
          <IconButton onClick={this.handleTouchTap} ref={button => (this.button = button)}>
            {notificationIcon}
          </IconButton>
        </Tooltip>
        <Popover
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          onRequestClose={this.handleRequestClose}
          open={open}
          style={universeTheme.popover}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
        >
          <Button fullWidth={true} label="Remove all" onClick={this.handleDeleteAll} />
          <Menu onChange={this.handleChange} style={styles.menu}>
            {notifications.map(this.renderMenuItem)}
          </Menu>
        </Popover>
        <Dialog
          onClose={this.handleDialogClose}
          open={openDialog}
          style={{ textAlign: 'center' }}
          title={dialogTitle}
        >
          {dialogContent}
        </Dialog>
      </div>
    );
  }

  renderMenuItem = notification => {
    const { userId } = this.props;

    let icon;
    let message;
    switch (notification.type) {
      case notificationTypes.MATCH_ANALYSED:
        {
          icon = (
            <img
              src={getChampionSquare({ championId: notification.data.championId })}
              style={styles.image}
            />
          );
          if (userId === notification.data.userId) {
            message = <span style={styles.message}>Match analysed</span>;
          } else {
            message = (
              <span style={styles.message}>
                <span style={{ marginRight: 5 }}>Match analysed for</span>
                <TrophyHunterName userId={notification.data.userId} />
              </span>
            );
          }
        }
        break;

      case notificationTypes.STREAM_ONLINE:
        icon = <img src="/images/twitch_small.png" style={styles.image} />;
        message = (
          <span style={styles.message}>
            <TrophyHunterName userId={notification.data.userId} />
            <span style={{ marginLeft: 5 }}>is streaming</span>
          </span>
        );
        break;

      case notificationTypes.NEW_FOLLOWER:
        icon = (
          <TrophyHunterAvatar size={38} style={styles.image} userId={notification.data.userId} />
        );
        message = (
          <span style={styles.message}>
            <TrophyHunterName userId={notification.data.userId} />
            <span style={{ marginLeft: 5 }}>follows you</span>
          </span>
        );
        break;

      case notificationTypes.TREE_COMPLETE:
        {
          icon = <StarsIcon style={styles.image} />;
          const selector = notification.data.name || notification.data.path;
          const tree = trees[selector] || expiredTrees[selector];
          if (!tree) {
            return <div key={notification._id} />;
          }
          if (userId === notification.data.userId) {
            message = <span style={styles.message}>Completed tree</span>;
          } else {
            message = (
              <span style={styles.message}>
                <TrophyHunterName userId={notification.data.userId} />
                <span style={{ marginLeft: 5 }}>completed tree</span>
              </span>
            );
          }
        }
        break;

      case notificationTypes.MATCH_NOT_SUPPORTED:
        icon = (
          <img
            src={getChampionSquare({ championId: notification.data.championId })}
            style={styles.image}
          />
        );
        message = <span style={styles.message}>Queue type not supported</span>;
        break;

      case notificationTypes.MATCH_MINIMUM_DURATION_NOT_REACHED:
        icon = (
          <img
            src={getChampionSquare({ championId: notification.data.championId })}
            style={styles.image}
          />
        );
        message = <span style={styles.message}>Minimum match duration not reached</span>;
        break;

      case notificationTypes.NEW_PLAYSTYLE:
        icon = <PlaystyleIcon playstyle={playstyles[notification.data.playstyle]} />;
        message = <span style={styles.message}>Your playstyle has updated</span>;
        break;

      case notificationTypes.LOTTERY_WIN:
        icon = <RedeemIcon style={styles.image} />;
        message = <span style={styles.message}>You won in our lottery!</span>;
        break;

      case notificationTypes.LOTTERY_LOSS:
        icon = <RedeemIcon style={styles.image} />;
        message = <span style={styles.message}>Sorry, you didn&#x27;t win this time.</span>;
        break;

      default:
        return <div key={notification._id} />;
    }

    const dateStyle = Object.assign(
      { color: universeTheme.palette.secondaryTextColor },
      styles.date
    );
    return (
      <MenuItem
        key={notification._id}
        primaryText={
          <div style={styles.container}>
            <div style={styles.imageContainer}>{icon}</div>
            <div style={styles.textContainer}>
              {message}
              <span style={dateStyle}>
                {moment(notification.createdAt).format('DD/MM/YYYY - hh:mma')}
              </span>
            </div>
          </div>
        }
        rightIcon={<DeleteIcon onClick={event => this.handleDelete(event, notification._id)} />}
        style={styles.menuItem}
        value={notification}
      />
    );
  };
}

NotificationsComponent.propTypes = {
  history: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  notifications: PropTypes.array,
  userId: PropTypes.string
};

const NotificationsContainer = withTracker(() => {
  const notificationsHandle = Meteor.subscribe('notifications.private');

  const loading = !notificationsHandle.ready();

  const userId = Meteor.userId();
  const notifications = Notifications.find(
    {
      userId: userId
    },
    { sort: { createdAt: -1 } }
  ).fetch();

  return {
    loading,
    notifications,
    userId
  };
})(NotificationsComponent);

export default withRouter(NotificationsContainer);
