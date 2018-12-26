import React, { Component } from 'react';

import HoverableBorder from './HoverableBorder';
import { JoinClient } from 'meteor-publish-join';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import TrophyHunter from '../trophy-hunter/TrophyHunter';
import { connect } from 'react-redux';
import universeTheme from '../../layouts/universeTheme';
import { withTracker } from 'meteor/react-meteor-data';

const styles = {
  foreground: {
    display: 'flex',
    flex: 1,
    flexFlow: 'column',
    padding: '2px'
  }
};

class Friends extends Component {
  render() {
    const { containerStyle, style, trophyHunters } = this.props;

    return (
      <HoverableBorder containerStyle={containerStyle}>
        <div style={Object.assign({}, styles.foreground, style)}>
          <span
            style={{
              textAlign: 'center',
              color: universeTheme.palette.secondaryTextColor,
              fontSize: '11px',
              marginBottom: '2px'
            }}
          >
            Following
          </span>
          {trophyHunters && trophyHunters.length === 0 ? (
            <div style={{ textAlign: 'center' }}>Follow other Trophy Hunters!</div>
          ) : (
            <TrophyHunter rankField="rank" trophyHunters={trophyHunters} />
          )}
        </div>
      </HoverableBorder>
    );
  }
}

Friends.propTypes = {
  containerStyle: PropTypes.object,
  trophyHunters: PropTypes.array,
  style: PropTypes.object
};

const statuses = {
  online: 1,
  ingame: 1,
  away: 1,
  offline: 4
};

const FriendsContainer = withTracker(({ friends }) => {
  let trophyHunters = [];
  if (friends) {
    Meteor.subscribe('trophyHunters.public', friends);
    trophyHunters = JoinClient.get(`trophyHunters${JSON.stringify(friends)}`);
    trophyHunters =
      trophyHunters &&
      trophyHunters.sort((a, b) => {
        if (statuses[a.status] === statuses[b.status]) {
          if (!a.rank) {
            return 1;
          }
          if (!b.rank) {
            return -1;
          }
          return a.rank - b.rank;
        }
        return statuses[a.status] - statuses[b.status];
      });
  }

  return {
    trophyHunters
  };
})(Friends);

const mapStateToProps = ({ account: { trophyHunter = { friends: [] } } }) => {
  return { friends: trophyHunter.friends };
};

export default connect(mapStateToProps)(FriendsContainer);
