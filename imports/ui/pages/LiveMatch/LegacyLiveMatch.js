import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class LegacyLiveMatch extends React.Component {
  state = {
    summoner: null
  };
  componentDidMount() {
    const { accountId, region } = this.props;
    Meteor.call(
      'getSummonerByLegacyAccountId',
      { accountId: parseInt(accountId), region },
      (err, result) => {
        if (!err && result) {
          this.setState({ summoner: result });
        }
      }
    );
  }

  render() {
    const { summoner } = this.state;
    const { region } = this.props;
    if (!summoner) {
      return null;
    }
    return <Redirect to={`/live/${region}/${summoner.name}`} />;
  }
}

LegacyLiveMatch.propTypes = {
  accountId: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired
};

export default LegacyLiveMatch;
