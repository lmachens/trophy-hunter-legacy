import {
  BuildsBox,
  DamageCompositionBox,
  GeneralBox,
  HeatmapBox,
  MatchesBox,
  MatchupBox,
  ParticipantBox,
  QuestsBox,
  SkillsBox
} from './boxes';
import { Grid, Typography, withStyles } from '../generic';
import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';

import { CircularProgress } from '../generic/CircularProgress';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { fetchPlayedTogetherIfNeeded } from '../../../store/actions';

const styles = {
  root: {
    padding: '0 6px',
    width: 1224
  },
  participantBox: {
    height: 102
  },
  bottomBox: {
    height: 120
  },
  loading: {
    position: 'absolute',
    top: 'calc(50% - 20px)',
    left: 'calc(50% - 20px)'
  },
  main: {
    width: 626,
    padding: '3px !important'
  },
  item: {
    padding: '3px !important'
  }
};

class LiveMatch extends PureComponent {
  componentDidMount() {
    const { playedTogetherIdentifier, fetchPlayedTogetherIfNeeded } = this.props;
    if (playedTogetherIdentifier) fetchPlayedTogetherIfNeeded(playedTogetherIdentifier);
  }

  componentDidUpdate(prevProps) {
    const { playedTogetherIdentifier, fetchPlayedTogetherIfNeeded } = this.props;
    if (
      playedTogetherIdentifier !== prevProps.playedTogetherIdentifier &&
      playedTogetherIdentifier
    ) {
      fetchPlayedTogetherIfNeeded(playedTogetherIdentifier);
    }
  }

  render() {
    const {
      classes,
      firstTeam,
      secondTeam,
      region,
      accountId,
      summonerName,
      loading,
      userId
    } = this.props;

    if (!firstTeam && !loading) {
      return (
        <Typography align="center">
          Can not find match for {region ? `${accountId || summonerName} in ${region}` : userId}
        </Typography>
      );
    }
    if (!firstTeam) return <CircularProgress className={classes.loading} color="primary" />;
    return (
      <Grid alignItems="stretch" className={classes.root} container justify="center" spacing={1}>
        <Grid container direction="column" item md={3} spacing={1} className={classes.item}>
          <Grid item className={classes.item}>
            <DamageCompositionBox teamId={100} />
          </Grid>
          {[0, 1, 2, 3, 4].map(participantIndex => (
            <Grid item key={participantIndex} className={classes.item}>
              <ParticipantBox
                className={classes.participantBox}
                participant={firstTeam[participantIndex]}
              />
            </Grid>
          ))}
        </Grid>
        <Grid className={classes.main} container direction="column" item md spacing={1}>
          <Grid item className={classes.item}>
            <GeneralBox />
          </Grid>
          <Grid item className={classes.item}>
            <MatchupBox />
          </Grid>
          <Grid item className={classes.item}>
            <MatchesBox />
          </Grid>
        </Grid>
        <Grid container direction="column" item md={3} spacing={1} className={classes.item}>
          <Grid item className={classes.item}>
            <DamageCompositionBox teamId={200} />
          </Grid>
          {[0, 1, 2, 3, 4].map(participantIndex => (
            <Grid item key={participantIndex} className={classes.item}>
              <ParticipantBox
                className={classes.participantBox}
                participant={secondTeam[participantIndex]}
              />
            </Grid>
          ))}
        </Grid>
        <Grid item md={2} className={classes.item}>
          <QuestsBox className={classes.bottomBox} />
        </Grid>
        <Grid item md={4} className={classes.item}>
          <BuildsBox className={classes.bottomBox} />
        </Grid>
        <Grid item md={4} className={classes.item}>
          <SkillsBox className={classes.bottomBox} />
        </Grid>
        <Grid item md={2} className={classes.item}>
          <HeatmapBox className={classes.bottomBox} />
        </Grid>
      </Grid>
    );
  }
}

LiveMatch.propTypes = {
  classes: PropTypes.object.isRequired,
  firstTeam: PropTypes.array,
  secondTeam: PropTypes.array,
  firstTeamTarget: PropTypes.object,
  gameSession: PropTypes.object,
  region: PropTypes.string,
  accountId: PropTypes.number,
  userId: PropTypes.string,
  loading: PropTypes.bool,
  summonerName: PropTypes.string,
  playedTogetherIdentifier: PropTypes.string,
  fetchPlayedTogetherIfNeeded: PropTypes.func.isRequired
};

const mapStateToProps = ({ liveMatch: { firstTeam, secondTeam, platformId } }) => {
  if (!firstTeam || !secondTeam) return {};
  const participants = [...firstTeam, ...secondTeam];
  const summonerNames = participants.map(participant => participant.summonerName);
  const playedTogetherIdentifier = `${platformId}&${summonerNames.join('|th|')}`;

  return { firstTeam, secondTeam, playedTogetherIdentifier };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlayedTogetherIfNeeded: bindActionCreators(fetchPlayedTogetherIfNeeded, dispatch)
  };
};

const enhanced = compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(LiveMatch);

export default enhanced;
