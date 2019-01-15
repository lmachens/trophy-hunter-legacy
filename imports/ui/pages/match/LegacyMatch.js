import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import safeParseInt from '../../../api/utilities/safeParseInt';

class LegacyMatch extends React.Component {
  state = {
    summoner: null
  };
  componentDidMount() {
    const { platformId, summonerId } = this.props;
    Meteor.call(
      'getSummonerByLegacySummonerId',
      { summonerId: safeParseInt(summonerId), platformId },
      (err, result) => {
        if (!err && result) {
          this.setState({ summoner: result });
        }
      }
    );
  }

  render() {
    const { summoner } = this.state;
    const { platformId, matchId } = this.props;
    if (!summoner) {
      return null;
    }
    return <Redirect to={`/game/${platformId}/${matchId}/${summoner.name}`} />;
  }
}

LegacyMatch.propTypes = {
  platformId: PropTypes.string.isRequired,
  matchId: PropTypes.string.isRequired,
  summonerId: PropTypes.string.isRequired
};

export default LegacyMatch;
