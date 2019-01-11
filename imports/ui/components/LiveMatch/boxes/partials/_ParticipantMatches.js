import React, { Fragment, PureComponent } from 'react';
import { Typography, withStyles } from '../../../generic';
import { Match } from './_Match';

import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { fetchParticipantMatchesIfNeeded } from '../../../../../store/actions';
import { bindActionCreators } from 'redux';

const styles = {
  container: {
    overflowY: 'auto',
    height: 183,
    marginTop: 2
  }
};

class ParticipantMatches extends PureComponent {
  componentDidMount() {
    const { fetchParticipantMatchesIfNeeded, identifier } = this.props;
    if (identifier) fetchParticipantMatchesIfNeeded(identifier);
  }

  componentDidUpdate(prevProps) {
    const { fetchParticipantMatchesIfNeeded, identifier } = this.props;
    if (identifier !== prevProps.identifier && identifier) {
      fetchParticipantMatchesIfNeeded(identifier);
    }
  }

  render() {
    const { classes, participant, participantMatches = {} } = this.props;
    let content;
    if (!participant) {
      content = <Typography align="center">Please select a participant</Typography>;
    } else {
      const { isFetching, matches } = participantMatches;
      content = (
        <Fragment>
          {!matches && isFetching && <Typography align="center">Loading...</Typography>}
          {matches && !isFetching && matches.length === 0 && (
            <Typography align="center">No matches found</Typography>
          )}
          {matches &&
            matches.map(match => (
              <Match firstTeamTarget={match.participant1} key={match.gameId} match={match} />
            ))}
        </Fragment>
      );
    }

    return <div className={classes.container}>{content}</div>;
  }
}

ParticipantMatches.propTypes = {
  classes: PropTypes.object.isRequired,
  participant: PropTypes.object,
  participantMatches: PropTypes.object,
  fetchParticipantMatchesIfNeeded: PropTypes.func.isRequired,
  identifier: PropTypes.string
};

const mapStateToProps = ({ liveMatch: { platformId }, matchesByParticipant }, { participant }) => {
  if (!participant) return {};
  const identifier = `${platformId}&${participant.summonerId}`;
  const participantMatches = matchesByParticipant[identifier] || {
    isFetching: true
  };
  return { participantMatches, identifier };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchParticipantMatchesIfNeeded: bindActionCreators(fetchParticipantMatchesIfNeeded, dispatch)
  };
};

const enhanced = compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ParticipantMatches);

export { enhanced as ParticipantMatches };
