import React, { PureComponent } from 'react';
import { withStyles, Typography } from '../../../generic';

import { MenuItem } from '../../../generic/MenuItem';
import PropTypes from 'prop-types';
import { Select } from '../../../generic/Select';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

import { MatchupMatches } from './_MatchupMatches';
import { ParticipantMatches } from './_ParticipantMatches';
import { setUIState } from '../../../../../store/actions';
import { bindActionCreators } from 'redux';

const styles = {
  top: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: '0 2px'
  },
  flex: {
    flex: 1
  }
};

class Matches extends PureComponent {
  handleChange = event => {
    this.props.setUIState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes, matchType, firstTeamTarget, secondTeamTarget } = this.props;

    return (
      <div>
        <div className={classes.top}>
          {matchType !== 'matchup' && (
            <Typography className={classes.flex} variant="caption">
              First champion is the selected participant
            </Typography>
          )}
          <Select name="matchType" onChange={this.handleChange} value={matchType}>
            <MenuItem value={'matchup'}>Matchup Matches</MenuItem>
            <MenuItem value={'firstTeamTarget'}>{`${
              firstTeamTarget ? firstTeamTarget.summonerName : 'First Participant'
            } Matches`}</MenuItem>
            <MenuItem value={'secondTeamTarget'}>{`${
              secondTeamTarget ? secondTeamTarget.summonerName : 'Second Participant'
            } Matches`}</MenuItem>
          </Select>
        </div>
        {matchType === 'matchup' && <MatchupMatches />}
        {matchType === 'firstTeamTarget' && <ParticipantMatches participant={firstTeamTarget} />}
        {matchType === 'secondTeamTarget' && <ParticipantMatches participant={secondTeamTarget} />}
      </div>
    );
  }
}

Matches.propTypes = {
  classes: PropTypes.object.isRequired,
  firstTeamTarget: PropTypes.object,
  secondTeamTarget: PropTypes.object,
  setUIState: PropTypes.func.isRequired,
  matchType: PropTypes.string
};

const mapStateToProps = ({ uiStates, liveMatch: { firstTeamTarget, secondTeamTarget } }) => {
  return { firstTeamTarget, secondTeamTarget, matchType: uiStates.matchType };
};

const mapDispatchToProps = dispatch => {
  return {
    setUIState: bindActionCreators(setUIState, dispatch)
  };
};

const enhanced = compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Matches);

export { enhanced as Matches };
