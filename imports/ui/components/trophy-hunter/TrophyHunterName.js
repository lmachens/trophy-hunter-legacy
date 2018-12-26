import { JoinClient } from 'meteor-publish-join';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import React from 'react';
import { getName } from '../../../api/trophy-hunters/helpers';
import universeTheme from '../../layouts/universeTheme';
import { withTracker } from 'meteor/react-meteor-data';

const TrophyHunterName = ({ trophyHunter }) => (
  <span
    style={{
      color: universeTheme.palette.secondaryTextColor,
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      display: 'inline-block',
      verticalAlign: 'bottom'
    }}
  >
    {trophyHunter ? getName(trophyHunter) : 'Unknown'}
  </span>
);

TrophyHunterName.propTypes = {
  trophyHunter: PropTypes.object
};

const TrophyHunterNameContainer = withTracker(({ userId }) => {
  Meteor.subscribe('trophyHunters.public', [userId]);

  const trophyHunters = JoinClient.get(`trophyHunters${JSON.stringify([userId])}`);
  const trophyHunter = trophyHunters && trophyHunters[0];
  return {
    trophyHunter
  };
})(TrophyHunterName);

export default TrophyHunterNameContainer;
