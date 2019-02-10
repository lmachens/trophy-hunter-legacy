import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import Ranking from '/imports/ui/components/Ranking';
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
      <Ranking
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
