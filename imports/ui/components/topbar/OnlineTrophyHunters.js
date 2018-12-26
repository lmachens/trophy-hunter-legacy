import React, { Component } from 'react';

import { JoinClient } from 'meteor-publish-join';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import universeTheme from '../../layouts/universeTheme';
import { withTracker } from 'meteor/react-meteor-data';

class OnlineTrophyHunters extends Component {
  render() {
    const { onlineTrophyHunters, style } = this.props;

    return (
      <span style={style}>
        <span style={{ color: universeTheme.palette.secondaryTextColor, marginRight: '4px' }}>
          Online:
        </span>
        {onlineTrophyHunters}
      </span>
    );
  }
}

OnlineTrophyHunters.propTypes = {
  onlineTrophyHunters: PropTypes.number,
  style: PropTypes.object
};

const OnlineTrophyHuntersContainer = withTracker(() => {
  Meteor.subscribe('trophyHunters.online');
  const onlineTrophyHunters = JoinClient.get('numOnlineTrophyHunters');

  return {
    onlineTrophyHunters
  };
})(OnlineTrophyHunters);

export default OnlineTrophyHuntersContainer;
