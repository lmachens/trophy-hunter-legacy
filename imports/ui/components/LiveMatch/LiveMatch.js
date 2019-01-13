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

import { CircularProgress } from '../generic/CircularProgress';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

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
    width: 626
  }
};

class LiveMatch extends PureComponent {
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
      <Grid alignItems="stretch" className={classes.root} container justify="center" spacing={8}>
        <Grid container direction="column" item md={3} spacing={8}>
          <Grid item>
            <DamageCompositionBox teamId={100} />
          </Grid>
          {[0, 1, 2, 3, 4].map(participantIndex => (
            <Grid item key={participantIndex}>
              <ParticipantBox
                className={classes.participantBox}
                participant={firstTeam[participantIndex]}
              />
            </Grid>
          ))}
        </Grid>
        <Grid className={classes.main} container direction="column" item md spacing={8}>
          <Grid item>
            <GeneralBox />
          </Grid>
          <Grid item>
            <MatchupBox />
          </Grid>
          <Grid item>
            <MatchesBox />
          </Grid>
        </Grid>
        <Grid container direction="column" item md={3} spacing={8}>
          <Grid item>
            <DamageCompositionBox teamId={200} />
          </Grid>
          {[0, 1, 2, 3, 4].map(participantIndex => (
            <Grid item key={participantIndex}>
              <ParticipantBox
                className={classes.participantBox}
                participant={secondTeam[participantIndex]}
              />
            </Grid>
          ))}
        </Grid>
        <Grid item md={2}>
          <QuestsBox className={classes.bottomBox} />
        </Grid>
        <Grid item md={4}>
          <BuildsBox className={classes.bottomBox} />
        </Grid>
        <Grid item md={4}>
          <SkillsBox className={classes.bottomBox} />
        </Grid>
        <Grid item md={2}>
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
  summonerName: PropTypes.string
};

const mapStateToProps = ({ liveMatch: { firstTeam, secondTeam } }) => {
  return { firstTeam, secondTeam };
};

const enhanced = compose(
  withStyles(styles),
  connect(mapStateToProps)
)(LiveMatch);

export default enhanced;
