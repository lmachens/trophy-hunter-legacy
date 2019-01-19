import { Grid, Typography, withStyles } from '../../../generic';
import React, { PureComponent } from 'react';

import { MatchupPerformance } from './_MatchupPerformance';
import { MatchupStats } from './_MatchupStats';
import PropTypes from 'prop-types';
import { Tooltip } from '../../../generic/Tooltip';
import { bindActionCreators } from 'redux';
import champions from '/imports/shared/riot-api/champions.ts';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { createMatchupStatsIdentifier } from '../../../../../api/matchup/helpers';
import { fetchMatchupStatsIfNeeded } from '../../../../../store/actions';

const styles = {
  container: {
    height: 294,
    overflow: 'hidden'
  },
  content: {
    position: 'relative',
    textAlign: 'center'
  },
  image: {
    position: 'absolute',
    opacity: 0.5,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '50%',
    height: '100%',
    top: 0
  },
  winRate: {
    height: 20,
    position: 'relative',
    margin: '4px auto',
    width: 400
  },
  vs: {
    display: 'flex',
    justifyContent: 'center'
  },
  playerOne: {
    color: '#319fd9',
    marginRight: 4,
    textAlign: 'right',
    width: 200
  },
  playerTwo: {
    color: '#e44342',
    marginLeft: 4,
    width: 200,
    textAlign: 'left'
  },
  playerOneWinRate: {
    backgroundColor: '#319fd9',
    position: 'absolute',
    height: '100%',
    left: 0
  },
  playerTwoWinRate: {
    backgroundColor: '#bb3231',
    position: 'absolute',
    height: '100%',
    right: 0
  }
};

const defaultStats = {
  winrate: 0.5,
  goldEarned: 0,
  kills: 0,
  deaths: 0,
  assists: 0,
  totalDamageDealtToChampions: 0,
  zeroToTen: 0,
  tenToTwenty: 0,
  twentyToThirty: 0,
  thirtyToEnd: 0,
  killingSprees: 0,
  minionsKilled: 0
};

class Matchup extends PureComponent {
  componentDidMount() {
    const { fetchMatchupStatsIfNeeded, identifier } = this.props;
    if (identifier) fetchMatchupStatsIfNeeded(identifier);
  }

  componentDidUpdate(prevProps) {
    const { fetchMatchupStatsIfNeeded, identifier } = this.props;
    if (identifier !== prevProps.identifier && identifier) {
      fetchMatchupStatsIfNeeded(identifier);
    }
  }

  render() {
    const { classes, firstTeamTarget, secondTeamTarget, matchupStats = {} } = this.props;

    const firstChampion = firstTeamTarget && champions[firstTeamTarget.championId];
    const secondChampion = secondTeamTarget && champions[secondTeamTarget.championId];

    const stats = matchupStats.stats || {
      count: 0,
      champ1: defaultStats,
      champ2: defaultStats
    };
    let firstStats;
    let secondStats;
    if (firstTeamTarget && matchupStats.champ1Id === firstTeamTarget.championId) {
      firstStats = stats.champ1;
      secondStats = stats.champ2;
    } else {
      firstStats = stats.champ2;
      secondStats = stats.champ1;
    }

    const firstChampionName = firstChampion ? firstChampion.name : 'Unknown';
    const secondChampionName = secondChampion ? secondChampion.name : 'Unknown';

    return (
      <div className={classes.container}>
        <div
          className={classes.image}
          style={{
            left: 0,
            backgroundImage:
              firstChampion &&
              `url(https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${
                firstChampion.key
              }_0.jpg)`
          }}
        />
        <div
          className={classes.image}
          style={{
            right: 0,
            backgroundImage:
              secondChampion &&
              `url(https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${
                secondChampion.key
              }_0.jpg)`
          }}
        />
        <Grid className={classes.content} container direction="column">
          <Grid item>
            <div className={classes.vs}>
              <Typography className={classes.playerOne}>{firstChampionName}</Typography>
              <Typography>vs</Typography>
              <Typography className={classes.playerTwo}>{secondChampionName}</Typography>
            </div>
            <Typography>{stats.count} analyzed matches</Typography>
            <Typography variant="caption">Win Rate</Typography>
            <div className={classes.winRate}>
              <Tooltip title={`${(firstStats.winrate * 100).toFixed(2)}% winrate`}>
                <div
                  className={classes.playerOneWinRate}
                  style={{
                    width: `${firstStats.winrate * 100}%`
                  }}
                />
              </Tooltip>
              <Tooltip title={`${(secondStats.winrate * 100).toFixed(2)}% winrate`}>
                <div
                  className={classes.playerTwoWinRate}
                  style={{
                    width: `${secondStats.winrate * 100}%`
                  }}
                />
              </Tooltip>
            </div>
          </Grid>
          <Grid item>
            <Grid alignItems="stretch" container>
              <Grid item md={6}>
                <MatchupPerformance firstStats={firstStats} secondStats={secondStats} />
              </Grid>
              <Grid item md={6}>
                <MatchupStats
                  firstChampionName={firstChampionName}
                  firstStats={firstStats}
                  secondChampionName={secondChampionName}
                  secondStats={secondStats}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Matchup.propTypes = {
  classes: PropTypes.object.isRequired,
  firstTeamTarget: PropTypes.object,
  secondTeamTarget: PropTypes.object,
  matchupStats: PropTypes.object,
  identifier: PropTypes.string,
  fetchMatchupStatsIfNeeded: PropTypes.func.isRequired
};

const mapStateToProps = ({ liveMatch: { firstTeamTarget, secondTeamTarget }, statsByMatchup }) => {
  if (!firstTeamTarget || !firstTeamTarget.role || !secondTeamTarget)
    return { firstTeamTarget, secondTeamTarget };
  const identifier = createMatchupStatsIdentifier({
    champ1Id: firstTeamTarget.championId,
    champ2Id: secondTeamTarget.championId,
    role: firstTeamTarget.role
  });
  const matchupStats = statsByMatchup[identifier] || {
    isFetching: true
  };

  return {
    firstTeamTarget,
    secondTeamTarget,
    matchupStats,
    identifier
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMatchupStatsIfNeeded: bindActionCreators(fetchMatchupStatsIfNeeded, dispatch)
  };
};

const enhanced = compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Matchup);

export { enhanced as Matchup };
