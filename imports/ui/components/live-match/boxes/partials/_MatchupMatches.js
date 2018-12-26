import React, { Fragment, PureComponent } from 'react';
import { Typography, withStyles } from '../../../generic';

import { Match } from './_Match';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { createMatchupMatchesIdentifier } from '../../../../../api/matchup/helpers';
import { fetchMatchupMatchesIfNeeded } from '../../../../../store/actions';

const styles = {
  container: {
    overflowY: 'auto',
    height: 183,
    marginTop: 2
  }
};

class MatchupMatches extends PureComponent {
  componentDidMount() {
    const { fetchMatchupMatchesIfNeeded, identifier } = this.props;
    if (identifier) fetchMatchupMatchesIfNeeded(identifier);
  }

  componentDidUpdate(prevProps) {
    const { fetchMatchupMatchesIfNeeded, identifier } = this.props;
    if (identifier !== prevProps.identifier && identifier) {
      fetchMatchupMatchesIfNeeded(identifier);
    }
  }

  render() {
    const { classes, firstTeamTarget, secondTeamTarget, matchupMatches = {} } = this.props;

    let content;
    if (!firstTeamTarget || !secondTeamTarget) {
      content = <Typography align="center">Please select a matchup</Typography>;
    } else {
      const { isFetching, matches } = matchupMatches;
      content = (
        <Fragment>
          {!matches && isFetching && <Typography align="center">Loading...</Typography>}
          {matches && !isFetching && matches.length === 0 && (
            <Typography align="center">No matches found</Typography>
          )}
          {matches &&
            matches.map(match => (
              <Match firstTeamTarget={firstTeamTarget} key={match.gameId} match={match} />
            ))}
        </Fragment>
      );
    }

    return <div className={classes.container}>{content}</div>;
  }
}

MatchupMatches.propTypes = {
  classes: PropTypes.object.isRequired,
  firstTeamTarget: PropTypes.object,
  secondTeamTarget: PropTypes.object,
  matchupMatches: PropTypes.object,
  identifier: PropTypes.string,
  fetchMatchupMatchesIfNeeded: PropTypes.func.isRequired
};

const mapStateToProps = ({
  liveMatch: { firstTeamTarget, secondTeamTarget, mapId },
  matchesByMatchup
}) => {
  if (!firstTeamTarget || !secondTeamTarget) return {};
  const identifier = createMatchupMatchesIdentifier({
    champ1Id: firstTeamTarget.championId,
    champ2Id: secondTeamTarget.championId,
    mapId
  });
  const matchupMatches = matchesByMatchup[identifier] || {
    isFetching: true
  };
  return { firstTeamTarget, secondTeamTarget, matchupMatches, identifier };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMatchupMatchesIfNeeded: bindActionCreators(fetchMatchupMatchesIfNeeded, dispatch)
  };
};

const enhanced = compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MatchupMatches);

export { enhanced as MatchupMatches };
