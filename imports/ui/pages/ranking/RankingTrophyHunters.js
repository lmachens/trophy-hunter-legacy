import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import RankComponent from '/imports/ui/components/rank/RankComponent';
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

const RankingTrophyHunters = ({ userId, trophyHunters, onClick, season }) =>
  trophyHunters &&
  trophyHunters.map(trophyHunter => {
    const style = {};
    if (userId === trophyHunter.userId) {
      style.color = '#9e7b14';
    }
    return (
      <RankComponent
        key={trophyHunter._id}
        onClick={onClick}
        season={season}
        style={style}
        trophyHunter={trophyHunter}
      />
    );
  });

RankingTrophyHunters.propTypes = {
  userId: PropTypes.string,
  trophyHunters: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  season: PropTypes.string.isRequired
};

const RankingTrophyHuntersContainer = withTracker(() => {
  const userId = Meteor.userId();

  return {
    userId
  };
})(RankingTrophyHunters);

export default RankingTrophyHuntersContainer;
